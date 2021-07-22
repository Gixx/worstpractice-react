import React, {ChangeEventHandler, FunctionComponent} from 'react'

type InputProps = {
    value: string,
    onInputChange: (newValue: string) => void,
}

/**
 * Renders an <input type="text"> element.
 *
 * @return {JSX.Element}
 * @constructor
 */
const Input:FunctionComponent<InputProps> = function(props)
{
    const onInputChange:ChangeEventHandler<HTMLInputElement> = (event) => {
        const newValue = event.target.value
        props.onInputChange(newValue)
    }

    const onClick = (target: HTMLInputElement) => {
        target.setSelectionRange(0, props.value.length)
    }

    return (
        <div>
            <label>Is it safe? Yes or no? <input
                type='text'
                value={props.value}
                onChange={onInputChange}
                onClick={(e) => onClick(e.target as HTMLInputElement)}
                placeholder='Yes or No'
            /></label>
        </div>
    )
}

Input.displayName = 'Input'

export default React.memo(Input)
