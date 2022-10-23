import './App.css';
import Login from './pages/login';
import React, { useEffect, useState } from 'react';
import Products from './pages/products';
import DataProducts from './dummy/products';
import AddProduct from './pages/addProduct';
import EditProduct from './pages/editProduct';

function App() {
  const [selectedPage, setSelectedPage] = useState('Login');
  const [products, setProducts] = useState(DataProducts);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    if(localStorage.getItem("is_login")){
      setSelectedPage('Products')
    }else{
      setSelectedPage('Login')
    }
  },[])

  const handleAdd = product => {
    setProducts([
      ...products, product
    ])
    setSelectedPage('Products')
  }

  const handleDelete = index => {
    let arrayTemp = products

    if (index > -1) { 
      arrayTemp.splice(index, 1); 
    }
    
    setProducts([...arrayTemp])
  }

  const handleEdit = (form) => {
    let arrayTemp = products

    arrayTemp[detail.index] = form;
    setProducts([...arrayTemp])
    setSelectedPage('Products')

  }

  const handleUpdate = detail => {
    setDetail(detail)
    setSelectedPage('EditProducts')
  }

  if(selectedPage === 'Products') return <Products data={products} toAdd={() => setSelectedPage('AddProducts')} onDelete={handleDelete} onDetail={handleUpdate} />

  if(selectedPage === 'AddProducts') return <AddProduct onAdd={handleAdd} />

  if(selectedPage === 'EditProducts') return <EditProduct data={detail}  onEdit={handleEdit} />

  return <Login onSubmit={() => setSelectedPage('Products')} />

}

export default App;
