import React, { useState } from "react";

const Dummy: React.FC = () => {

    // states
    const [number, setNumber] = useState<number>(100);
    const [greeting, setGreeting] = useState<string | any>("Hello React");
    const [clicked, setClicked] = useState<boolean>(true);
    const [siblings, setSiblings] = useState<string[] | any[]>(["Thyda", "Rayuth", "Pisey"]);
    const [people, setPeople] = useState<any[]>([
        {
            id: 1,
            name: 'Kok Dara',
            sex: 'male',
        },
        {
            id: 2,
            name: 'Kok Pisey',
            sex: 'female',
        }
    ]);

    return(
        <React.Fragment>
            <h2>Number: {number}</h2>
            <h2>Greeting: {greeting}</h2>
            <h2>Clicked: {clicked}</h2> {/* it's not show value, but it works when we use it with event */}
            <h2>Siblings: {siblings.join(" and ")}</h2>
            <h2>People: ID {people[0].id} Name {people[0].name} Sex {people[0].sex}</h2>
        </React.Fragment>
    );
};

export default Dummy;