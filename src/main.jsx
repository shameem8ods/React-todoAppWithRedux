import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from "./store";
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import Detail from './routes/Detail';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(


  <ChakraProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route  path="items/:itemId" element={<Detail />} />
          
        </Routes>
      </BrowserRouter>

    </Provider>

  </ChakraProvider>


)
