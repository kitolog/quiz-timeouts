"use client";

import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Box, CardActions, Fab, IconButton, LinearProgress, LinearProgressProps, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import FastForwardIcon from '@mui/icons-material/FastForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function Home() {

    const [progress, setProgress] = useState(10);
    const [isQuizActive, setIsQuizActive] = useState(false);

    const card = (
        <React.Fragment>
            <CardContent>
                <Typography gutterBottom sx={{color: 'text.secondary', fontSize: 14}}>
                    Quiz
                </Typography>
                <Typography variant="h5" component="div" mb={3}>
                    Some question
                </Typography>
                <Typography variant="body2">
                    And some description
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Answer 1</Button>
                <Button size="small">Answer 2</Button>
            </CardActions>
        </React.Fragment>
    );

    function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
        return (
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Box sx={{width: '100%', mr: 1}}>
                    <LinearProgress variant="determinate" {...props} />
                </Box>
                <Box sx={{minWidth: 35}}>
                    <Typography
                        variant="body2"
                        sx={{color: 'text.secondary'}}
                    >{`${Math.round(props.value)}%`}</Typography>
                </Box>
            </Box>
        );
    }

    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                {isQuizActive ? <Stack spacing={2}>
                        <Card variant="outlined">{card}</Card>
                        <Stack direction="row" spacing={2} alignItems="center" paddingLeft={1}>
                            <Box sx={{width: '80%'}}>
                                <LinearProgressWithLabel value={progress}/>
                            </Box>
                            <IconButton aria-label="forward">
                                <FastForwardIcon/>
                            </IconButton>
                        </Stack>
                    </Stack> :
                    <Fab onClick={() => setIsQuizActive(true)}
                         size="large"
                         color="primary"
                         aria-label="start">
                        <PlayArrowIcon fontSize="large"/>
                    </Fab>
                }
            </main>
        </div>
    );
}
