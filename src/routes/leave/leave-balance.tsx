import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/leave/leave-balance')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/leave/leave-balance"!</div>
}
