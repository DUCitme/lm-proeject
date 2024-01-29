import { Box, Stack, Image, Text } from '@chakra-ui/react';

type CategoryItemProps = {
    category: any;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
    return (
        <Stack width="236px" backgroundColor="white" padding="4" borderRadius="4" cursor="pointer">
            <Image borderRadius="4" src="https://cdn-icons-png.freepik.com/512/3502/3502688.png" />

            <Text textAlign="center">{category.categoryname}</Text>
        </Stack>
    );
};

export default CategoryItem;
