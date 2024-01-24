import { useState } from "react"

export const useSuccessMessage = () => { 
    const [isSubmitted, setisSubmitted] = useState(false)

    const displaySuccessMessage = () => {
        setisSubmitted(true)
        setTimeout(() => {
            setisSubmitted(false)
        }, 2000)}

        return {isSubmitted, displaySuccessMessage}
 }