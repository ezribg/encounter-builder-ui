import { Card, CardContent, Divider } from "@mui/material";
import React from "react";
import StatHeader from "../StatHeader/StatHeader";
import StatChart from "../StatChart/StatChart";
import SkillsAndDamage from "../SkillsAndDamage/SkillsAndDamage";
import Trait from "../Trait/Trait";
import './StatBlock.scss'
import BlockDivider from "../BlockDivider/BlockDivider";

const StatBlock = () => {

    return (
        <Card sx={{width: 575}}>
            <CardContent className="creature-card-content">
                <StatHeader/>
                <BlockDivider/>
                <StatChart/>
                <BlockDivider/>
                <SkillsAndDamage/>
                <BlockDivider/>
                <Trait/>
            </CardContent>
        </Card>
    )
};

export default StatBlock;