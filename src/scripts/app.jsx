import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/app.scss'
import Form from './components/Form/Form.jsx'

const app = document.querySelector('#root')
const AppContainer = (props) => (<div>{props.children}</div>)
const Heading = () => (<h1>Hello</h1>)

ReactDOM.render(
    <AppContainer>
        <Heading />
        <Form />
    </AppContainer>,
    app
)
