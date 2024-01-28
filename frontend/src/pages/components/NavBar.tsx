import {
    Box,
    Container,
    Flex,
    IconButton,
    Image,
    Input,
    InputGroup,
    InputRightAddon,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import { APP_CONFIG } from '@config/appConfig';
import React, { Fragment } from 'react';
import { faBars, faSearch, faCartShopping, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from '@src/hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const categories = useAppSelector((state) => state.categories);
    const navigate = useNavigate();

    const renderCategories = () => {
        return (
            <Menu>
                {({ isOpen }) => (
                    <>
                        <MenuButton as={FontAwesomeIcon} icon={faBars} cursor="pointer" color="gray.600">
                            {isOpen ? 'Close' : 'Open'}
                        </MenuButton>
                        <MenuList>
                            {categories.map((category) => (
                                <MenuItem key={category.id}>{category.name}</MenuItem>
                            ))}
                        </MenuList>
                    </>
                )}
            </Menu>
        );
    };

    const renderSearchBar = () => {
        return (
            <InputGroup>
                <Input placeholder="Tìm kiếm" />
                <InputRightAddon
                    backgroundColor="#FF3B4D"
                    children={<FontAwesomeIcon icon={faSearch} cursor="pointer" color="white" />}
                />
            </InputGroup>
        );
    };

    return (
        <Fragment>
            <Box w="100%" bgColor="#FF3B4D">
                <Image src="/images/img_top_home.jpg" width="100%" height="55px" objectFit="contain" alt="logo" />
            </Box>

            <Box w="100%" bgColor="white" height={`${APP_CONFIG.NAV_BAR_HEIGHT}px`}>
                <Container as={Flex} gap="4" className="container" h="100%" alignItems="center">
                    <Image
                        onClick={() => navigate('/')}
                        src="/images/img_logo.png"
                        width="180px"
                        height="100%"
                        objectFit="contain"
                        alt="logo"
                    />

                    {renderCategories()}
                    {renderSearchBar()}

                    <IconButton
                        onClick={() => navigate('/cart')}
                        variant="outline"
                        aria-label="Search database"
                        icon={<FontAwesomeIcon icon={faCartShopping} cursor="pointer" color="#646464" />}
                    />

                    <IconButton
                        variant="outline"
                        aria-label="Search database"
                        icon={<FontAwesomeIcon icon={faBell} cursor="pointer" color="#646464" />}
                    />
                </Container>
            </Box>
        </Fragment>
    );
};

export default NavBar;
