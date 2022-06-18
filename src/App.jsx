import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addPost,newPost,deletePost } from './postSlice'
import { nanoid } from '@reduxjs/toolkit';
import {
  Flex, FormControl, Input, Button
} from '@chakra-ui/react'
import { MdAddTask, MdEditNote, MdDeleteOutline ,MdDetails} from 'react-icons/md'
import Error from './Alert'
import PostUpdate from './PostUpdate'
import { Link } from "react-router-dom";


function App() {


  const post = useSelector((state) => state.post.text)
  const dispatch = useDispatch()
  const [input, setInput] = useState()
  const [error, setError] = useState(false)
  const [updateIcon, setUpdateIcon] = useState(false)
  const [updateData,setUpdateData] = useState() 





  const handleTitle = (e) => {
    setInput(e.target.value)
  }
  const pushPost = () => {
    if (input) {
      const data = {
        id: nanoid(),
        title: input,
      }
      dispatch(addPost(data))
      setInput('')
    } else {
      setError(true)


    }




  }
  const handleError = () => {
    setError(false)
  }
  const handleUpdateIcon = (id) => {
    var data=post.find((item)=>item.id==id)
    setUpdateData(data)
    setUpdateIcon(!updateIcon)
  }
const handleUpdateInput=(data,id)=>{
  const newData = {
    id: id,
    title: data
  }
  setUpdateData(newData)
}
const updatePost=()=>{
dispatch(newPost(updateData))
setUpdateIcon(false)
}

  const postList = post.map(item =>
  (
    <Flex borderRadius={'5px'} margin={'3px'} padding={'15px 20px'} backgroundColor='black' width={'100%'} justifyContent='space-between'>
      
      <Flex w={'70%'}>
        <Flex marginRight={'20px'} width='43%'>{item.id}</Flex>
        <Flex>{item.title}</Flex>
      </Flex>
      <Flex w={'30%'} justifyContent='space-around' >
        <Link to={`items/${item.id}`}><MdDetails/></Link>
        <MdEditNote onClick={()=>handleUpdateIcon(item.id)} />
        <MdDeleteOutline onClick={()=>dispatch(deletePost(item.id))}/>
      </Flex>



    </Flex>
  )

  )
  return (
    <Flex width={'100%'}>
      {
        error ?
          <Error fun={handleError} />
          : ""
      }
      {
       updateIcon?
       <PostUpdate  fun={handleUpdateIcon} data={updateData} handleUpdateInput={handleUpdateInput} updatePost={updatePost}/>
       :"" 
      }
      <Flex className="App" backgroundColor={'black'} height='100vh' padding='100px' style={{ 'position': 'relative' }} width='100%' justifyContent={'center'}>
      
        <Flex direction='column' width='60%'>
          <FormControl style={{ 'background': '#2f2e2e78' }} marginRight='5px' width={'100%'} height='max-content' border={'none'} mb='10px'>
            <Input type='text' onChange={handleTitle} value={input} color='white' border={'none'} height='47px' placeholder='put your title here and add new post.....' required={true} focusBorderColor="none" />
            <Button onClick={pushPost} style={{ 'position': 'absolute', 'top': '4px', 'right': '4px', 'cursor': 'pointer', 'background': 'black', 'zIndex': '998' }} >
              <MdAddTask fontSize={'22px'} color='green' />
            </Button>

          </FormControl>
          <Flex color={'white'} w style={{ 'background': '#2f2e2e78' }} borderRadius={'10px'} direction={'column'} width='100%'>
            <Flex direction={'column'} padding='20px '>
              <Flex width={'100%'} borderRadius={'5px'} margin={'3px'} padding={'10px 20px'} backgroundColor='black' fontWeight={'bold'} color='#de5050'>
                <Flex marginRight={'20px'} width='30%'>id</Flex>
                <Flex>title</Flex>
              </Flex>
              {postList}
            </Flex>
          </Flex>
        </Flex>


      </Flex>
    </Flex>


  )
}

export default App
