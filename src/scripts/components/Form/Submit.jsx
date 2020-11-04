import React, { Component } from 'react'

class Submit extends Component
{
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !nextProps.data.locked;
    }

    render() {
        let enabled = this.props.data.value.toLowerCase() === 'yes';
        const style = { backgroundColor: enabled ? 'green' : 'red'}
        const text  = enabled ? 'OK' : 'Cancel'

        return <button type="submit" style={style}>
            {text}
        </button>
    }
}

export default Submit
