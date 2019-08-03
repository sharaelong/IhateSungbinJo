import React from "react";

import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
    grid: {
        flexGrow: 1,
    },
    wrapper: {
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gridTemplateRows: [100, 100, 100]
    }
});

const lectureList = [
    { subject: "수학", lecture: ["수학 I", "수학 II", "수학 III"] },
    { subject: "물리", lecture: ["물리 I", "물리 II"] }
];

const curLecture = [];
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

function addLecture(props) {
    if (curLecture.length > 0) {
        let i = 0;
        for (i = 0; i < curLecture.length; i++) {
            if (curLecture[i] == props) { break; }
        }
        if (i === curLecture.length) {
            curLecture.push(props);
        }
    }
    else {
        curLecture.push(props);
    }
    console.log(curLecture);
}

function onDragEnd(props) {
    if (!props.destination) {
        return;
    }
}

    const classes = useStyles();
const Test = () => {

    return (
        <Paper>
            <GridList cellHeight="auto">
                <GridListTile>
                    {lectureList.map(subject => {
                        return (
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    {subject["subject"]}
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <List className={classes.root}>
                                        {subject["lecture"].map(lecture => {
                                            return (
                                                <>
                                                    <ListItem button={true} onClick={ addLecture(lecture) }>
                                                        {lecture}
                                                    </ListItem>
                                                    <Divider />
                                                </>
                                            );
                                        })}
                                    </List>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        );
                    })}
                </GridListTile>
                <DragDropContext onDragEnd={e => { console.log(e); onDragEnd(e);} }>
                    <GridListTile>
                        <Droppable droppableId="curlecture" type="list">
                            {(provided, snapshot) => {
                                return (
                                    <List ref={provided.innerRef}>
                                        {curLecture.map(lecture => {
                                            return (
                                                <>
                                                    <ListItem>
                                                        {lecture}
                                                    </ListItem>
                                                    <Divider />
                                                </>
                                            );
                                        })}
                                    </List>
                                );
                            }}
                        </Droppable>
                    </GridListTile>
                    <div className={classes.grid}>
                        <Grid container>
                            {curTimetable.map(period => {
                                return (
                                    <div>
                                        {period.map(day => {
                                            return (
                                                <Grid>
                                                    <Paper>{day}</Paper>
                                                </Grid>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </Grid>
                    </div>
                </DragDropContext>
            </GridList>
        </Paper>
    );
};

export default Test;
