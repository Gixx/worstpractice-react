import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {Box} from '@chakra-ui/layout'
import ReactDOM from 'react-dom'
import '../styles/app.scss'
import Form from './components/Form'
import MessageBar from './components/MessageBar'

const app = document.querySelector('#root')
const Heading = () => (<h1>Hello there!</h1>)

ReactDOM.render(
    <ChakraProvider>
        <MessageBar/>
        <Box id="box">
            <Heading />
            <Form />
        </Box>
    </ChakraProvider>,
    app
)