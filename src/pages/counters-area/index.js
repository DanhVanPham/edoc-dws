import React from 'react'
import CountersInAreaContainer from '../../features/counter-area'
import Heading from './Heading'

const CountersInArea = () => {
    return (
        <div>
            <Heading />
            <div class="h-1r"></div>
            <CountersInAreaContainer />
        </div>
    )
}

export default CountersInArea