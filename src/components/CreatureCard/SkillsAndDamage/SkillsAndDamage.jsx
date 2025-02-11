import { Typography, Grid } from "@mui/material";
// import { statAbbreviation } from "../../../helpers/helperFunctions";

const SkillsAndDamage = ({
    currentMonster
}) => {

    return (
        <div className="red">
            <Grid container className="monster-inline-content-block">
                {/* {currentMonster?.proficiencies.length > 0 ?

                    <Grid item>
                        <Typography fontWeight={'bold'}>Saving Throws</Typography>
                    </Grid>

                    : null}
                <Grid item>
                    <Typography fontWeight={'bold'}>Skills</Typography>
                </Grid> */}
                {currentMonster?.damage_vulnerabilities.length > 0 ?

                    <Grid item>
                        <Typography fontWeight={'bold'}>Damage Vulnerabilities</Typography>
                        {currentMonster?.damage_vulnerabilities.map((value) => {
                            return (
                                <Typography>{value},</Typography>
                            )
                        })}
                    </Grid>

                    : null}
                {currentMonster?.damage_resistances.length > 0 ?

                    <Grid item>
                        <Typography fontWeight={'bold'}>Damage Resistances</Typography>
                        {currentMonster?.damage_resistances.map((value) => {
                            return (
                                <Typography>{value},</Typography>
                            )
                        })}
                    </Grid>

                    : null}
                {/* {currentMonster?.damage_immunities.length > 0 ?

                    <Grid item>
                        <Typography fontWeight={'bold'}>Damage Immunities</Typography>
                        {currentMonster?.damage_immunities.map((value) => {
                            return (
                                <Typography>{value},</Typography>
                            )
                        })}
                    </Grid>

                    : null} */}
                {/* {currentMonster?.condition_immunities.length > 0 ?

                    <Grid item>
                        <Typography fontWeight={'bold'}>Condition Immunities</Typography>
                        {currentMonster?.condition_immunities.map((value) => {
                            return (
                                <Typography>{value},</Typography>
                            )
                        })}
                    </Grid>

                    : null} */}
                {/* <Grid item>
                    <Typography fontWeight={'bold'}>Languages</Typography>
                    <Typography>{currentMonster?.languages}</Typography>
                </Grid> */}
                {/* <Grid item>
                    <Typography fontWeight={'bold'}>Challenge</Typography>
                    <Typography>{currentMonster?.challenge_rating} ({currentMonster?.xp} XP)</Typography>
                </Grid> */}
            </Grid>
        </div>
    )
}

export default SkillsAndDamage;