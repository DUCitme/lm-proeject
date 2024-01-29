import { Box, Container, Image, Stack } from '@chakra-ui/react';

import RouterUtils from '@src/utils/RouterUtils';
import { FC, Fragment, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import HightLight from '../components/HightLight';
import FlashSale from '../components/FlashSale';
import Category from '../components/Category';
import AllBook from '../components/AllBook';
import useLoadBooks from '@src/hooks/useLoadBooks';

const HomePage: FC = () => {
    const navigate = useNavigate();
    const { loading } = useLoadBooks();

    if (loading) {
        return loading;
    }

    return (
        <Stack gap="0" bg="#F0F0F0" minH="100vh">
            <NavBar />
            <HightLight />
            <FlashSale />
            <Category />
            <AllBook />
        </Stack>
    );
};

export default HomePage;
