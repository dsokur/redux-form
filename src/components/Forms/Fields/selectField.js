import React from 'react'

const selectField = ({input, label}) => (
	<div className='line'>
		<label>{label}</label>
		<div>
			<select {...input}>
				<option value="">Выберите магазин ...</option>
				<option value={1}>Ebay</option>
				<option value={2}>Walmart</option>
			</select>
		</div>
	</div>
);


export default selectField