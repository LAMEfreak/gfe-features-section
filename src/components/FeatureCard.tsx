import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}): React.JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="text-indigo-700 p-3 shadow rounded-full mb-5 size-12">
        <Icon className="size-6"/>
      </div>
      <p className="font-semibold text-xl mb-2">{title}</p>
      <p className="text-base text-neutral-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
