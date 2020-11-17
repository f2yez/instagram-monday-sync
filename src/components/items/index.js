import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBoards, getItems } from './../../store/reducers/commonReducer';
import Moment from 'moment';
import './index.scss';

class Items extends Component {

	state = {
		boardId: null,
	}

	// Check if boards have a values or empty
	componentDidMount() {
		if (!this.props.boards.length) this.props.getBoards();
	}

	// Handle on change selected board and get items after selected
	handleOnChangeBoard = (e) => this.setState({ boardId : e.target.value}, () => {
		if (this.state.boardId) this.props.getItems({boardId: this.state.boardId});
	});

	// Tender Select option by item data
	renderSelectBoardsOptions = () => this.props.boards.map(board => <option key={board.id} value={board.id}>{ board.name }</option>);
	
	// Render list of items
	renderListGroupContent = () => {
		if (this.props.items.length > 0) {
			return this.props.items.map(item => <div key={ item.id }  className="list-group">
					<a href={`/items/${item.id}`} className="list-group-item">
						<h4 className="list-group-item-heading">{item.name}</h4>
						<p className="list-group-item-text"><b>Created At</b>: { Moment(item.created_at, 'YYYY-MM-DD HH:mm A UTC').format('DD-MM-YYYY')} </p>
						{item.creator ? <p className="list-group-item-text"><b>Created By: </b>{item.creator.name} </p> : ''}
					</a>
				</div>
			);
		}

		return <h3>Empty, Select Board contains items</h3>
	}

	render() {
		const { user } = this.props;
			return (<div className="items-area">
				<h2>Welcome { user.name }</h2>
				<p>Select from the Boards list to filter the list for items:</p>  
				<select className="form-control" onChange={ this.handleOnChangeBoard }>
					<option value="">Select Board</option>
					{ this.renderSelectBoardsOptions() }
				</select>
				<br></br>
				<div className="list-group">
					{ this.renderListGroupContent() }
				</div>
		</div>);
	}
}

const mapStateToProps = ({ common: { user, boards, items } }) => ({ user, boards, items });
const mapDispatch = {
	getBoards,
	getItems
}

  
export default connect(mapStateToProps, mapDispatch)(Items);