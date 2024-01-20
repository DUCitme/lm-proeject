import { FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, Textarea } from '@chakra-ui/react';
import CategoryModel from '@core/models/category.model';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

const CategoryDetailForm: FC = () => {
    const {
        formState: { errors },
        register,
    } = useFormContext<CategoryModel>();

    return (
        <Grid as="form" templateColumns="repeat(2, 1fr)" gap="4">
            <FormControl as={GridItem} colSpan={2} isInvalid={!!errors.catagoryName}>
                <FormLabel>Tên danh mục</FormLabel>
                <Input placeholder="Nhập tên sách" {...register('catagoryName')} />
                <FormErrorMessage>{errors.catagoryName && errors.catagoryName.message}</FormErrorMessage>
            </FormControl>
        </Grid>
    );
};

export default CategoryDetailForm;
