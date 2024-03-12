import { Grid, Typography } from "@mui/material";
import './CreatureItem.scss'

const CreatureItem = ({monster}) => {

    return (
        <div>
            <Grid container spacing={4} className="creature-item" justifyContent={"center"}>
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