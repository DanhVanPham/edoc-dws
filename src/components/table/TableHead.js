import React from 'react'

const TableHead = ({ className, children, ...props }) => {
    return (
        <thead className={className} {...props}>
            {children}
        </thead>
    )
}

export default TableHead