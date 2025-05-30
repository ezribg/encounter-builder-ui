import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const SizeSelect = ({
    sizeFilter,
    setSizeFilter
}) => {

    const handleSizeChange = (event) => {
        setSizeFilter(event.target.value);
    }

    return (
        <FormControl sx={{minWidth: 150}}>
                <InputLabel>Size</InputLabel>
                <Select
                    labelId="size-select-label"
                    id="size-select"
                    value={sizeFilter}
                    label="Size"
                    onChange={handleSizeChange}
                >
                    <MenuItem value={null}>All</MenuItem>
                    <MenuItem value="TINY">Tiny</MenuItem>
                    <MenuItem value="SMALL">Small</MenuItem>
                    <MenuItem value="MEDIUM">Medium</MenuItem>
                    <MenuItem value="LARGE">Large</MenuItem>
                    <MenuItem value="HUGE">Huge</MenuItem>
                    <MenuItem value="GARGANTUAN">Gargantuan</MenuItem>
                </Select>
            </FormControl>
    )
}

export default SizeSelect;