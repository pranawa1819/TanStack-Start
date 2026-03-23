import { FaUsers } from 'react-icons/fa'
import { FiFile } from 'react-icons/fi'
import type { IconType } from 'react-icons/lib'
import {
  LuBuilding2,
  LuChartNetwork,
  LuChartPie,
  LuFileSearch,
  LuMapPinPlusInside,
  LuNetwork,
  LuUser,
  LuUsers,
} from 'react-icons/lu'

export type MenuItem = {
  label: string
  icon: IconType
  url: string
}

export type SidebarGroupType = {
  group: string
  icon: IconType
  menu: MenuItem[]
}

export const items: SidebarGroupType[] = [
  {
    group: 'Dashboard',
    icon: LuChartPie,
    menu: [
      {
        label: 'Overview',
        icon: LuChartPie,
        url: '/dashboard/',
      },
    ],
  },
  {
    group: 'Company Setup',
    icon: LuBuilding2,
    menu: [
      {
        label: 'Company Profile',
        icon: LuBuilding2,
        url: '/companysetup/',
      },
      {
        label: 'Branch',
        icon: LuMapPinPlusInside,
        url: '/companysetup/branch',
      },
      {
        label: 'Department',
        icon: LuNetwork,
        url: '/companysetup/departmentmanagement',
      },
    ],
  },
  {
    group: 'Employee',
    icon: LuUsers,
    menu: [
      {
        label: 'Employee',
        icon: LuUsers,
        url: '/employee/',
      },
    ],
  },
  {
    group: 'Document Management',
    icon: FiFile,
    menu: [
      {
        label: 'Missing Documents',
        icon: LuFileSearch,
        url: 'documentManagement',
      },
    ],
  },
]

//dashboard chart-pie
//companysetup companyProfile,branch,department
//employee employee
