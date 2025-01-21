import { Link, Route, RouterProvider, Routes } from "react-router-dom";

export const Navbar = ({...props}) => {
    const Navbar = ["dashboard","tasks","issue","milestone","issues","documents","finance","form","pages","users"];
    return(
        <>
            
                {
                    Navbar.map((value)=>(
                        <Link to={`/${value}`}  key={value} {...props}>{value}</Link>
                    )
        )
                }
            
      
         </>
    )
}