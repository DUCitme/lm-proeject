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
import CategoryModel from '@core/models/category.model';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import CategoryDetailForm from '@modules/admin/components/CategoryDetailForm';
import authHOC from '@src/hoc/authHOC';
import { FormProvider, useForm } from 'react-hook-form';
import { useAppSelector } from '@src/hooks/useAppDispatch';
import useLoadCategory from '@src/hooks/useLoadCategory';
import CATEGORY_API from '@src/apis/category-api';

const resolver = classValidatorResolver(CategoryModel);

const CategoryList: FC = () => {
    const columns: IDataTableColum<CategoryModel>[] = [
        { key: 'categoryid', header: 'ID', type: 'text' },
        { key: 'categoryname', header: 'Tên danh mục', type: 'text' },
    ];

    const { loadCategories } = useLoadCategory();
    const toast = useToast();
    const form = useForm<CategoryModel>({ resolver });
    const categories = useAppSelector((state) => state.categories);

    const { isOpen, onOpen, onClose } = useDisclosure({
        onClose: () => form.reset(),
    });

    const onSubmit = async (data: CategoryModel) => {
        try {
            await CATEGORY_API.addCategory(data);

            toast({
                title: 'Thành công',
                description: 'Thêm danh mục thành công',
                status: 'success',
                duration: 9000,
                isClosable: true,
            });
            onClose();
            loadCategories();
        } catch (error) {
            toast({
                title: 'Thất bại',
                description: 'Thêm danh mục thất bại',
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
        }
    };

    return (
        <Box bgColor="white" borderRadius="lg" padding="4" border="1px" borderColor="gray.200" boxShadow="xs">
            <DataTable
                data={categories}
                columns={columns}
                addActionButton={{ children: 'Thêm danh mục', onClick: onOpen }}
            />

            <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Thêm sách</DrawerHeader>

                    <DrawerBody padding="4">
                        <FormProvider {...form}>
                            <CategoryDetailForm />
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

export default authHOC()(CategoryList);
