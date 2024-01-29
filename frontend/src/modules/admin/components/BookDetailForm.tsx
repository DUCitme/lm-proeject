import { FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, Textarea } from '@chakra-ui/react';
import BookModel from '@core/models/book.model';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

const BookDetailForm: FC = () => {
    const {
        formState: { errors },
        register,
    } = useFormContext<BookModel>();

    return (
        <Grid as="form" templateColumns="repeat(2, 1fr)" gap="4">
            <FormControl as={GridItem} colSpan={2} isInvalid={!!errors.title}>
                <FormLabel>Tên sách</FormLabel>
                <Input placeholder="Nhập tên sách" {...register('title')} />
                <FormErrorMessage>{errors.title && errors.title.message}</FormErrorMessage>
            </FormControl>

            <FormControl as={GridItem} colSpan={2} isInvalid={!!errors.description}>
                <FormLabel>Mô tả</FormLabel>
                <Textarea placeholder="Nhập mô tả" {...register('description')} />
                <FormErrorMessage>{errors.description && errors.description.message}</FormErrorMessage>
            </FormControl>

            <FormControl as={GridItem} colSpan={1} isInvalid={!!errors.author}>
                <FormLabel>Tác giả</FormLabel>
                <Input placeholder="Nhập tên tác giả" {...register('author')} />
                <FormErrorMessage>{errors.author && errors.author.message}</FormErrorMessage>
            </FormControl>

            <FormControl as={GridItem} colSpan={1} isInvalid={!!errors.categoryid}>
                <FormLabel>Danh mục</FormLabel>
                <Input placeholder="Danh mục" {...register('categoryid')} />
                <FormErrorMessage>{errors.categoryid && errors.categoryid.message}</FormErrorMessage>
            </FormControl>
        </Grid>
    );
};

export default BookDetailForm;
