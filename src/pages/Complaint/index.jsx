import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Loader from '../../components/Loader';
import MyTable from '../../components/MyTable';
import { Button, Icon, TextField, FormControl, FormGroup, InputLabel, Select, MenuItem } from '@material-ui/core';
import Modal from '../../components/Modal/index';
import baseApi from '../../config/baseApi';

class Complaint extends React.Component {
	state = {
		form: {
			complaint_id: '',
			status: '0',
			message: ''
		},
		userEmail: '',
		titleComplaint: '',
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
							onClick={() => this.handleModal(rowData.id, rowData.users.email, rowData.description)}
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

	handleModal = (id, email, title) => {
		// alert(id);
		this.setState({
			...this.state,
			modal: true,
			userEmail: email,
			titleComplaint: title,
			form: {
				complaint_id: id
			}
		});
	};

	handleCloseModal = () => {
		this.setState({
			...this.state,
			modal: false,
			form: {
				complaint_id: ''
			}
		});
	};

	handleChange = (event) => {
		let formData = { ...this.state.form };
		formData[event.target.name] = event.target.value;
		this.setState({
			form: formData
		});
	};

	handleSubmit = async () => {
		let id = await this.state.form.complaint_id;

		console.log(this.state.form);

		await baseApi
			.post(`/response/${id}`, this.state.form)
			.then((res) => {
				this.componentDidMount();
				this.handleCloseModal();
				alert('success giving a response');
			})
			.catch((err) => {
				alert(err);
				console.log(err);
			});
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
					onClose={this.handleCloseModal}
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					style={{ padding: 300 }}
					title="Response Complaint"
				>
					<div style={{ padding: 10 }}>
						<div>
							<h4>Info Complaint :</h4>
							<div>
								<FormGroup>
									<FormControl>
										<TextField
											placeholder="User Email"
											value={this.state.userEmail}
											label="User Email"
											readonly
										/>
									</FormControl>
									<FormControl>
										<TextField
											placeholder="Title Complaint"
											value={this.state.titleComplaint}
											label="Title Complaint"
											readonly
										/>
									</FormControl>
								</FormGroup>
							</div>
							<h4>Response :</h4>
							<div>
								<FormGroup>
									<FormControl>
										<TextField
											name="message"
											onChange={this.handleChange}
											value={this.state.form.message}
											placeholder="Message"
											label="Message"
											multiline={true}
											rows={2}
										/>
									</FormControl>
									<br />
									<FormControl>
										<InputLabel id="select">Status</InputLabel>
										<Select
											value={this.state.form.status}
											name="status"
											onChange={this.handleChange}
											labelId="select"
											required
										>
											<MenuItem value="0">Denied</MenuItem>
											<MenuItem value="1">Accept</MenuItem>
										</Select>
									</FormControl>
								</FormGroup>
								<br />
								<center>
									<Button variant="contained" onClick={this.handleSubmit} color="primary">
										Submit
									</Button>
								</center>
							</div>
						</div>
					</div>
				</Modal>
			</Grid>
		);
	}
}

const styles = {
	modalBody: {
		backgroundColor: 'white',
		padding: 100
	}
};

export default Complaint;
