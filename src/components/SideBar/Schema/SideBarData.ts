import { FiFile } from 'react-icons/fi'
import type { IconType } from 'react-icons/lib'
import {
  LuBriefcaseBusiness,
  LuBuilding2,
  LuChartPie,
  LuFileCheck2,
  LuFiles,
  LuFileSearch,
  LuFileText,
  LuFileUp,
  LuMapPinPlusInside,
  LuNetwork,
  LuSquareUser,
  LuTentTree,
  LuUsers,
  LuUserSearch,
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
        url: '/documentManagement',
      },
      {
        label: 'Review & Approval',
        icon: LuFileCheck2,
        url: '/documentManagement/reviewAndApproval',
      },
      {
        label: 'Document Upload',
        icon: LuFileUp,
        url: '/documentManagement/documentUpload',
      },
      {
        label: 'Visibility',
        icon: FiFile,
        url: '/documentManagement/visibility',
      },
      {
        label: 'Category Management',
        icon: LuFiles,
        url: '/documentManagement/categoryManagement',
      },
      {
        label: 'Version History',
        icon: LuFileText,
        url: '/documentManagement/versionHistory',
      },
    ],
  },
  {
    group: 'Attendance',
    icon: LuUserSearch,
    menu: [
      {
        label: 'Attendance Record',
        icon: LuUserSearch,
        url: '/attendance/',
      },
       {
        label: 'Work Record',
        icon: LuBriefcaseBusiness ,
        url: '/attendance/work-record',
      },
      {
        label: 'My Attendance',
        icon: LuSquareUser ,
        url: '/attendance/my-attendance',
      },
    ],
  },
    {
    group: 'Leave',
    icon: LuTentTree,
    menu: [
      {
        label: 'Leave Requests',
        icon: LuSquareUser,
        url: '/leave/',
      },
       {
        label: 'My Requests',
        icon: LuSquareUser ,
        url: '/leave/my-request',
      },
      {
        label: 'Leave Balance',
        icon: LuSquareUser ,
        url: '/leave/leave-balance',
      },
    ],
  },

]
