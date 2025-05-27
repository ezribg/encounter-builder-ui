import { Grid, Typography } from "@mui/material";
import { calculateModifier } from "../../utilities/ApplicationFunctions";

const StatChart = ({
    currentMonster
}) => {

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
                    <Typography>{currentMonster?.strength} ({calculateModifier(currentMonster?.strength)})</Typography>
                </Grid>
                <Grid item xs={1.5}>
                    <Typography fontWeight={'bold'}>DEX</Typography>
                    <Typography>{currentMonster?.dexterity} ({calculateModifier(currentMonster?.dexterity)})</Typography>
                </Grid>
                <Grid item xs={1.5}>
                    <Typography fontWeight={'bold'}>CON</Typography>
                    <Typography>{currentMonster?.constitution} ({calculateModifier(currentMonster?.constitution)})</Typography>
                </Grid>
                <Grid item xs={1.5}>
                    <Typography fontWeight={'bold'}>INT</Typography>
                    <Typography>{currentMonster?.intelligence} ({calculateModifier(currentMonster?.intelligence)})</Typography>
                </Grid>
                <Grid item xs={1.5}>
                    <Typography fontWeight={'bold'}>WIS</Typography>
                    <Typography>{currentMonster?.wisdom} ({calculateModifier(currentMonster?.wisdom)})</Typography>
                </Grid>
                <Grid item xs={1.5}>
                    <Typography fontWeight={'bold'}>CHA</Typography>
                    <Typography>{currentMonster?.charisma} ({calculateModifier(currentMonster?.charisma)})</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default StatChart;