import { Grid, Typography } from "@mui/material";
import './StatChart.scss'

const StatChart = () => {

    return (
        <div className="stats-div">
            <Grid
                container
                direction={'row'}
                justifyContent="left"
                alignItems="left"
                textAlign={'center'}
            >
                <Grid item xs={1}>
                    <Typography fontWeight={'bold'}>STR</Typography>
                    <Typography>18</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography fontWeight={'bold'}>DEX</Typography>
                    <Typography>15</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography fontWeight={'bold'}>CON</Typography>
                    <Typography>16</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography fontWeight={'bold'}>INT</Typography>
                    <Typography>6</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography fontWeight={'bold'}>WIS</Typography>
                    <Typography>12</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography fontWeight={'bold'}>CHA</Typography>
                    <Typography>8</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default StatChart;