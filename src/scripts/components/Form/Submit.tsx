import React, {FunctionComponent} from 'react'
import { Button } from '@chakra-ui/react'

type SubmitProps = {
    value: string,
    locked: boolean
}

/**
 * Renders a <button> element if the conditions allow it
 *
 * @constructor
 */
const Submit:FunctionComponent<SubmitProps> = function(props)
{
    const enabled = props.value.toLowerCase() === 'yes'
    const style = enabled ? 'teal' : 'red'
    const text = enabled ? 'OK' : 'Cancel'

    return (
        <Button colorScheme={ style } variant="solid" type="submit">
            {text}
        </Button>
    )
}

function isLocked(prevProps:SubmitProps, nextProps:SubmitProps)
{
    return prevProps === nextProps || nextProps.locked
}


export default React.memo(Submit, isLocked)
