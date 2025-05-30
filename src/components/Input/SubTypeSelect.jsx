import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SubTypeSelect = ({
    subTypeFilter,
    setSubTypeFilter
}) => {

    const handleSubTypeChange = (event) => {
        setSubTypeFilter(event.target.value);
    }

    return (
        <FormControl sx={{minWidth: 150}}>
                <InputLabel>SubType</InputLabel>
                <Select
                    labelId="sub-type-select-label"
                    id="sub-type-select"
                    value={subTypeFilter}
                    label="SubType"
                    onChange={handleSubTypeChange}
                >
                    <MenuItem value={null}>All</MenuItem>
                    <MenuItem value="DEMON">Demon</MenuItem>
                    <MenuItem value="DEVIL">Devil</MenuItem>
                    <MenuItem value="DWARF">Dwarf</MenuItem>
                    <MenuItem value="ELF">Elf</MenuItem>
                    <MenuItem value="GNOLL">Gnoll</MenuItem>
                    <MenuItem value="GNOME">Gnome</MenuItem>
                    <MenuItem value="GOBLINOID">Goblinoid</MenuItem>
                    <MenuItem value="GRIMLOCK">Grimlock</MenuItem>
                    <MenuItem value="HUMAN">Human</MenuItem>
                    <MenuItem value="KOBOLD">Kobold</MenuItem>
                    <MenuItem value="LIZARDFOLK">Lizardfolk</MenuItem>
                    <MenuItem value="MERFOLK">Merfolk</MenuItem>
                    <MenuItem value="ORC">Orc</MenuItem>
                    <MenuItem value="SAHUAGIN">Sahuagin</MenuItem>
                    <MenuItem value="SHAPECHANGER">Shapechanger</MenuItem>
                    <MenuItem value="TITAN">Titan</MenuItem>
                </Select>
            </FormControl>
    )
}

export default SubTypeSelect;