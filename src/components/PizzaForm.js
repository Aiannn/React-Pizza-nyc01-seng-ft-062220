import React from "react"

class PizzaForm extends React.Component {

  render() {
    return(
        <div className="form-row">
          <div className="col-5">
              <input onChange={e => this.props.updateHandler(e)} type="text" className="form-control" name="pizzaTopping" placeholder="Pizza Topping" value={
                  this.props.pizzaTopping
                }/>
          </div>
          <div className="col">
            <select value={this.props.pizzaSize} className="form-control" name="pizzaSize" onChange={e => this.props.updateHandler(e)}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col" >
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Vegetarian" name="vegetarian" checked={this.props.pizzaVegetarian ? true:false} onChange={e => this.props.updateHandler(e)}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Not Vegetarian" name="vegetarian" checked={this.props.pizzaVegetarian ? false:true} onChange={e => this.props.updateHandler(e)}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={() => this.props.renderEdited()}>Submit</button>
          </div>
        </div>
    )
  }
}

export default PizzaForm

  
