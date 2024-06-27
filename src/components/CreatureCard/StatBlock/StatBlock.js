import { Box, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import Trait from "../Trait/Trait";
import './StatBlock.scss'
import BlockDivider from "../BlockDivider/BlockDivider";

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
                            <Typography fontWeight={'bold'}>Armor Class</Typography>
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
                    <Typography>
                        <Box
                            fontWeight={'bold'}
                            component={'span'}
                            marginRight={1}
                        >
                            Senses
                        </Box>
                        {Object.keys(monsterData?.speed).map((key, index) => {
                                return (
                                    <span style={{marginRight: '5px'}} key={index}>
                                        {key} {monsterData?.speed[key]} ft.
                                    </span>
                                )
                            })}
                    </Typography>
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
                    {monsterData?.savingThrows &&
                        <Typography>
                            <Box
                            fontWeight={'bold'}
                            component={'span'}
                            marginRight={1}
                        >
                            Saving Throws
                        </Box>
                        {Object.keys(monsterData?.savingThrows).map((key, index) => {
                            return (
                                <span style={{marginRight: '5px'}} key={index}>
                                    {key} +{monsterData?.savingThrows[key]},
                                </span>
                            )
                        })}
                        </Typography>
                    }
                    {monsterData?.skills &&
                        <Typography>
                            <Box
                            fontWeight={'bold'}
                            component={'span'}
                            marginRight={1}
                        >
                            Skills
                        </Box>
                        {Object.keys(monsterData?.skills).map((key, index) => {
                            return (
                                <span style={{marginRight: '5px'}} key={index}>
                                    {key} +{monsterData?.skills[key]},
                                </span>
                            )
                        })}
                        </Typography>
                    }
                    {monsterData?.damageVulnerabilities &&
                        <Typography>
                            <Box
                                fontWeight={'bold'}
                                component={'span'}
                                marginRight={1}
                            >
                                Damage Vulnerabilities
                            </Box>
                            {monsterData?.damageVulnerabilities}
                        </Typography>
                    }
                    {monsterData?.damageResistances &&
                        <Typography>
                            <Box
                                fontWeight={'bold'}
                                component={'span'}
                                marginRight={1}
                            >
                                Damage Resistances
                            </Box>
                            {monsterData?.damageResistances}
                        </Typography>
                    }
                    {monsterData?.damageImmunities &&
                        <Typography>
                            <Box
                                fontWeight={'bold'}
                                component={'span'}
                                marginRight={1}
                            >
                                Damage Immunities
                            </Box>
                            {monsterData?.damageImmunities}
                        </Typography>
                    }
                    {monsterData?.conditions &&
                        <Typography>
                            <Box
                                fontWeight={'bold'}
                                component={'span'}
                                marginRight={1}
                            >
                                Condition Immunities
                            </Box>
                            {monsterData?.conditions?.map((con, index) => {
                                return (
                                    <span style={{marginRight: '5px'}} key={index}>
                                        {con},
                                    </span>
                                )
                            })}
                        </Typography>
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
                    <Typography>
                        <Box
                            fontWeight={'bold'}
                            component={'span'}
                            marginRight={1}
                        >
                            Languages
                        </Box>
                        {monsterData?.languages?.map((lang, index) => {
                            return (
                                <span style={{marginRight: '5px'}} key={index}>
                                    {lang},
                                </span>
                            )
                        })}
                    </Typography>
                </div>
                <BlockDivider/>
                {Object.keys(monsterData?.traits).map((trait, index) => {
                    return (
                        <Trait
                            trait={trait}
                            desc={monsterData?.traits[trait]}
                            key={index}
                        />
                    )
                })}
                <Typography className={'action_header'}>Actions</Typography>
                <Divider sx={{bgcolor: '#6D0000'}}/>
                {Object.keys(monsterData?.actions).map((action, index) => {
                    return (
                        <Trait
                            trait={action}
                            desc={monsterData?.actions[action]}
                            key={index}
                        />
                    )
                })}
            </CardContent>
        </Card>
    )
};

export default StatBlock;