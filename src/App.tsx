import React from 'react'

import { Category } from './Category'

export const App = () => {
    return(
        <div className='App'>
            <Category category="Mac" />
            <Category category="iPhone" />
            <Category category="iPad" />
            <Category category="Watch" />
            <Category category="Earphone" />
        </div>
    )
}