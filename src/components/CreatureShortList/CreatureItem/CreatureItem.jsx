import { Grid, Typography } from "@mui/material";
import './CreatureItem.scss'
import { useState } from "react";

const CreatureItem = ({monster, striped, nameRef}) => {
    const [name, setName] = useState('');

    const style = (striped ? "creature-item-container-even" : "creature-item-container");

    const handleClick = (event) => {
        setName(monster?.name);
        nameRef.current = monster?.name;
    }

    return (
        <div className={style}>
            <Grid
                container
                spacing={4}
                className="creature-item"
                justifyContent={"center"}
                onClick={handleClick}
            >
                <Grid item xs={3}>
                    <Typography className="creature-label">{monster?.name}</Typography>
                </Grid>
                <Grid item xs={3} className="creature-label">
                    <Typography>{monster?.size}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>{monster?.type}</Typography>
                </Grid>
                <Grid item xs={3} className="creature-label">
                    <Typography>{monster?.alignment}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default CreatureItem;