import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TableData from './TableData';
import Loader from '../../components/Loader';
import { Button } from '@material-ui/core';

class Category extends React.Component {
  state = {
    isLoading: true
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading:false})
    }, 1000);
  }
    render() {
      if (this.state.isLoading) {
        return (
          <Loader />
        )
      }
        return (
        <Grid container spacing={3}>
            <h4>Management Category</h4>
            <Grid item xs={12}>
              <Button variant="contained" color="inherit">Create New</Button>
            </Grid>
            <TableData />
        </Grid>
        )
    }
}

export default Category