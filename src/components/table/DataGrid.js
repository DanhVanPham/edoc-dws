import React from 'react';
import PropTypes from 'prop-types';
import { isFunction } from 'lodash'
import Table from './Table';
import TableHead from './TableHead';
import TableRow from './TableRow';
import StateManager from '../StateManager';
import Pagination from './Pagination';
import TableBody from './TableBody';
import { IconDelete, IconEdit } from '../icons';

const DataGrid = ({
    state,
    data,
    columns,
    currentPage,
    totalPages,
    onPageChange,
    onDelete,
    onUpdate,
    onSelectRow,
    selectedRows,
    renderActions
}) => {

    const isHasActions = onDelete || onUpdate || renderActions

    return (
        <div className="data-grid">
            <Table>
                <TableHead>
                    <TableRow>
                        {onSelectRow && (
                            <th>
                                <input
                                    type="checkbox"
                                    onChange={(e) => {
                                        const checked = e.target.checked;
                                        if (checked) {
                                            const allIds = data.map((row) => row.id);
                                            onSelectRow(allIds);
                                        } else {
                                            onSelectRow([]);
                                        }
                                    }}
                                />
                            </th>
                        )}
                        {columns.map((column) => (
                            <th key={column.key}>
                                {column.label}
                            </th>
                        ))}
                        {isHasActions && <th>Actions</th>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <StateManager state={state}
                        emptyState={<TableRow>
                            <td colSpan={columns.length + 1}>No data available</td>
                        </TableRow>}
                        loadingState={<TableRow>
                            <td colSpan={columns.length + 1}>Loading...</td>
                        </TableRow>}
                        errorState={<TableRow>
                            <td colSpan={columns.length + 1}>Some thing is error</td>
                        </TableRow>}
                    >
                        {data?.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {onSelectRow && (
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.includes(row.id)}
                                            onChange={() => onSelectRow(row.id)}
                                        />
                                    </td>
                                )}
                                {columns.map((column) => {
                                    if (isFunction(column.template)) {
                                        return <td key={column.key}>{column.template(row, {
                                            dataSource: data,
                                        })}</td>
                                    }
                                    return <td key={column.key} className={column.className}>{row[column.key]}</td>
                                })}
                                {(onDelete || onUpdate) && (
                                    <td>
                                        {renderActions?.() || (<>
                                            {onUpdate && (
                                                <button type="button"
                                                    className="btn-none btn-icon"
                                                    onClick={() => onUpdate(row)}
                                                >
                                                    <IconEdit />
                                                </button>
                                            )}
                                            {onDelete && (
                                                <button type="button"
                                                    className="btn-none btn-icon"
                                                    onClick={() => onDelete(row)}
                                                >
                                                    <IconDelete />
                                                </button>
                                            )}
                                        </>)}
                                    </td>
                                )}
                            </TableRow>
                        ))}
                    </StateManager>
                </TableBody>
            </Table>
            <Pagination currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </div>
    );
};

DataGrid.propTypes = {
    state: PropTypes.oneOf(['default', "success", "idle", "loading", "empty", "error"]),
    data: PropTypes.array.isRequired,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            className: PropTypes.any,
            template: PropTypes.func
        })
    ).isRequired,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func,
    onSelectRow: PropTypes.func,
    selectedRows: PropTypes.array,
    renderActions: PropTypes.func,
};

export default DataGrid;
