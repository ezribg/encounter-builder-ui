import { Typography, Grid } from "@mui/material";
import { statAbbreviation } from "../../../helpers/helperFunctions";

const SkillsAndDamage = ({monsterData}) => {
    return (
        <div className="red">
            <Grid container spacing={1}>
                <Grid item>
                    <Typography fontWeight={'bold'}>Saving Throws</Typography>
                </Grid>
                <Grid item xs={2}>
                    <div className="grid-item-list">
                        {Object.keys(monsterData?.saving_throws)?.map((savingThrow) => {

                            return (
                                <Typography>{savingThrow}</Typography>
                            )

                        })}
                    </div>
                </Grid>
            </Grid>
            {/* <Grid container spacing={1}>
                <Grid item>
                    <Typography fontWeight={'bold'}>Skills</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>{}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item>
                    <Typography fontWeight={'bold'}>Condition</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>{}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item>
                    <Typography fontWeight={'bold'}>Damage</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>{}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item>
                    <Typography fontWeight={'bold'}>Languages</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>{}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item>
                    <Typography fontWeight={'bold'}>Challenge</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>{}</Typography>
                </Grid>
            </Grid> */}
        </div>
    )
}

export default SkillsAndDamage;