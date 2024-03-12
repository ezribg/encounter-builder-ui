import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const TypeSelect = ({typeRef}) => {
    const [type, setType] = useState('');

    const handleTypeChange = (event) => {
        typeRef.current = event.target.value;
        setType(event.target.value);
    }

    return (
        <div>
            <FormControl sx={{minWidth: 120}}>
                <InputLabel>Type</InputLabel>
                <Select
                    labelId="type-select-label"
                    id="type-select"
                    value={type}
                    label="Type"
                    onChange={handleTypeChange}
                >
                    <MenuItem value="Abberation">Abberation</MenuItem>
                    <MenuItem value="Beast">Beast</MenuItem>
                    <MenuItem value="Celestial">Celestial</MenuItem>
                    <MenuItem value="Construct">Construct</MenuItem>
                    <MenuItem value="Dragon">Dragon</MenuItem>
                    <MenuItem value="Fey">Fey</MenuItem>
                    <MenuItem value="Fiend">Fiend</MenuItem>
                    <MenuItem value="Giant">Giant</MenuItem>
                    <MenuItem value="Humanoid">Humanoid</MenuItem>
                    <MenuItem value="Monstrosity">Monstrosity</MenuItem>
                    <MenuItem value="Ooze">Ooze</MenuItem>
                    <MenuItem value="Plant">Plant</MenuItem>
                    <MenuItem value="Undead">Undead</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default TypeSelect;