import { Stack } from '@chakra-ui/react';
import NavBar from '@pages/components/NavBar';
import { FC } from 'react';

const CartPage: FC = () => {
    return (
        <Stack gap="0" bg="#F0F0F0" minH="100vh">
            <NavBar />
        </Stack>
    );
};

export default CartPage;
