import React from 'react'
import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Products = ({ data, toAdd, onDelete, onDetail }) => {
  return (
    <Container className='mt-5'>
      <Button variant="danger" onClick={() => { localStorage.clear(); window.location.reload() }}>Logout</Button>
      <Button variant="primary" onClick={() => toAdd()}>Add Product</Button>

      <Table responsive className='mt-4'>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Description</th>
            <th>Sell Price</th>
            <th>Buy Price</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.product}</td>
                <td>{product.description}</td>
                <td>{product.sellPrice}</td>
                <td>{product.buyPrice}</td>
                <td> <img src={product.image} alt="ini gambar" width={50} height={50} /> </td>
                <td>
                  <Button variant="danger" onClick={() => onDelete(index)}>Delete</Button>
                  <Button variant="primary" className='ms-3' onClick={() => onDetail({ ...product, index: index })}>Edit</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Container>
  )
}

export default Products