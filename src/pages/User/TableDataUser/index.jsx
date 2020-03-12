import React from 'react';
import MaterialTable from 'material-table';
import baseApi from '../../../config/baseApi';


class TableDataUser extends React.Component {
  state   = {
    columns: [
      { title: 'User Name', field: 'name' },
      { title: 'Email', field: 'email'},
      { title: 'NIK', field: 'nik'},
      {
        title: 'Role',
        field: 'role_id',
        lookup: { 1: 'Super Admin', 2: 'Admin', 3: 'Reporter' },
      },
    ],
    data: [],
  }

  handleCreate  = async (newData)  =>  {

    // console.info(newData)
      
    await baseApi.post('users/create', newData)
    .then(async res => {

      setTimeout(() => {
        this.getData()
      }, 100);

    })
    .catch(err => {
      console.info(err)
      // alert('Something is Went Wrong')

    })

  }

  handleUpdate  = async (id, newData)  =>  {

    await baseApi.patch(`/users/${id}/edit`, newData)
    .then(async res => {

      await this.getData()

    })
    .catch(err => {
      alert(err)
    })

  }

  handleDelete  = async (id)  =>  {

    await baseApi.delete(`/users/${id}/delete`)
    .then(async => {

      setTimeout(() => {
        this.getData()        
      }, 100);

    })
    .catch(err => {
      alert(err)
    })
  }

  getData     =   async ()  =>  {

    await baseApi.get('/users')
    .then(res => {
      console.log(res)
      this.setState({
        data: res.data.data.docs
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
          data={query =>
            new Promise((resolve, reject) => {
              baseApi.get(`/users?per_page=${query.pageSize}&page=${query.page+1}`)
                .then(result => {
                  this.setState({
                    data: result.data.data.docs
                  })
                  resolve({
                    data: this.state.data,
                    page: result.data.data.pages - 1,
                    totalCount: result.data.data.total,
                  })
                })
            })
          }  
          options={{
            filtering: true
          }}
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

export default TableDataUser
