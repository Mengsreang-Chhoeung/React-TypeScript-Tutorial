import React, {useState} from "react";

// initial props by using interface
interface CounterProps{
    // properties
    count: number;
};

const Counter: React.FC<CounterProps> = (props) => {

    // given property as props
    const {count} = props;

    // given props into state
    const [counts, setCounts] = useState(count);

    // handle decrement clicked
    const onHandleDecrement = () => {
        setCounts(counts - 1);
    }

    // handle increment clicked
    const onHandleIncrement = () => {
        setCounts(counts + 1);
    }

    return(
        <React.Fragment>
            <div style={{display: 'flex', alignItems: 'center', width: 100, justifyContent: 'space-around'}}>
                <button onClick={onHandleDecrement}>-</button>
                <h4>{counts}</h4>
                <button onClick={onHandleIncrement}>+</button>
            </div>
        </React.Fragment>
    );
};

export default Counter;