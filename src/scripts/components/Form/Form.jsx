import React, { Component } from 'react'
import './style.scss'
import Select from './Select.jsx'
import Input from './Input.jsx'
import Check from './Check.jsx'
import Submit from './Submit.jsx'

class Form extends Component
{
    constructor() {
        super()

        this.state = {
            value: '',
            locked: true
        }

        this.onInputChange = this.onInputChange.bind(this)
        this.onLockChange = this.onLockChange.bind(this)
        this.whenSelectChanged = this.whenSelectChanged.bind(this)
    }

    whenSelectChanged(isSafe) {
        this.setState({value: isSafe ? 'Yes' : 'No'})
    }

    onInputChange(event) {
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
                <Select whenSelectChanged={this.whenSelectChanged} /><br />

                <Input value={this.state.value} onChange={this.onInputChange} /><br />

                <Check locked={this.state.locked} onLockChange={this.onLockChange} /><br />

                <Submit data={this.state} />
            </form>
        )
    }
}

export default Form
