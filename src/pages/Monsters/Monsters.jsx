import axios from "axios";
import { useEffect, useState } from "react";
import './Monsters.scss'
import { Grid, Paper } from "@mui/material";
import DropdownInput from "../../components/Input/DropdownInput";
import CreatureTable from "../../components/CreatureShortList/CreatureTable/CreatureTable";
import StatBlock from "../../components/CreatureCard/StatBlock/StatBlock";

const Monsters = (props) => {

    const apiURL = props.apiURL + 'creatures/?depth=1';

    const [page, setPage] = useState('');

    const [monsters, setMonsters] = useState([]);
    const [currentMonster, setCurrentMonster] = useState([]);

    // const [alignments, setAlignments] = useState([]);

    let statBlock = null;


    useEffect(() => {
        getCreatures();
    }, [page]);


    useEffect(() => {
        
        if (currentMonster.length !== 0) {
            console.log(currentMonster);
            statBlock = (<StatBlock monsterData={currentMonster}/>)
        }
    }, [currentMonster]);


    const getCreatures = async () => {
        try {
            const results = await axios.get(apiURL);
            setMonsters(results?.data?.results);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="encounter-page-container">
            {/* <div className="encounter-filter-bar">
                <Grid container spacing={2} justifyContent={"center"}>
                    <Grid item>

                    </Grid>
                    <Grid item>

                    </Grid>
                    <Grid item>

                    </Grid>
                    <Grid item>

                    </Grid>
                    <Grid item>
                        
                    </Grid>
                </Grid>
            </div> */}
            <Paper className="encounter-paper">
                <Grid container spacing={4}>
                    <Grid item xs={7}>
                        <CreatureTable 
                            monsterList={monsters}
                            setCurrentMonster={setCurrentMonster}
                        />
                    </Grid>
                    <Grid item>
                        <StatBlock monsterData={currentMonster}/>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );

};

export default Monsters;