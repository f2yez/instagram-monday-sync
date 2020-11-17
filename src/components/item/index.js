import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItem, updateItem } from './../../store/reducers/commonReducer';
import './index.scss';

class Item extends Component {
	
	constructor(props) {
		super(props);
	
		this.state = {
			name: "",
		};
	}

	// Check if current item equal the prev item
	componentDidMount() {
		const { item, match: { params: { id } } } = this.props;
		if (!item || (item && item.id !== id)) {
			this.props.getItem({ itemId: id });
		} 
	}

	// Handle submit update form
	handleSubmitForm = () => {
		const { name } = this.state;
		const { item } = this.props;

		if (name !== "") {
			this.props.updateItem({
				itemId: item.id,
				value: name,
				boardId: item.board.id,
				column: 'name'
			});
		}
	}

	// Handle change the name input and add it to the state
	handleChangeName = (e) => {
		const { value } = e.target;
		this.setState({ name: value });
	}

	render() {
		const { user, item } = this.props;
		return (<div className="item-area">
			<h2>Welcome { user.name },</h2>
			<form action="/action_page.php">
				<div className="form-group">
					<label htmlFor="name">Item Name:</label>
					<input type="text" value={ this.state.name || item.name } className="form-control" placeholder="Item Name" id="name" onChange={ this.handleChangeName } />
				</div>
				<div className="form-group">
				</div>
				<button type="button" className="btn btn-primary" onClick={ this.handleSubmitForm }>Submit</button>
			</form>
		</div>);
	}
}

const mapStateToProps = ({ common: { item, user } }) => ({ item, user });
const mapDispatch = {
	getItem,
	updateItem
}

  
export default connect(mapStateToProps, mapDispatch)(Item);