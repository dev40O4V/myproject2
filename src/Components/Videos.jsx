import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import video1 from '../assests/video 1.mp4'
import video2 from '../assests/video 2.mp4'
import video3 from '../assests/video 3.mp4'
import video4 from '../assests/video 4.mp4'
import video5 from '../assests/video 5.mp4'
import video6 from '../assests/video 6.mp4'
import video7 from '../assests/video 7.mp4'

const Videos = () => {
    
    const convertobj = (url, title) => ({url,title})
    

    const videoArr = [
        convertobj(video1,"Sample Video1"),
        convertobj(video2,"Sample Video2"),
        convertobj(video3,"Sample Video3"),
        convertobj(video4,"Sample Video4"),
        convertobj(video5,"Sample Video5"),
        convertobj(video6,"Sample Video6"),
        convertobj(video7,"Sample Video7"),

    ]
//     const headlineArr = ["Sample Nature Video 1","Sample Nature Video 2", "Sample Nature Video 3","Sample Nature Video 4", 
// "Sample Nature Video 5", "Sample Nature Video 6", "Sample Nature Video 7"]

    const [videosrc, setvideosrc] = useState(videoArr[0])
    // const [headline, setheadline] = useState(headlineArr[0])

    return (

        <Stack direction={['column', 'row']} h={'100vh'}>

            <VStack w={'full'}>
                <video src={videosrc.url}
                    controls
                    controlsList='nodownload'
                    style={{ width: '100%' }}> </video>

                <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
                    <Heading>
                    {videosrc.title}
                    </Heading>
                    <Text>
                        This is Sample Video About Nature.
                    </Text>
                </VStack>

            </VStack>

            <VStack w={['full', 'xl']} p='8' spacing={'8'} overflowY={'auto'} alignItems={'stretch'}>
        
        {
            videoArr.map((item, index) => (
                <Button variant={'ghost'} colorScheme={"purple"}
                onClick={() => {setvideosrc(item);}}>
                LECTURE {index + 1}
            </Button>
            ))
        }
            </VStack>

        </Stack>

    )

}

export default Videos
