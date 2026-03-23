import { flexRender, type Table as TableType } from '@tanstack/react-table'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationLink,
} from '~/ui/pagination'

interface GenericTableProps<TData> {
  table: TableType<TData>
  pageIndex?: number
  showPagination?: boolean
  pageSize?: number
}

export const HRTable = <TData,>({
  table,
  pageIndex,
  showPagination = true,
}: GenericTableProps<TData>) => {
  const totalPages = table.getPageCount()
  const maxVisiblePages = 10

  const currentPage = pageIndex ?? table.getState().pagination.pageIndex

  let startPage = Math.max(0, currentPage - Math.floor(maxVisiblePages / 2))

  let endPage = startPage + maxVisiblePages

  if (endPage > totalPages) {
    endPage = totalPages
    startPage = Math.max(0, endPage - maxVisiblePages)
  }

  const visiblePages = Array.from(
    { length: endPage - startPage },
    (_, i) => startPage + i,
  )


  return (
    <>
      <div className="space-y-3">
        <div className="w-full overflow-x-auto ">
          <table className="min-w-full rounded-xl border border-[#E4E4E7] mb-4">
            <thead className="bg-[#FAFAFA] text-[#71717A] dark:bg-[#FAFAFA] ">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-3.5 border-b align-middle text-left"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        key={cell.id}
                        className={`text-[14px] p-4 border-b align-middle whitespace-nowrap`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showPagination && (
          <div className="flex items-end justify-between">
            <Pagination>
              <PaginationContent className="flex justify-end gap-4 w-full">
                <PaginationItem className="flex gap-2">
                  <PaginationPrevious
                    onClick={() => table.previousPage()}
                    aria-disabled={!table.getCanPreviousPage()}
                    className={
                      !table.getCanPreviousPage()
                        ? 'pointer-events-none opacity-50'
                        : 'cursor-pointer'
                    }
                  />

                  {startPage > 0 && (
                    <>
                      <PaginationItem>
                        <PaginationLink
                          onClick={() => table.setPageIndex(0)}
                          isActive={currentPage === 0}
                          className="cursor-pointer hover:bg-muted"
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>

                      <PaginationItem>
                        <span className="px-2 text-muted-foreground">...</span>
                      </PaginationItem>
                    </>
                  )}

                  {visiblePages.map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => table.setPageIndex(page)}
                        isActive={currentPage === page}
                        className={`
                        hover:bg-muted
                        ${
                          currentPage === page
                            ? 'cursor-default data-[active=true]:bg-none'
                            : 'cursor-pointer'
                        }
                      `}
                      >
                        {page + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  {endPage < totalPages && (
                    <>
                      <PaginationItem>
                        <span className="px-2 text-muted-foreground">...</span>
                      </PaginationItem>

                      <PaginationItem>
                        <PaginationLink
                          onClick={() => table.setPageIndex(totalPages - 1)}
                          isActive={currentPage === totalPages - 1}
                          className="cursor-pointer hover:bg-muted"
                        >
                          {totalPages}
                        </PaginationLink>
                      </PaginationItem>
                    </>
                  )}

                  <PaginationNext
                    onClick={() => table.nextPage()}
                    aria-disabled={!table.getCanNextPage()}
                    className={
                      !table.getCanNextPage()
                        ? 'pointer-events-none opacity-50'
                        : 'cursor-pointer'
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </>
  )
}
