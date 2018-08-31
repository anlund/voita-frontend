import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { MainContainer } from "./pages/main/MainContainer";
import { AboutContainer } from "./pages/about/AboutContainer";
import { LoginContainer } from "./pages/login/LoginContainer";
import { AppNavbar } from "./navbar/AppNavbar";

class App extends Component {

	constructor(props: object) {
	    super(props);

	    this.state = {
	        isOpen: false
	    };
	}

	toggle() {
	    this.setState({
	        isOpen: !this.state.isOpen
	    });
	}

	close() {
	    this.setState({
	        isOpen: false
	    });
	}

	render() {
	return (
	  <div className="App">
	  	<div>
	  		<AppNavbar isOpen={this.state.isOpen} toggle={() => this.toggle()} close={() => this.close()}/>
	  		<Switch>
			  <Route exact path='/' component={MainContainer}/>
			  <Route path='/about' component={AboutContainer}/>
			  <Route path='/login' component={LoginContainer}/>
			</Switch>
	    </div>
	  </div>
	);
	}
}

export default App;
