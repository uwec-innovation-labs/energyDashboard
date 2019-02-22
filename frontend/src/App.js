import React, { Component } from 'react'
import './styles/App.css'
import Home from './components/Home'
import AppNav from './components/AppNav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNav />
        <Home />
      </div>
    )
  }
}

export default App
