/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditProduct = ({ data, onEdit }) => {
  const [form, setForm] = useState({
    'product': data.product,
    'description': data.description,
    'buyPrice': data.buyPrice,
    'sellPrice': data.sellPrice,
    'image': data.image,
  });

  const onSubmit = e => {
    e.preventDefault();
    onEdit(form)
  }

  const handleChange = e => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  const handleChangeImage = e => {
    let file = e.target.files[0];

    getBase64(file)
      .then(result => {
        setForm({
          ...form,
          image: result
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <Container className='mt-5'>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product</Form.Label>
          <Form.Control required value={form.product} type="text" name="product" placeholder="Enter product" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control required value={form.description} type="text" name="description" placeholder="Enter description" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Buy Price</Form.Label>
          <Form.Control required value={form.buyPrice} type="number" name="buyPrice" placeholder="Enter buyPrice" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Sell Price</Form.Label>
          <Form.Control required value={form.sellPrice} type="number" name="sellPrice" placeholder="Enter buyPrice" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" name="image" placeholder="Enter image" onChange={handleChangeImage} />
          <img src={form.image} alt="ini image" style={{ width: "50vw" }} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default EditProduct