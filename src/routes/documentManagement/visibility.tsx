import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/documentManagement/visibility')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/documentManagement/visibility"!</div>
}
