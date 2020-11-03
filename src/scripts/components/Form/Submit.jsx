import React, { Component } from "react"

class Submit extends Component
{
    render() {
        let enabled = this.props.data.toLowerCase() === 'yes';
        return <button type="submit" style={{ backgroundColor: enabled ? 'green' : 'red'}}>
            { enabled ? 'OK' : 'Cancel' }
        </button>
    }
}

export default Submit
