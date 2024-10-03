import React from 'react'

const Table = ({ className, children, ...props }) => {
    return (
        <table
            className={`table table-borderless table-rounded display-10 leading-18 ${className}`}
            {...props}
        >
            {children}
        </table>
    )
}

export default Table