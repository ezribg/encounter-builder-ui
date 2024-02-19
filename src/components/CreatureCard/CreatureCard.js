import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const CreatureCard = () => {

    return (
        <Card>
            <CardContent className="creature-card-content">
                <Typography variant="h5">Displacer Beast</Typography>
                <Typography>Large monstrosity, lawful evil</Typography>
            </CardContent>
        </Card>
    )
};

export default CreatureCard;