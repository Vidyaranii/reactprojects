import React from "react";

class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div style={modalStyle}>
        <div style={modalContentStyle}>
          <h2>Add New Product</h2>
          <form onSubmit={this.props.onSubmit}>
            <div>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={this.props.formData.title}
                onChange={this.props.onChange}
                required
              />
            </div>
            <div>
              <label>Category:</label>
              <input
                type="text"
                name="category"
                value={this.props.formData.category}
                onChange={this.props.onChange}
                required
              />
            </div>
            <div>
              <label>Description:</label>
              <input
                type="text"
                name="description"
                value={this.props.formData.description}
                onChange={this.props.onChange}
                required
              />
            </div>
            <div>
              <label>Image URL:</label>
              <input
                type="text"
                name="image"
                value={this.props.formData.image}
                onChange={this.props.onChange}
                required
              />
            </div>
            <div>
              <label>Price:</label>
              <input
                type="number"
                name="price"
                value={this.props.formData.price}
                onChange={this.props.onChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={this.props.onClose}>
              Close
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "20px",
  zIndex: 1000,
  border: "1px solid black",
};

const modalContentStyle = {
  display: "flex",
  flexDirection: "column",
};

export default Modal;
