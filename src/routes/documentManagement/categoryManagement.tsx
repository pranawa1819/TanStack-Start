import { createFileRoute } from '@tanstack/react-router'
import { useDialogFormStore } from '~/components/Dialog/form-store'
import AddEditCategoryForm from '~/components/DocumentManagement/AddEditCategoryForm'
import CategoryManagementCard from '~/components/DocumentManagement/CategoryManagementCard'
import CategoryManagementTable from '~/components/DocumentManagement/CategoryManagementTable'
import { TabsFlex } from '~/components/Tab/TabFlex'
import { Button } from '~/ui/button'
import PageHeader from '~/ui/header'
import { Tabs, TabsContent } from '~/ui/tabs'
import type { BreadcrumbSearch } from '../companysetup'
import { BreadCrumb } from '~/components/BreadCrumb/BreadCrumb'

export const Route = createFileRoute('/documentManagement/categoryManagement')({
  validateSearch: (search: Record<string, any>): BreadcrumbSearch => ({
    group: search.group,
    label: search.label,
    url: search.url,
    icon: search.icon,
    groupIcon: search.groupIcon,
  }),
  component: RouteComponent,
})

const CardTableData = [
  {
    documentCategory: 'Company Policies',
    numOfDocs: '12',
    createdDate: '2024-11-05',
  },
  {
    documentCategory: 'Tax Docs',
    numOfDocs: '12',
    createdDate: '2024-11-05',
  },
  {
    documentCategory: 'Personal IDs',
    numOfDocs: '12',
    createdDate: '2024-11-05',
  },
  {
    documentCategory: 'Tax Docs',
    numOfDocs: '12',
    createdDate: '2024-11-05',
  },
  {
    documentCategory: 'Performance & Reviews',
    numOfDocs: '12',
    createdDate: '2024-11-05',
  },
  {
    documentCategory: 'Certifications',
    numOfDocs: '12',
    createdDate: '2024-11-05',
  },
]

function RouteComponent() {
  const { onOpen } = useDialogFormStore()
  const search = Route.useSearch()

  return (
    <Tabs defaultValue="card">
      <div>
        <BreadCrumb
          className="px-12 pt-6.5"
          crumbListClassName="gap-2"
          crumbItemClassName="text-[14px] font-normal leading-5 gap-2 text-[#71717A]"
          title={search.label ?? ''}
          group={search.group ?? ''}
        />
        <PageHeader title="Category Management">
          <div className="flex gap-4">
            <TabsFlex />
            <Button
              variant="default"
              className="bg-[#4F39F6] text-[#FFF] rounded-xl cursor-pointer"
              onClick={() => {
                onOpen({
                  modalTitle: 'Category Management',
                  title: 'Department Management',
                  okText: 'Add',
                  size: 'lg',
                  cancelText: 'Cancel',
                  component: <AddEditCategoryForm />,
                })
              }}
            >
              Add Category
            </Button>
          </div>
        </PageHeader>
        <div className="mx-6 p-6 bg-[#FFF] rounded-xl">
          <TabsContent value="card">
            <CategoryManagementCard data={CardTableData} onOpen={onOpen} />
          </TabsContent>
          <TabsContent value="table">
            <CategoryManagementTable data={CardTableData} onOpen={onOpen} />
          </TabsContent>
        </div>
      </div>
    </Tabs>
  )
}
