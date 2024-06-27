import { Grid, Typography } from "@mui/material";

const AbilityScore = ({ability, value}) => {

    return (
        <Grid item xs={1}>
            <Typography fontWeight={'bold'}>{ability}</Typography>
            <Typography>{value}</Typography>
        </Grid>
    )
};

export default AbilityScore;