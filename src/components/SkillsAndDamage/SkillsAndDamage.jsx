import { Typography, Grid } from "@mui/material";

const SkillsAndDamage = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography>Senses</Typography>
                </Grid>
                <Grid item>
                    <Typography>darkvision</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography>Languages</Typography>
                </Grid>
                <Grid item>
                    <Typography>------</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default SkillsAndDamage;