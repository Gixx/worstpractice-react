import React, { useState } from 'react'
import './style.scss'
import MessageBar from './MessageBar.jsx'
import Select from './Select.jsx'
import Input from './Input.jsx'
import Check from './Check.jsx'
import Submit from './Submit.jsx'

/**
 * Renders a form with a couple of sub-components within
 *
 * @return {JSX.Element}
 * @constructor
 */
export default function Form()
{
    const [value, setValue] = useState('')
    const [locked, setLocked] = useState(true)

    const onInputChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <form id='MyForm' onSubmit={event => event.preventDefault()}>
            <MessageBar />

            <Select whenSelectChanged={isSafe => setValue(isSafe ? 'Yes' : 'No')} /><br />

            <Input value={value} onInputChange={onInputChange} /><br />

            <Check locked={locked} onLockChange={() => setLocked(!locked)} /><br />

            <Submit value={value} locked={locked} />
        </form>
    )
}
