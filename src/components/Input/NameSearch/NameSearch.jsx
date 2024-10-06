import { FormControl, TextField } from "@mui/material";
import './NameSearch.scss';

const NameSearch = ({nameRef}) => {
    
    const handleNameChange = (event) => {
        nameRef.current = event.target.value;
    }

    return (
        <div>
            <FormControl>
                <TextField
                    label="Name"
                    variant="outlined"
                    onChange={handleNameChange}
                />
            </FormControl>
        </div>
    )
}

export default NameSearch;