import { eachDayOfInterval, startOfMonth, endOfMonth, format } from 'date-fns'

export type AttendanceStatus = 'P' | 'A' | 'L' | 'H' 

export type WorkRecord = {
  id: string
  employeeName: string
  department: string
  attendance: Record<string, AttendanceStatus>
}

function generateAttendance(): Record<string, AttendanceStatus> {
  const now = new Date()
  const days = eachDayOfInterval({
    start: startOfMonth(now),
    end: endOfMonth(now),
  })

  const statuses: AttendanceStatus[] = ['P', 'P', 'P', 'P', 'A', 'L']

  return Object.fromEntries(
    days.map((day) => {
      const dayOfWeek = day.getDay()
      const dateKey = format(day, 'yyyy-MM-dd')

      if (dayOfWeek === 0 || dayOfWeek === 6) return [dateKey, 'H']

      const status = statuses[Math.floor(Math.random() * statuses.length)]
      return [dateKey, status]
    })
  )
}

export const workRecordData: WorkRecord[] = [
  { id: '1', employeeName: 'Alice Johnson',   department: 'Engineering', attendance: generateAttendance() },
  { id: '2', employeeName: 'Bob Smith',       department: 'Design',      attendance: generateAttendance() },
  { id: '3', employeeName: 'Carol White',     department: 'HR',          attendance: generateAttendance() },
  { id: '4', employeeName: 'David Brown',     department: 'Engineering', attendance: generateAttendance() },
  { id: '5', employeeName: 'Eva Martinez',    department: 'Finance',     attendance: generateAttendance() },
]