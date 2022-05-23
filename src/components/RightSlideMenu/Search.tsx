import React from 'react';
import {Autocomplete, TextField} from "@mui/material";
import InformationOfEmployees from "./InformationOfEmployees";
import Employees from "../../stores/EmployeesStore";
import {observer} from "mobx-react-lite";
import './RightSlideMenu.css'

const Search: React.FC =  observer(() => {
    function handleOnChange(event: React.SyntheticEvent, value: any) {
        Employees.updateInfo(value);
    }

    return (
        <div>
            <ul>
                <Autocomplete
                    className='Search'
                    id="combo-box-demo"
                    options={Employees.listOfEmployee}
                    getOptionLabel={(option) => option.name + " " + option.surname + " " + option.room + " " + option.building }
                    style={{ width: 280, background:"white" }}
                    onChange={handleOnChange}


                    renderInput={params => (
                            <TextField
                                className='textSearch'
                                {...params}
                                variant="outlined"

                            />


                    )}

                />

                {(Employees.inform===null || Employees.inform.name==="") ? <div> </div> : <InformationOfEmployees/>}
            </ul>
        </div>
    );
});

export default Search;
