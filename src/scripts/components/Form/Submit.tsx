import React, {FunctionComponent} from 'react'

type SubmitProps = {
    value: string,
    locked: boolean
}

/**
 * Renders a <button> element if the conditions allow it
 *
 * @return {JSX.Element}
 * @constructor
 */
const Submit:FunctionComponent<SubmitProps> = function(props)
{
    const enabled = props.value.toLowerCase() === 'yes'
    const style = { backgroundColor: enabled ? 'green' : 'red'}
    const text = enabled ? 'OK' : 'Cancel'

    return (
        <button type="submit" style={style}>
            {text}
        </button>
    )
}

function isLocked(prevProps:SubmitProps, nextProps:SubmitProps)
{
    return prevProps === nextProps || nextProps.locked
}


export default React.memo(Submit, isLocked)
