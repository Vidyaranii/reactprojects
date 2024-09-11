



import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import CustomDNALoader from "../loader/loader";
import Basic from "../ca/card";

class BulbTask extends Component {
    state = {
        Data: [], 
        loading: false, 
    }

    clickHandler = () => {
        const newData = { src: "src/bulbtask/pic_bulboff.gif", name: `Bulb ${this.state.Data.length + 1}` };
        const updatedData = [...this.state.Data, newData];

        this.setState({
            Data: updatedData,
        });
    }

    removeHandler = (index) => {
        const filteredData = this.state.Data.filter((_, id) => id !== index);
        this.setState({
            Data: filteredData,
        });
    }
    click=()=>{
        if(src.match("bulbon")){
 src.vidya=  'src/bulbtask/pic_bulboff.gif'
        }else{
            Img.vidya = 'src\bulbtask\pic_bulbon.png'
        }
         
    }

    render() {
        return (
            <>
                <Button variant="primary" onClick={this.clickHandler}>Add Bulb</Button>
                <div className="container mt-5">
                    <div className="row">
                        {this.state.loading ? <CustomDNALoader /> :
                            this.state.Data.map((each, index) => (
                                <div className="col-sm-4" key={index} >
                                    <Basic title={each.name} ind={index} vidya={each.src}  removeHandler={this.removeHandler} >
                                        {/* <img vidya={each.src} alt={`Bulb ${index + 1}`} /> */}
                                    </Basic>
                                    <button  onClick={this.click}>bbb</button>
                                </div>
                            
                            ))
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default BulbTask;

                    