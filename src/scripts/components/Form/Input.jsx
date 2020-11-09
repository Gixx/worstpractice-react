import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders an <input type="text"> element.
 *
 * @type {React.NamedExoticComponent<object>}
 */
const Input = React.memo(props => {
    return (
        <div>
            <label>Is it safe? Yes or no? <input
                type='text'
                value={props.value}
                onChange={props.onInputChange}
                onClick={event => event.target.setSelectionRange(0, props.value.length)}
                placeholder='Yes or No'
            /></label>
        </div>
    )
})

Input.displayName = 'Input'
Input.propTypes = {
    value: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired
}

export default Input
