import { Component } from "react";
import { Card } from "react-bootstrap";
import Basic from "./card";

export const Firstcomponent=()=> {
   
        return(
            <>


  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
      <Basic title="vidya" text="js"/>
      </div>
      <div className="col-sm-4">
      <Basic title="akshi" text="js"/>
      </div>
      <div className="col-sm-4">
      <Basic title="vidya" text="js"/>
      </div>
      <div className="col-sm-4">
      <Basic title="vidya" text="js"/>
      </div>
    </div>
  </div>
</>

         
        )
    }
