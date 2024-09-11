import axios from "axios";
import { Component } from "react";

class Table extends Component {
  state = {
    products: [],
    finalData: [],
    count: 0,
    error: fals,
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    try {
      const { data, status } = await axios.get(
        "https://fakestoreapi.com/products"
      );
      if (status == 200) {
        this.setState({
          products: data,
        });
      }
    } catch {
      console.error(err);
      this.setState({
        error: true,
      });
    }
  };
  addHandler = () => {
    const { products, finalData, count } = this.state;
    const newData = [...finalData, products[count]];
    this.setState({
      finalData: newData,
      count: this.state.count + 1,
    });
  };
  homeHandeler=()=>{
    this.setState({
      finalData: this.state.products,
    });
   
  }



  render() {
    return (
      <div style={{ border: "1px solid black" }}>
       <table style={{ border: "1px solid black", width: "100%", marginBottom: "20px" }}>
        <tr >
            <td>logo</td>
            <td>description</td>
            <td>icon</td>
        </tr>
        <tr  >
            <td ><button onClick={this.homeHandeler}>home</button></td>
            <td>    <button    onClick={this.addHandler}>Add</button>
            <div style={{ height: "200px", overflowY: "scroll"}}>
        <table style={{border: "1px solid black"}}>
          <tr>  
            <th>Sl.No.</th>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
          {this.state.finalData.map((each) => {
            return (
             
              <tr style={{border: "1px solid black"}}>
                <td>{each.id}</td>
                <td>{each.title}</td>
                <td>{each.category}</td>
                <td>{each.description}</td>
                <td>
                  <img src={each.image} alt="" width={100} />
                </td>
                <td>
                  <button>{each.price}</button>
                </td>
       
              </tr>
             
            );
          })}
        </table>
        </div> 
      
        </td>

        </tr>
        <tr >
            <td>about</td>
        </tr>
        <tr >
            <td>contact</td>
        </tr>

       </table>
    
      </div>
    );
  }
}
export default Table;