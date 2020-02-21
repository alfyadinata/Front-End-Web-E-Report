import React from 'react'
import { CircularProgress } from '@material-ui/core'

function Loader() {
    return (
        <center>
            <CircularProgress color="primary" />
        </center>
    )
}

export default Loader