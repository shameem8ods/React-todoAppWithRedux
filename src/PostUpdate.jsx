
import {React,useState} from 'react'
import {
    Alert,
    Flex,
    Icon,
    Input,
    Button
} from '@chakra-ui/react'
import {MdOutlineClose} from 'react-icons/md'

function PostUpdate({fun,data,handleUpdateInput,updatePost}) {
  return (
    <Flex  style={{ 'position': 'absolute', 'zIndex': '999','background':'#c6e4f58f','width':'100%','height':'100%' }} >
            <Alert backgroundColor={'gray.600'} width='max-content' height={'max-content'} margin={'auto'} padding='40px' borderRadius={'5px'}  style={{'position':'relative'}}>
            <Icon as={MdOutlineClose} color='red' style={{'position':'absolute','top':'5px','right':'5px','cursor':'pointer'}} onClick={()=>fun()}/>
            <Flex direction={'column'}>
                <Input type='text' value={data.title} color='white' border={'1px solid'} borderColor='black' onChange={(e)=>handleUpdateInput(e.target.value,data.id)} mb='10px'></Input>
                <Button onClick={()=>updatePost()}>update</Button>
            </Flex>
        </Alert>
        </Flex>
  )
}

export default PostUpdate