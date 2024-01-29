import {
    Checkbox,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid,
    GridItem,
    Input,
    Select,
    Textarea,
} from '@chakra-ui/react';
import BookModel from '@core/models/book.model';
import { useAppSelector } from '@src/hooks/useAppDispatch';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

const BookDetailForm: FC = () => {
    const {
        formState: { errors },
        register,
    } = useFormContext<BookModel>();

    const categories = useAppSelector((state) => state.categories);

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
                <Select placeholder="Danh mục" {...register('categoryid')}>
                    {categories.map((category) => (
                        <option key={category.categoryid} value={category.categoryid}>
                            {category.categoryname}
                        </option>
                    ))}
                </Select>
                <FormErrorMessage>{errors.categoryid && errors.categoryid.message}</FormErrorMessage>
            </FormControl>

            <FormControl as={GridItem} colSpan={1} isInvalid={!!errors.stockquantity}>
                <FormLabel>Số lượng</FormLabel>
                <Input type="number" placeholder="Nhập số lượng" {...register('stockquantity')} />
                <FormErrorMessage>{errors.stockquantity && errors.stockquantity.message}</FormErrorMessage>
            </FormControl>

            <FormControl as={GridItem} colSpan={1} isInvalid={!!errors.isbn}>
                <FormLabel>ISBN</FormLabel>
                <Input placeholder="Nhập ISBN" {...register('isbn')} />
                <FormErrorMessage>{errors.isbn && errors.isbn.message}</FormErrorMessage>
            </FormControl>

            <FormControl as={GridItem} colSpan={1} isInvalid={!!errors.publishedDate}>
                <FormLabel>Ngày xuất bản</FormLabel>
                <Input placeholder="Nhập ngày xuất bản" {...register('publishedDate')} />
                <FormErrorMessage>{errors.publishedDate && errors.publishedDate.message}</FormErrorMessage>
            </FormControl>

            <FormControl as={GridItem} colSpan={1} isInvalid={!!errors.price}>
                <FormLabel>Giá</FormLabel>
                <Input type="number" placeholder="Nhập giá" {...register('price')} />
                <FormErrorMessage>{errors.price && errors.price.message}</FormErrorMessage>
            </FormControl>

            <FormControl as={GridItem} colSpan={1} isInvalid={!!errors.image}>
                <FormLabel>Ảnh</FormLabel>
                <Input placeholder="Nhập ảnh" {...register('image')} />
                <FormErrorMessage>{errors.image && errors.image.message}</FormErrorMessage>
            </FormControl>

            <FormControl as={GridItem} colSpan={1} isInvalid={!!errors.languageID}>
                <FormLabel>Ngôn ngữ</FormLabel>
                <Input type="number" placeholder="Nhập ngôn ngữ" {...register('languageID')} />
                <FormErrorMessage>{errors.languageID && errors.languageID.message}</FormErrorMessage>
            </FormControl>

            <FormControl as={GridItem} colSpan={1} isInvalid={!!errors.publisherID}>
                <FormLabel>Nhà xuất bản</FormLabel>
                <Input type="number" placeholder="Nhập nhà xuất bản" {...register('publisherID')} />
                <FormErrorMessage>{errors.publisherID && errors.publisherID.message}</FormErrorMessage>
            </FormControl>

            <FormControl as={GridItem} colSpan={1} isInvalid={!!errors.weight}>
                <FormLabel>Cân nặng</FormLabel>
                <Input type="number" placeholder="Nhập cân nặng" {...register('weight')} />
                <FormErrorMessage>{errors.weight && errors.weight.message}</FormErrorMessage>
            </FormControl>

            <FormControl as={GridItem} colSpan={1} isInvalid={!!errors.page}>
                <FormLabel>Số trang</FormLabel>
                <Input type="number" placeholder="Nhập số trang" {...register('page')} />
                <FormErrorMessage>{errors.page && errors.page.message}</FormErrorMessage>
            </FormControl>

            <FormControl as={GridItem} colSpan={1} isInvalid={!!errors.dimensions}>
                <FormLabel>Kích thước</FormLabel>
                <Input placeholder="Nhập kích thước" {...register('dimensions')} />
                <FormErrorMessage>{errors.dimensions && errors.dimensions.message}</FormErrorMessage>
            </FormControl>

            <FormControl as={GridItem} colSpan={1} isInvalid={!!errors.featured}>
                <FormLabel>Featured</FormLabel>
                <Checkbox {...register('featured')} />
                <FormErrorMessage>{errors.featured && errors.featured.message}</FormErrorMessage>
            </FormControl>

            <FormControl as={GridItem} colSpan={1} isInvalid={!!errors.bestseller}>
                <FormLabel>Bestseller</FormLabel>
                <Checkbox {...register('bestseller')} />
                <FormErrorMessage>{errors.bestseller && errors.bestseller.message}</FormErrorMessage>
            </FormControl>
        </Grid>
    );
};

export default BookDetailForm;
