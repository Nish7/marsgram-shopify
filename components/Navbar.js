import {
	Avatar,
	Box,
	Flex,
	Icon,
	Input,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { RiHome5Fill } from 'react-icons/ri';
import ColorModeBtn from './ColorModeBtn';

const Navbar = ({ date, setDate }) => {
	const bg = useColorModeValue('white', 'black');
	const borderColor = useColorModeValue('#dbdbdb', 'rgba(255,255,255,0.1)');
	const color = useColorModeValue('gray.100', 'gray.900');

	return (
		<Box
			position="sticky"
			top={0}
			h="auto"
			zIndex={1000}
			borderBottom={`1px solid ${borderColor}`}
			bg={bg}
		>
			<Flex justify="space-between" align="center" mx="auto" w="70%" py={3}>
				<Text w="15%" fontFamily="Grand Hotel" fontSize="3xl">
					Marsgram
				</Text>

				<Input
					type="date"
					w="25%"
					color="gray.500"
					bg={color}
					h={9}
					value={date}
					onChange={(e) => setDate(e.target.value)}
					border="none"
				/>

				<Flex align="center" justify="space-evenly" w="15%">
					<Icon as={RiHome5Fill} boxSize={5} />
					<ColorModeBtn />
					<Avatar src="/mars.png" boxSize={5} />
				</Flex>
			</Flex>
		</Box>
	);
};

export default Navbar;
