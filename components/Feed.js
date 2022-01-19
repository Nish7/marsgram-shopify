import {
	Box,
	Icon,
	Skeleton,
	Image,
	Text,
	Avatar,
	useColorModeValue,
} from '@chakra-ui/react';
import fetcher from '../lib/fetcher';
import { format } from 'date-fns';
import useSWR from 'swr';
import { useRef, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { useLocalStorage } from '@/lib/useLocalStorage';

function Feed({ date }) {
	const { data, error } = useSWR(`/api/feed?date=${date}`, fetcher);
	const [likes, toggleLike] = useLocalStorage('likes', []);

	return (
		<Box w="70%" pt={10}>
			{!data && !error && (
				<>
					<Skeleton height="700px" />
				</>
			)}

			{data && data.length == 0 && !error && (
				<Text
					fontSize="lg"
					textAlign="center"
					fontWeight="bold"
					color="gray.500"
				>
					No photos from mars for this date
				</Text>
			)}

			{data &&
				likes &&
				data.map((d) => (
					<Card
						key={d.id}
						image={d}
						toggleLike={toggleLike}
						liked={likes.includes(d.id)}
					/>
				))}
		</Box>
	);
}

function Card({ image, liked, toggleLike }) {
	const { img_src: img, rover, camera_name: camera, date, id } = image;
	const imgElement = useRef(null);
	const [width, setWidth] = useState();
	const borderColor = useColorModeValue('#dbdbdb', 'rgba(255,255,255,0.1)');

	if (width < 500) {
		return null;
	}

	return (
		<Box mb={5} border={`1px solid ${borderColor}`}>
			<Text
				py={5}
				pl={5}
				fontSize="sm"
				fontWeight="semibold"
				textTransform="capitalize"
			>
				<Avatar src={`/${rover}.jpeg`} boxSize={5} mr={2} />
				{rover}_Rover
			</Text>
			<Image
				alt=""
				src={img}
				objectFit="cover"
				w="full"
				ref={imgElement}
				onLoad={() => setWidth(imgElement.current.naturalWidth)}
			/>
			<Box py={3} pl={5}>
				<Icon
					onClick={() => toggleLike(id)}
					as={liked ? FaHeart : FiHeart}
					color={liked ? 'red.500' : ''}
					boxSize={6}
				/>
			</Box>

			<Box ml={5}>
				<Text fontSize="sm">
					<Text
						fontSize="sm"
						fontWeight="bold"
						display="inline-block"
						textTransform="capitalize"
					>
						{rover}_Rover
					</Text>
					{'  '}
					Clicked with {camera}
				</Text>
				<Text fontSize="xs" color="gray.500" my={3}>
					{format(new Date(date), 'dd MMMM, yyyy')}
				</Text>
			</Box>
		</Box>
	);
}

export default Feed;
