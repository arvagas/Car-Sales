import React from 'react'

import { ADD_FEATURE } from '../actions/'

const AdditionalFeature = ({ feature, addFeature }) => {
  return (
    <li>
      {/* <button className="button" onClick={() => addFeature(feature)}>Add</button> */}
      <button className="button" onClick={() => addFeature({ type: ADD_FEATURE, payload: feature })}>Add</button>
      {feature.name} (+{feature.price})
    </li>
  )
}

export default AdditionalFeature
