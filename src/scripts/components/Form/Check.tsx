import React, {FunctionComponent} from 'react'
import { Checkbox } from '@chakra-ui/react'

type CheckboxProps = {
    locked: boolean,
    onLockChange: () => void,
}

/**
 * Renders an <input type="checkbox"> Element
 * @param props
 * @constructor
 */
const Check: FunctionComponent<CheckboxProps> = function (props)
{
    return (
        <div>
            <Checkbox size="lg" colorScheme="green" isChecked={props.locked} onChange={props.onLockChange}
            >
                Lock button state?
            </Checkbox>
        </div>
    )
}

export default React.memo(Check)
