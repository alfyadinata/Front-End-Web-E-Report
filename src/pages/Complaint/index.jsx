import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TableData from './TableData';

class Complaint extends React.Component {
    render() {
        return (
            <Grid container spacing={3}>
                {/* <Grid item xs={12} md={8} lg={9}> */}
                {/* <Paper> */}
                    <h4>Management Complaint</h4>
                    {/* <Chart /> */}
                {/* </Paper> */}
                {/* </Grid> */}
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                <Paper>
                    {/* <Deposits /> */}
                </Paper>
                </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper>
                {/* <Orders /> */}
              </Paper>
            </Grid>
            <TableData />
          </Grid>
        )
    }
}

export default Complaint