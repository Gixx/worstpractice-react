import React from 'react'
import PropTypes from 'prop-types'


/**
 * Renders an <option> HTML element
 *
 * @return {JSX.Element}
 * @constructor
 */
function Option(props)
{
    return <option value={props.value}>{props.label}</option>
}

Option.displayName = 'Option'
Option.propTypes = {
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
}

export default React.memo(Option)
