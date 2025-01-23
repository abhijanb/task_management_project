import { Link } from "react-router-dom";

export const Navbar = ({...props}) => {
    const Navbar = [
        { name: "dashboard"},
        { name: "tasks"},
        { name: "issue"},
        { name: "milestone" },
        { name: "issues"},
        { name: "documents"},
        { name: "finance"},
        { name: "form"},
        { name: "pages"},
        { name: "users"}
      ];
          return(
        <>
            
                {
                    Navbar.map((value)=>(
                        <Link to={`/${value.name}`}  key={value.name} {...props}>{value.name}</Link>
                    )
        )
                }
            
      
         </>
    )
}


