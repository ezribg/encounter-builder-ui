import { Grid, Typography } from "@mui/material";

const CreatureItem = ({monster}) => {

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item>
                    <Typography>{monster?.name}</Typography>
                </Grid>
                <Grid item>
                    <Typography>{monster?.size}</Typography>
                </Grid>
                <Grid item>
                    <Typography>{monster?.type}</Typography>
                </Grid>
                <Grid item>
                    <Typography>{monster?.alignment}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default CreatureItem;