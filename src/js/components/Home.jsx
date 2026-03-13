import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Test from "./Test";
import Digit from "./Digit";

//create your first component
const Home = ({seconds}) => {

	console.log("en home recibimos seconds con el valor: ",seconds)

	const handleClick = () =>{
		console.log('y me tocas...')
		alert('que haces?')
	}
	// condicionales
	// arrays 
	// %
	// strings


	return (
		<div className="text-center">
				{/* en los eventos, si ponemos directamente la funcion, la ponemos sin () */}
			<button className="btn btn-danger" onClick={handleClick} >
				no me toques.
			</button>

			<Test/>


		<Digit num={seconds}/>
		<Digit num={seconds}/>
		<Digit num={seconds}/>
		<Digit num={seconds}/>
		<Digit num={seconds}/>
		<Digit num={seconds}/>

		</div>
		
	);
};

export default Home;