import React, {useState, useEffect, FunctionComponent, ChangeEvent, ChangeEventHandler} from 'react'
import { Select } from '@chakra-ui/react'
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
const SelectBox:FunctionComponent<SelectProps> = function(props)
{
    type Motto = {
        id: number,
        text: string,
        safe: boolean
    }
    type MottoStore = Array<Motto>;

    const [mottoElements, setMottos] = useState<JSX.Element[]>([])
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
                <Select placeholder="Motto of the day" variant="outline" onChange={onSelectChange}>
                    {mottoElements}
                </Select>
            </label>
        </div>
    )
}

export default React.memo(SelectBox)
