import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
	const [post, setPost] = useState({})
	const [id, setId] = useState(1)
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)
	// let user = 'Admin';
	useEffect(() => {
		console.log('useEffect', id, idFromButtonClick);
		axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => {
				console.log(res)
				setPost(res.data)
			})
			.catch(err => {
				console.log(err)
				setPost({})
			})
	}, [idFromButtonClick])

	const handleClick = () => {
		// user = 'Guest';
		// console.log('handleClick', user);
		setIdFromButtonClick(id)
		// setPost({'title':'test'})
	}
	console.log('render', id, idFromButtonClick);

	return (
		<div>
			<input type="text" value={id} onChange={e => setId(e.target.value)} />
			<button type="button" onClick={handleClick}>Fetch Post</button>
			<div>{id}</div>
			<div>Showing Response of Post - {idFromButtonClick} : {post.title}</div>
			{/*<div>{user}</div>/*}
			{/* <ul>
				{posts.map(post => (
          <li key={post.id}>{post.title}</li>
				))}
			</ul> */}
		</div>
	)
}

export default DataFetching
