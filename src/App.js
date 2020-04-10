import React, {Component} from 'react'
import './App.css'
import Form from './components/list-form/list-form'
import Listbody from './components/list-body/list-body'

class App extends Component {

  state = {
    items: []
  };

  removeItem = id => {
    const items = this.state.items.filter(item =>{
      return item.id !== id
    })
    this.setState({items})
  }

  addItem = (item) => {
    item.id = Math.random() * 1000
    let items = this.state.items
    items.push(item)
    this.setState({items})
  }

  

  render() {
    return (
      <div className="App">
        <div className="App-container">
          <Form addItem={this.addItem} />
          <Listbody items={this.state.items} removeItem={this.removeItem} />
        </div>
      </div>
    )
  }
  
}

export default App
