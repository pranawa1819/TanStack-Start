import { useMemo, useState } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  type TableOptions,
  type PaginationState,
  type Table,
} from '@tanstack/react-table'

interface UseDataTableOptions<TData> {
  data: TData[]
  columns: TableOptions<TData>['columns']
  enablePagination?: boolean
  pageSize?: number
}

interface UseDataTableReturn<TData> {
  table: Table<TData>
  globalFilter: string
  setGlobalFilter: (value: string) => void
}

export function useDataTable<TData>({
  data,
  columns,
  enablePagination = false,
  pageSize = 5,
}: UseDataTableOptions<TData>): UseDataTableReturn<TData> {
  const [globalFilter, setGlobalFilter] = useState('')

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize,
  })

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      globalFilter,
    },
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: enablePagination
      ? getPaginationRowModel()
      : undefined,
  })

  return { table, globalFilter, setGlobalFilter }
}
