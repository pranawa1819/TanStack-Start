import { createFileRoute } from '@tanstack/react-router'
import { BasicDetailForm } from '~/components/Employee/EmployeeForm/BasicDetailForm'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div></div>
}
