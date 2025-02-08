import { Card, CardContent, Divider, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import StatHeader from "../StatHeader/StatHeader";
import StatChart from "../StatChart/StatChart";
import SkillsAndDamage from "../SkillsAndDamage/SkillsAndDamage";
import Trait from "../Trait/Trait";
import './StatBlock.scss'
import BlockDivider from "../BlockDivider/BlockDivider";
import axios from "axios";

const StatBlock = ({monsterData}) => {
    // console.log("monsterData", monsterData);

    // ! Special abilities not currently returned in api
    return (
        <Card sx={{width: 563}}>
            <CardContent className="creature-card-content">
                <StatHeader monsterData={monsterData}/>
                <BlockDivider/>
                <StatChart monsterData={monsterData}/>
                <BlockDivider/>
                <SkillsAndDamage monsterData={monsterData}/>
                <BlockDivider/>
                {/* {monsterData?.special_abilities?.map((trait, index) => {
                    return (
                        <Trait
                            trait={trait}
                            key={index}
                        />
                    )
                })} */}
                <Typography className={'action_header'}>Actions</Typography>
                <Divider sx={{bgcolor: '#6D0000'}}/>
            </CardContent>
        </Card>
    )
};

export default StatBlock;