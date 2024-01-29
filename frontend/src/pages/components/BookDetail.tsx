import { Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react';
import BOOK_API from '@src/apis/book-api';
import useLoadBooks from '@src/hooks/useLoadBooks';
import NumberUtils from '@src/utils/NumberUtils';
import { useEffect, useState } from 'react';

const BookDetail = () => {
    const [book, setBook] = useState<any>(null);

    useLoadBooks();

    useEffect(() => {
        getBook();
    }, []);

    const getBook = async () => {
        try {
            const response = await BOOK_API.getBookById(1);
            setBook(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    if (!book) {
        return null;
    }

    return (
        <Box marginTop="4">
            <Box className="container" padding="4">
                <Box bg="white" borderRadius="4">
                    <Flex padding="4" gap="4" justifyContent="space-between">
                        <Stack flex={0.35} padding="4" spacing="4" direction="column" justifyContent="space-between">
                            <Image width="100%" objectFit="contain" src={book.image} />

                            <Flex>
                                <Button flex={1} colorScheme="red">
                                    Mua ngay
                                </Button>

                                <Button flex={1} marginLeft="4" variant="outline" colorScheme="red">
                                    Thêm vào giỏ hàng
                                </Button>
                            </Flex>
                        </Stack>

                        <Stack flex={0.7} padding="4" spacing="2" direction="column">
                            <Text fontSize="large" fontWeight="bold">
                                {book.title}
                            </Text>
                            <Text fontWeight="bold">
                                Tác giả:{' '}
                                <Text display="inline" fontWeight="normal">
                                    {book.author}
                                </Text>
                            </Text>

                            <Text fontWeight="bold">
                                Kích thước:{' '}
                                <Text display="inline" fontWeight="normal">
                                    {book.dimensions}
                                </Text>
                            </Text>

                            <Text fontSize="xx-large" fontWeight="bold" color="red">
                                {NumberUtils.vndFormat(book.price)}
                            </Text>
                        </Stack>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default BookDetail;
