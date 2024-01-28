import { Box, Stack, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

type BookItemProps = {
    book: any;
};

const BookItem: React.FC<BookItemProps> = ({ book }) => {
    const navigate = useNavigate();

    return (
        <Stack
            onClick={() => navigate(`/book/${book.id}`)}
            width="236px"
            backgroundColor="white"
            padding="4"
            borderRadius="4"
            cursor="pointer"
            _hover={{ shadow: 'lg' }}
        >
            <Image
                borderRadius="4"
                src="https://cdn0.fahasa.com/media/catalog/product/a/t/atlas-giai-phau-co-the-nguoi.jpg"
            />

            <Text>Atlas Giải Phẫu Cơ Thể Người</Text>

            <Text color="red" fontWeight="bold">
                60.000đ
            </Text>
        </Stack>
    );
};

export default BookItem;
