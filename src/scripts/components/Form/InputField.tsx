import React, {ChangeEventHandler, FunctionComponent} from 'react'
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'

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
const InputField:FunctionComponent<InputProps> = function(props)
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
            <InputGroup>
                <InputLeftAddon children='Is it safe?' />
                <Input
                    placeholder='Yes or No'
                    variant='filled'
                    value={props.value}
                    onChange={onInputChange}
                    onClick={(e) => onClick(e.target as HTMLInputElement)}
                />
            </InputGroup>
        </div>
    )
}

InputField.displayName = 'InputField'

export default React.memo(InputField)
