import React, {FunctionComponent} from 'react'

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
            <label>
                Lock button state?
                <input
                    type="checkbox"
                    checked={props.locked}
                    onChange={props.onLockChange}
                />
            </label>
        </div>
    )
}

export default React.memo(Check)
