import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: '',
    title: '',
    category: '',
    description: '',
    image: '',
    price: '',
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, status } = await axios.get("https://fakestoreapi.com/products");
      if (status === 200) {
        setProducts(data);
      }
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  };

  const homeHandler = () => {
    setFinalData(products);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFinalData([...finalData, newProduct]);
    setNewProduct({
      id: '',
      title: '',
      category: '',
      description: '',
      image: '',
      price: '',
    });
    setShowModal(false);
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <table style={{ border: "1px solid black", width: "100%", marginBottom: "20px" }}>
        <tbody>
          <tr>
            <td>logo</td>
            <td>description</td>
            <td>icon</td>
          </tr>
          <tr>
            <td>
              <Button onClick={homeHandler}>Home</Button>
            </td>
            <td>
              <Button onClick={handleShowModal}>Add</Button>
              <div style={{ height: "200px", overflowY: "scroll" }}>
                <table style={{ border: "1px solid black", width: "100%" }}>
                  <thead>
                    <tr>
                      <th>Sl.No.</th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Description</th>
                      <th>Image</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {finalData.map((each, index) => (
                      <tr key={index} style={{ border: "1px solid black" }}>
                        <td>{each.id}</td>
                        <td>{each.title}</td>
                        <td>{each.category}</td>
                        <td>{each.description}</td>
                        <td>
                          <img src={each.image} alt="" width={100} />
                        </td>
                        <td>{each.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
          <tr>
            <td>about</td>
          </tr>
          <tr>
            <td>contact</td>
          </tr>
        </tbody>
      </table>


      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formId">
              <Form.Label>Product ID</Form.Label>
              <Form.Control
                type="text"
                name="id"
                value={newProduct.id}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newProduct.title}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={newProduct.category}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={newProduct.description}
                onChange={handleChange}
                required
              />
            </Form.Group>

       

           

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProductTable;
