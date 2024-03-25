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
                <Grid item xs={1}>
                    <Typography fontWeight={'bold'}>STR</Typography>
                    <Typography>{monsterData?.strength}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography fontWeight={'bold'}>DEX</Typography>
                    <Typography>{monsterData?.dexterity}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography fontWeight={'bold'}>CON</Typography>
                    <Typography>{monsterData?.constitution}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography fontWeight={'bold'}>INT</Typography>
                    <Typography>{monsterData?.intelligence}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography fontWeight={'bold'}>WIS</Typography>
                    <Typography>{monsterData?.wisdom}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography fontWeight={'bold'}>CHA</Typography>
                    <Typography>{monsterData?.charisma}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default StatChart;