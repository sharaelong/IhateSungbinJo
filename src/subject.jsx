import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(4)
    }
}));

const Subject = ({ name, lectures, onClick, ...props }) => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ListItem button divider onClick={e => setIsOpen(isOpen => !isOpen)} {...props}>
                <ListItemText primary={name} />
                {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List disablePadding>
                    {lectures.map(lecture => (
                        <ListItem button divider key={lecture} onClick={onClick && (e => onClick(e, lecture))} className={classes.nested}>
                            <ListItemText primary={lecture} />
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </>
    );
};

export default Subject;
