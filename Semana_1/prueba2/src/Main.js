import React, { Component } from "react";
import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";
import Principal from "./Principal";
import Peliculas from "./Peliculas";
import Contacto from "./Contacto";

//import Button from "bootstrap/Button";
//import { Button } from "bootstrap";


class Main extends Component{

	render() {
		return(
		<HashRouter>
		<div>
			<h1>Hola! Me llamo Erick</h1>
			<ul className="header">
				<li><NavLink to="/">Principal</NavLink></li>
				<li><NavLink to="/peliculas">Peliculas</NavLink></li>
				<li><NavLink to="/contacto">Contacto</NavLink></li>
			</ul> 

			<div className="content">
				<Route exact path="/" component={Principal}/>
				<Route path="/peliculas" component={Peliculas}/>
				<Route path="/contacto" component={Contacto}/>
			</div>

		</div>
		</HashRouter>
		);
	}

		
}

export default Main;