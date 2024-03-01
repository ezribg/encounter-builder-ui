import { Typography, Grid, Box } from "@mui/material";

const SkillsAndDamage = () => {
    return (
        <div>
            <Typography>
                <Box
                    fontWeight={'bold'}
                    component={'span'}
                    marginRight={1}
                >
                    Senses
                </Box>
                darkvision
            </Typography>
            <Typography>
                <Box
                    fontWeight={'bold'}
                    component={'span'}
                    marginRight={1}
                >
                    Languages
                </Box>
                --------
            </Typography>
        </div>
    )
}

export default SkillsAndDamage;