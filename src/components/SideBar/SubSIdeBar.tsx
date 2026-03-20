import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Sidebar as Root,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '~/ui/sidebar'

export interface SubSideBarProps {
  group?: string
  menu: {
    label: string
    icon: string
    url: string
  }[]
}

export const SubSideBar = ({ group, menu = [] }: SubSideBarProps) => {
  const { toggleSidebar, state } = useSidebar()

  const [activeLabel, setActiveLabel] = useState<string>(menu[0].label)

  console.log(toggleSidebar)

  return (
    <Root
      className={`relative h-screen bg-[#312C85] transition-all duration-200 ${
        state === 'collapsed' ? 'w-0 min-w-0 overflow-hidden' : 'w-52 min-w-52'
      }`}
    >
      <div className="pt-5 pr-19.5 pl-3 pb-5 text-white text-[14px] font-semibold">
        Global Square IT
      </div>
      <div
        className={`absolute ${state === 'collapsed' ? 'top-16.5 -left-4' : 'top-16.5 left-48'}`}
      >
        <SidebarTrigger />
      </div>

      <SidebarContent
        className={`p-0 gap-0 transition-opacity duration-200 ${
          state === 'collapsed' ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="px-4 mb-3 text-white text-[14px] font-medium">
            {group}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {menu.map((item) => {
                const isActive = activeLabel === item.label

                return (
                  <SidebarMenuItem key={item.label}>
                    <Link
                      to={item.url}
                      search={{
                        group,
                        url: item.url,
                        icon: item.icon,
                        label: item.label,
                      }}
                    >
                      <SidebarMenuButton
                        onClick={() => setActiveLabel(item.label)}
                        className={`h-11 flex items-center gap-3 text-[14px] font-medium rounded-none p-3 hover:bg-[#ECECEC1A] text-white hover:text-white ${
                          isActive ? 'bg-[#ECECEC1A] text-white' : ''
                        }`}
                      >
                        <div className="w-5 h-5 text-white">
                          <img
                            src={item.icon}
                            className="h-full w-full object-cover "
                          />
                        </div>
                        {item.label}
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Root>
  )
}
