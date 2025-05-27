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
            let proficiencyObject = { name: entry.proficiency.reference.name, value: entry.value };

            if (entry.proficiency.type === "SAVING_THROWS") {
                savingThrows.push(proficiencyObject);
            } else if (entry.proficiency.type === "SKILLS") {
                skills.push(proficiencyObject);
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
                {!isEmptyArray(currentMonster?.damage_immunities) ?

                    <Grid item>
                        <Typography fontWeight={'bold'}>Damage Immunities</Typography>
                        <Typography>
                            {currentMonster?.damage_immunities.map((damage) => {
                                return (
                                    <>{damage}, </>
                                )
                            })}
                        </Typography>
                    </Grid>

                    : null}
                {!isEmptyArray(currentMonster?.damage_vulnerabilities) ?

                    <Grid item>
                        <Typography fontWeight={'bold'}>Damage Vulnerabilities</Typography>
                        <Typography>
                            {currentMonster?.damage_vulnerabilities.map((damage) => {
                                return (
                                    <>{damage}, </>
                                )
                            })}
                        </Typography>
                    </Grid>

                    : null}
                {!isEmptyArray(currentMonster?.damage_resistances) ?

                    <Grid item>
                        <Typography fontWeight={'bold'}>Damage Resistances</Typography>
                        <Typography>
                            {currentMonster?.damage_resistances.map((damage) => {
                                return (
                                    <>{damage}, </>
                                )
                            })}
                        </Typography>
                    </Grid>

                    : null}
                {!isEmptyArray(currentMonster?.condition_immunities) ?

                    <Grid item>
                        <Typography fontWeight={'bold'}>Condition Immunities</Typography>
                        <Typography>
                            {currentMonster?.condition_immunities.map((damage) => {
                                return (
                                    <>{damage}, </>
                                )
                            })}
                        </Typography>
                    </Grid>

                    : null}
                <Grid item>
                    <Typography fontWeight={'bold'}>Senses</Typography>
                    {Object.keys(currentMonster?.senses).map((key) => {

                        if (currentMonster?.senses[key] !== null) {
                            return (
                                <Typography key={key}>{key} {currentMonster?.senses[key]},</Typography>
                            )
                        }
                    })}
                </Grid>
                <Grid item>
                    <Typography fontWeight={'bold'}>Languages</Typography>
                    <Typography>{currentMonster?.languages}</Typography>
                </Grid>
                <Grid item>
                    <Typography fontWeight={'bold'}>Challenge</Typography>
                    <Typography>{currentMonster?.challenge_rating} ({currentMonster?.xp} XP)</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default SkillsAndDamage;