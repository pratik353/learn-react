import {format} from 'date-fns'
import { ColumnFilter } from './filter-table/ColumnFilter'

export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        // Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Email',
        accessor: 'identity',
        Filter: ColumnFilter
    },
    {
        Header: 'role',
        accessor: 'role',
        Filter: ColumnFilter
    },
    {
        Header: 'region',
        accessor: 'region',
        Cell: ({value}) => {return format(new Date(value), 'dd/mm/yyyy')},
        // Filter: ColumnFilter
    },
    {
        Header: 'mBy',
        accessor: 'mBy',
        // Filter: ColumnFilter
    },
    {
        Header: 'cBy',
        accessor: 'cBy',
        // Filter: ColumnFilter
    }
]
