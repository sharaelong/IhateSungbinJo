import React, { useState } from "react";

import { DragDropContext, Droppable } from "react-beautiful-dnd";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import Subject from "./subject.jsx";

const subjects = [
    { name: "수학", lectures: ["수학 I", "수학 II", "수학 III"] },
    { name: "물리", lectures: ["물리 I", "물리 II"] }
];

const curTimetable = [
    ["흠", "월요일", "화요일", "수요일", "목요일", "금요일"],
    ["1교시", "", "", "", "", ""],
    ["2교시", "", "", "", "", ""],
    ["3교시", "", "", "", "", ""],
    ["4교시", "", "", "", "", ""],
    ["5교시", "", "", "", "", ""],
    ["6교시", "", "", "", "", ""],
    ["7교시", "", "", "", "", ""],
];

const Test = () => {
    const [currentLectures, setCurrentLectures] = useState([]);

    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Paper>
                    <List>
                        {subjects.map(subject => (
                            <Subject {...subject} key={subject.name}
                                     onClick={(_, lecture) => {
                                         if(currentLectures.includes(lecture)) { return; }
                                         setCurrentLectures(currentLectures => [lecture, ...currentLectures]);
                                     }}/>
                        ))}
                    </List>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper>
                    <DragDropContext>
                        <Droppable droppableId="curlecture" type="list">
                            {provided => (
                                <List ref={provided.innerRef}>
                                    {currentLectures.map(lecture => (
                                        <ListItem key={lecture} divider>
                                            {lecture}
                                        </ListItem>
                                    ))}
                                </List>
                            )}
                        </Droppable>
                    </DragDropContext>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Test;
