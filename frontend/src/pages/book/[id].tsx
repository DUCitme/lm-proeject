import { Stack } from '@chakra-ui/react';

import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import FlashSale from '@pages/components/FlashSale';
import BookDetail from '@pages/components/BookDetail';

const BookDetailPage: FC = () => {
    const navigate = useNavigate();

    return (
        <Stack gap="0" bg="#F0F0F0" minH="100vh">
            <NavBar />
            <BookDetail />
            <FlashSale />
        </Stack>
    );
};

export default BookDetailPage;
