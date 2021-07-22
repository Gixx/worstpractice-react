import React, {useState, useEffect, FunctionComponent} from 'react'
import '../../../styles/definitions/_messagebar.scss'

/**
 * Renders a <div> element with some calculated data.
 *
 * @constructor
 */
const MessageBar:FunctionComponent = function()
{
    type CSSVisibility = 'hidden' | 'visible';

    const [[x, y], setWindowSize] = useState<number[]>([window.innerWidth, window.innerHeight])
    const [visibility, setVisibility] = useState<CSSVisibility>('hidden')

    useEffect(() => {
        let timerId: number

        const handleResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight])
            setVisibility('visible')
            window.clearTimeout(timerId)
            timerId = window.setTimeout(() => setVisibility('hidden'), 500)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="messagebar" style={{visibility: visibility}}>
            The window size is {x} x {y}
        </div>
    )
}

export default React.memo(MessageBar)
