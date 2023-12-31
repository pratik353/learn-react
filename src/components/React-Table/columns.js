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
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
        // Filter: ColumnFilter
    },
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',
        // Filter: ColumnFilter
    },
    {
        Header: 'Date Of Birth',
        Footer: 'Date Of Birth',
        accessor: 'date_of_birth',
        Cell: ({value}) => {return format(new Date(value), 'dd/mm/yyyy')},
        // Filter: ColumnFilter
    },
    {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country',
        // Filter: ColumnFilter
    },
    {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone',
        // Filter: ColumnFilter
    }
]


export const COLUMN_GROUP = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            
            {
                Header: 'First Name',
                Footer: 'First Name',
                accessor: 'first_name',
            },
            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor: 'last_name'
            }
        ]
    },

    {
        Header: 'Info',
        Footer: 'Info',
        columns: [
            {
                Header: 'Date Of Birth',
                Footer: 'Date Of Birth',
                accessor: 'date_of_birth'
            },
            {
                Header: 'Country',
                Footer: 'Country',
                accessor: 'country'
            },
            {
                Header: 'Phone',
                Footer: 'Phone',
                accessor: 'phone'
            }
        ]
    },
]