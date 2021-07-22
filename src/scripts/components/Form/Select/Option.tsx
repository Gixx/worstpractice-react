import React, {FunctionComponent} from 'react'

interface OptionData {
    value: string,
    label: string
}

/**
 * Renders an <option> HTML element
 *
 * @param props
 * @constructor
 */
const Option:FunctionComponent<OptionData> =
    (props) => (<option value={props.value}>{props.label}</option>)

export default React.memo(Option)
