import { useMemo } from 'react'
import { useDataTable } from '~/hooks/use-data-table'
import { NormalTable } from '~/components/Table/normal-table'
import { HRCard } from '~/components/Card/Card'
import { attendanceListData } from './AttendanceListData'
import { getAttendanceListColumn } from './getAttendanceList'
import { AttendanceRecord } from '../AttendanceRecord'

interface AttendanceListDataProps{
  isAttendanceRecord: boolean
}

export function AttendanceListTable({isAttendanceRecord}:AttendanceListDataProps) {
  const columns = useMemo(() => getAttendanceListColumn(), [])
  const data = useMemo(() => attendanceListData, [])
  
  const { table } = useDataTable({
    data,
    columns,
    enablePagination: true,
    // manualPagination: true,
    pageSize: 5,
  })

  return (
    <>
      <HRCard
        cardClassName="max-w-[1095px] p-0 border-none rounded-none bg-none shadow-none"
        cardContnetClassName="p-0 flex flex-col gap-8"
      >
        {isAttendanceRecord && 
        <AttendanceRecord isBranch={true} isDatePicker={true} isSearch={true} isShift={true} isEmployeeType={false}/>
        }
        <NormalTable table={table} />
      </HRCard>
    </>
  )
}