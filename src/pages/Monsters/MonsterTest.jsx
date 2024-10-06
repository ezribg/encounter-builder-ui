import { Button, Grid, Paper } from "@mui/material";
import StatBlock from "../../components/CreatureCard/StatBlock/StatBlock";
import NameSearch from "../../components/Input/NameSearch/NameSearch";
import SizeSelect from "../../components/Input/SizeSelect/SizeSelect";
import TypeSelect from "../../components/Input/TypeSelect/TypeSelect";
import AlignmentSelect from "../../components/Input/AlignmentSelect/AlignmentSelect";
import { useEffect, useRef, useState } from "react";
import CreatureTable from "../../components/CreatureShortList/CreatureTable/CreatureTable";
import './Monsters.scss'
import axios from "axios";

const Monsters = () => {
    const apiUrl = "https://api.open5e.com/v1/monsters/";

    const [data, setData] = useState({});
    const [tempData, setTempData] = useState([]);
    const [displayBlock, setDisplayBlock] = useState(false);
    const [searchCriteria, setSearchCriteria] = useState('');

    const name = useRef('');
    const size = useRef('');
    const type = useRef('');
    const alignment = useRef('');
    const response = useRef('');
    const statBlockData = useRef('');
    const page = useRef('');

    let statBlock = null;

    const getMonsters = async () => {
        try {
            const results = await axios.get(apiUrl + searchCriteria);
            setData(results)
            response.current = results;
            // console.log('**data**', results);
        } catch (err) {
            console.log(err);
        }
    };

    const getCreatures = async () => {
        try {
            const results = await axios.get("https://api.open5e.com/v2/creatures/?depth=1" + searchCriteria);
            setTempData(results)
            console.log('**data**', results);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getMonsters();
        getCreatures();
    }, [page, statBlockData.current, searchCriteria]);

    const handleClick = () => {
        setDisplayBlock(statBlockData.current);
        console.log(statBlockData.current);
    }

    const handleSearch = () => {
        setDisplayBlock(false);
        setSearchCriteria(name.current);
    }

    if (displayBlock) {
        statBlock = (<StatBlock monsterData={displayBlock}/>)
    }

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
                    <Grid item>
                        <Button
                            variant="outlined"
                            onClick={handleSearch}
                        >
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </div>
            <Paper className="encounter-paper">
                <Grid container spacing={4}>
                    <Grid item xs={7} onClick={handleClick}>
                        <CreatureTable
                            monsterList={response.current?.data?.results}
                            statBlockRef={statBlockData}
                        />
                    </Grid>
                    <Grid item>
                        {statBlock}
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Monsters;