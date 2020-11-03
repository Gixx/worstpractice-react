import React, { Component } from "react"
import './style.scss'
import Submit from './Submit.jsx'

class Form extends Component
{
    constructor() {
        super()

        this.state = {
            value: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { value } = event.target
        this.setState(() => {
            return {
                value
            }
        })
    }

    render() {
        return (
            <form id="MyForm">
                <label>Is it safe? Yes or no? <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                /></label><br />
                <Submit data={this.state.value} />
            </form>
        )
    }
}

export default Form
