import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ReactComponent as LogoSvg } from '../../logo.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "#cccccc" 

    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);


export default function AppHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ background: '#e2645a' }} position="static">
        <div className="container">
       <div className="logo">

            <LogoSvg />
            




       </div>
       </div>
      </AppBar>
    </div>
  );
}

