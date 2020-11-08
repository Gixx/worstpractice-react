import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders an <option> HTML element
 *
 * @param {{String}, {String}} props
 * @return {JSX.Element}
 * @constructor
 */
function Option(props)
{
    return <option value={props.value}>{props.label}</option>
}

Option.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default Option
