import React from 'react'

/**
 * Renders an <input type="text"> element.
 *
 * @param {{String}, {Function}} props
 * @return {JSX.Element}
 * @constructor
 */
function Input(props)
{
    return (
        <div>
            <label>Is it safe? Yes or no? <input
                type='text'
                value={props.value}
                onChange={props.onInputChange}
            /></label>
        </div>
    )
}

export default Input
