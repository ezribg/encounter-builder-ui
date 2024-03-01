import { Grid, Typography } from "@mui/material";
import './StatChart.scss'

const StatChart = () => {

    return (
        <div>
            <Grid
                container
                direction={'row'}
                justifyContent="left"
                alignItems="left"
            >
                <Grid item xs={1}>
                    <Typography>STR</Typography>
                    <Typography>18</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography>DEX</Typography>
                    <Typography>15</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography>CON</Typography>
                    <Typography>16</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography>INT</Typography>
                    <Typography>6</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography>WIS</Typography>
                    <Typography>12</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography>CHA</Typography>
                    <Typography>8</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default StatChart;