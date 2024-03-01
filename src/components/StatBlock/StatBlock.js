import { Card, CardContent } from "@mui/material";
import React from "react";
import './StatBlock.scss';
import StatHeader from "../StatHeader/StatHeader";

const StatBlock = () => {

    return (
        <Card sx={{minWidth: 375}}>
            <CardContent className="creature-card-content">
                <StatHeader/>
            </CardContent>
        </Card>
    )
};

export default StatBlock;