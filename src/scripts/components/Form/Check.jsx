import React from 'react'

/**
 * Renders an <input type="checkbox"> Element
 *
 * @param {{Boolean}, {Function}} props
 * @return {JSX.Element}
 * @constructor
 */
function Check(props)
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

export default Check
