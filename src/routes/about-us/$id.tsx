import { createFileRoute } from '@tanstack/react-router'
import appCss from '/Users/pranawa/Documents/tanstackstart/src/styles.css?url'
export const Route = createFileRoute('/about-us/$id')({
      head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'About Us Page',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  component: RouteComponent,
})

function RouteComponent() {
  const {id }= Route.useParams();
  return <div>Hello  in "/about-us" page user {id}!</div>
}
