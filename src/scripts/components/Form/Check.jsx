import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders an <input type="checkbox"> Element
 *
 * @return {JSX.Element}
 * @constructor
 */
function  Check(props)
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

Check.displayName = 'Check'
Check.propTypes = {
    locked: PropTypes.bool.isRequired,
    onLockChange: PropTypes.func.isRequired
}

export default React.memo(Check)
