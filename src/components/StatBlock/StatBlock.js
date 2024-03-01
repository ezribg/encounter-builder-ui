import { Card, CardContent, Divider } from "@mui/material";
import React from "react";
import './StatBlock.scss';
import StatHeader from "../StatHeader/StatHeader";
import StatChart from "../StatChart/StatChart";
import SkillsAndDamage from "../SkillsAndDamage/SkillsAndDamage";
import Trait from "../Trait/Trait";

const StatBlock = () => {

    return (
        <Card sx={{width: 575}}>
            <CardContent className="creature-card-content">
                <StatHeader/>
                <Divider/>
                <StatChart/>
                <Divider/>
                <SkillsAndDamage/>
                <Divider/>
                <Trait/>
            </CardContent>
        </Card>
    )
};

export default StatBlock;