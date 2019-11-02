import React from 'react'
import { connect, useSelector } from 'react-redux'

// const Total = ({ additionalPrice, car }) => {
const Total = () => {
  const additionalPrice = useSelector(state => state.additionalPrice)
  const car = useSelector(state => state.car)

  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     additionalPrice: state.additionalPrice,
//     car: state.car
//   }
// }

// export default connect(mapStateToProps, {})(Total)
export default Total
