import React from 'react'

const TableBody = ({ className, children, ...props }) => {
    return (
        <tbody className={className} {...props}>
            {children}
        </tbody>
    )
}

export default TableBody