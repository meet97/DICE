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
import AdminHeader from "./AdminHeader";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


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
        margin: theme.spacing(0),
        width:'100%',
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contact, setPhone] = useState("");
    const [Role, setRole] = useState("");

    function validateForm() {
        return email.length > 0 && firstName.length >0 && lastName.length >0 && contact.length === 10 && Role.length >0
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submitting");
        console.log(email);
        console.log(firstName);
        console.log(lastName);
        console.log(Role);
        console.log(contact);
        if(firstName==="Harman")
        {
            window.location = "/SignUp";
        }
    }
    const handleChange = (event) => {
        setRole(event.target.value);
    };
    return (
<div>
    <AdminHeader/>
        <Container component="main" maxWidth="xs">
            <CssBaseline/>

            <div className={classes.paper} style={{top:'50px', position: 'relative'}}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} method='POST'  action='/register'>
                    <FormControl className={classes.formControl}>
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
                                id="contact"
                                label="Contact Detail"
                                name="contact"
                                autoComplete="phone"
                                onChange={e=>setPhone(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={Role}
                                    autoWidth='true'
                                    label="Role"
                                    onChange={handleChange}
                                    Required
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Senior Researcher'}>Senior Researcher</MenuItem>
                                    <MenuItem value={'Technician'}>Technician</MenuItem>
                                    <MenuItem value={'Student'}>Student</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={!validateForm()}
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
                    </FormControl>
                </form>
            </div>
        </Container>
    <div style={{position:"relative",bottom:"-200px"}}>
        <Copyright/>
    </div>
</div>
    );
}