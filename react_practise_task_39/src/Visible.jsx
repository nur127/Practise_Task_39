import { useState } from "react"

export default function Visible() {

    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);

    }

    return (
        <div className="task">
            <h1>Task two</h1>

            <button onClick={toggleVisibility}>Toggle Visibility</button>
            {
                isVisible ? <p>This is a visible paragraph.</p> : null  
            }

        </div>
    )
}