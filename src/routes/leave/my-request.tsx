import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/leave/my-request')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/leave/my-request"!</div>
}
