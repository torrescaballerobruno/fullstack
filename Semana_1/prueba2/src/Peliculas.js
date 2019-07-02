import React, { Component } from "react";

class Peliculas extends Component{

	render(){
		return(
			<div>
				<h2>Peliculas Favoritas</h2>
				<p>Aqui estan mis peliculas favoritas</p>
				<ol>
					<li>Star Wars</li>
					<li>Godzilla</li>
					<li>Transformers</li>
				</ol>
			</div>
		);
	}
}

export default Peliculas;