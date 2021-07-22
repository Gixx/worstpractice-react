import React, {useState, FunctionComponent} from 'react'
import './style.scss'
import MessageBar from './MessageBar'
import Select from './Select'
import Input from './Input'
import Check from './Check'
import Submit from './Submit'

/**
 * Renders a form with a couple of sub-components within
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
            <MessageBar/>

            <Select onSelectChange={onSelectChange}/><br/>

            <Input value={value} onInputChange={onInputChange}/><br/>

            <Check locked={locked} onLockChange={onLockChange}/><br/>

            <Submit value={value} locked={locked}/>
        </form>
    )
}

export default Form
