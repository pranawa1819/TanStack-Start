import React, { useRef, useState } from 'react'
import { HRInput } from '../Input/Input'

interface HRFileUploadProps {
  icon?: React.ReactNode
  label?: string
  subLable: string
  browseText?: string
  drag?: boolean
  onChange?: (file: File) => void
}

export const FileUpload = ({
  icon,
  label,
  browseText,
  subLable,
  drag = false,
  onChange,
  ...props
}: HRFileUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleBrowse = () => {
    inputRef.current?.click()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const previewUrl = URL.createObjectURL(file)
    setPreview(previewUrl)

    onChange?.(file)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()

    const file = e.dataTransfer.files?.[0]
    if (!file) return

    const previewUrl = URL.createObjectURL(file)
    setPreview(previewUrl)

    onChange?.(file)
  }

  return (
    <div
      className="border border-dashed rounded-[2px] py-6 text-center cursor-pointer flex flex-col justify-center items-center gap-2"
      onDragOver={(e) => drag && e.preventDefault()}
      onDrop={drag ? handleDrop : undefined}
    >
      {preview ? (
        <img
          src={preview}
          alt="preview"
          className="w-104.75 h-38.25 object-cover"
        />
      ) : (
        <>
          {icon && <div className="mb-2">{icon}</div>}

          <div className="text-[12px] leading-5 font-normal">{label}</div>

          <div className="text-[#71717A] text-[14px] font-normal">
            {subLable}
          </div>

          <button
            type="button"
            className="w-30 px-4 py-2 bg-[#4F39F6] rounded-xl text-[14px] font-medium text-white"
            onClick={handleBrowse}
          >
            {browseText}
          </button>
        </>
      )}

      <HRInput
        ref={inputRef}
        type="file"
        inputClassName="hidden"
        accept="image/*"
        onChange={handleInputChange}
        {...props}
      />
    </div>
  )
}
