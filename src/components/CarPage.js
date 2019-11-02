import React from 'react'

import Header from './Header'
import AddedFeatures from './AddedFeatures'
import AdditionalFeatures from './AdditionalFeatures'
import Total from './Total'

const CarPage = () => {
    return (
        <section className='container'>
            <div className='columns'>
                <div className='container is-fluid column box'>
                    <Header />
                    <AddedFeatures />
                </div>
                <div className='container is-fluid column box'>
                    <AdditionalFeatures />
                    <Total />
                </div>
            </div>
        </section>
    )
}

export default CarPage