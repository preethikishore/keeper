import React from "react";
function Header()
{
    var year = new Date().getFullYear();
    return <footer>    
        <p>copyright@{year}</p>
    </footer>
   
}
export default Header