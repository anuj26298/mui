import React from 'react'
import './ProductList.css'
import { Link } from 'react-router-dom'
import { DeleteOutline } from '@material-ui/icons'
import { DataGrid } from '@material-ui/data-grid'
import { productRows } from '../../../mockData/productData.js'
import { useState } from 'react'

export default function Products() {

  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 110 },
    {
        field: 'product',
        headerName: 'Product',
        width: 180,
        // editable: true,
        renderCell: (params) => {
            return (
                <div style={{"display":"flex", "alignItems":"center"}}>
                    <img src={params.row.img} style={{"height":"32px", "width":"32px", "borderRadius":"50%", "marginRight":"5px", "objectFit": "cover"}} alt=""/>
                    {params.row.name}
                </div>
            )
        }
    },
    {
        field: 'stock',
        headerName: 'Stock',
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
        field: 'price',
        headerName: 'Price',
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
                    <Link to={`/product/${params.row.id}`}>
                        <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)} />
                </>
            )
        }
    }

];

  return (
    <div className='products'>
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
