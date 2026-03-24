import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/documentManagement/categoryManagement')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/documentManagement/categoryManagement"!</div>
}
