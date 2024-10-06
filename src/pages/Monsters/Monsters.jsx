import axios from "axios";
import { useState } from "react";
import './Monsters.scss'
import { Button } from "@mui/base";

const Monsters = (props) => {

    const apiURl = props.apiURl + 'monsters/';

    const [monsters, setMonsters] = useState([]);
    const [currentMonster, setCurrentMonster] = useState([]);

    const getCreatures = async () => {
        try {
            const results = await axios.get(apiUrl);
            setMonsters(results);
        } catch {
            console.log(err);
        }
    };

    return (
        <div className="encounter-page-container">
            <div className="encounter-filter-bar">
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
                        <Button
                    </Grid>
                </Grid>
            </div>
        </div>
    );

};

export default Monsters;