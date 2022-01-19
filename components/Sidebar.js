import fetcher from '@/lib/fetcher';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import useSWR from 'swr';

const Sidebar = () => {
	const { data } = useSWR('/api/rovers', fetcher);

	return (
		<Box pl={10} mt={10} position="sticky" top={28} w="30%" h="100px">
			<Flex align="center">
				<Avatar src="/mars.png" mr={3} boxSize={10} />
				<Box>
					<Text fontSize="sm" fontWeight="bold">
						Elon_The_Martian
					</Text>
					<Text fontSize="xs" color="gray.500">
						to the mars!
					</Text>
				</Box>
			</Flex>

			<Box mt={10}>
				<Text color="gray.500" fontSize="sm" fontWeight="semibold" mb={3}>
					Rover information:
				</Text>

				{data &&
					data.map((d) => (
						<AvatarCard
							key={d.name}
							name={d.name}
							text={`${d.launch_date} - ${d.max_date}`}
							avatar={`/${d.name}.jpeg`}
						/>
					))}
			</Box>
		</Box>
	);
};

function AvatarCard({ name, text, avatar }) {
	return (
		<Flex align="center" my={2}>
			<Avatar src={avatar} mr={3} boxSize={6} />
			<Box>
				<Text fontSize="sm" fontWeight="semibold" textTransform="capitalize">
					{name}_Rover
				</Text>
				<Text fontSize="xs" color="gray.500">
					{text}
				</Text>
			</Box>
		</Flex>
	);
}

export default Sidebar;
