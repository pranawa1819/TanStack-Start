import { useState, useMemo, useCallback } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  type TableOptions,
  type PaginationState,
  type OnChangeFn,
  type Updater,
  type Table,
  type TableMeta,
} from '@tanstack/react-table'

interface ExtendedMeta<TData> extends TableMeta<TData> {
  totalPage?: number
  getSerialNumber?: (rowIndex: number) => number
}

interface UseDataTableOptions<TData> {
  data: TData[]
  columns: TableOptions<TData>['columns']
  meta?: ExtendedMeta<TData>
  enablePagination?: boolean
  pageSize?: number
  pageCount?: number
  manualPagination?: boolean
  rowCount?: number
  onPaginationChange?: OnChangeFn<PaginationState>
  pagination?: PaginationState
}

interface UseDataTableReturn<TData> {
  table: Table<TData>
  globalFilter: string
  setGlobalFilter: (value: string) => void
}

const paginationRowModel = getPaginationRowModel()

export function useDataTable<TData>({
  data,
  columns,
  meta,
  enablePagination = false,
  pageSize = 5,
  pageCount,
  manualPagination,
  rowCount,
  onPaginationChange,
  pagination: externalPagination,
}: UseDataTableOptions<TData>): UseDataTableReturn<TData> {
  const [globalFilter, setGlobalFilter] = useState('')

  const [internalPagination, setInternalPagination] = useState<PaginationState>(
    {
      pageIndex: 0,
      pageSize,
    },
  )

  console.log(internalPagination)

  const pagination = externalPagination ?? internalPagination

  const handlePaginationChange = useCallback(
    (updaterOrValue: Updater<PaginationState>) => {
      if (onPaginationChange) {
        onPaginationChange(updaterOrValue)
      } else {
        setInternalPagination((prev) =>
          typeof updaterOrValue === 'function'
            ? updaterOrValue(prev)
            : updaterOrValue,
        )
      }
    },
    [onPaginationChange],
  )

  
  const resolvedMeta = useMemo(() => {
    if (!manualPagination) return meta

    return {
      ...meta,
      totalPage: pageCount ?? meta?.totalPage,
      getSerialNumber: (rowIndex: number) =>
        pagination.pageIndex * pagination.pageSize + rowIndex + 1,
    }
  }, [meta, manualPagination, pageCount, pagination])

  const table = useReactTable({
    data,
    columns,
    meta: resolvedMeta,
    state: {
      pagination,
      globalFilter,
    },
    manualPagination,
    pageCount,
    rowCount,
    onPaginationChange: handlePaginationChange,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel:
      enablePagination && !manualPagination ? paginationRowModel : undefined,
  })

  return { table, globalFilter, setGlobalFilter }
}
