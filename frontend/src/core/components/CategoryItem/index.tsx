import { Box, Stack, Image, Text } from '@chakra-ui/react';

type CategoryItemProps = {
    category: any;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
    return (
        <Stack width="236px" backgroundColor="white" padding="4" borderRadius="4" cursor="pointer">
            <Image
                borderRadius="4"
                src="https://cdn0.fahasa.com/media/wysiwyg/hieu_kd/2023-08-frame/v_-c_u-l_-b_n-nh_-c_a-t_.jpg"
            />

            <Text textAlign="center">{category.name}</Text>
        </Stack>
    );
};

export default CategoryItem;
