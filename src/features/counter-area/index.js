import React from 'react'
import Toolbar from './Toolbar'
import DataGrid from '../../components/table/DataGrid'
import { columns, data } from './_mockData'

const CountersInAreaContainer = () => {
    return (
        <div class="table-rounded-toolbar">
            <Toolbar />
            <DataGrid columns={columns}
                data={data}
                totalPages={3}
                currentPage={1}
                onUpdate={() => { }}
                onDelete={() => { }}
            />

        </div>
    )
}

export default CountersInAreaContainer