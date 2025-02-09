import { Grid, Typography } from "@mui/material";
import './StatHeader.scss'
import BlockDivider from "../BlockDivider/BlockDivider";

const StatHeader = ({ monsterData }) => {
    // TODO: implement list of speeds
    return (
        <div className={'red'}>
            <Typography className={'card-name'} variant="h5">{monsterData?.name}</Typography>
            <Typography className={'description'}>{monsterData?.size} {monsterData?.type}, {monsterData?.alignment}</Typography>
            <BlockDivider />
            <Grid container spacing={1}>
                <Grid item>
                    <Typography fontWeight={'bold'}>Armor Class</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>{monsterData?.armor_class?.value}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item>
                    <Typography fontWeight={'bold'}>Hit Points</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>{monsterData?.hit_points} ({monsterData?.hit_dice})</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item>
                    <Typography fontWeight={'bold'}>Speed</Typography>
                </Grid>
                <Grid item>
                    {/* <div className="grid-item-list">
                        {Object.entries(monsterData?.speed).map((key, value) => {

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