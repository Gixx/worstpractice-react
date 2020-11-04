import React, { Component } from 'react'

class Input extends Component
{
    render() {
        return <div>
            <label>Is it safe? Yes or no? <input
                type='text'
                value={this.props.value}
                onChange={this.props.onInputChange}
            /></label>
        </div>
    }
}

export default Input
