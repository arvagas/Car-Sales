import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'

import AddedFeature from './AddedFeature'
// import { removeFeature } from '../actions/'

// const AddedFeatures = ({ car, removeFeature }) => {
const AddedFeatures = () => {
  const car = useSelector(state => state.car)
  const dispatch = useDispatch()

  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
            <AddedFeature
              key={item.id}
              feature={item}
              // removeFeature={removeFeature}
              removeFeature={dispatch}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  )
}

// const mapStateToProps = state => {
//   return{
//     car: state.car
//   }
// }

// export default connect(mapStateToProps, { removeFeature })(AddedFeatures)
export default AddedFeatures
