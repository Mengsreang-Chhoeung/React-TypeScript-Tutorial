import React, {useState} from "react";

// initial props by using interface
interface GreetingProps{
    // properties
    greeting: string;
    version: number;
};

const Greeting: React.FC<GreetingProps> = (props) => {

    // given property as props
    const {greeting, version} = props;

    // given props into state
    const [greets, setGreets] = useState(greeting);
    const [verions, setVersions] = useState(version);

    return(
        <React.Fragment>
            <h1>Hello {greets} Version: {verions}.</h1>
        </React.Fragment>
    );
};

export default Greeting;