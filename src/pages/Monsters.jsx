import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMonsters } from "../app/monstersSlice";
import axios from "axios";
import { GET_MONSTERS, GET_MONSTER } from "../queries";
import { Grid, Paper } from "@mui/material";
import CreatureTable from "../components/CreatureShortList/CreatureTable/CreatureTable";
import StatBlock from "../components/CreatureCard/StatBlock";
import AlignmentSelect from "../components/Input/AlignmentSelect";
import SizeSelect from "../components/Input/SizeSelect";
import TypeSelect from "../components/Input/TypeSelect";

const Monsters = ({
    apiURL
}) => {

    const dispatch = useDispatch();

    // Redux state
    const monsters = useSelector((state) => state.monsters.monsters);

    // State
    const [sizeFilter, setSizeFilter] = useState(null);
    const [typeFilter, setTypeFilter] = useState(null);

    const [currentMonsterID, setCurrentMonsterID] = useState("");
    const [currentMonster, setCurrentMonster] = useState({});

    // Refs
    // const sizeFilter = useRef(null);
    // const typeFilter = useRef(null);
    // const alignmentFilter = useRef(null);

    // Use Effects
    useEffect(() => {
        // if (monsters.length === 0) {
        //     getMonsters();
        // }
        getMonsters();

    }, [sizeFilter, typeFilter]);

    useEffect(() => {
        if (currentMonsterID !== "") {
            getMonster(currentMonsterID);
        }
    }, [currentMonsterID]);


    // API calls
    const getMonsters = async () => {
        try {
            let variables = { 
                order: { by: "NAME" },
                size: sizeFilter,
                type: typeFilter
            };

            const results = await axios.post(apiURL, { query: GET_MONSTERS, variables });
            dispatch(setMonsters(results?.data?.data?.monsters));
        } catch (err) {
            console.log(err);
        }
    };

    const getMonster = async () => {
        try {
            let variables = { index: currentMonsterID };

            const results = await axios.post(apiURL, { query: GET_MONSTER, variables });
            setCurrentMonster(results?.data?.data?.monster);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="encounter-page-container">
            <div className="encounter-page-header">
                <div className="encounter-page-filters">
                    <SizeSelect sizeFilter={sizeFilter} setSizeFilter={setSizeFilter}/>
                    <TypeSelect typeFilter={typeFilter} setTypeFilter={setTypeFilter}/>
                    {/* <AlignmentSelect alignmentRef={alignmentFilter}/> */}
                </div>
            </div>
            
            <Paper className="encounter-paper">
                <Grid container spacing={4}>
                    <Grid item xs={7}>
                        <CreatureTable
                            monsters={monsters}
                            setCurrentMonsterID={setCurrentMonsterID}
                        />
                    </Grid>
                    <Grid item>
                        {JSON.stringify(currentMonster) !== "{}" ?

                            <StatBlock currentMonster={currentMonster} />

                            : null}
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );

};

export default Monsters;