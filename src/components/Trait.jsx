import { Box, Typography } from "@mui/material";

const Trait = ({trait}) => {
    return (
        <div>
            <Typography>
                <Box
                    fontWeight={'bold'}
                    component={'span'}
                    marginRight={1}
                >
                    {trait?.name}
                </Box>
                {trait?.desc}
            </Typography>
        </div>
    )
}

export default Trait;