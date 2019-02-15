import React from 'react';

var Engine = ({id, url, handleClick, handlesClick = false }) => {
	return (
		<form className="Engine" onSubmit={ () => {} }>
			<span className="Engine-id">{id}</span>
			<input
				className="Engine-url"
				type="url"
				value={url}
				readOnly={true}/>

			{ handlesClick &&
				<button type="submit"
									onClick={(event) => {
										event.preventDefault()
										handleClick(id)
					} }>Delete</button>}
		</form>
	)
}

export default Engine
