import { Divider, Grid, Typography } from "@mui/material";
import './StatHeader.scss'
import BlockDivider from "../BlockDivider/BlockDivider";

const StatHeader = () => {
    return (
        <div className={'red'}>
            <Typography className={'card-name'} variant="h5">Displacer Beast</Typography>
            <Typography className={'description'}>Large monstrosity, lawful evil</Typography>
            <BlockDivider/>
            <Grid container spacing={1}>
                <Grid item>
                    <Typography fontWeight={'bold'}>Armor Class</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>13</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1}r>
                <Grid item>
                    <Typography fontWeight={'bold'}>Hit Points</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>85</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1}r>
                <Grid item>
                    <Typography fontWeight={'bold'}>Speed</Typography>
                </Grid>
                <Grid item>
                    <Typography>40 ft.</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default StatHeader;