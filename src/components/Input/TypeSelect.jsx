import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const TypeSelect = ({
    typeFilter,
    setTypeFilter
}) => {

    const handleTypeChange = (event) => {
        setTypeFilter(event.target.value);
    }

    return (
        <FormControl sx={{minWidth: 150}}>
                <InputLabel>Type</InputLabel>
                <Select
                    labelId="type-select-label"
                    id="type-select"
                    value={typeFilter}
                    label="Type"
                    onChange={handleTypeChange}
                >
                    <MenuItem value={null}>All</MenuItem>
                    <MenuItem value="ABERRATION">Aberration</MenuItem>
                    <MenuItem value="BEAST">Beast</MenuItem>
                    <MenuItem value="CELESTIAL">Celestial</MenuItem>
                    <MenuItem value="CONSTRUCT">Construct</MenuItem>
                    <MenuItem value="DRAGON">Dragon</MenuItem>
                    <MenuItem value="FEY">Fey</MenuItem>
                    <MenuItem value="FIEND">Fiend</MenuItem>
                    <MenuItem value="GIANT">Giant</MenuItem>
                    <MenuItem value="HUMANOID">Humanoid</MenuItem>
                    <MenuItem value="MONSTROSITY">Monstrosity</MenuItem>
                    <MenuItem value="OOZE">Ooze</MenuItem>
                    <MenuItem value="PLANT">Plant</MenuItem>
                    <MenuItem value="UNDEAD">Undead</MenuItem>
                </Select>
            </FormControl>
    )
}

export default TypeSelect;