import { Grid, Paper } from "@mui/material";
import StatBlock from "../../components/CreatureCard/StatBlock/StatBlock";
import NameSearch from "../../components/Input/NameSearch/NameSearch";
import SizeSelect from "../../components/Input/SizeSelect/SizeSelect";
import TypeSelect from "../../components/Input/TypeSelect/TypeSelect";
import AlignmentSelect from "../../components/Input/AlignmentSelect/AlignmentSelect";

const EncounterPage = () => {


    return (
        <div className="encounter-page-container">
            <div className="encounter-filter-bar">
                <Grid container>
                    <Grid item>
                        <NameSearch/>
                    </Grid>
                    <Grid item>
                        <SizeSelect/>
                    </Grid>
                    <Grid item>
                        <TypeSelect/>
                    </Grid>
                    <Grid item>
                        <AlignmentSelect/>
                    </Grid>
                </Grid>
            </div>
            <Paper className="encounter-paper">
                <StatBlock/>
            </Paper>
        </div>
    )
}

export default EncounterPage;