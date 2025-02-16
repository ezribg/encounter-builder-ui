import { useEffect, useState } from "react";
import axios from "axios";
import { GET_MONSTERS, GET_MONSTER } from "../queries";
import { Grid, Paper } from "@mui/material";
// import DropdownInput from "../../components/Input/DropdownInput";
import CreatureTable from "../components/CreatureShortList/CreatureTable/CreatureTable";
import StatBlock from "../components/CreatureCard/StatBlock/StatBlock";

const Monsters = ({
    apiURL
}) => {

    // const baseURL = apiURL + "monsters/"

    const [monsters, setMonsters] = useState([]);

    const [currentMonsterID, setCurrentMonsterID] = useState("");
    const [currentMonster, setCurrentMonster] = useState({});

    useEffect(() => {
        if (monsters.length === 0) {
            getMonsters();
        }
    }, []);

    // useEffect(() => {
    //     if (currentMonsterID !== "") {
    //         getMonster(currentMonsterID);
    //     }
    // }, [currentMonsterID]);

    const getMonsters = async () => {
        try {
            let variables = { order: { by: "NAME" } }
            const results = await axios.post(apiURL, { query: GET_MONSTERS, variables });
            // console.log(results);
            // console.log(results?.data?.data);
            setMonsters(results?.data?.data?.monsters);
        } catch (err) {
            console.log(err);
        }
    };

    // const getMonster = async () => {
    //     try {
    //         // let variables = { index: currentMonsterID };
    //         const results = await axios.post(apiURL, { query: GET_MONSTER, variables });
    //         setCurrentMonster(results?.data?.data?.monster);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    return (
        <div className="encounter-page-container">
            <Paper className="encounter-paper">
                <Grid container spacing={4}>
                    <Grid item xs={7}>
                        <CreatureTable
                            monsters={monsters}
                            setCurrentMonsterID={setCurrentMonsterID}
                        />
                    </Grid>
                    {/* <Grid item>
                        {JSON.stringify(currentMonster) !== "{}" ?

                            <StatBlock currentMonster={currentMonster} />

                            : null}
                    </Grid> */}
                </Grid>
            </Paper>
        </div>
    );

};

export default Monsters;