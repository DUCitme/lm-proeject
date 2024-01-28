import { Box, Container, Image, Stack } from '@chakra-ui/react';

import RouterUtils from '@src/utils/RouterUtils';
import { FC, Fragment, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';

type LoginProps = {
    data?: string;
};

const HomePage: FC<LoginProps> = () => {
    const navigate = useNavigate();

    return (
        <Stack gap="0" bg="#F0F0F0" minH="100vh">
            <NavBar />
        </Stack>
    );
};

export default HomePage;
