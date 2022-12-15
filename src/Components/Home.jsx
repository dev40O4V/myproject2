import { Box, Container, Heading , Image, Stack,Text} from '@chakra-ui/react';
import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assests/1.jpg"
import img2 from "../assests/2.jpg"
import img3 from "../assests/3.jpg"
import img4 from "../assests/4.jpg"
import img5 from "../assests/5.jpg"

const headingoptions = {
    pos: "absolute",
    left: '50%',
    top: '50%',
    trasnfrom: 'translate(-50%, -50%)',
    textTransfrom: 'uppercase',
    p: '4',
    size: '4xl',
}

const Home = () => {
    return (
        <Box>

<MyCarousel />
            

            <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>

                <Heading textTransform={'uppercase'} 
                py={'4'} w={'fit-contebt'} 
                borderBottom={'2px solid'} margin={"auto"}>
                    
                    Water Fall
                </Heading>

                <Stack
                h={'full'}
                p={'4'}
                alignItems={'center'}
                direction={['column', 'row']}
                >

                <Image src={img5} h={['40', '300']}/>
                <Text letterSpacing={"widest"} lineheight={'190%'} p={['4','16']} textAlign={'justify'}>
                Lorem ipsum dolor sit amet is a Latin phrase that translates to “pain is an illusion.”
                The phrase is often used in psychological and philosophical discussions about the nature of pain.
                 Pain is an experience that is created by the brain in response to certain stimuli.

                 So how did the classical Latin become so incoherent? According to McClintock, 
                 a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide 
                 placeholder text to mockup various fonts for a type specimen book. It's difficult to 
                 find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, 
                 although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples.
                </Text>

                </Stack>

                

            </Container>

            
        </Box>
    )
}

export default Home

const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false}
        showArrows={false} showThumbs={false} >

        <Box w={"full"} h={'100vh'}>

            <Image src={img1} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingoptions}> The Nature Beauty </Heading>

        </Box>

        <Box w={"full"} h={'100vh'}>

<Image src={img2} />
<Heading bgColor={'whiteAlpha.900'} color={"black"} {...headingoptions}> Nature Love </Heading>

</Box>

<Box w={"full"} h={'100vh'}>

<Image src={img3} />
<Heading bgColor={'whiteAlpha.900'} color={"black"} {...headingoptions}> Nature Calling </Heading>

</Box>

<Box w={"full"} h={'100vh'}>

<Image src={img4} />
<Heading bgColor={'whiteAlpha.600'} color={"black"} {...headingoptions}> Nature Stone </Heading>

</Box>


    </Carousel>
)

