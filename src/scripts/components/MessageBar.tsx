import React, {useState, useEffect, FunctionComponent} from 'react'
import '../../styles/definitions/_messagebar.scss'
import {Alert, AlertIcon, AlertTitle, AlertDescription} from '@chakra-ui/react'
import {Box} from '@chakra-ui/layout'

/**
 * Renders a <div> element with some calculated data.
 *
 * @constructor
 */
const MessageBar:FunctionComponent = function()
{
    const [[x, y], setWindowSize] = useState<number[]>([window.innerWidth, window.innerHeight])
    const [isVisible, setVisibility] = useState<Boolean>(false)
    const [transition, setTransition] = useState<string>("")

    useEffect(() => {
        let timerIds: Array<number>

        const handleResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight])
            showAlert()
            timeoutHideAlert()
        }

        const showAlert = () => {
            for (let timerId in timerIds) {
                window.clearTimeout(timerId)
            }
            timerIds = []
            setVisibility(true)
            setTransition("")
        }

        const timeoutHideAlert = () => {
            timerIds.push(window.setTimeout(() => setTransition("fade"), 1000))
            timerIds.push(window.setTimeout(() => setVisibility(false), 1500))
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return isVisible ? (
        <Alert id="size-alert" status="info" variant="top-accent" className={transition}>
            <AlertIcon />
            <Box className="chakra-alert__content">
                <AlertTitle>The browser window is resized</AlertTitle>
                <AlertDescription>The window size now is {x} x {y}</AlertDescription>
            </Box>
        </Alert>
    ) : <></>
}

export default React.memo(MessageBar)
