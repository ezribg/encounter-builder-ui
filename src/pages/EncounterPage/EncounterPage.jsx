import { Grid, Paper } from "@mui/material";
import StatBlock from "../../components/CreatureCard/StatBlock/StatBlock";
import NameSearch from "../../components/Input/NameSearch/NameSearch";
import SizeSelect from "../../components/Input/SizeSelect/SizeSelect";
import TypeSelect from "../../components/Input/TypeSelect/TypeSelect";
import AlignmentSelect from "../../components/Input/AlignmentSelect/AlignmentSelect";
import { useRef } from "react";
import CreatureTable from "../../components/CreatureShortList/CreatureTable/CreatureTable";

const EncounterPage = () => {
    const name = useRef('');
    const size = useRef('');
    const type = useRef('');
    const alignment = useRef('');

    return (
        <div className="encounter-page-container">
            <div className="encounter-filter-bar">
                <Grid container spacing={2} justifyContent={"center"}>
                    <Grid item>
                        <NameSearch nameRef={name}/>
                    </Grid>
                    <Grid item>
                        <SizeSelect sizeRef={size}/>
                    </Grid>
                    <Grid item>
                        <TypeSelect typeRef={type}/>
                    </Grid>
                    <Grid item>
                        <AlignmentSelect alignmentRef={alignment}/>
                    </Grid>
                </Grid>
            </div>
            <Paper className="encounter-paper">
                <Grid container spacing={2}>
                    <Grid item>
                        <CreatureTable/>
                    </Grid>
                    <Grid item>
                        <StatBlock/>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default EncounterPage;