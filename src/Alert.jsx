import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Flex,
    Icon
} from '@chakra-ui/react'
import {MdOutlineClose} from 'react-icons/md'

function Error({fun}) {
    return (
        <Flex  style={{ 'position': 'absolute', 'zIndex': '999','background':'#c6e4f58f','width':'100%','height':'100%' }} >
            <Alert status='error' width='max-content' height={'max-content'} margin={'auto'} padding='40px' borderRadius={'5px'}  style={{'position':'relative'}}>
            <Icon as={MdOutlineClose}  style={{'position':'absolute','top':'5px','right':'5px','cursor':'pointer'}} onClick={()=>fun()}/>
            <Flex direction={'column'}>
                <Flex>
                    <AlertIcon />
                    <AlertTitle>Title should not be empty</AlertTitle>
                </Flex>
                <AlertDescription>Pls add title before submit the form</AlertDescription>
            </Flex>
        </Alert>
        </Flex>
        
    )
}

export default Error