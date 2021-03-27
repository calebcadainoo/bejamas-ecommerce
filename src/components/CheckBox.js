import React from 'react'

function CheckBox(props) {
  return (
    <div className="checkbox-holder">
      <input type="checkbox" name="category" className="hidebx" id={props.count} value={props.value} />
      <label htmlFor={props.count} className="form-checkbox">{props.value}</label>
    </div>
  )
}

export default CheckBox
