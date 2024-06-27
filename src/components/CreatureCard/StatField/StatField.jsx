import { Box, Typography } from "@mui/material";

const StatField = ({title, value, object, list, prefix, suffix}) => {

    if (object) {
        return (
            <Typography>
                <Box
                    fontWeight={'bold'}
                    component={'span'}
                    marginRight={1}
                >
                    {title}
                </Box>
                {Object.keys(value).map((key, index) => {
                    return (
                        <span style={{marginRight: '5px'}} key={index}>
                            {key} {prefix}{value[key]}{suffix},
                        </span>
                    )
                })}
            </Typography>
        )
    } else if (list) {
        return (
            <Typography>
                <Box
                    fontWeight={'bold'}
                    component={'span'}
                    marginRight={1}
                >
                    {title}
                </Box>
                    {value?.map((key, index) => {
                        return (
                            <span style={{marginRight: '5px'}} key={index}>
                                {key},
                            </span>
                        )
                    })}
            </Typography>
        )
    } else {
        return (
            <Typography>
                <Box
                    fontWeight={'bold'}
                    component={'span'}
                    marginRight={1}
                >
                    {title}
                </Box>
                {value}
            </Typography>
        )
    }

};

export default StatField;