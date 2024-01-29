import { Box, Flex, Image } from '@chakra-ui/react';
import BookItem from '@core/components/BookItem';
import { useAppSelector } from '@src/hooks/useAppDispatch';

const FlashSale = () => {
    const books = useAppSelector((state) => state.books);

    return (
        <Box backgroundColor="#ff6c6b" marginTop="4">
            <Box marginTop="4" className="container" padding="4">
                <Box padding="4" bg="white" borderRadius="4">
                    <Image src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/flashsale/label-flashsale.svg" />
                </Box>
            </Box>
            <Flex className="container" padding="4" gap="4" justifyContent="space-between">
                {books.slice(0, 5).map((book, index) => (
                    <BookItem key={index} book={book} />
                ))}
            </Flex>
        </Box>
    );
};

export default FlashSale;
