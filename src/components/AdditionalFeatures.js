import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'

import AdditionalFeature from './AdditionalFeature'
// import { addFeature } from '../actions/'

// const AdditionalFeatures = ({ store, addFeature }) => {
const AdditionalFeatures = () => {
  const store = useSelector(state => state.store)
  const dispatch = useDispatch()

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {store.length ? (
        <ol type="1">
          {store.map(item => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              // addFeature={addFeature}
              addFeature={dispatch}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  )
}

// const mapStateToProps = state => {
//   return{
//     store: state.store
//   }
// }

// export default connect(mapStateToProps, { addFeature })(AdditionalFeatures)
export default AdditionalFeatures
