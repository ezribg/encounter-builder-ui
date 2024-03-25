import { Grid, Typography } from "@mui/material";
import './CreatureItem.scss'

const CreatureItem = ({monster, striped, statBlockRef}) => {

    const handleClick = (event) => {
        statBlockRef.current = monster?.name;
    }

    const style = (striped ? "creature-item-container-even" : "creature-item-container");

    return (
        <div className={style}>
            <Grid container spacing={4} className="creature-item" justifyContent={"center"} onClick={handleClick}>
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