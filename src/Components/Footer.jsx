import { Box, Button, Heading, HStack, Stack, VStack, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai'

const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
            <Stack direction={['column', 'row']} >
                <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}>
                        Suscribe to More Updates 
                    </Heading>


                    <HStack borderBottom={'2px solid white'} py={'2'}>

                        <Input placeholder='Enter Email Here...' borderRadius={"none"}
                            border={'none'} outline={'none'} focusBorderColor={'none'}></Input>
                        <Button p={'0'} colorScheme={'purple'} variant={'ghost'}
                            borderRadius={'0 20px 20px 0'} >

                            <AiOutlineSend />


                        </Button>
                    </HStack>

                </VStack>

                <VStack w={'full'} borderLeft={['none', '1px solid white']}
                    borderRight={['none', '1px solid white']}>

                    <Heading size={'md'} textTransform={'uppercase'} py={'2'}>
                        ONLY-4-VALUES
                    </Heading>
                    <Text>
                        All Rights Reserved @2022
                    </Text>

                </VStack>

                <VStack w={'full'}>

                <Heading size={'md'} textTransform={'uppercase'} py={'2'}>
                        The Nature Beauty 
                    </Heading>
                    <Text>
                        For Nature Lovers 
                    </Text>

                </VStack>

            </Stack>

        </Box>

    )
}

export default Footer
