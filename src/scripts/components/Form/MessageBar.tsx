import React, {useState, useEffect, FunctionComponent} from 'react'
import '../../../styles/definitions/_messagebar.scss'
import {Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, useDisclosure} from '@chakra-ui/react'
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

    const {
        onClose,
    } = useDisclosure({ defaultIsOpen: true })

    useEffect(() => {
        let timerIds: Array<number>

        const handleResize = () => {
            resetAlert()
            setWindowSize([window.innerWidth, window.innerHeight])
            for (let timerId in timerIds) {
                window.clearTimeout(timerId)
            }
            timerIds = setAlert()
        }

        const resetAlert = () => {
            setVisibility(true)
            setTransition("")
        }

        const setAlert = () => {
            const timerIds = [];
            timerIds.push(window.setTimeout(() => setTransition("fade"), 1000))
            timerIds.push(window.setTimeout(() => setVisibility(false), 1500))
            return timerIds
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
            <CloseButton
                alignSelf='flex-start'
                position='relative'
                right={-1}
                top={-1}
                onClick={onClose}
            />
        </Alert>
    ) : <></>
}

export default React.memo(MessageBar)
