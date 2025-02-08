import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const DropdownInput = ({
    input, 
    selected, 
    inputLabel, 
    changeSelected
}) => {

    const handleChange = (event) => {
        changeSelected(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{minWidth: 120}}>
                <InputLabel>{inputLabel}</InputLabel>
                <Select
                    value={selected}
                    labelId={inputLabel}
                    onChange={handleChange}
                >
                    {input.map((value) => {

                        return (
                            <MenuItem key={value.key} value={value.key}>{value.name}</MenuItem>
                        );

                    })}
                </Select>
            </FormControl>
        </div>
    );

};

export default DropdownInput;