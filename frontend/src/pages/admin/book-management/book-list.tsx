import { FC } from 'react';

import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
    useToast,
} from '@chakra-ui/react';

import DataTable, { IDataTableColum } from '@core/components/DataTable';
import BookDetailForm from '@modules/admin/components/BookDetailForm';
import authHOC from '@src/hoc/authHOC';
import { FormProvider, useForm } from 'react-hook-form';
import BookModel from '@core/models/book.model';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import useLoadBooks from '@src/hooks/useLoadBooks';
import { useAppSelector } from '@src/hooks/useAppDispatch';
import BOOK_API from '@src/apis/book-api';
import NumberUtils from '@src/utils/NumberUtils';

const resolver = classValidatorResolver(BookModel);

const BookList: FC = () => {
    const { loadBooks } = useLoadBooks();

    const books = useAppSelector((state) => state.books);
    const categories = useAppSelector((state) => state.categories);
    const toast = useToast();
    const form = useForm<BookModel>({ resolver });

    const { isOpen, onOpen, onClose } = useDisclosure({
        onClose: () => form.reset(),
    });

    const columns: IDataTableColum<BookModel>[] = [
        { key: 'bookid', header: 'ID', type: 'text' },
        { key: 'title', header: 'Tên sách', type: 'text' },
        { key: 'author', header: 'Tác giả', type: 'text' },
        { key: 'price', header: 'Giá', type: 'number', format: (value) => NumberUtils.vndFormat(value) },
        {
            key: 'categoryid',
            header: 'Danh mục',
            type: 'text',
            format: (value) => categories?.find?.((category) => category.categoryid === value)?.categoryname || '',
        },
        { key: 'stockquantity', header: 'Số lượng', type: 'number' },
        { key: 'image', header: 'Ảnh', type: 'image' },
    ];

    const onSubmit = async (data: BookModel) => {
        const action = data.bookid ? BOOK_API.updateBook : BOOK_API.addBook;

        try {
            await action(data);

            toast({
                title: 'Thành công',
                description: 'Thao tác thành công',
                status: 'success',
                duration: 9000,
                isClosable: true,
            });
            onClose();
            loadBooks();
        } catch (error) {
            toast({
                title: 'Thất bại',
                description: 'Thao tác thất bại',
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
        }
    };

    const deleteBook = async (book: BookModel) => {
        try {
            await BOOK_API.deleteBook(book.bookid);
            toast({
                title: 'Thành công',
                description: 'Thao tác thành công',
                status: 'success',
                duration: 9000,
                isClosable: true,
            });
            loadBooks();
        } catch (error) {
            toast({
                title: 'Thất bại',
                description: 'Thao tác thất bại',
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
        }
    };

    return (
        <Box bgColor="white" borderRadius="lg" padding="4" border="1px" borderColor="gray.200" boxShadow="xs">
            <DataTable
                data={books}
                columns={columns}
                addActionButton={{ children: 'Thêm sách', onClick: onOpen }}
                editAction={(book) => {
                    form.reset(book);
                    onOpen();
                }}
                deleteAction={(book) => {
                    confirm('Bạn có chắc chắn muốn xóa?') && deleteBook(book);
                }}
            />

            <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Thêm sách</DrawerHeader>

                    <DrawerBody padding="4">
                        <FormProvider {...form}>
                            <BookDetailForm />
                        </FormProvider>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Đóng
                        </Button>
                        <Button
                            type="submit"
                            onClick={form.handleSubmit(onSubmit)}
                            isLoading={form.formState.isSubmitting}
                        >
                            Lưu
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default authHOC()(BookList);
