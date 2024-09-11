import { Link } from "react-router-dom";



const CustomNaviBar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
 
  <div className="collapse navbar-collapse" id="navbarNav"style={{padding:'10px'}}>
   
        <Link style={{padding:'10px'}} to={'/'} >Home</Link>
      
      <Link  style={{padding:'10px'}}  to={'/about'} >About</Link>
     
        <Link  style={{padding:'10px'}}  to={'categories'}>catageroy</Link>
</div>
</nav>
    )
}
export default CustomNaviBar