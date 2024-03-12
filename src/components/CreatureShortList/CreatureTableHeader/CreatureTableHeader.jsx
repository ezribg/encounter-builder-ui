import { Grid, Typography } from "@mui/material";
import './CreatureTableHeader.scss'

const CreatureTableHeader = () => {

    return (
        <div className="table-header">
            <Grid container spacing={4} justifyContent={"center"}>
                <Grid item xs={3} className="table-label">
                    <Typography>NAME</Typography>
                </Grid>
                <Grid item xs={3} className="table-label">
                    <Typography>SIZE</Typography>
                </Grid>
                <Grid item xs={2} className="table-label">
                    <Typography>TYPE</Typography>
                </Grid>
                <Grid item xs={3} className="table-label">
                    <Typography>ALIGNMENT</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default CreatureTableHeader;