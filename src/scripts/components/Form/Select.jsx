import React, { Component } from 'react'
import Option from './Select/Option.jsx'

class Select extends Component
{
    constructor() {
        super();

        this.state = {
            mottos: [],
            data: []
        }
    }

    onSelectChange = (event) => {
        const newValue = parseInt(event.target.value);
        const selectedMotto = this.state.data.find(item => item.id === newValue)

        this.props.whenSelectChanged(selectedMotto?.safe)
    }

    componentDidMount() {
        fetch('/assets/data/motto.json')
            .then(response => response.json())
            .then(data => {
                const mottos = data.map(item => {
                    return <Option key={item.id} value={item.id} label={item.text} />
                })

                this.setState({mottos: mottos, data: data})
            })
    }

    render() {
        return <div>
            <label>
                Select the motto of the day:
                <select name="Motto of the day" onChange={this.onSelectChange}>
                    <option>Choose</option>
                    {this.state.mottos}
                </select>
            </label>
        </div>
    }
}

export default Select
