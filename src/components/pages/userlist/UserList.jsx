import React, { useState } from 'react'
import './UserList.css'
import { DataGrid } from '@material-ui/data-grid'
import { rows } from '../../../mockData/tableData'
import { DeleteOutline } from "@material-ui/icons";
import { Link } from 'react-router-dom';

export default function UserList() {

    const [data,setData] = useState(rows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 110 },
        {
            field: 'user',
            headerName: 'Username',
            width: 180,
            // editable: true,
            renderCell: (params) => {
                return (
                    <div style={{"display":"flex", "alignItems":"center"}}>
                        <img src={params.row.avatar} style={{"height":"32px", "width":"32px", "borderRadius":"50%", "marginRight":"5px", "objectFit": "cover"}} alt=""/>
                        {params.row.username}
                    </div>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 180,
            // editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 140,
            editable: true,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 180,
            editable: true,
        },
        {
            field:'action',
            headerName:'Action',
            width:150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/user/${params.row.id}`}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
    
    ];
    return (
        <div className='userList'>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
