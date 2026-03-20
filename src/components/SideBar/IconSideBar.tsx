import {
  Sidebar as Root,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/ui/sidebar'

import { Tooltip, TooltipContent, TooltipTrigger } from '~/ui/tooltip'
import { useState } from 'react'
import { SubSideBar } from './SubSIdeBar'
import { Link } from '@tanstack/react-router'
import { items, type SidebarGroupType } from './Schema/SideBarData'



export const IconSideBar = () => {
  const [activeGroup, setActiveGroup] = useState<SidebarGroupType>(items[0])

  return (
    <div className="flex h-screen">
      <Root className=" relative w-16 min-w-16 h-screen  bg-black border-none">
        <div className="px-3.5 py-4.25">
          <div className="p-2.5 rounded-lg bg-[#312C85]">
            <div className="w-4 h-4">
              <img
                src="/sidebarIcon/sideBarLogo.svg"
                className="h-full w-full object-cover "
              />
            </div>
          </div>
        </div>

        <SidebarContent className="pt-9 pl-3 pb-0 pr-0 gap-0">
          {items.map((val) => {
            return (
              <SidebarGroup key={val.group} className="p-0">
                <Tooltip>
                  <Link
                    to={val.menu[0].url}
                    search={{
                      group: val.group,
                      groupIcon: val.icon,
                      label: val.menu[0].label,
                    }}
                  >
                    <TooltipTrigger asChild>
                      <SidebarGroupContent
                        className={`p-3 rounded-tl-[2px] rounded-bl-[2px]
                      hover:border-l-3 hover:border-l-[#312C85] hover:bg-[#ECECEC1A]
                      ${
                        activeGroup?.group === val.group
                          ? 'border-l-3 border-l-[#312C85] bg-[#ECECEC1A]'
                          : ''
                      }`}
                      >
                        <SidebarMenu>
                          <SidebarMenuItem>
                            <SidebarMenuButton
                              onClick={() => setActiveGroup(val)}
                              className="p-0 w-7 h-5 rounded-none hover:bg-transparent"
                            >
                              <div className="w-6 h-6 text-white">
                                <img
                                  src={val.icon}
                                  className="h-full w-full object-cover "
                                />
                              </div>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </TooltipTrigger>
                  </Link>

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
