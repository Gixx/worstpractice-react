import React from 'react'
import PropTypes from 'prop-types'

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

Check.propTypes = {
    locked: PropTypes.bool.isRequired,
    onLockChange: PropTypes.func.isRequired
}

export default Check
