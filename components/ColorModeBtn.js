import { Icon, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const ColorModeBtn = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Icon
			boxSize={5}
			onClick={toggleColorMode}
			as={colorMode == 'light' ? FiMoon : FiSun}
		/>
	);
};

export default ColorModeBtn;
