import React, { Component } from 'react'


class Check extends Component
{
    render() {
        return <div>
            <label>
                Lock button state?
                <input
                    type="checkbox"
                    checked={this.props.locked}
                    onChange={this.props.onLockChange}
                />
            </label>
            <br />
        </div>
    }
}

export default Check
