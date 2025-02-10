import { Grid, Typography } from "@mui/material";
// import './StatHeader.scss'
import BlockDivider from "../BlockDivider/BlockDivider";

const StatHeader = ({
    currentMonster
}) => {
    // className="monster-grid-container"
    return (
        <div className={'red'}>
            <Typography className={'card-name'} variant="h5">{currentMonster?.name}</Typography>
            <Typography className={'description'}>{currentMonster?.size} {currentMonster?.type}, {currentMonster?.alignment}</Typography>
            <BlockDivider />
            <Grid container className="monster-inline-content-block">
                <Grid item>
                    <Typography fontWeight={'bold'}>Armor Class</Typography>
                    {/* <Typography>{currentMonster?.armor_class}</Typography> */}
                </Grid>
                <Grid item >
                    <Typography fontWeight={'bold'}>Hit Points</Typography>
                    <Typography>{currentMonster?.hit_points} ({currentMonster?.hit_dice})</Typography>
                </Grid>
                <Grid item>
                    <Typography fontWeight={'bold'}>Speed</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default StatHeader;