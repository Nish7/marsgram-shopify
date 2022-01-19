import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';

export default function Home({ date }) {
	const bg = useColorModeValue('#fafafa', 'black');

	return (
		<Box bg={bg}>
			<Flex w="70%" minH="90vh" mx="auto">
				<Feed date={date} />
				<Sidebar />
			</Flex>
		</Box>
	);
}
