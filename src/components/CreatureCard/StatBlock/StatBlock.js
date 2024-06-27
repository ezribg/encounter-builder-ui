import { Box, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import './StatBlock.scss'
import BlockDivider from "../BlockDivider/BlockDivider";
import StatField from "../StatField/StatField";
import AbilityScore from "../AbilityScore/AbilityScore";

const StatBlock = ({monsterData}) => {

    return (
        <Card sx={{width: 563}}>
            <CardContent className="creature-card-content">
                <div className={'red'}>
                    <Typography className={'card-name'} variant="h5">{monsterData?.monsterName}</Typography>
                    <Typography className={'description'}>{monsterData?.monsterSize} {monsterData?.monsterType}, {monsterData?.alignment}</Typography>
                    <BlockDivider/>
                    <StatField title={'Armor Class'} value={monsterData?.armorClass} />
                    <StatField title={'Hit Points'} value={monsterData?.hitPoints} />
                    <StatField title={'Senses'} value={monsterData?.speed} object={true} suffix={'ft.'}/>
                    <BlockDivider/>
                    <Grid
                        container
                        direction={'row'}
                        justifyContent="left"
                        alignItems="left"
                        textAlign={'center'}
                    >
                        <AbilityScore ability={'STR'} value={monsterData?.strength}/>
                        <AbilityScore ability={'DEX'} value={monsterData?.dexterity}/>
                        <AbilityScore ability={'CON'} value={monsterData?.constitution}/>
                        <AbilityScore ability={'INT'} value={monsterData?.intelligence}/>
                        <AbilityScore ability={'WIS'} value={monsterData?.wisdom}/>
                        <AbilityScore ability={'CHA'} value={monsterData?.charisma}/>
                    </Grid>
                    <BlockDivider/>
                    {monsterData?.savingThrows &&
                        <StatField title={'Saving Throws'} value={monsterData?.savingThrows} object={true} prefix={'+'} />
                    }
                    {monsterData?.skills &&
                        <StatField title={'Skills'} value={monsterData?.skills} object={true} prefix={'+'} />
                    }
                    {monsterData?.damageVulnerabilities &&
                        <StatField title={'Damage Vulnerabilities'} value={monsterData?.damageVulnerabilities} />
                    }
                    {monsterData?.damageResistances &&
                        <StatField title={'Damage Resistances'} value={monsterData?.damageResistances} />
                    }
                    {monsterData?.damageImmunities &&
                        <StatField title={'Damage Immunities'} value={monsterData?.damageImmunities} />
                    }
                    {monsterData?.conditions &&
                        <StatField title={'Condition Immunities'} value={monsterData?.conditions} list={true} />
                    }
                    <Typography>
                        <Box
                            fontWeight={'bold'}
                            component={'span'}
                            marginRight={1}
                        >
                            Senses
                        </Box>
                        {Object.keys(monsterData?.senses).map((key, index) => {
                            if (key === 'passive Perception') {
                                return (
                                    <span style={{marginRight: '5px'}} key={index}>
                                        {key} {monsterData?.senses[key]}
                                    </span>
                                )
                            } else {
                                return (
                                    <span style={{marginRight: '5px'}} key={index}>
                                        {key} {monsterData?.senses[key]} ft.,
                                    </span>
                                )
                            }
                        })}
                    </Typography>
                    <StatField title={'Languages'} value={monsterData?.languages} list={true} />
                </div>
                <BlockDivider/>
                {Object.keys(monsterData?.traits).map((trait, index) => {
                    return (
                        <StatField title={trait} value={monsterData?.traits[trait]} key={index}/>
                    )
                })}
                <Typography className={'action_header'}>Actions</Typography>
                <Divider sx={{bgcolor: '#6D0000'}}/>
                {Object.keys(monsterData?.actions).map((action, index) => {
                    return (
                        <StatField title={action} value={monsterData?.actions[action]} key={index}/>
                    )
                })}
            </CardContent>
        </Card>
    )
};

export default StatBlock;