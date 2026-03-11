import { createFileRoute, useSearch } from '@tanstack/react-router'
import appCss from '../styles.css?url'
import { Activity, useState } from 'react'
import Increment from '~/components/Increment'
import Display from '~/components/Display'
import Search from '~/components/GoogleSearch'
import { BreadCrumb } from '~/components/BreadCrumb/BreadCrumb'
import { AssignAccessTemplateForm } from '~/components/AssignTemplate/AssignAccessTemplateForm'
import { Dialog } from '~/components/Dialog/Dialog'

type BreadcrumbSearch = {
  group?: string
  label?: string
  url?: string
  icon?: any
  groupIcon?: any
}

export const Route = createFileRoute('/contact')({
  validateSearch: (search: Record<string, any>): BreadcrumbSearch => ({
    group: search.group,
    label: search.label,
    url: search.url,
    icon: search.icon,
    groupIcon: search.groupIcon,
  }),
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
        title: 'Contact Page',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  component: Contact,
})

function Contact() {
  const [open, setOpen] = useState(false)
  const search = Route.useSearch()
  return (
    <>
      <div className="w-full flex flex-col p-3 gap-4 bg-[#F9FAFB]">
        <BreadCrumb title={search.label ?? ''} group={search.group ?? ''} />
        {/* <div className="flex flex-col gap-5 items-center">
          <div>Hello "/contact"!</div>

          <button
            className="border-2 rounded-2xl px-6 py-1 bg-white"
            onClick={() => setOpen(!open)}
          >
            {open ? 'Hide' : 'Show'}
          </button>
          <Activity mode={open ? 'visible' : 'hidden'}>
            <Increment />
          </Activity>

          <div>Display Count:</div>
          <Display />
          <Search />
        </div> */}
        
          <Dialog
            open={open}
            onOpenChange={setOpen}
            triggerContent={
              <button
                type="button"
                className="w-30 text-center gap-2 px-4 py-2 bg-[#4F39F6] rounded-xl text-[14px] font-medium leading-5 text-white"
              >
                Add
              </button>
            }
          >
            <AssignAccessTemplateForm setOpen={setOpen} />
          </Dialog>
        

       
      </div>
    </>
  )
}
