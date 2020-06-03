import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from "./Footer";
import LoginHeader from "./LoginHeader";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '95%',
    },
    phoneInput: {
        margin: theme.spacing(1),
        minWidth: '95%',
    }
}));

export default function SignUp() {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobNo, setmobNo] = useState("");
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    function validateForm() {
        return email.length > 0 && firstName.length >0 && lastName.length >0
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submitting");
        console.log(email);
        console.log(firstName);
        console.log(lastName);
        if(firstName==="Harman")
        {
            window.location = "/SignUp";
        }
    }
    return (
<div>
    <LoginHeader/>
        <Container component="main" maxWidth="xs">
            <CssBaseline/>

            <div className={classes.paper} style={{top:'50px', position: 'relative'}}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={e=>setFirstName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={e=>setLastName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={e=>setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="mobNo"
                                label="Mobile Number"
                                name="mobNo"
                                autoComplete="tel"
                                onChange={e=>setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="role">Role</InputLabel>
                            <Select
                                defaultValue={"Senior Researcher"}
                                labelId="role"
                                id="memberRole"
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={age}
                                onChange={handleChange}
                            >
                                {/*<MenuItem value="">*/}
                                {/*    <em>None</em>*/}
                                {/*</MenuItem>*/}
                                <MenuItem value={"Senior Researcher"}>Senior Researcher</MenuItem>
                                <MenuItem value={"Technician"}>Technician</MenuItem>
                                <MenuItem value={"Student"}>Student</MenuItem>
                            </Select>
                        </FormControl>
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to={"/Login"}>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    <div style={{position:"relative",bottom:"-200px"}}>
        <Copyright/>
    </div>
</div>
    );
}