import React from 'react';
import MaterialTable from 'material-table';
import baseApi from '../../../config/baseApi';


class TableData extends React.Component {
  state   = {
    columns: [
      { title: 'Ip', field: 'ip' },
      { title: 'Activity', field: 'message' },
      { title: 'User Email', field: 'users.email' },
      { title: 'Time', field: 'createdAt' },

    ],
    data: [],
  }

  handleCreate  = async (newData)  =>  {

    await baseApi.post('log/create', newData)
    .then(async res => {

      setTimeout(() => {
        this.getData()
      }, 100);

    })
    .catch(err => {
      alert(err)
    })


  }

  handleUpdate  = async (id, newData)  =>  {

    await baseApi.patch(`/log/${id}/edit`, newData)
    .then(async res => {

      await this.getData()

    })
    .catch(err => {
      console.info(err)
    })

  }

  handleDelete  = async (id)  =>  {

    await baseApi.delete(`/log/${id}/delete`, id)
    .then(async res => {

      setTimeout(() => {
        this.getData()        
      }, 100);


    })
    .catch(err => {
      console.info(err)
    })
  }

  getData     =   async ()  =>  {

    await baseApi.get('/log')
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
          options={{
            filtering: true
          }}
        />
    )
  }
}

export default TableData
