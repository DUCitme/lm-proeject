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
import CategoryModel from '@core/models/category.model';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import CategoryDetailForm from '@modules/admin/components/CategoryDetailForm';
import authHOC from '@src/hoc/authHOC';
import { FormProvider, useForm } from 'react-hook-form';

const resolver = classValidatorResolver(CategoryModel);

const CategoryList: FC = () => {
    const columns: IDataTableColum<CategoryModel>[] = [
        { key: 'categoryID', header: 'ID', type: 'text' },
        { key: 'catagoryName', header: 'Tên danh mục', type: 'text' },
    ];

    const form = useForm<CategoryModel>({ resolver });

    const { isOpen, onOpen, onClose } = useDisclosure({
        onClose: () => form.reset(),
    });

    const onSubmit = (data: CategoryModel) => {
        console.log(data);
    };

    const mockBooks = Array(10)
        .fill(null)
        .map((_, index) => ({
            categoryID: `category${index}`,
            catagoryName: `Category Name ${index}`,
        })) as CategoryModel[];

    return (
        <Box bgColor="white" borderRadius="lg" padding="4" border="1px" borderColor="gray.200" boxShadow="xs">
            <DataTable
                data={mockBooks}
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
