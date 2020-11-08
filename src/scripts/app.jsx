import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import '../styles/app.scss'
import Form from './components/Form/Form.jsx'

const app = document.querySelector('#root')
const AppContainer = (props) => (<div>{props.children}</div>)
AppContainer.propTypes = {
    children: PropTypes.object.isRequired
}

const Heading = () => (<h1>Hello</h1>)



ReactDOM.render(
    <AppContainer>
        <Heading />
        <Form />
    </AppContainer>,
    app
)
