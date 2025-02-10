import { Grid, Typography } from "@mui/material";
import './StatHeader.scss'
import BlockDivider from "../BlockDivider/BlockDivider";

const StatHeader = ({ currentMonster }) => {
    // TODO: implement list of speeds
    return (
        <div className={'red'}>
            <Typography className={'card-name'} variant="h5">{currentMonster?.name}</Typography>
            <Typography className={'description'}>{currentMonster?.size} {currentMonster?.type}, {currentMonster?.alignment}</Typography>
            <BlockDivider />
            <Grid container spacing={1}>
                <Grid item>
                    <Typography fontWeight={'bold'}>Armor Class</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>{currentMonster?.armor_class?.value}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item>
                    <Typography fontWeight={'bold'}>Hit Points</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>{currentMonster?.hit_points} ({currentMonster?.hit_dice})</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item>
                    <Typography fontWeight={'bold'}>Speed</Typography>
                </Grid>
                <Grid item>
                    {/* <div className="grid-item-list">
                        {Object.entries(currentMonster?.speed).map((key, value) => {

                            if (value !== null) {
                                return (
                                    <Typography>`${value}, `</Typography>
                                )
                            }

                        })}
                    </div> */}
                </Grid>
            </Grid>
        </div>
    )
}

export default StatHeader;