import {
  LuCalendarDays,
  LuCheck,
  LuEye,
  LuFile,
  LuFileInput,
} from 'react-icons/lu'
import { RxCross1 } from 'react-icons/rx'
import ReviewRejectForm from './ReviewRejectForm'
import type { CardProps } from './Types/ReviewAndApprove.type'

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

export const ReviewCard = ({
  data,
  onOpen,
}: {
  data: CardProps
  onOpen: GetColumnsProps['onOpen']
}) => {
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
              <button className="bg-[#00A63E] cursor-pointer text-[#FAFAFA] h-10 rounded-xl flex items-center py-2 px-4 gap-2">
                <LuCheck /> Approve
              </button>
              <button
                className="bg-[#E7000B] cursor-pointer text-[#FAFAFA] h-10 rounded-xl flex items-center py-2 px-4 gap-2"
                onClick={() => {
                  onOpen({
                    modalTitle: 'Rejection Message',
                    title: 'Document Management',
                    okText: 'Send Rejection',
                    size: 'lg',
                    cancelText: 'Cancel',
                    formId: 'document-rejection',
                    component: <ReviewRejectForm data={data} />,
                  })
                }}
              >
                <RxCross1 /> Reject
              </button>
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
