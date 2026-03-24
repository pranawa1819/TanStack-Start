import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/documentManagement/documentUpload')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/documentManagement/documentUpload"!</div>
}
