import { createFileRoute } from '@tanstack/react-router'
import { useDialogFormStore } from '~/components/Dialog/form-store'
import CategoryManagementCard from '~/components/DocumentManagement/CategoryManagementCard'
import CategoryManagementTable from '~/components/DocumentManagement/CategoryManagementTable'
import { TabsFlex } from '~/components/Tab/TabFlex'
// import Toggle from '~/components/Toggle/Toggle'
import { Button } from '~/ui/button'
import PageHeader from '~/ui/header'
import { Tabs, TabsContent } from '~/ui/tabs'

export const Route = createFileRoute('/documentManagement/categoryManagement')({
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

  return (
    <Tabs defaultValue="card">
      <div>
        <PageHeader title="Category Management">
          <div className="flex gap-4">
            <TabsFlex />
            <Button
              variant="default"
              className="bg-[#4F39F6] text-[#FFF] rounded-xl"
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
