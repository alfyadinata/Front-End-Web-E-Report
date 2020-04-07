import React from 'react';
import MaterialTable from 'material-table';
import baseApi from '../../config/baseApi';

class MyTable extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			columns: this.props.columns,
			uri: this.props.uri,
			data: [],
			editable: this.props.editable
		};

		this.tableRef = React.createRef();
	}

	getData = async () => {
		await baseApi
			.get(`/${this.state.uri}`)
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
			.post(`/${this.state.uri}/create`, newData)
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
			.patch(`/${this.state.uri}/${id}/edit`, newData)
			.then(async (res) => {
				await this.getData();
			})
			.catch((err) => {
				alert(err);
			});
	};

	handleDelete = async (id) => {
		await baseApi
			.delete(`/${this.state.uri}/${id}/delete`)
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
				tableRef={this.tableRef}
				columns={this.state.columns}
				data={this.state.data}
				actions={[
					{
						icon: 'refresh',
						tooltip: 'Refresh Data',
						isFreeAction: true,
						onClick: () => this.tableRef.current && this.getData()
					}
				]}
				options={{
					search: true,
					filtering: true,
					paginationType: 'stepped'
				}}
				editable={
					this.state.editable == false ? (
						false
					) : (
						{
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
						}
					)
				}
			/>
		);
	}
}

export default MyTable;
