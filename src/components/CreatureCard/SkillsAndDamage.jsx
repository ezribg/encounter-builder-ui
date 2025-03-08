import { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";
import { isEmptyArray } from "../../utilities/ApplicationFunctions";

const SkillsAndDamage = ({
    currentMonster
}) => {

    const [savingThrows, setSavingThrows] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        // console.log(currentMonster);
        parseProficiencies(currentMonster.proficiencies);
    }, [currentMonster]);

    const parseProficiencies = (proficiencies) => {
        let savingThrows = [];
        let skills = [];

        proficiencies.forEach(entry => {
            if (entry.proficiency.type === "SAVING_THROWS") {
                savingThrows.push({ name: entry.proficiency.reference.name, value: entry.value });
            } else if (entry.proficiency.type === "SKILLS") {
                skills.push({ name: entry.proficiency.reference.index, value: entry.value });
            }
        });

        setSavingThrows(savingThrows);
        setSkills(skills);
    }

    return (
        <div className="red">
            <Grid container className="monster-inline-content-block">
                {!isEmptyArray(savingThrows) ?

                    <Grid item>
                        <Typography fontWeight={'bold'}>Saving Throws</Typography>
                        <Typography>
                            {savingThrows.map((save) => {
                                return (
                                    <>{save.name} +{save.value}, </>
                                )
                            })}
                        </Typography>
                    </Grid>

                    : null}
                {!isEmptyArray(skills) ?

                    <Grid item>
                        <Typography fontWeight={'bold'}>Skills</Typography>
                        <Typography>
                            {skills.map((save) => {
                                return (
                                    <>{save.name} +{save.value}, </>
                                )
                            })}
                        </Typography>
                    </Grid>

                    : null}
                {/* {currentMonster?.damage_resistances.length > 0 ?

                    <Grid item>
                        <Typography fontWeight={'bold'}>Damage Resistances</Typography>
                        {currentMonster?.damage_resistances.map((value) => {
                            return (
                                <Typography>{value},</Typography>
                            )
                        })}
                    </Grid>

                    : null} */}
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