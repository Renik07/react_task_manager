import React from 'react';
import PostListItem from '../post-list-item';
import './post-add-form.css';

const PostAddForm = () => {
	return (
		<form className="bottom-panel d-flex">
			<input
				className="" 
				type="text"
				placeholder="О чем вы думаете сейчас?"
			/>
			<button 
				className="btn btn-outline-secondary"
				type="submit">
				Добавить
			</button>
		</form>
	)
}

export default PostAddForm;