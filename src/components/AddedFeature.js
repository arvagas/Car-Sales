import React from 'react'

import { REMOVE_FEATURE } from '../actions/'

const AddedFeature = ({ feature, removeFeature }) => {
  return (
    <li>
      {/* <button className="button" onClick={() => removeFeature(feature)}>X</button> */}
      <button className="button" onClick={() => removeFeature({ type: REMOVE_FEATURE, payload: feature })}>X</button>
      {feature.name}
    </li>
  )
}

export default AddedFeature
