import React, { useState } from "react";

// initial props by using interface
interface InformationFormProps{
    // properties
    name?: string;
    sex?: string;
    position?: string;
}

const InformationForm: React.FC<InformationFormProps> = (props) => {

    // given property as props and value as empty string
    const {name = "", sex = "", position = ""} = props;

    // given props into state
    const [informationForm, setInformationForm] = useState<InformationFormProps>({
        name,
        sex,
        position,
    });

    // given props into state
    // const [names, setNames] = useState(name);
    // const [sexes, setSexes] = useState(sex);
    // const [positions, setPositions] = useState(position);

    // handle name change
    const onHandleNameChange = (e:any) => {
        setInformationForm({
            ...informationForm,
            name: e.target.value
        });
        // setNames(e.target.value);
    };

    // handle sex change
    const onHandleSexChange = (e:any) => {
        setInformationForm({
            ...informationForm,
            sex: e.target.value
        });
        // setSexes(e.target.value);
    };

    // handle position change
    const onHandlePositionChange = (e:any) => {
        setInformationForm({
            ...informationForm,
            position: e.target.value,
        });
        // setPositions(e.target.value);
    };

    // handle form submit
    const onHandleFormSubmit = (e:any) => {
        e.preventDefault();
        console.log("Data: ", informationForm);
        // console.log("Data: ", `Fullname: ${names} Sex: ${sexes} Position: ${positions}`);
    };

    return(
        <React.Fragment>
            <form onSubmit={onHandleFormSubmit}>
                <div>
                    <label>Full Name: </label>
                    <input type="text" placeholder="Enter full name" onChange={onHandleNameChange} />
                </div>
                <div>
                    <label>Sex: </label>
                    <input type="text" placeholder="Enter gender" onChange={onHandleSexChange} />
                </div>
                <div>
                    <label>Position: </label>
                    <input type="text" placeholder="Enter position" onChange={onHandlePositionChange} />
                </div>
                <input type="submit" value="Submit" />
            </form>

            {/* set condition if name and sex and position are empty string, the div element display empty and if those are not empty, the div element diplay those informations */}
            {
                informationForm.name === "" && informationForm.position === "" && informationForm.sex === "" ?
                <div></div>
                :
                <div>Fullname: {informationForm.name} Sex: {informationForm.sex} Position: {informationForm.position}</div>
            }

            {/* set condition if name and sex and position are empty string, the div element display empty and if those are not empty, the div element diplay those informations */}
            {/* {
                names === "" && sexes === "" && positions === "" ?
                <div></div>
                :
                <div>Fullname: {names} Sex: {sexes} Position: {positions}</div>
            } */}
        </React.Fragment>
    );
};

export default InformationForm;