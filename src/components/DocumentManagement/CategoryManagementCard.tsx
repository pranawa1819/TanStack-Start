import { LuFile, LuTrash2 } from 'react-icons/lu'
import type { CategoryManagement } from './Types/CategoryManagement.type'
import { LucideEdit } from 'lucide-react'
import EditCategoryForm from './EditCategoryForm'

type ModalSize = 'sm' | 'md' | 'lg'

interface GetColumnsProps {
  onOpen: <T extends string>(config: {
    title: T
    modalTitle: string | null
    okText: React.ReactNode
    component: React.ReactNode
    cancelText?: string | React.ReactNode
    size?: ModalSize
    formId?: string
    onCancel?: () => void
  }) => void
}

const CategoryManagementCard = ({
  data,
  onOpen,
}: {
  data: CategoryManagement[]
  onOpen: GetColumnsProps['onOpen']
}) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map((item) => {
        return (
          <div className="flex flex-col gap-4 shadow-sm border border-[#E4E4E7] rounded-xl p-4">
            <div className="flex">
              <LuFile className="text-[#4F39F6] bg-[#F3F3FE] rounded-xl p-3 w-10 h-10 cursor-pointer" />
              <div className="flex gap-3 ml-auto">
                <LucideEdit
                  className="bg-[#F4F4F5] rounded-lg p-1 w-6 h-6 cursor-pointer"
                  onClick={() => {
                    onOpen({
                      modalTitle: 'Category Management',
                      title: 'Department Management',
                      okText: 'Add',
                      size: 'lg',
                      cancelText: 'Cancel',
                      formId: 'department',
                      component: <EditCategoryForm />,
                    })
                  }}
                />
                <LuTrash2 className="bg-[#FFE2E2] text-[#E7000B] rounded-lg p-1 w-6 h-6 cursor-pointer" />
              </div>
            </div>
            <div className="font-medium">
              <span className="text-[16px]">{item.documentCategory}</span>
              <div className="text-[14px] text-[#71717A] flex">
                <span className="">{item.numOfDocs} documents</span>
                <span className="font-normal ml-auto">
                  Created {item.createdDate}
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CategoryManagementCard
