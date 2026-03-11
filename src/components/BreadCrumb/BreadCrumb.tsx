import { BreadcrumbItem,  BreadcrumbList, BreadcrumbSeparator, Breadcrumb as Root} from "~/ui/breadcrumb"

interface BreadCrumbsProps{
    group: string;
    title: string;

}
export const BreadCrumb = ({group,title}:BreadCrumbsProps) => {
  return (
    <div>
      <Root>
         <BreadcrumbList>
         <BreadcrumbItem>
             {group}
           </BreadcrumbItem>
             <BreadcrumbSeparator/>
           <BreadcrumbItem>
             {title}
           </BreadcrumbItem>
             <BreadcrumbSeparator/>

        </BreadcrumbList>
      </Root>
    </div>
  )
}

 
