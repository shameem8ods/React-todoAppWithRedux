import React from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {Box,Flex, Grid, GridItem} from '@chakra-ui/react'

function Detail() {
    const post = useSelector((state) => state.post.text)
    const {itemId} = useParams()
    const filterdPost = post.filter((item)=>item.id == itemId )
  return (
    <Flex backgroundColor={'black'} height='100vh' color={'white'} justifyContent='center' alignItems={'center'}> 
      {filterdPost.map((data)=>(
      <Flex direction={'column'} style={{'background':'#04d5b682'}} borderRadius='5px' padding={'10px 20px'} color='blackAlpha.900' fontWeight={'bold'} fontSize={'26px'} w='40%'>
        <Flex color='black' w={'100%'} direction={'column'} >
          <Grid gridTemplateColumns={'40% 60%'} width='max-content'>
            <GridItem>Id</GridItem>
            <GridItem width={'max-content'}>{data.id}</GridItem>
            <GridItem>Title</GridItem>
            <GridItem>{data.title}</GridItem>
          </Grid>
       
          
        </Flex>
      </Flex>
      ))}
      </Flex>
  )
}

export default Detail