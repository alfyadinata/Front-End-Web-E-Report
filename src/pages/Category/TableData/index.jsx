import React from 'react';
import MaterialTable from 'material-table';
import baseApi from '../../../config/baseApi';


class TableData extends React.Component {
  state   = {
    columns: [
      { title: 'Category Name', field: 'name' },
      {
        title: 'Type',
        field: 'type',
        lookup: { 0: 'News', 1: 'Complaint', 2: 'Both' },
      },
    ],
    data: [],
  }

  handleCreate  = async (newData)  =>  {

    // console.info(newData)
      
    await baseApi.post('category/create', newData)
    .then(async res => {
      await this.getData()

    })
    .catch(err => {
      alert(err)
    })


  }

  handleUpdate  = async (id, newData)  =>  {

    await baseApi.patch(`/category/${id}/edit`, newData)
    .then(async res => {

      await this.getData()

    })
    .catch(err => {
      console.info(err)
    })

  }

  handleDelete  = async (id)  =>  {

    await baseApi.delete(`/category/${id}/delete`, id)
    .then(async res => {

      this.getData()

    })
    .catch(err => {
      console.info(err)
    })
  }

  getData     =   async ()  =>  {

    await baseApi.get('/category')
    .then(res => {
      console.log(res)
      this.setState({
        data: res.data.data
      })

    })
    .catch(err => {
      alert(err)
    })

  }

  componentDidMount() {
    
    this.getData()

  }



  render() {
    return (
        <MaterialTable
          title="Data Control"
          columns={this.state.columns}
          data={this.state.data}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                    // call create
                    this.handleCreate(newData)
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  // call update & send parameter
                  this.handleUpdate(oldData.id, newData)
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  // call delete
                  this.handleDelete(oldData.id)
                }, 600);
              }),
          }}
        />
    )
  }
}

export default TableData
