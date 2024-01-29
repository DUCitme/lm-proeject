import { Box, Flex, Image, Text } from '@chakra-ui/react';
import BookItem from '@core/components/BookItem';
import CategoryItem from '@core/components/CategoryItem';
import { useAppSelector } from '@src/hooks/useAppDispatch';

const AllBook = () => {
    const categories = useAppSelector((state) => state.categories);
    const books = useAppSelector((state) => state.books);

    return (
        <Box marginTop="4">
            <Box className="container" padding="4">
                <Box bg="white" borderRadius="4">
                    <Box padding="4" borderBottom="1px solid #e8e8e8">
                        <Text fontSize="medium" fontWeight="bold">
                            Sách mới
                        </Text>
                    </Box>
                    <Flex padding="4" gap="4" justifyContent="space-between" flexWrap="wrap" alignItems="center">
                        {books.map((book, index) => (
                            <BookItem key={index} book={book} />
                        ))}
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default AllBook;
