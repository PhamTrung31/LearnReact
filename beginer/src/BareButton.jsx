import React from 'react'

class BareButton extends React.Component {
  //event 2 value
  constructor(props) {
    super(props)
  }

  handleClick(event, value) {
    console.log(event, value)
  }

  //event
  // constructor(props) {
  //   super(props)
  // }

  // handleClick(event) {
  //   console.log(event)
  // }

  //binding
  // constructor(props) {
  //   super(props)
  // }

  // handleClick(value) {
  //   console.log(value)
  // }

  //non-currying
  // handleClick = (value) => {
  //   console.log(value)
  // }

  //currying
  // handleClick = (value) => () => {
  //   console.log(value)
  // }

  //full currying
  // handleClick = (value) => {
  //   console.log('Value ======> ', value) //se chay cung render vi khi chay ham thi se chay nhu ham thuc thi ke ca khi khong nhan button
  //   return () => {
  //     console.log(value)
  //   }
  // }

  render() {
    return (
      //non-currying
      // <div>
      //   <button onClick={() => this.handleClick('add')}>Add</button>
      //   <button onClick={() => this.handleClick('edit')}>Edit</button>
      //   <button onClick={() => this.handleClick('delete')}>Delete</button>
      // </div>

      // //currying
      // <div>
      //   <button onClick={this.handleClick('add')}>Add</button>
      //   <button onClick={this.handleClick('edit')}>Edit</button>
      //   <button onClick={this.handleClick('delete')}>Delete</button>
      // </div>

      //binding
      // <div>
      //   <button onClick={this.handleClick('add')}>Add</button>
      //   <button onClick={this.handleClick('edit')}>Edit</button>
      //   <button onClick={this.handleClick('delete')}>Delete</button>
      // </div>

      //direct-binding
      // <div>
      //   <button onClick={this.handleClick.bind(this, 'add')}>Add</button>
      //   <button onClick={this.handleClick.bind(this, 'edit')}>Edit</button>
      //   <button onClick={this.handleClick.bind(this, 'delete')}>Delete</button>
      // </div>

      //event
      // <div>
      //   <button onClick={this.handleClick}>Add</button>
      //   <button onClick={this.handleClick}>Edit</button>
      //   <button onClick={this.handleClick}>Delete</button>
      // </div>

      //event 2 value
      <div>
        <button onClick={(event) => this.handleClick(event, 'add')}>Add</button>
        <button onClick={(event) => this.handleClick(event, 'edit')}>Edit</button>
        <button onClick={(event) => this.handleClick(event, 'delete')}>Delete</button>
      </div>
    )
  }
}

export default BareButton
