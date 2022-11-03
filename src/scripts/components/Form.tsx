import React, {useState, FunctionComponent} from 'react'
import './Form/style.scss'
import SelectBox from './Form/SelectBox'
import InputField from './Form/InputField'
import Lock from './Form/Lock'
import Submit from './Form/Submit'

/**
 * Renders a form with a couple of subcomponents within
 */
const Form: FunctionComponent = function ()
{
    const [value, setValue] = useState('')
    const [locked, setLocked] = useState(true)

    const onSelectChange = (isSafe: boolean) => setValue(isSafe ? 'Yes' : 'No')
    const onInputChange = setValue
    const onLockChange = () => setLocked(!locked)

    return (
        <form id='MyForm' onSubmit={event => event.preventDefault()}>
            <SelectBox onSelectChange={onSelectChange}/><br/>
            <InputField value={value} onInputChange={onInputChange}/><br/>
            <Lock locked={locked} onLockChange={onLockChange}/><br/>
            <Submit value={value} locked={locked}/>
        </form>
    )
}

export default Form
