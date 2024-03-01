import { Box, Grid, Typography } from "@mui/material";

const Trait = () => {
    return (
        <div>
            <Typography>
                <Box
                    fontWeight={'bold'}
                    component={'span'}
                    marginRight={1}
                >
                    Avoidance
                </Box>
                If the displacer beast is subjected to an effect that allows 
                it to make a saving throw to take only half damage, it instead takes 
                no damage if it succeeds on the saving throw, and only half damage if it fails.
            </Typography>
        </div>
    )
}

export default Trait;