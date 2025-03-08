import { Grid, Typography } from "@mui/material";
import BlockDivider from "./BlockDivider";
import { getFirstItem } from "../../utilities/ApplicationFunctions";

const StatHeader = ({
    currentMonster
}) => {

    return (
        <div className={'red'}>
            <Typography className={'card-name'} variant="h5">{currentMonster?.name}</Typography>
            <Typography className={'description'}>{currentMonster?.size} {currentMonster?.type}, {currentMonster?.alignment}</Typography>
            <BlockDivider />
            <Grid container className="monster-inline-content-block">
                <Grid item>
                    <Typography fontWeight={'bold'}>Armor Class</Typography>
                    <Typography>{getFirstItem(currentMonster?.armor_class).value}</Typography>
                </Grid>
                <Grid item >
                    <Typography fontWeight={'bold'}>Hit Points</Typography>
                    <Typography>{currentMonster?.hit_points} ({currentMonster?.hit_dice})</Typography>
                </Grid>
                <Grid item>
                    <Typography fontWeight={'bold'}>Speed</Typography>
                    {Object.keys(currentMonster?.speed).map((key) => {

                        if (currentMonster?.speed[key] !== null) {
                            return (
                                <Typography key={key}>{key !== "walk" ? key : ''} {currentMonster?.speed[key]},</Typography>
                            )
                        }
                    })}
                </Grid>
            </Grid>
        </div>
    )
}

export default StatHeader;