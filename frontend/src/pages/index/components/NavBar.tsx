import { Box, Container, Flex, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { APP_CONFIG } from '@config/appConfig';
import React, { Fragment } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
    return (
        <Fragment>
            <Box w="100%" bgColor="#FF3B4D">
                <Image src="/images/img_top_home.jpg" width="100%" height="55px" objectFit="contain" alt="logo" />
            </Box>

            <Box w="100%" bgColor="white" height={`${APP_CONFIG.NAV_BAR_HEIGHT}px`}>
                <Container as={Flex} gap="4" className="container" h="100%" alignItems="center">
                    <Image src="/images/img_logo.png" width="180px" height="100%" objectFit="contain" alt="logo" />

                    <Menu>
                        {({ isOpen }) => (
                            <>
                                <MenuButton as={FontAwesomeIcon} icon={faBars} cursor="pointer" color="gray.600">
                                    {isOpen ? 'Close' : 'Open'}
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Tiểu thuyết</MenuItem>
                                    <MenuItem>Tiểu thuyết</MenuItem>
                                    <MenuItem>Tiểu thuyết</MenuItem>
                                    <MenuItem>Tiểu thuyết</MenuItem>
                                    <MenuItem>Tiểu thuyết</MenuItem>
                                </MenuList>
                            </>
                        )}
                    </Menu>

                    {/*  */}
                </Container>
            </Box>
        </Fragment>
    );
};

export default NavBar;
