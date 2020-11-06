import React from 'react'

/**
 * Renders an <option> HTML element
 *
 * @param {{String}, {String}} props
 * @return {JSX.Element}
 * @constructor
 */
export default function Option(props)
{
    return <option value={props.value}>{props.label}</option>
}
