import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUp from './pages/SignUp'
import PortFolio from './pages/PortFolio';
import RealEstate from './pages/RealEstate';
import Communication from './pages/Communication';
import jsonUsers from './data/users'
import jsonStocks from './data/stocks'
import jsonEstate from './data/properties';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: null,
      allUsers: jsonUsers,
      allStocks: jsonStocks,
      activeUserStocks: []
      // hack for starting with my stocks
      // activeUserStocks: jsonStocks.filter(stock => stock.userId === 1)
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.addStock = this.addStock.bind(this);

    console.log(this.state.allStocks);
  }

  handleLogout() {
    this.setState({activeUser: null});
  }

  handleLogin(activeUser) {

    const activeUserStocks = this.state.allStocks.filter(stock => stock.userId === activeUser.id)

    this.setState({activeUser, activeUserStocks});
  }

  addStock(newStock) {
    //const {activeUser, allStocks, activeUserStocks} this.state.activeUser
    // 1) add id and user to the stock
    newStock.userId = this.state.activeUser.id;
    newStock.id = this.state.allStocks[this.state.allStocks.length - 1].id + 1;

    // 2) update all stocks and active user stocks
    const allStocks = this.state.allStocks.concat(newStock);
    const activeUserStocks = this.state.activeUserStocks.concat(newStock);

    this.setState({allStocks, activeUserStocks});
  }

  render() {

    const { activeUser, allUsers, activeUserStocks } = this.state;
    // const activeUser = this.state.activeUser;

  return (
    <Switch>
      <Route exact path="/">
        <HomePage activeUser={activeUser} handleLogout={this.handleLogout} />
      </Route>
      <Route path="/login">
        <LoginPage users={allUsers} handleLogin={this.handleLogin}/>
      </Route>
      <Route path="/Signup">
        <SignUp users={allUsers} handleLogin={this.handleLogin}/>
      </Route>
      <Route path="/portfolio">
        <PortFolio stocks={activeUserStocks} activeUser={activeUser} handleLogout={this.handleLogout} addStock={this.addStock}/>
      </Route>
      <Route path="/realestate">
        <RealEstate properties={activeUserStocks} activeUser={activeUser} handleLogout={this.handleLogout} addStock={this.addStock}/>
      </Route>
      <Route path="/communication">
        <Communication stocks={activeUserStocks} activeUser={activeUser} handleLogout={this.handleLogout} addStock={this.addStock}/>
      </Route>
    </Switch>
  );
  }
}

export default App;
