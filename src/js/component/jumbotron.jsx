import React from "react";

const Jumbotron = () => {
	return (
		<div className="jumbotron bg-secondary mx-2 my-4 px-4 pb-5 rounded">
  <h1 className="display-4">A Warm Welcome!</h1>
  {/* <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/> */}
  <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>
  <p className="lead">
    <a className="btn btn-primary btn-md" href="https://www.pinrro.com/" role="button">Call to action!</a>
  </p>
</div>
	);
};

export default Jumbotron;

