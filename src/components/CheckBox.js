import React from 'react'

function CheckBox(props) {
  return (
    <div onClick={() => console.log('hey')} className="checkbox-holder">
      <input type="checkbox" name={props.name} 
        className="hidebx" 
        id={props.count} 
        value={props.value} 
        onChange={(e) => (props.type !== "onlyOne") 
          ? props.func((prevState) => [...prevState, props.value])
          : props.func((prevState) => [props.value])
        }
      />
      <label htmlFor={props.count} className="form-checkbox">{props.value}</label>
    </div>
  )
}

export default CheckBox
