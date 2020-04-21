import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import Box from '../../components/Box';
import { ArgumentAxis, ValueAxis, Chart, LineSeries } from '@devexpress/dx-react-chart-material-ui';

class Dashboard extends React.Component {
	render() {
		const data = [ { argument: 1, value: 10 }, { argument: 2, value: 20 }, { argument: 3, value: 30 } ];
		return (
			<Grid container spacing={3}>
				<Grid item xs={12} lg={12} md={12}>
					<h4>Dashboard</h4>
				</Grid>
				<Grid item xs={12} md={4} lg={3}>
					<Box title="Category" count="20" />
				</Grid>
				<Grid item xs={12} md={4} lg={3}>
					<Box title="User" count="15" />
				</Grid>
				<Grid item xs={12} md={4} lg={3}>
					<Box title="Respon" count="20" />
				</Grid>
				<Grid item xs={12} md={4} lg={3}>
					<Box title="Complaint" count="20" />
				</Grid>
				<Grid item xs={12} md={12} lg={12}>
					<Paper>
						<Chart data={data}>
							<ArgumentAxis />
							<ValueAxis />
							<LineSeries valueField="value" argumentField="argument" />
						</Chart>
					</Paper>
				</Grid>
			</Grid>
		);
	}
}

export default Dashboard;
