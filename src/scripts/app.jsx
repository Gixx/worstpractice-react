import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import '../styles/app.scss'
import Form from './components/Form/Form.jsx'

const app = document.querySelector('#root')
const Heading = () => (<h1>Hello</h1>)

const AppContainer = (props) => (<div>{props.children}</div>)
AppContainer.propTypes = {
    children: PropTypes.array.isRequired
}

ReactDOM.render(
    <AppContainer>
        <Heading />
        <Form />
    </AppContainer>,
    app
)
