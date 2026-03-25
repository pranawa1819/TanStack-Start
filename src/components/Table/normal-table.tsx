import { flexRender } from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/ui/table'
import { type Table as TanStackTable } from '@tanstack/react-table'
import { cn } from '~/lib/utils'
import { HRPagination } from './pagination'

interface DataTableProps<TData> {
  table: TanStackTable<TData>
  className?: string
  showPagination?: boolean
}

export function NormalTable<TData>({
  table,
  className,
  showPagination = true,
}: DataTableProps<TData>) {
  const columns = table.getAllColumns()

  return (
    <div className={cn('space-y-3')}>
      <div className={`w-full overflow-auto ${className} `}>
        <Table className="min-w-full rounded-xl border border-[#E4E4E7] mb-4">
          <TableHeader className="bg-[#FAFAFA] text-[#71717A]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="px-4 py-3.5 border-b align-middle text-left"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getPaginationRowModel().rows.length > 0 ? (
              table.getPaginationRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="text-[14px] p-4 border-b align-middle whitespace-nowrap"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {showPagination && <HRPagination table={table} />}
    </div>
  )
}
