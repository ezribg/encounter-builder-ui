import { Grid, Typography } from "@mui/material";

const StatChart = ({monsterData}) => {
    return (
        <div className="red">
            <Grid
                container
                direction={'row'}
                justifyContent="left"
                alignItems="left"
                textAlign={'center'}
            >
                <Grid item xs={1.5}>
                    <Typography fontWeight={'bold'}>STR</Typography>
                    <Typography>{monsterData?.ability_scores?.strength} ({monsterData?.modifiers?.strength})</Typography>
                </Grid>
                <Grid item xs={1.5}>
                    <Typography fontWeight={'bold'}>DEX</Typography>
                    <Typography>{monsterData?.ability_scores?.dexterity} ({monsterData?.modifiers?.dexterity})</Typography>
                </Grid>
                <Grid item xs={1.5}>
                    <Typography fontWeight={'bold'}>CON</Typography>
                    <Typography>{monsterData?.ability_scores?.constitution} ({monsterData?.modifiers?.constitution})</Typography>
                </Grid>
                <Grid item xs={1.5}>
                    <Typography fontWeight={'bold'}>INT</Typography>
                    <Typography>{monsterData?.ability_scores?.intelligence} ({monsterData?.modifiers?.intelligence})</Typography>
                </Grid>
                <Grid item xs={1.5}>
                    <Typography fontWeight={'bold'}>WIS</Typography>
                    <Typography>{monsterData?.ability_scores?.wisdom} ({monsterData?.modifiers?.wisdom})</Typography>
                </Grid>
                <Grid item xs={1.5}>
                    <Typography fontWeight={'bold'}>CHA</Typography>
                    <Typography>{monsterData?.ability_scores?.charisma} ({monsterData?.modifiers?.charisma})</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default StatChart;