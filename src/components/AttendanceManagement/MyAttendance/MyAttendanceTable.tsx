import { useMemo } from 'react'
import { useDataTable } from '~/hooks/use-data-table'
import { NormalTable } from '~/components/Table/normal-table'
import { HRCard } from '~/components/Card/Card'
import { AttendanceRecord } from '../AttendanceRecord/AttendanceRecord'
import { getMyAttendanceColumns } from './getMyAttendance'
import { attendanceRecord } from '~/components/Employee/EmployeDetails/Attendance/AttendanceTableData'
import { useDialogFormStore } from '~/components/Dialog/form-store'

export function MyAttendanceTable() {
  const {onOpen} = useDialogFormStore();
  const columns = useMemo(() => getMyAttendanceColumns({onOpen}), [onOpen])
  const data = useMemo(() => attendanceRecord, [])
  
  const { table } = useDataTable({
    data,
    columns,
    enablePagination: true,
    // manualPagination: false,
    pageSize: 5,
  })

  return (
      <HRCard
        cardClassName="max-w-[1095px] border-none rounded-none bg-white shadow-none"
        cardContnetClassName="p-0 flex flex-col gap-6"
      >
        <AttendanceRecord isBranch={false} isDatePicker={true} isEmployeeType={false} isSearch={false} isShift={false} />
        <NormalTable table={table} />
      </HRCard>
  )
}