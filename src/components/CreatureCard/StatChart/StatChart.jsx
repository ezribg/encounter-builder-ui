import { Grid, Typography } from "@mui/material";

const StatChart = ({monsterData}) => {
    // TODO: add modifiers
    return (
        <div className="red">
            <Grid
                container
                direction={'row'}
                justifyContent="left"
                alignItems="left"
                textAlign={'center'}
            >
                <Grid item xs={1}>
                    <Typography fontWeight={'bold'}>STR</Typography>
                    <Typography>{monsterData?.ability_scores?.strength}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography fontWeight={'bold'}>DEX</Typography>
                    <Typography>{monsterData?.ability_scores?.dexterity}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography fontWeight={'bold'}>CON</Typography>
                    <Typography>{monsterData?.ability_scores?.constitution}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography fontWeight={'bold'}>INT</Typography>
                    <Typography>{monsterData?.ability_scores?.intelligence}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography fontWeight={'bold'}>WIS</Typography>
                    <Typography>{monsterData?.ability_scores?.wisdom}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography fontWeight={'bold'}>CHA</Typography>
                    <Typography>{monsterData?.ability_scores?.charisma}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default StatChart;