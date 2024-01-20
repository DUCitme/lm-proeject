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
};

type Props<T> = {
    columns: IDataTableColum<T>[];
    addActionButton?: ButtonProps;
    data: T[];
};

const DataTable = <T extends any>({ columns, addActionButton, data = [] }: Props<T>): JSX.Element => {
    const getColumnTemplate = (column: IDataTableColum<T>, item = {} as T) => {
        switch (column.type) {
            case 'text':
                return <Td key={column.key as string}>{item[column.key] as any}</Td>;
            case 'number':
                return <Td key={column.key as string}>{item[column.key] as any}</Td>;
            case 'date':
                return <Td key={column.key as string}>{item[column.key] as any}</Td>;
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
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((item, index) => (
                            <Tr key={index}>{columns.map((column) => getColumnTemplate(column, item))}</Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Stack>
    );
};

export default DataTable;
