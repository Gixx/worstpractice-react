import React, {useState, useEffect, FunctionComponent, ChangeEvent, ChangeEventHandler} from 'react'
import Option from './Select/Option'

type SelectProps = {
    onSelectChange: (isSafe: boolean) => void;
}

/**
 * Renders a <select> HTML element with <Option> components within
 *
 * @param props
 * @constructor
 */
const Select:FunctionComponent<SelectProps> = function(props)
{
    type Motto = {
        id: number,
        text: string,
        safe: boolean
    }
    type MottoStore = Array<Motto>;

    const [mottoElements, setMottos] = useState<HTMLOptionElement[]>([])
    const [mottos, setData] = useState<MottoStore>([])

    const onSelectChange:ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value)
        const selectedMotto = mottos.find((item:Motto) => item.id === newValue)

        props.onSelectChange((selectedMotto?.safe) === true)
    }

    const getMottos = ():void => {
        fetch('/assets/data/motto.json')
            .then(response => response.json())
            .then((data) => {
                const elements = data.map((item:Motto) => {
                    return <Option key={item.id} value={item.id.toString()} label={item.text} />
                })

                setMottos(elements)
                setData(data)
            })

        return
    }

    useEffect(getMottos, [])

    return (
        <div>
            <label>
                Select the motto of the day:
                <select name="Motto of the day" onChange={onSelectChange}>
                    <option>Choose</option>
                    {mottoElements}
                </select>
            </label>
        </div>
    )
}

export default React.memo(Select)
