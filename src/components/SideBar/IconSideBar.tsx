import {
  Sidebar as Root,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/ui/sidebar'

import {
  LayoutDashboard,
  User,
  Users,
  Calendar,
  FileText,
  BarChart,
  FileBarChart,
  UserPlus,
  ClipboardList,
  Clock,
  DollarSign,
  Upload,
  Archive,
} from 'lucide-react'

import { Tooltip, TooltipContent, TooltipTrigger } from '~/ui/tooltip'
import { useState } from 'react'
import { SubSideBar } from './SubSIdeBar'
import { Link } from '@tanstack/react-router'

type MenuItem = {
  label: string
  icon: any
  url: string
}

type SidebarGroupType = {
  group: string
  icon: any
  menu: MenuItem[]
}

const items: SidebarGroupType[] = [
  {
    group: 'Dashboard',
    icon: LayoutDashboard,
    menu: [
      { label: 'Overview', icon: LayoutDashboard, url: '/contact' },
      { label: 'Analytics', icon: BarChart, url: '/' },
      { label: 'Reports', icon: FileBarChart, url: '/basic-information' },
    ],
  },
  {
    group: 'Customer Profile',
    icon: User,
    menu: [
      { label: 'Customer List', icon: Users, url: '/basic-information' },
      { label: 'Add Customer', icon: UserPlus, url: '/basic-information' },
      { label: 'Activity', icon: ClipboardList, url: '/basic-information' },
    ],
  },
  {
    group: 'Employee',
    icon: Users,
    menu: [
      { label: 'Employee List', icon: Users, url: '/basic-information' },
      { label: 'Attendance', icon: Clock, url: '/basic-information' },
      { label: 'Payroll', icon: DollarSign, url: '/basic-information' },
    ],
  },
  {
    group: 'Organizational Calendar',
    icon: Calendar,
    menu: [
      { label: 'Events', icon: Calendar, url: '/basic-information' },
      { label: 'Meetings', icon: Calendar, url: '/basic-information' },
    ],
  },
  {
    group: 'Document',
    icon: FileText,
    menu: [
      { label: 'All Documents', icon: FileText, url: '/basic-information' },
      { label: 'Upload', icon: Upload, url: '/basic-information' },
      { label: 'Archive', icon: Archive, url: '/basic-information' },
    ],
  },
]


export const IconSideBar = () => {
  const [activeGroup, setActiveGroup] = useState<SidebarGroupType>(items[0])

  return (
    <div className="flex h-screen">
      <Root className="relative w-16  min-w-16 h-screen bg-black">
        <div className="w-16 h-16">
          <img
            src="/logo192.png"
            className="h-full w-full object-cover px-3 py-4"
          />
        </div>

        <SidebarContent className="pt-9 pl-3 pb-0 pr-0 gap-0">
          {items.map((val) => {
            const Icon = val.icon

            return (
              <SidebarGroup key={val.group} className="p-0">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SidebarGroupContent
                      className={`pr-5 py-3 pl-3 rounded-tl-[2px] rounded-bl-[2px]
                      hover:border-l-3 hover:border-l-[#312C85] hover:bg-[#ECECEC1A]
                      ${
                        activeGroup?.group === val.group
                          ? 'border-l-3 border-l-[#312C85] bg-[#ECECEC1A]'
                          : ''
                      }`}
                    >
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <Link
                            to={val.menu[0].url}
                            search={{
                              group: val.group,
                              groupIcon:val.icon,
                              label: val.menu[0].label,
                            }}
                          >
                            <SidebarMenuButton
                              onClick={() => setActiveGroup(val)}
                              className="p-0 w-7 h-5 rounded-none hover:bg-transparent"
                            >
                              <Icon className="w-6 h-6 text-white" />
                            </SidebarMenuButton>
                          </Link>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </TooltipTrigger>

                  <TooltipContent
                    side="right"
                    sideOffset={5}
                    className="bg-foreground text-background"
                  >
                    {val.group}
                  </TooltipContent>
                </Tooltip>
              </SidebarGroup>
            )
          })}
        </SidebarContent>
      </Root>

      <SubSideBar
        group={activeGroup.group}
        menu={activeGroup.menu}
        key={activeGroup.group}
      />
    </div>
  )
}
