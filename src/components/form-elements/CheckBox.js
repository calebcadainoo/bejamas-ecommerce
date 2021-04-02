import React from 'react'

function CheckBox(props) {
	return (
		<div className="checkbox-holder">
			<input type="checkbox" name={props.name} 
				className="hidebx" 
				id={props.count} 
				value={props.value} 
        onChange={(e) => props.func((prevState) => {
					const removeIndex = prevState.indexOf(props.value)
					if (removeIndex > -1) prevState.splice(removeIndex, 1)
					return [...prevState, props.value]
				})}
			/>
			<label htmlFor={props.count} className="form-checkbox">{props.value}</label>
		</div>
	)
}

export default CheckBox
