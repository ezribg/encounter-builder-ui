import { Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import './StatBlock.scss';

const StatBlock = () => {

    return (
        <Card sx={{minWidth: 375}}>
            <CardContent className="creature-card-content">
                <Typography variant="h5">Displacer Beast</Typography>
                <Typography>Large monstrosity, lawful evil</Typography>
                <Divider/>
            </CardContent>
        </Card>
    )
};

export default StatBlock;