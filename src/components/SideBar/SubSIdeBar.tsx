import { Link } from '@tanstack/react-router'
import { SidebarClose, SidebarCloseIcon } from 'lucide-react'
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
  useSidebar,
} from '~/ui/sidebar'

interface SubSideBarProps {
  group?: string
  menu: {
    label: string
    icon: any
    url: string
  }[]
}

export const SubSideBar = ({ group, menu = [] }: SubSideBarProps) => {
    const { toggleSidebar } = useSidebar()

  const [activeLabel, setActiveLabel] = useState<string>(menu[0].label)

  return (
    <Root
      className="relative w-52 min-w-52 h-screen bg-[#312C85]   "
    >
      <div className="pt-3 pb-3">
        <div className="px-4 py-2 text-white text-[14px] font-semibold">
          Global Square IT
        </div>
      </div>
      
      <button onClick={toggleSidebar} className="absolute top-15 left-46">
        <SidebarClose>
          <SidebarCloseIcon className="text-white"></SidebarCloseIcon>
        </SidebarClose>
      </button>

      <SidebarContent className="p-0 gap-0">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="px-4 mt-3 mb-3 text-white text-[14px] font-medium">
            {group}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {menu.map((item) => {
                const Icon = item.icon
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
                        className={`flex items-center gap-3 text-[14px] font-medium rounded-none p-3 hover:bg-[#ECECEC1A] text-white hover:text-white ${
                          isActive ? 'bg-[#ECECEC1A] text-white' : ''
                        }`}
                      >
                        <Icon className="w-4 h-4" />
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
