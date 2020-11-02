import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from './components/Form.jsx';
import '../styles/app.scss'

const app = document.querySelector('#root')
const AppContainer = (props) => (<div>{props.children}</div>)
const Heading = () => (<h1>Hello</h1>)

ReactDOM.render(<AppContainer><Heading /><Form /></AppContainer>, app);
