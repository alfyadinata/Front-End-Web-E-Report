import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TableData from './TableData';
import Loader from '../../components/Loader';
import MyTable from '../../components/MyTable';
import { Button, Icon, Modal } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

class Complaint extends React.Component {
	state = {
		modal: false,
		isLoading: true,
		column: [
			{ title: 'User Email', field: 'users.email' },
			{ title: 'Title', field: 'description' },
			{
				title: 'Images',
				render: (rowData) => <img src={`http://localhost:5000/images/${rowData.foto}`} style={{ width: 50 }} />
			},
			{
				title: 'Latitude',
				field: 'latitude'
			},
			{
				title: 'Longitude',
				field: 'longitude'
			},
			{
				title: 'Action',
				render: (rowData) => (
					<Fragment>
						<Button
							color="inherit"
							variant="text"
							style={{ textTransform: 'none' }}
							size="small"
							endIcon={<Icon>delete</Icon>}
						/>
						<Button
							onClick={this.handleModal}
							color="inherit"
							variant="text"
							style={{ textTransform: 'none' }}
							size="small"
							endIcon={<Icon>send</Icon>}
						/>
					</Fragment>
				)
			}
		]
	};
	componentDidMount() {
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 1000);
	}

	handleModal = () => {
		this.setState({ modal: !this.state.modal });
	};
	render() {
		if (this.state.isLoading) {
			return <Loader />;
		}
		return (
			<Grid container spacing={3}>
				<h4>Management Complaint</h4>

				<Grid item xs={12}>
					<MyTable uri="complaint" editable={false} columns={this.state.column} />
				</Grid>
				<Modal
					open={this.state.modal}
					onClose={this.handleModal}
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
				>
					<h4>Hello</h4>
				</Modal>
			</Grid>
		);
	}
}

export default Complaint;
