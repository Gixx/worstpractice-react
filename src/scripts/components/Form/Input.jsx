import React from 'react'

/**
 * Renders an <input type="text"> element.
 *
 * @param {{String}, {Function}} props
 * @return {JSX.Element}
 * @constructor
 */
export default function Input(props)
{
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
}
