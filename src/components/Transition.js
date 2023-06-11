import { useState } from "react";
import { Transition } from "react-transition-group";
const TransitionComp = () => {
  let [show, setShow] = useState(true)

  const toggleDiv = () => {
    setShow(!show ? true : false)
  }

  return (
    <>
      <Transition
        in={show}
        timeout={{
          enter: 2000,
          exit: 50
        }}
        // enter={false} //removes the fade in effect
        // exit={false} //removes the fade out effect
        onEnter={(node)=>{
          console.log('Enter')
        }}
        onExit={(node)=>{
          console.log('Exit')
        }}
      >
        { state => 
          <div className={`square square-${state}`}>
            {`square square-${state}`}
          </div>}
      </Transition>
      <button className="btn btn-primary" onClick={toggleDiv}>Toggle</button>
    </>
  );
};

export default TransitionComp;