import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzaArray: [],
    pizzaId: 0,
    pizzaTopping: '',
    pizzaSize: 'Small',
    pizzaVegetarian: true
  }

  renderEdited = () => {
    const pizzaChange = {
      topping: this.state.pizzaTopping,
      size: this.state.pizzaSize,
      vegetarian: this.state.pizzaVegetarian
    }

    let obj = {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(pizzaChange)
    }

    fetch(`http://localhost:3000/pizzas/${this.state.pizzaId}`, obj)
    .then(response=>response.json())
    .then(this.getPizzas())
  }

  //Responsible for RENDER
  componentDidMount() {
    this.getPizzas()
  }

  //Responsible for RENDER
  getPizzas = () => {
    fetch('http://localhost:3000/pizzas')
    .then(response => response.json())
    .then(pizzas => {
      this.setState({
        pizzaArray: pizzas
      })
    })
  }

  fillForm = (topping, size, veg, id) => {
    this.setState({
      pizzaTopping: topping,
      pizzaSize: size,
      pizzaVegetarian: veg,
      pizzaId: id
    })
  }

  updateHandler = (e) => {
    if (e.target.name === 'vegetarian') {
      this.setState({
        pizzaVegetarian: (e.target.value==="Vegetarian"? true:false)
      })
    }
    else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm updateHandler={this.updateHandler} renderEdited={this.renderEdited} pizzaVegetarian={this.state.pizzaVegetarian} pizzaSize={this.state.pizzaSize} pizzaTopping={this.state.pizzaTopping}/>
        <PizzaList fillForm={this.fillForm} pizzas={this.state.pizzaArray}/>
      </Fragment>
    );
  }
}

export default App;
