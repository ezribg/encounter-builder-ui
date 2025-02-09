import { useEffect, useState } from "react";
import axios from "axios";
import { GET_MONSTERS } from "../queries";
import { Grid, Paper } from "@mui/material";
// import DropdownInput from "../../components/Input/DropdownInput";
// import CreatureTable from "../../components/CreatureShortList/CreatureTable/CreatureTable";
// import StatBlock from "../../components/CreatureCard/StatBlock/StatBlock";

const Monsters = ({
    apiURL
}) => {

    const [monsters, setMonsters] = useState([]);
    const [currentMonster, setCurrentMonster] = useState({});

    useEffect(() => {
        getMonsters();
    }, []);

    useEffect(() => {
        getMonster(currentMonster);
    }, []);

    const getMonsters = async () => {
        try {
            const results = await axios.post(apiURL, {query: GET_MONSTERS});
            setMonsters(results?.data?.results);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="encounter-page-container">
            <Paper className="encounter-paper">
                <Grid container spacing={4}>
                    <Grid item xs={7}>
                        <CreatureTable 
                            monsters={monsters}
                            setCurrentMonster={setCurrentMonster}
                        />
                    </Grid>
                    <Grid item>
                        {JSON.stringify(currentMonster) !== '{}' ?

                            <StatBlock monsterData={currentMonster}/>
                        
                        : null}
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );

};

export default Monsters;