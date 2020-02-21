import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormLogin from './FormLogin';
import { Card } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://alfyadinata.github.io/">
        Alfy Adinata
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div style={{  backgroundImage: `url(https://images.pexels.com/photos/542403/pexels-photo-542403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`, backgroundSize: 'cover', position:'absolute', width: '100%', height:'100%' }}>
         {/*style={{  backgroundSize:'cover', backgroundImage: `url(https://images.pexels.com/photos/542403/pexels-photo-542403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)` }}  */}
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Grid container spacing={3}>
                <Card style={{ padding: '20%', }}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign in to E-Report 
                </Typography>
                    <FormLogin />
                </Card>

            </Grid>

        </div>
        <Box mt={8}>
            <Copyright />
        </Box>
        </Container>
    </div>
  );
}