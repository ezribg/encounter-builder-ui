import { Typography, Box } from "@mui/material";

const SkillsAndDamage = ({monsterData}) => {
    // TODO: fix senses and map languages
    return (
        <div className="red">
            <Typography>
                <Box
                    fontWeight={'bold'}
                    component={'span'}
                    marginRight={1}
                >
                    Senses
                </Box>
                {monsterData?.senses}
            </Typography>
            <Typography>
                <Box
                    fontWeight={'bold'}
                    component={'span'}
                    marginRight={1}
                >
                    Languages
                </Box>
                {monsterData?.languages}
            </Typography>
        </div>
    )
}

export default SkillsAndDamage;