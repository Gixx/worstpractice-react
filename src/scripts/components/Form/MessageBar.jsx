import React, {useState, useEffect} from 'react'
import '../../../styles/definitions/_messagebar.scss'

/**
 * Renders a <div> element with some calculated data
 *
 * @return {JSX.Element}
 * @constructor
 */
const MessageBar = React.memo(() => {
    const [[x, y], setWindowsize] = useState([window.innerWidth, window.innerHeight])
    const [visibility, setVisibility] = useState('hidden')

    useEffect(() => {
        let timerId

        const handleResize = () => {
            setWindowsize([window.innerWidth, window.innerHeight])
            setVisibility('visible')
            clearTimeout(timerId)
            timerId = setTimeout(() => setVisibility('hidden'), 500)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="messagebar" style={{visibility: visibility}}>
            The window size is {x} x {y}
        </div>
    )
})

MessageBar.displayName = 'MessageBar'
export default MessageBar
