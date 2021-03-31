import React from 'react'
import { useDataLayerValue } from '../context-api/DataLayer'
import { actionTypes } from '../context-api/reducer'

function CheckBox(props) {


  return (
    <div className="checkbox-holder">
      <input type="checkbox" name={props.name} 
        className="hidebx" 
        id={props.count} 
        value={props.value} 
        onChange={(e) => props.funcVal.push(e.target)}
      />
      <label htmlFor={props.count} className="form-checkbox">{props.value}</label>
    </div>
  )
}

export default CheckBox
