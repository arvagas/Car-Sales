import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './HomePage'
import CarPage from './CarPage'

const AppRouter = () => {
    
    return (
        <>
            <Switch>
                <Route path ='/' exact component={HomePage} />
                <Route path='/2019-ford-mustang' component={CarPage} />
            </Switch>
        </>
    )
}

export default AppRouter