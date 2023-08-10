import React from 'react';


const date = new Date();





const Footer = () => {
  return (
    <footer>
      <p>Copyright {date.getFullYear()}</p>
      <p>All rights reserved</p>


    </footer>
  )
}

export default Footer;