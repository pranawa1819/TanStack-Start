import { createFileRoute } from '@tanstack/react-router'
import {
  LuCalendarDays,
  LuCheck,
  LuChevronDown,
  LuCross,
  LuEye,
  LuFile,
  LuFileInput,
} from 'react-icons/lu'
import { RxCross1 } from 'react-icons/rx'
import { DropDown } from '~/components/DropDown/DropDown'
import { Button } from '~/ui/button'
import PageHeader from '~/ui/header'
import SearchBar from '~/ui/search'

export const Route = createFileRoute('/documentManagement/reviewAndApproval')({
  component: RouteComponent,
})

const options = [
  {
    label: 'Edit',
    value: 'edit',
  },
  {
    label: 'Block',
    value: 'block',
  },
  {
    label: 'Delete',
    value: 'delete',
  },
]

const cardData = [
  {
    fileName: 'Passport Copy',
    uploadedBy: 'Sarah Johnson',
    date: '2024-03-15',
    size: '3.2 MB',
    type: 'Personal IDs',
    status: 'Pending',
    rejectedReason: '',
  },
  {
    fileName: 'Citizenship Copy',
    uploadedBy: 'Sarah Johnson',
    date: '2024-03-15',
    size: '3.2 MB',
    type: 'Personal IDs',
    status: 'Accepted',
    rejectedReason: '',
  },
  {
    fileName: 'License Copy',
    uploadedBy: 'Sarah Johnson',
    date: '2024-03-15',
    size: '3.2 MB',
    type: 'Personal IDs',
    status: 'Rejected',
    rejectedReason:
      'Document is too blurry and text is not readable. Please upload a clearer scan or photo.',
  },
]

type CardProps = {
  fileName: string
  uploadedBy: string
  date: string
  size: string
  type: string
  status: string
  rejectedReason: string
}

const Card = ({ data }: { data: CardProps }) => {
  const status = data.status.toLowerCase()
  return (
    <div className="border border-[#E4E4E7] shadow-sm p-6 rounded-xl">
      <div className="flex items-center">
        <div>
          <div className="flex gap-2 items-center text-[12px] font-semibold">
            {data.fileName}
            <div
              className="bg-[#F4F4F5] rounded-sm p-1 w-6 h-6 cursor-pointer"
              onClick={() => console.log('clicked')}
            >
              <LuEye className="text-[16px]" />
            </div>
          </div>
          <div className="flex text-[12px] font-normal">
            Uploaded by
            <span className="ml-1 flex text-[12px] font-semibold">
              {data.uploadedBy}
            </span>
          </div>
          <div className="flex gap-2 text-[#71717A] text-[12px] font-normal items-center">
            <div className="flex gap-1 items-center">
              <LuFileInput /> {data.type}
            </div>
            <div className="flex gap-1 items-center">
              <LuCalendarDays /> {data.date}
            </div>
            <div className="flex gap-1 items-center">
              <LuFile /> {data.size}
            </div>
          </div>
        </div>
        <div className="ml-auto flex gap-4 ">
          {status === 'pending' ? (
            <>
              <ReviewButton className="bg-[#00A63E] ">
                <LuCheck /> Approve
              </ReviewButton>
              <ReviewButton className="bg-[#E7000B] ">
                <RxCross1 /> Reject
              </ReviewButton>
            </>
          ) : status === 'accepted' ? (
            <div className="text-[#00A63E] text-[12px] font-semibold bg-[#DCFCE7] py-0.5 px-3 rounded-[400px] h-fit">
              Approved
            </div>
          ) : (
            <div className="text-[#E7000B] text-[12px] font-semibold bg-[#FFE2E2] py-0.5 px-3 rounded-[400px] h-fit">
              Rejected
            </div>
          )}
        </div>
      </div>
      {data.status === 'Rejected' && (
        <div className="text-[12px] text-[#E7000B]">
          <span className="font-semibold mr-0.5">Rejection Reason:</span>
          <span className="font-normal">{data.rejectedReason}</span>
        </div>
      )}
    </div>
  )
}

const ReviewButton = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={`text-[#FAFAFA] h-10 rounded-xl flex items-center py-2 px-4 gap-2 ${className}`}
    >
      {children}
    </div>
  )
}

function RouteComponent() {
  return (
    <div>
      <PageHeader title="Review and Approval">
        <SearchBar placeholder="Search by name or EID" className="w-65 h-10" />
        <div className="ml-4 flex gap-4">
          <DropDown
            trigger={
              <button className="flex items-center gap-2 py-2.5 px-3 border border-[#E4E4E7] rounded-[6px] h-10 bg-[#FFF] text-sm font-normal text-[#09090B]">
                Document Type
                <LuChevronDown className="text-[#71717A]" />
              </button>
            }
            align="end"
            className="pt-1 pb-0 px-0"
          >
            <div
              className=" flex flex-col  transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {options.map((item) => (
                <button
                  key={item.value}
                  className="px-2 py-1.5 text-start text-[#18181B] cursor-pointer text-[14px] font-normal leading-5"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </DropDown>

          <DropDown
            trigger={
              <button className="flex items-center gap-2 py-2.5 px-3 border border-[#E4E4E7] rounded-[6px] h-10 bg-[#FFF] text-sm font-normal text-[#09090B]">
                Status
                <LuChevronDown className="text-[#71717A]" />
              </button>
            }
            align="end"
            className="pt-1 pb-0 px-0"
          >
            <div
              className=" flex flex-col  transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {options.map((item) => (
                <button
                  key={item.value}
                  className="px-2 py-1.5 text-start text-[#18181B] cursor-pointer text-[14px] font-normal leading-5"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </DropDown>
        </div>
      </PageHeader>

      <div className="p-6 bg-[#FFF] mx-6 rounded-xl flex flex-col gap-6">
        {cardData.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  )
}
