import React, { Component } from 'react'
import './style.scss'
import Submit from './Submit.jsx'
import Check from './Check.jsx'

class Form extends Component
{
    constructor() {
        super()

        this.state = {
            value: '',
            locked: true
        }

        this.handleChange = this.handleChange.bind(this)
        this.onLockChange = this.onLockChange.bind(this)
    }

    handleChange(event) {
        const { value } = event.target
        this.setState(() => {
            return {
                value
            }
        })
    }

    onLockChange() {
        this.setState(prevState => {
            return {
                value: prevState.value,
                locked: !prevState.locked
            }
        })
    }

    render() {
        return (
            <form id='MyForm'>
                <label>Is it safe? Yes or no? <input
                    type='text'
                    value={this.state.value}
                    onChange={this.handleChange}
                /></label><br />

                <Check locked={this.state.locked} onLockChange={this.onLockChange} />
                <Submit data={this.state} />
            </form>
        )
    }
}

export default Form
