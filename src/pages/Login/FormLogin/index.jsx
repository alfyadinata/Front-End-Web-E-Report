import React from 'react'
import { Grid, TextField, Checkbox, Link, FormControlLabel, Button, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// config
import { withAuth } from '../../../context/AuthContext'


class FormLogin extends React.Component {

    state   =   {
        email: '',
        password: '',
    }

    handleChange    =   (e)  =>  {

        const { name, value}    =   e.target
        this.setState({
            [name]: value
        })

    }

    handleSubmit    =   (e)  =>  {

        e.preventDefault()
        this.props.login(this.state)

    }

    render() {
        return (
        <form className={classes.form} noValidate method="post">
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleChange}
                value={this.state.password}
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
            {/* <button onClick={this.handleSubmit}>
                submits
            </button> */}
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.handleSubmit}>
                Sign In
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                    </Grid>
                    <Grid item>
                    <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
        </form>
        )
    }
}

const classes   =   makeStyles({
    form: {
        
    }
})

export default withAuth(FormLogin)