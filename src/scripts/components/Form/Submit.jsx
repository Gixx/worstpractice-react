import React from 'react'

/**
 * Renders a <button> element if the conditions allow it
 *
 * @type {React.NamedExoticComponent<object>}
 */
export default React.memo(props => {
    let enabled = props.value.toLowerCase() === 'yes';
    const style = { backgroundColor: enabled ? 'green' : 'red'}
    const text  = enabled ? 'OK' : 'Cancel'

    return (
        <button type="submit" style={style}>
            {text}
        </button>
    )
}, (prevProps, nextProps) => {
    return nextProps.locked
})
