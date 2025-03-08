import { Card, CardContent, Grid, Typography, Divider } from "@mui/material";
import StatHeader from "./StatHeader";
import StatChart from "./StatChart";
import SkillsAndDamage from "./SkillsAndDamage";
import Trait from "../Trait";
import BlockDivider from "./BlockDivider";

const StatBlock = ({
    currentMonster
}) => {

    return (
        <Card sx={{ width: 563 }}>
            <CardContent className="creature-card-content">
                <StatHeader currentMonster={currentMonster} />
                <BlockDivider />
                <StatChart currentMonster={currentMonster} />
                <BlockDivider />
                <SkillsAndDamage currentMonster={currentMonster} />
                <BlockDivider />
                <Grid container className="monster-inline-content-block">
                    {currentMonster?.special_abilities.map((ability, index) => {
                        return (
                            <Grid item key={index}>
                                <Typography><Typography fontWeight={'bold'}>{ability.name}</Typography> {ability.desc}</Typography>
                            </Grid>
                        )
                    })}
                </Grid>
                <Typography className={'action_header'}>Actions</Typography>
                <Divider sx={{ bgcolor: '#6D0000' }} />
            </CardContent>
        </Card>
    )
};

export default StatBlock;