import React from "react";

// initial props by using interface
interface GreetingProps{
    // properties
    greeting: string;
    version: number;
}

const Greeting: React.FC<GreetingProps> = (props) => {

    // given property as props
    const {greeting, version} = props;

    return(
        <React.Fragment>
            <h1>Hello {greeting} Version: {version}.</h1>
        </React.Fragment>
    );
};

export default Greeting;