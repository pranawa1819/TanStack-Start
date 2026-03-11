import { useHome, type HomeData } from '@/hooks/useHome'
import { createFileRoute } from '@tanstack/react-router'
import appCss from '../styles.css?url'

export const Route = createFileRoute('/home/$userId')({
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
        title: 'Home Page',
      },
      { property: 'og:title', content: 'Home Page' },
      {
        property: 'og:description',
        content: 'This is the home page',
      },
      {
        property: 'og:image',
        content: '/logo192.png',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  component: Home,
})

function Home() {
  const userId = Route.useParams()
  const data  = useHome(Number(userId.userId))
  console.log(data)
  return (
    <>
    <div className='flex flex-col gap-5 items-center'>
      <div>Hello "/home"! </div>
      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5  justify-center  p-5 ">
        {data.data?.map((item: HomeData, index) => (
          <div key={index} className='flex flex-col border-2 rounded-2xl p-3 gap-2'>
            <div>User Id: {item.userId}</div>
            <div>Id: {item.id}</div>
            <div>Title: {item.title}</div>
            <div>Completed: {item.completed}</div>
          </div>
        ))}
      </div>
      </div>
    </>
  )
}
