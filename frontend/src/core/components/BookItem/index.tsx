import { Stack, Image, Text } from '@chakra-ui/react';
import NumberUtils from '@src/utils/NumberUtils';
import { useNavigate } from 'react-router-dom';

type BookItemProps = {
    book: any;
};

const BookItem: React.FC<BookItemProps> = ({ book }) => {
    const navigate = useNavigate();

    return (
        <Stack
            onClick={() => navigate(`/book/${book.bookid}`)}
            width="236px"
            backgroundColor="white"
            padding="4"
            borderRadius="4"
            cursor="pointer"
            _hover={{ shadow: 'lg' }}
        >
            <Image height="256px" objectFit="cover" borderRadius="4" src={book.image} />

            <Text>{book.title}</Text>

            <Text color="red" fontWeight="bold">
                {NumberUtils.vndFormat(book.price)}
            </Text>
        </Stack>
    );
};

export default BookItem;
