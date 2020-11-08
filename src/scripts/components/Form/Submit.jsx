import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders a <button> element if the conditions allow it
 *
 * @type {React.NamedExoticComponent<object>}
 */
const Submit = React.memo(props => {
    let enabled = props.value.toLowerCase() === 'yes'
    const style = { backgroundColor: enabled ? 'green' : 'red'}
    const text = enabled ? 'OK' : 'Cancel'

    return (
        <button type="submit" style={style}>
            {text}
        </button>
    )
}, (prevProps, nextProps) => {
    return nextProps.locked
})

Submit.displayName = 'Submit'
Submit.propTypes = {
    value: PropTypes.string.isRequired
}

export default Submit
