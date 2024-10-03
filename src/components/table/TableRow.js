import React from 'react'

const TableRow = ({ className, children, ...props }) => {
    return (
        <tr className={className} {...props}>
            {children}
        </tr>
    )
}

export default TableRow