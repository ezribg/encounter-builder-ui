import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const AlignmentSelect = ({alignmentRef}) => {
    const [alignment, setAlignment] = useState('');

    const handleAlignmentChange = (event) => {
        alignmentRef.current = event.target.value;
        setAlignment(event.target.value);
    }
    
    return (
        <FormControl sx={{minWidth: 120}}>
                <InputLabel>Alignment</InputLabel>
                <Select
                    labelId="alignment-select-label"
                    id="alignment-select"
                    value={alignment}
                    label="Alignment"
                    onChange={handleAlignmentChange}
                >
                    <MenuItem value="Lawful Good">Lawful Good</MenuItem>
                    <MenuItem value="Neutral Good">Neutral Good</MenuItem>
                    <MenuItem value="Chaotic Good">Chaotic Good</MenuItem>
                    <MenuItem value="Lawful Neutral">Lawful Neutral</MenuItem>
                    <MenuItem value="True Neutral">True Neutral</MenuItem>
                    <MenuItem value="Chaotic Good">Chaotic Good</MenuItem>
                    <MenuItem value="Lawful Evil">Lawful Evil</MenuItem>
                    <MenuItem value="Neutral Evil">Neutral Evil</MenuItem>
                    <MenuItem value="Chaotic Evil">Chaotic Evil</MenuItem>
                </Select>
            </FormControl>
    )

}

export default AlignmentSelect;