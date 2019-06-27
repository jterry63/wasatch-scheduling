import React from 'react';

class Navbar extends React.Component {
  render() {
  	return (
  		<nav className="navbar navbar-expand-lg navbar-light theme-nav fixed-top">
		   <div id="navbar-main" className="container">
		      <a className="navbar-brand" href={`${process.env.PUBLIC_URL}/`}><img src="assets/images/logo.png" alt="logo" style={{ height: "64px", width: "64px"}} /></a>
		      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		         <span className="navbar-toggler-icon"></span>
		      </button>
		      <div className="collapse navbar-collapse default-nav" id="navbarSupportedContent">
		         	<ul className="navbar-nav ml-auto" id="mymenu">
			            <li className="nav-item">
			               <a className="nav-link" href="#home">Home</a>
			            </li>
			            <li className="nav-item">
			               <a className="nav-link" href="#features">Features</a>
			            </li>
			         
			           
			            <li className="nav-item">
			               <a className="nav-link" href="#pricing">Pricing</a>
			            </li>
			         
			            <li className="nav-item">
			               <a className="nav-link" href="#login">Log In</a>
			            </li>
			          
		         	</ul>
		      </div>
		   </div>
		</nav>
  	);
  }
}

export default Navbar;