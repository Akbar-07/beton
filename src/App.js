import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom';
import Zakazbeton2 from '../src/js/Zakazbeton2'
import Zakazbeton from '../src/js/Zakazbeton'
import Zakazbeton3 from '../src/js/Zakazbeton3'
import Zakazbeton4 from '../src/js/Zakazbeton4';
import Zakazbeton5 from '../src/js/Zakazbeton5';
import Zakazbeton6 from '../src/js/Zakazbeton6';
import Zakazbeton7 from '../src/js/Zakazbeton7';
import Zakazbeton8 from '../src/js/Zakazbeton8';
import Zakazbeton9 from '../src/js/Zakazbeton9';
import Navbar from './js/Navbar';
import './App.css';
import News from './js/News';
import Login from './js/Login';


class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
		<Routes>
				<Route exact path='/' element={< Login />}></Route>
				<Route exact path='/Zakazbeton' element={< Zakazbeton />}></Route>
				<Route exact path='/zakazbeton2' element={< Zakazbeton2 />}></Route>
				<Route exact path='/zakazbeton3' element={< Zakazbeton3 />}></Route>
				<Route export path='/zakazbeton4' element={<Zakazbeton4/>}></Route>
				<Route export path='/zakazbeton5' element={<Zakazbeton5/>}></Route>
				<Route export path='/zakazbeton6' element={<Zakazbeton6/>}></Route>
				<Route export path='/zakazbeton7' element={<Zakazbeton7/>}></Route>
				<Route export path='/zakazbeton8' element={<Zakazbeton8/>}></Route>
				<Route export path='/zakazbeton9' element={<Zakazbeton9/>}></Route>

		</Routes>
		</div>
	</Router>
);
}
}

export default App;
