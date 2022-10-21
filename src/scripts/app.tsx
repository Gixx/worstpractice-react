import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom'
import '../styles/app.scss'
import Form from './components/Form/Form'
import MessageBar from './components/Form/MessageBar'

const app = document.querySelector('#root')
const Heading = () => (<h1>Hello there!</h1>)

ReactDOM.render(
    <ChakraProvider>
        <MessageBar/>
        <div id="box">
            <Heading />
            <Form />
        </div>
    </ChakraProvider>,
    app
)
