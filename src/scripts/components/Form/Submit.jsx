import React, { Component } from "react"

class Submit extends Component
{
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !nextProps.data.locked;
    }

    render() {
        let enabled = this.props.data.value.toLowerCase() === 'yes';
        return <button type="submit" style={{ backgroundColor: enabled ? 'green' : 'red'}}>
            { enabled ? 'OK' : 'Cancel' }
        </button>
    }
}

export default Submit
