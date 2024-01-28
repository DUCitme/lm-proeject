import { Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react';
import CategoryItem from '@core/components/CategoryItem';

const BookDetail = () => {
    return (
        <Box marginTop="4">
            <Box className="container" padding="4">
                <Box bg="white" borderRadius="4">
                    <Flex padding="4" gap="4" justifyContent="space-between">
                        <Stack flex={0.3} padding="4" spacing="4" direction="column" justifyContent="space-between">
                            <Image
                                objectFit="contain"
                                src="https://cdn0.fahasa.com/media/catalog/product/l/h/lhmn-phienbanmoi-tap7-5595.jpg"
                            />

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
                                Lớp Học Mật Ngữ Phiên Bản Mới - Tập 7 - Tặng Kèm 1 Standee Lớp Học Mật Ngữ
                            </Text>
                            <Text fontWeight="bold">
                                Tác giả:{' '}
                                <Text display="inline" fontWeight="normal">
                                    Higashimura Akiko
                                </Text>
                            </Text>

                            <Text fontWeight="bold">
                                Kích thước:{' '}
                                <Text display="inline" fontWeight="normal">
                                    13 x 18 cm
                                </Text>
                            </Text>

                            <Text fontSize="xx-large" fontWeight="bold" color="red">
                                60.000đ
                            </Text>
                        </Stack>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default BookDetail;
