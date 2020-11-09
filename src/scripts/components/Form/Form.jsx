import React, { useState, useCallback } from 'react'
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

    const onInputChange = useCallback(event => setValue(event.target.value), [value])
    const onLockChange = useCallback(() => setLocked(!locked), [locked])
    const whenSelectChange = useCallback(isSafe => setValue(isSafe ? 'Yes' : 'No'), [])

    return (
        <form id='MyForm' onSubmit={event => event.preventDefault()}>
            <MessageBar />

            <Select whenSelectChanged={whenSelectChange} /><br />

            <Input value={value} onInputChange={onInputChange} /><br />

            <Check locked={locked} onLockChange={onLockChange} /><br />

            <Submit value={value} locked={locked} />
        </form>
    )
}
