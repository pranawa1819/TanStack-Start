import { BreadcrumbItem,  BreadcrumbList, BreadcrumbSeparator, Breadcrumb as Root} from "~/ui/breadcrumb"

interface BreadCrumbsProps{
    group: string;
    title: string;
    className: string;
    crumbListClassName: string;
    crumbItemClassName:string

}
export const BreadCrumb = ({group,title,className,crumbListClassName,crumbItemClassName}:BreadCrumbsProps) => {
  return (
    <div>
      <Root className={className}>
         <BreadcrumbList className={crumbListClassName}>
         <BreadcrumbItem className={crumbItemClassName}>
             {group}
           </BreadcrumbItem>
             <BreadcrumbSeparator/>
           <BreadcrumbItem className='text-black  text-[16px] leading-6 font-normal'>
             {title}
           </BreadcrumbItem>
             <BreadcrumbSeparator/>

        </BreadcrumbList>
      </Root>
    </div>
  )
}

 
