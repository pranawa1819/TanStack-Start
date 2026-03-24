import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/documentManagement/versionHistory')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/documentManagement/versionHistory"!</div>
}
