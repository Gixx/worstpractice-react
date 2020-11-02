import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from './components/Form.jsx';
import Parag from './components/Parag.jsx';
import '../styles/main.scss';

const wrapper = document.getElementById("root");
ReactDOM.render(<div><Form /><Parag /></div>, wrapper);

