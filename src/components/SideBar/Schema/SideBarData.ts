export type MenuItem = {
  label: string
  icon: string
  url: string
}

export type SidebarGroupType = {
  group: string
  icon: string
  menu: MenuItem[]
}

export const items: SidebarGroupType[] = [
  {
    group: 'Dashboard',
    icon: '/sidebarIcon/chart-pie.svg',
    menu: [
      {
        label: 'Overview',
        icon: '/sidebarIcon/chart-pie.svg',
        url: '/dashboard/',
      },
    ],
  },
  {
    group: 'Company Setup',
    icon: '/sidebarIcon/companyProfile.svg',
    menu: [
      {
        label: 'Company Profile',
        icon: '/sidebarIcon/companyProfile.svg',
        url: '/companysetup/',
      },
      {
        label: 'Branch',
        icon: '/sidebarIcon/map-pin-plus-inside.svg',
        url: '/companysetup/branch',
      },
      {
        label: 'Department',
        icon: '/sidebarIcon/network.svg',
        url: '/companysetup/departmentmanagement',
      },
    ],
  },
    {
    group: 'Employee',
    icon: '/sidebarIcon/users.svg',
    menu: [
      {
        label: 'Employee',
        icon: '/sidebarIcon/users.svg',
        url: '/employee/',
      },
    ],
  },
]