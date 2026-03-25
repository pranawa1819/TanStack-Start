import type { IconType } from 'react-icons';
interface CrumbTitleProps {
  title?: string;
  id?: string;
  icon?: IconType ;
  iconClassName?: string;
}

const CrumbTitle = ({ title, icon, iconClassName, id }: CrumbTitleProps) => {
  const Icon = icon;
  if (!Icon) {
    if (id) {
      return <>{id}</>;
    }
    return <>{title}</>;
  }

  return (
    <div className="flex items-center gap-1">
      <Icon className={iconClassName} size={16} />
      <p className=" leading-[100%]"> {id ? title : title}</p>
    </div>
  );
};

export default CrumbTitle;
