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
} from '@chakra-ui/react';

import DataTable, { IDataTableColum } from '@core/components/DataTable';
import BookDetailForm from '@modules/admin/components/BookDetailForm';
import authHOC from '@src/hoc/authHOC';
import { FormProvider, useForm } from 'react-hook-form';
import BookModel from '@core/models/book.model';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';

const resolver = classValidatorResolver(BookModel);

const BookList: FC = () => {
    const columns: IDataTableColum<BookModel>[] = [
        { key: 'bookID', header: 'ID', type: 'text' },
        { key: 'title', header: 'Tên sách', type: 'text' },
        { key: 'author', header: 'Tác giả', type: 'text' },
        { key: 'price', header: 'Giá', type: 'number' },
        { key: 'categoryID', header: 'Danh mục', type: 'text' },
        { key: 'stockQuantity', header: 'Số lượng', type: 'number' },
        { key: 'imageURL', header: 'Ảnh', type: 'image' },
    ];

    const form = useForm<BookModel>({ resolver });

    const { isOpen, onOpen, onClose } = useDisclosure({
        onClose: () => form.reset(),
    });

    const onSubmit = (data: BookModel) => {
        console.log(data);
    };

    const mockBooks = Array(10)
        .fill(null)
        .map((_, index) => ({
            bookID: `book${index}`,
            title: `Book Title ${index}`,
            author: `Author ${index}`,
            price: Math.floor(Math.random() * 100),
            categoryID: `category${index}`,
            stockQuantity: Math.floor(Math.random() * 100),
            imageURL: `https://picsum.photos/200/300?random=${index}`,
        })) as BookModel[];

    return (
        <Box bgColor="white" borderRadius="lg" padding="4" border="1px" borderColor="gray.200" boxShadow="xs">
            <DataTable
                data={mockBooks}
                columns={columns}
                addActionButton={{ children: 'Thêm sách', onClick: onOpen }}
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
