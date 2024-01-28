import { Box, Flex, Grid, GridItem, Image } from '@chakra-ui/react';

const HightLight = () => {
    return (
        <Box className="container" marginTop="3">
            <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(12, 1fr)" gap={4}>
                <GridItem objectFit="fill" borderRadius="4" rowSpan={2} colSpan={8}>
                    <Image
                        borderRadius={4}
                        height="100%"
                        src="https://cdn0.fahasa.com/media/magentothem/banner7/NCC_MCBooks_Slide_T1_840x320.jpg"
                    />
                </GridItem>
                <GridItem objectFit="cover" borderRadius="4" colSpan={4}>
                    <Image
                        borderRadius={4}
                        height="100%"
                        src="https://cdn0.fahasa.com/media/wysiwyg/Thang-01-2024/VNPay_392x156.jpg"
                    />
                </GridItem>
                <GridItem objectFit="cover" colSpan={4}>
                    <Image
                        borderRadius={4}
                        height="100%"
                        src="https://cdn0.fahasa.com/media/wysiwyg/Thang-12-2023/392x156_VPBANK_T12.png"
                    />
                </GridItem>
            </Grid>
        </Box>
    );
};

export default HightLight;
