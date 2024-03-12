import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const SizeSelect = () => {
    const [size, setSize] = useState('');

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    }

    return (
        <div>
            <FormControl sx={{minWidth: 120}}>
                <InputLabel>Size</InputLabel>
                <Select
                    labelId="size-select-label"
                    id="size-select"
                    value={size}
                    label="Size"
                    onChange={handleSizeChange}
                >
                    <MenuItem value="Tiny">Tiny</MenuItem>
                    <MenuItem value="Small">Small</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Large">Large</MenuItem>
                    <MenuItem value="Huge">Huge</MenuItem>
                    <MenuItem value="Gargantuan">Gargantuan</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default SizeSelect;