import{ BrowserRouter, Routes, Route }  from "react-router-dom"

import AboutScreen from "../screen/aboutscreen"
import HomeScreen from "../screen/homescreen"
import CatageroyScreen from "../screen/cascreen"
import ELectronicsScreen from "../screen/elescreen"
import JweleryScreen from "../screen/jewelery"




const NaviBar=()=>{
    return(
        <>
    <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/about" element={<AboutScreen/>}/>
     <Route path="categories " element={<CatageroyScreen/>}>
            <Route path="electronics" element={<ELectronicsScreen/>} />
            <Route path="jewelery" element={<JweleryScreen/>} />
            </Route>
        
       

    </Routes>
    </BrowserRouter>
    </>
)
}
export default NaviBar