import 'animate.css';
import { useState } from 'react';

const Other = () => {
    const [anim,setAnim] = useState(true);

    const handleAnim = () => {
        if(anim){
            return 'animate__backInLeft'
        }
        return 'animate__backOutLeft'
    }

    const toggleAnim = () => {
        setAnim(!anim)
    }

    return(
        <>
            <h1
            className={`animate__animated ${handleAnim()}`}
            >Transition</h1>
            <button 
                onClick={toggleAnim}
            >
                Toggle Anim
            </button>
        </>
    )
}

export default Other;