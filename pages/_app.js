import Navbar from '@/components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/grand-hotel';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
	const [date, setDate] = useState('2022-01-17');

	return (
		<ChakraProvider>
			<Navbar date={date} setDate={setDate} />
			<Component {...pageProps} date={date} />
		</ChakraProvider>
	);
}

export default MyApp;
