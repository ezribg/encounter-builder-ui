import { Box, Typography } from "@mui/material";

const Trait = ({trait, desc}) => {
    return (
        <Typography>
            <Box
                fontWeight={'bold'}
                component={'span'}
                marginRight={1}
            >
                {trait}
            </Box>
            {desc}
        </Typography>
    )
}

export default Trait;