import React, { useState } from 'react'
import './style.scss'
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

    const whenSelectChanged = (isSafe) => {
        const value = isSafe ? 'Yes' : 'No'
        setValue(value)
    }

    const onInputChange = (event) => {
        const { value } = event.target
        setValue(value)
    }

    const onLockChange = () => {
        setLocked(!locked)
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <form id='MyForm' onSubmit={onFormSubmit}>
            <Select whenSelectChanged={whenSelectChanged} /><br />

            <Input value={value} onInputChange={onInputChange} /><br />

            <Check locked={locked} onLockChange={onLockChange} /><br />

            <Submit value={value} locked={locked} />
        </form>
    )
}
