import React, {FunctionComponent} from 'react'
import ReactDOM from 'react-dom'
import '../styles/app.scss'
import Form from './components/Form/Form'

const app = document.querySelector('#root')
const Heading = () => (<h1>Hello</h1>)

const AppContainer:FunctionComponent = (props) => (<div>{props.children}</div>)

ReactDOM.render(
    <AppContainer>
        <Heading />
        <Form />
    </AppContainer>,
    app
)
