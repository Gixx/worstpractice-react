import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Option from './Select/Option.jsx'

/**
 * Renders a <select> HTML element with <Option> components within
 *
 * @type {React.NamedExoticComponent<object>}
 */
const Select = React.memo(props => {
    /** @var {{Option}} mottos */
    const [mottos, setMottos] = useState([])
    /** @var {{Number}, {String}, {Boolean}} data */
    const [rawData, setData] = useState([])

    const onSelectChange = (event) => {
        const newValue = parseInt(event.target.value)
        const selectedMotto = rawData.find(item => item.id === newValue)

        props.whenSelectChanged(selectedMotto?.safe)
    }

    const getMottos = () => {
        fetch('/assets/data/motto.json')
            .then(response => response.json())
            .then(data => {
                const mottos = data.map(item => {
                    return <Option key={item.id} value={item.id} label={item.text} />
                })

                setMottos(mottos)
                setData(data)
            })
    }

    useEffect(getMottos, [])

    return (
        <div>
            <label>
                Select the motto of the day:
                <select name="Motto of the day" onChange={onSelectChange}>
                    <option>Choose</option>
                    {mottos}
                </select>
            </label>
        </div>
    )
})

Select.displayName = 'Select'
Select.propTypes = {
    whenSelectChanged: PropTypes.func.isRequired
}

export default Select
