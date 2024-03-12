import { Grid, Typography } from "@mui/material";

const CreatureItem = () => {

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item>
                    <Typography>Name</Typography>
                </Grid>
                <Grid item>
                    <Typography>Size</Typography>
                </Grid>
                <Grid item>
                    <Typography>Type</Typography>
                </Grid>
                <Grid item>
                    <Typography>Alignment</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default CreatureItem;