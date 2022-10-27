import React, {useState} from "react";

import './Counter.css'


const Counter = () => {
    const [count, setCount] = useState(0) 
    
    const Reset = () => {
        setCount(count => 0)

    }
    const Reduce = () => {
        setCount(oldCount => oldCount - 1)

    }

    const Increase = () => {
            setCount(oldCount => oldCount + 1)
    }

  return <div className="container">
            <div className="counter">
            <div className="digits">{count}</div>
                <div className="console">
                <button className="btn" onClick={Reduce}>Reduce Number</button>
                
                    Counter

                <button className="btn" onClick={Increase}  >Increase number</button>
                </div>
                <button className="reset btn" onClick={Reset}>Reset</button>
            </div>

        </div>;
}

;

export default Counter;
