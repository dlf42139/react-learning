import React, { Component } from 'react'

class ToDoItem extends Component {
	render() {
		const { deleteItem, idx, value } = this.props
		return <div onClick={() => { deleteItem(idx) }}>
			{idx}) {value}
		</div>
	}
}

export default ToDoItem