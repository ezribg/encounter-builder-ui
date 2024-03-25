import { Card, CardContent, Divider, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import StatHeader from "../StatHeader/StatHeader";
import StatChart from "../StatChart/StatChart";
import SkillsAndDamage from "../SkillsAndDamage/SkillsAndDamage";
import Trait from "../Trait/Trait";
import './StatBlock.scss'
import BlockDivider from "../BlockDivider/BlockDivider";
import axios from "axios";

const StatBlock = ({nameRef}) => {
    const [data, setData] = useState({});

    const response = useRef('');

    const getBlockData = async () => {
        try {
            const results = await axios.get("https://api.open5e.com/v1/monsters/" + nameRef.current);
            setData(results);
            response.current = results;
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Card sx={{width: 563}}>
            <CardContent className="creature-card-content">
                <StatHeader/>
                <BlockDivider/>
                <StatChart/>
                <BlockDivider/>
                <SkillsAndDamage/>
                <BlockDivider/>
                <Trait/>
                <Typography className={'action_header'}>Actions</Typography>
                <Divider sx={{bgcolor: '#6D0000'}}/>
            </CardContent>
        </Card>
    )
};

export default StatBlock;