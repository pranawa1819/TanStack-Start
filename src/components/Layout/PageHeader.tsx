import { Link } from '@tanstack/react-router';
import { PieChart } from 'lucide-react';
import { title } from 'process';
import React, { Fragment, type ReactNode} from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '~/ui/breadcrumb';


interface PageHeaderProps {
  title?: string | ReactNode;
  breadcrumbs: { label: ReactNode | string; path: string }[];
  actions?: { renderActions: React.ReactNode };
}

const PageHeader: React.FC<PageHeaderProps> = ({ breadcrumbs = [] }) => {
  const activeCrumb = breadcrumbs[breadcrumbs.length - 1] || {};
  const crumbsExcludingActive = breadcrumbs.slice(0, -1);
  return (
    <div className="flex flex-col gap-4 pl-12 ">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to={'/'}>
              <PieChart size={16} />
            </Link>
          </BreadcrumbItem>
          {/* <BreadcrumbSeparator/> 
          <BreadcrumbItem>
              {}
          </BreadcrumbItem> */}
          <BreadcrumbSeparator/> 
          {crumbsExcludingActive.map((item, index) => (
            <Fragment key={index}>
              <BreadcrumbItem>
                <Link to={item.path}>{item.label}</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator/> 
            </Fragment>
          ))}
          <BreadcrumbItem>
            <BreadcrumbPage>{activeCrumb.label}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      
    </div>
  );
};
export { PageHeader };
