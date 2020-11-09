import React from 'react'
import PropTypes from 'prop-types'


/**
 * Renders an <option> HTML element
 *
 * @type {React.NamedExoticComponent<object>}
 */
const Option = React.memo(props => {
    return <option value={props.value}>{props.label}</option>
})

Option.displayName = 'Option'
Option.propTypes = {
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
}

export default Option
