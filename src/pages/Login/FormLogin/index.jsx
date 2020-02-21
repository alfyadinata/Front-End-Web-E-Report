import React from 'react'
import { Grid, TextField, Checkbox, Link, FormControlLabel, Button, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

class FormLogin extends React.Component {
    constructor(props){
        super()
        this.state  = {
            isSubmit: false,
            form: {
                email: '',
                password: ''
            }
        }
    }

    handleSubmit    =   (event)  =>  {
        event.preventDefault()
        console.log(this.state.form)
    }

    handleChange    =   (event) =>  {
        // console.info(event.target.name)
        let form        =   [event.target.name]
        let formValue   =   [event.target.value]
        console.log(formValue)
        this.setState({
            ...this.state,
            form: {
                [event.target.name]: event.target.value
            }

        })
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
                name="email"
                autoComplete="email"
                onChange={this.handleChange}
                name="email"
                // value={this.state.form.email}
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
                name="password"
                onChange={this.handleChange}
                // value={this.state.form.password}
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

export default FormLogin