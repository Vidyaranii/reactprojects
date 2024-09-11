import React, { Component } from "react";
import axios from "axios";
import Modal from "./model";// Assuming Modal is in the same directory

class Tableee extends Component {
  state = {
    products: [],
    finalData: [],
    count: 0,
    error: false,
    showModal: false,
    formData: {
      title: "",
      category: "",
      description: "",
      image: "",
      price: "",
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const { data, status } = await axios.get(
        "https://fakestoreapi.com/products"
      );
      if (status === 200) {
        this.setState({
          products: data,
        });
      }
    } catch (err) {
      console.error(err);
      this.setState({
        error: true,
      });
    }
  };

  addHandler = () => {
    this.setState({ showModal: true });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { finalData, formData, count } = this.state;


    const newEntry = { id: count + 1, ...formData };

    this.setState({
      finalData: [...finalData, newEntry],
      count: count + 1,
      showModal: false,
      formData: {
        title: "",
        category: "",
        description: "",
        image: "",
        price: "",
      },
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  removeHandler = (idValue) => {
    const filteredData = this.state.finalData.filter(
      (item) => item.id !== idValue
    );
    this.setState({
      finalData: filteredData,
    });
  };

  // New method to display all products when Home is clicked
  homeHandler = () => {
    this.setState({
      finalData: this.state.products,
    });
  };

  render() {
    return (
      <div style={{ border: "1px solid black" }}>
        <table
          style={{
            border: "1px solid black",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <thead>
            <tr>
              <td>Logo</td>
              <td>Description</td>
              <td>Icon</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Home</td>
              <td>
                <button onClick={this.homeHandler}>Display All Products</button>
                <button onClick={this.addHandler}>Add</button>
                <div style={{ height: "200px", overflowY: "scroll" }}>
                  <table style={{ border: "1px solid black" }}>
                    <thead>
                      <tr>
                        <th>Sl.No.</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.finalData.map((each) => {
                        return (
                          <tr key={each.id} style={{ border: "1px solid black" }}>
                            <td>{each.id}</td>
                            <td>{each.title}</td>
                            <td>{each.category}</td>
                            <td>{each.description}</td>
                            <td>
                              <img src={each.image} alt="" width={100} />
                            </td>
                            <td>{each.price}</td>
                            <td>
                              <button
                                onClick={() => this.removeHandler(each.id)}
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
            <tr>
              <td>About</td>
            </tr>
            <tr>
              <td>Contact</td>
            </tr>
          </tbody>
        </table>
        <Modal
          show={this.state.showModal}
          onClose={this.closeModal}
          formData={this.state.formData}
          onChange={this.handleInputChange}
          onSubmit={this.handleFormSubmit}
        />
      </div>
    );
  }
}

export default Tableee;
