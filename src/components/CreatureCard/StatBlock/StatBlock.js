import { Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import StatHeader from "../StatHeader/StatHeader";
import StatChart from "../StatChart/StatChart";
import SkillsAndDamage from "../SkillsAndDamage/SkillsAndDamage";
import Trait from "../Trait/Trait";
import './StatBlock.scss'
import BlockDivider from "../BlockDivider/BlockDivider";

const StatBlock = () => {

    return (
        <Card sx={{width: 475}}>
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