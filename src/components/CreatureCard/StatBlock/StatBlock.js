import { Card, CardContent, Divider, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import StatHeader from "../StatHeader/StatHeader";
import StatChart from "../StatChart/StatChart";
import SkillsAndDamage from "../SkillsAndDamage/SkillsAndDamage";
import Trait from "../Trait/Trait";
import './StatBlock.scss'
import BlockDivider from "../BlockDivider/BlockDivider";
import './StatHeader.scss'

const StatBlock = ({monsterData}) => {

    // need to add challenge, conditions, damages, saving throws, skills, and actions
    // need to adjust for new format of speed, languages, and senses

    return (
        <Card sx={{width: 563}}>
            <CardContent className="creature-card-content">
                <div className={'red'}>
                    <Typography className={'card-name'} variant="h5">{monsterData?.monsterName}</Typography>
                    <Typography className={'description'}>{monsterData?.monsterSize} {monsterData?.monsterType}, {monsterData?.alignment}</Typography>
                    <BlockDivider/>
                    <Grid container spacing={1}>
                        <Grid item>
                            <Typography fontWeight={'bold'}>Armor Class:</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography>{monsterData?.armorClass}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item>
                            <Typography fontWeight={'bold'}>Hit Points</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography>{monsterData?.hitPoints}</Typography>
                        </Grid>
                    </Grid>
                    {/* Need to list out speeds
                    <Grid container spacing={1}>
                        <Grid item>
                            <Typography fontWeight={'bold'}>Speed</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>40 ft.</Typography>
                        </Grid>
                    </Grid> */}
                </div>
                <BlockDivider/>
                <div className="red">
                    <Grid
                        container
                        direction={'row'}
                        justifyContent="left"
                        alignItems="left"
                        textAlign={'center'}
                    >
                        <Grid item xs={1}>
                            <Typography fontWeight={'bold'}>STR</Typography>
                            <Typography>{monsterData?.strength}</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography fontWeight={'bold'}>DEX</Typography>
                            <Typography>{monsterData?.dexterity}</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography fontWeight={'bold'}>CON</Typography>
                            <Typography>{monsterData?.constitution}</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography fontWeight={'bold'}>INT</Typography>
                            <Typography>{monsterData?.intelligence}</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography fontWeight={'bold'}>WIS</Typography>
                            <Typography>{monsterData?.wisdom}</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography fontWeight={'bold'}>CHA</Typography>
                            <Typography>{monsterData?.charisma}</Typography>
                        </Grid>
                    </Grid>
                </div>
                <BlockDivider/>
                <div className="red">
                    {/* Need to list out senses
                    <Typography>
                        <Box
                            fontWeight={'bold'}
                            component={'span'}
                            marginRight={1}
                        >
                            Senses
                        </Box>
                        {monsterData?.senses}
                    </Typography> */}
                    {/* Need to List out Languages
                    <Typography>
                        <Box
                            fontWeight={'bold'}
                            component={'span'}
                            marginRight={1}
                        >
                            Languages
                        </Box>
                        {monsterData?.languages}
                    </Typography> */}
                </div>
                <BlockDivider/>
                {monsterData?.special_abilities?.map((trait, index) => {
                    return (
                        <Trait
                            trait={trait}
                            key={index}
                        />
                    )
                })}
                <Typography className={'action_header'}>Actions</Typography>
                <Divider sx={{bgcolor: '#6D0000'}}/>
            </CardContent>
        </Card>
    )
};

export default StatBlock;