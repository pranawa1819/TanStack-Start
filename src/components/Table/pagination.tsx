import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationLink,
} from '~/ui/pagination'
import { type Table as TanStackTable } from '@tanstack/react-table'

interface PaginationProps<TData> {
  table: TanStackTable<TData>
}

export function HRPagination<TData>({ table }: PaginationProps<TData>) {
  const totalPages = table.getPageCount() || 1
  const currentPage = table.getState().pagination.pageIndex
  const maxVisiblePages = 5

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
  console.log(table)
  console.log('pageCount', table.getPageCount())
console.log('canNext', table.getCanNextPage())
console.log('pageIndex', table.getState().pagination.pageIndex)
  console.log('pageIndex', table.getState().pagination.pageIndex)
  console.log('rows', table.getPaginationRowModel().rows.length)
  return (
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
  )
}
