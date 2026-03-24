import type { ReactNode } from "react";
import { BreadcrumbItem,  BreadcrumbList, BreadcrumbSeparator, Breadcrumb as Root} from "~/ui/breadcrumb"

interface BreadCrumbsProps{
    group: string;
    title: string;
    className: string;
    crumbListClassName: string;
    crumbItemClassName:string;
    children?:ReactNode;

}
export const BreadCrumb = ({
  group,
  title,
  className,
  // children,
  crumbListClassName,
  crumbItemClassName,
}: BreadCrumbsProps) => {
  return (
    <div>
      <Root className={className}>
        <BreadcrumbList className={crumbListClassName}>
          <BreadcrumbItem className={crumbItemClassName}>
            {group}
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem >
            {title}
          </BreadcrumbItem>

          {/* {children && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="text-black text-[16px] leading-6 font-normal">{children}</BreadcrumbItem>
            </>
          )} */}
        </BreadcrumbList>
      </Root>
    </div>
  );
};

 
