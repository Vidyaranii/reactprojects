import { Link, Outlet } from "react-router-dom"

import React from "react"


const CatageroyScreen=()=>{

    return(
        <>
        <CustomNaviBar/>
        <h3>this is catageroy screen</h3>
     
        <Link style={{padding:'10px'}} to={'electronics'} ></Link>
        <Link style={{padding:'10px'}} to={'jewelery'} ></Link>
        <Outlet/>
        </>
    )
}
export default CatageroyScreen