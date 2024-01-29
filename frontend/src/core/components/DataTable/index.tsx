import {
    Button,
    ButtonProps,
    Flex,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightAddon,
    Stack,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type IDataTableColum<T> = {
    header: string;
    key: keyof T;
    type: 'text' | 'number' | 'date' | 'image';
    format?: (value: any) => string;
};

type Props<T> = {
    columns: IDataTableColum<T>[];
    addActionButton?: ButtonProps;
    data: T[];
    editAction?: (item: T) => void;
    deleteAction?: (item: T) => void;
};

const DataTable = <T extends any>({
    columns,
    addActionButton,
    data = [],
    editAction,
    deleteAction,
}: Props<T>): JSX.Element => {
    const getColumnTemplate = (column: IDataTableColum<T>, item = {} as T) => {
        const value = column.format ? column.format(item[column.key]) : item[column.key];
        switch (column.type) {
            case 'text':
                return <Td key={column.key as string}>{value as any}</Td>;
            case 'number':
                return <Td key={column.key as string}>{value as any}</Td>;
            case 'date':
                return <Td key={column.key as string}>{value as any}</Td>;
            case 'image':
                return (
                    <Td key={column.key as string}>
                        <Image src={item[column.key] as any} height="100px" />
                    </Td>
                );
            default:
                return <Td key={column.key as string}></Td>;
        }
    };

    return (
        <Stack>
            <Flex justifyContent="space-between" alignItems="center" marginBottom="4" gap="4">
                {addActionButton ? <Button {...addActionButton} /> : null}

                <InputGroup borderRadius={5}>
                    <InputLeftElement pointerEvents="none" children={<FontAwesomeIcon icon={faSearch} />} />
                    <Input type="text" placeholder="Search..." />
                    <InputRightAddon p={0} border="none">
                        <Button borderLeftRadius={0}>Tìm kiếm</Button>
                    </InputRightAddon>
                </InputGroup>
            </Flex>
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            {columns.map((column) => (
                                <Th key={column.key as string}>{column.header}</Th>
                            ))}
                            {editAction ? <Th>Actions</Th> : null}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((item, index) => (
                            <Tr key={index}>
                                {columns.map((column) => getColumnTemplate(column, item))}
                                <Td as={Flex} gap="2">
                                    {editAction ? (
                                        <Button colorScheme="blue" onClick={() => editAction(item)}>
                                            Edit
                                        </Button>
                                    ) : null}
                                    {deleteAction ? (
                                        <Button colorScheme="red" onClick={() => deleteAction(item)}>
                                            Delete
                                        </Button>
                                    ) : null}
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Stack>
    );
};

export default DataTable;
