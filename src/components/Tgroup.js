import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const Tgroup = () => {
    let [items,setItems] = useState([]);
    
    const addElements = () => {
        return items.map((item,i)=>(
            <CSSTransition
                classNames="item"
                timeout={500}
                key={i}
            >
                <div className="item">{item}</div>
            </CSSTransition>
        ))
    }

    const generateNumber = () => {
        let newArray = [
            ...items,
            Math.floor(Math.random()*100)+1
        ];
        setItems(newArray)
    }

    const removeNumber= () => {
        let newArray = items.slice(0,-1);
        setItems(newArray)
    }


    return(
            <div className="tgroup">
                <div className="btns">
                    <button onClick={()=> generateNumber()}>Add Elements</button>
                    <button onClick={()=> removeNumber()}>Remove Elements</button>
                </div>
                <TransitionGroup component="div" className="list">
                    {addElements()}
                </TransitionGroup>
            </div>
    )
    
}


export default Tgroup;