import React from 'react'
import Grid from '@material-ui/core/Grid';
import TableData from './TableData';
import Loader from '../../components/Loader';
import { makeStyles } from '@material-ui/core/styles';
import baseApi from '../../config/baseApi';

class Category extends React.Component {

    state = {
        isLoading: true,
        name: '',
        type: '',
        isSuccess: false
     }

    componentDidMount() {

        setTimeout(() => {
        this.setState({isLoading:false})
        }, 1000);

    }

    handleSubmit    =   (e)  =>  {
        e.preventDefault()
        baseApi.post(`/category/create`, this.state)
         .then(res => {
            console.info(res)
            const {name, type}  =   this.state

            if (!name || !type) {
                
            }
    
            this.setState({
                isSuccess: true,
            })

        })
        .catch(err => {
            console.error(err)
        })
    }

    handleChange    =   (e)  =>  {

        const { name, value}    =   e.target
        console.log(e.target)
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    render() {

      if (this.state.isLoading) {
        return (
          <Loader />
        )
      }

      const classes     =   styles

      return (
        <Grid container spacing={3}>
            <h2>Management Category</h2>
            <Grid container>
                <Grid item xs={12}>
                    <TableData />
                </Grid>
            </Grid>
        </Grid>
        )
    }
}

const styles   =   makeStyles(theme => ({
    formControl: {
        margin: '20%'
    }
}))

export default Category