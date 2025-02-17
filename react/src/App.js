import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Default from './components/Default'
import Details from './components/Details'
import ProductList from './components/ProductList'
import Modal from './components/Modal'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route 
            exact path="/react"
            component={ ProductList }
          />
          <Route 
            path="/react/details"
            component={ Details }
          />
          <Route
            path="/react/cart"
            component={ Cart }
          />
          <Route
            path="/react"
            component={ Default }
          />
        </Switch>
        <Modal></Modal>
      </React.Fragment>
    )
  }
}

export default App
