import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders a <button> element if the conditions allow it
 *
 * @return {JSX.Element}
 * @constructor
 */
function Submit(props)
{
    let enabled = props.value.toLowerCase() === 'yes'
    const style = { backgroundColor: enabled ? 'green' : 'red'}
    const text = enabled ? 'OK' : 'Cancel'

    return (
        <button type="submit" style={style}>
            {text}
        </button>
    )
}

function isLocked(prevProps, nextProps)
{
    return prevProps === nextProps || nextProps.locked
}

Submit.displayName = 'Submit'
Submit.propTypes = {
    value: PropTypes.string.isRequired
}

export default React.memo(Submit, isLocked)
