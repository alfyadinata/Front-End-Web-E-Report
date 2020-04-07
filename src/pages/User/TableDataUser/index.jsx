import React from 'react';
import MaterialTable from 'material-table';
import baseApi from '../../../config/baseApi';

class TableDataUser extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			columns: [
				{ title: 'User Name', field: 'name' },
				{ title: 'Email', field: 'email' },
				{ title: 'NIK', field: 'nik' },
				{
					title: 'Role',
					field: 'role_id',
					lookup: { 1: 'Super Admin', 2: 'Admin', 3: 'Reporter' }
				}
			],
			data: []
		};
	}

	getData = async () => {
		await baseApi
			.get('/users')
			.then((res) => {
				this.setState({ data: res.data.data });
			})
			.catch((err) => {
				console.info(err);
			});
	};

	componentDidMount() {
		this.getData();
	}

	handleCreate = async (newData) => {
		await baseApi
			.post('users/create', newData)
			.then(async (res) => {
				setTimeout(() => {
					this.getData();
				}, 100);
			})
			.catch((err) => {
				console.info(err);
				// alert('Something is Went Wrong')
			});
	};

	handleUpdate = async (id, newData) => {
		await baseApi
			.patch(`/users/${id}/edit`, newData)
			.then(async (res) => {
				await this.getData();
			})
			.catch((err) => {
				alert(err);
			});
	};

	handleDelete = async (id) => {
		await baseApi
			.delete(`/users/${id}/delete`)
			.then(() => {
				setTimeout(() => {
					this.getData();
				}, 100);
			})
			.catch((err) => {
				alert(err);
			});
	};

	render() {
		return (
			<MaterialTable
				title="Data Control"
				columns={this.state.columns}
				data={this.state.data}
				actions={[
					{
						icon: 'refresh',
						tooltip: 'Refresh Data',
						isFreeAction: true,
						onClick: () => this.tableRef.current && this.tableRef.current.onQueryChange()
					}
				]}
				options={{
					search: true,
					filtering: true,
					paginationType: 'stepped'
				}}
				editable={{
					onRowAdd: (newData) =>
						new Promise((resolve) => {
							setTimeout(() => {
								resolve();
								// call create
								this.handleCreate(newData);
							}, 600);
						}),
					onRowUpdate: (newData, oldData) =>
						new Promise((resolve) => {
							setTimeout(() => {
								resolve();
								// call update & send parameter
								this.handleUpdate(oldData.id, newData);
							}, 600);
						}),
					onRowDelete: (oldData) =>
						new Promise((resolve) => {
							setTimeout(() => {
								resolve();
								// call delete
								this.handleDelete(oldData.id);
							}, 600);
						})
				}}
			/>
		);
	}
}

export default TableDataUser;
