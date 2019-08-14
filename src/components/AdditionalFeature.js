import React from 'react'

import { addFeature } from '../actions/'

const AdditionalFeature = props => {
  return (
    <li>
      <button className="button" onClick={() => addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  )
}

export default AdditionalFeature
