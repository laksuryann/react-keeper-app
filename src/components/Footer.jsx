import React from "react";

const year = new Date().getFullYear();

function Footer(){
    return <footer>
    <p>copyright @ <span> &#169; </span> {year} </p>
    </footer>;
}

export default Footer;