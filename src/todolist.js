import React, { Component, Fragment } from 'react'
import ToDoItem from './todoitem'

class toDoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      vlaueList: []
    }
  }
  handleChande(e) {
    // console.log('event',e.target);
    this.setState({
      inputValue: e.target.value
    })
  }
  addItem = () => {
    let list = [...this.state.vlaueList, this.state.inputValue]
    // list.push(this.state.inputValue)
    this.setState({
      vlaueList: list,
      inputValue: ''
    })
  }
  deleteItem = (idx) => {
    let _list = [...this.state.vlaueList]
    _list.splice(idx, 1)
    this.setState({
      vlaueList: _list
    })
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="please">请输入：</label>
          <input
            id="please"
            placeholder="hello react"
            value={this.state.inputValue}
            onChange={this.handleChande.bind(this)}></input>
          <button onClick={this.addItem}>提交</button>
        </div>
        {
          this.state.vlaueList.map((item, idx) => {
            return <ToDoItem
              key={idx}
              idx={idx}
              value={item}
              deleteItem={this.deleteItem.bind(this)} />
          })
        }
      </Fragment>
    )
  }
}
export default toDoList