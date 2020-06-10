import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from "./Footer";
import {Link, Route} from 'react-router-dom';
import LoginHeader from "./LoginHeader";


const useStyles = makeStyles((theme) => ({
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



export default function PasswordChange() {
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    return (
        <div>
            <LoginHeader/>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper} style={{top: '50px', position: 'relative', height:"100%"}}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Reset Password
                    </Typography>
                    <form className={classes.form} method='POST'  action='/auth'>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            placeholder="Enter code emailed"
                            required
                            fullWidth
                            id="email"
                            label="Authentication Code"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={e=>setEmail(e.target.value)}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            placeholder="Enter new password"
                            required
                            fullWidth
                            name="password"
                            label="New Password"
                            type="password"
                            id="password"
                            onChange={e => setPassword(e.target.value)}
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={!validateForm()}
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </Container>
            <div style={{position:"relative",bottom:"-140px"}}>
                <Copyright/>
            </div>
        </div>
    );

}

