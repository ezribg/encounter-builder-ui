import { Divider, Grid, Typography } from "@mui/material";

const StatHeader = () => {
    return (
        <div>
            <Typography variant="h5">Displacer Beast</Typography>
            <Typography>Large monstrosity, lawful evil</Typography>
            <Divider/>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography>Armor Class</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>13</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2}r>
                <Grid item>
                    <Typography>Hit Points</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>85</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2}r>
                <Grid item>
                    <Typography>Speed</Typography>
                </Grid>
                <Grid item>
                    <Typography>40 ft.</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default StatHeader;