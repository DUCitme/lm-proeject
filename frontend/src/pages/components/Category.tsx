import { Box, Flex, Image, Text } from '@chakra-ui/react';
import BookItem from '@core/components/BookItem';
import CategoryItem from '@core/components/CategoryItem';
import { useAppSelector } from '@src/hooks/useAppDispatch';

const Category = () => {
    const categories = useAppSelector((state) => state.categories);
    console.log(categories);

    return (
        <Box marginTop="4">
            <Box className="container" padding="4">
                <Box bg="white" borderRadius="4">
                    <Box padding="4" borderBottom="1px solid #e8e8e8">
                        <Text fontSize="medium" fontWeight="bold">
                            Danh mục sản phẩm
                        </Text>
                    </Box>
                    <Flex padding="4" gap="4" justifyContent="space-between">
                        {categories.map((category) => (
                            <CategoryItem key={category.categoryid} category={category} />
                        ))}
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default Category;
