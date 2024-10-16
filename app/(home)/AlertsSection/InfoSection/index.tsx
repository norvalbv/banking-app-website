import { Button } from '@/components/ui/Button';
import Header, { HeaderProps } from '@/components/ui/Header';
import { ArrowRight } from 'lucide-react';
import { ReactElement, useMemo } from 'react';
import CustomLimits from '../DataPoints/CustomLimits';
import Transactions from '../DataPoints/Transactions';
import Alerts from '../DataPoints/Alerts';

export type ActiveSection = 'limits' | 'alerts' | 'transactions';

type DetailsProps = {
  description: string;
  activeSection: ActiveSection;
} & HeaderProps;

const InfoSection = ({
  description,
  activeSection,
  ...headerProps
}: DetailsProps): ReactElement => {
  const section = useMemo(() => {
    switch (activeSection) {
      case 'limits':
        return <CustomLimits />;
      case 'alerts':
        return <Alerts />;
      case 'transactions':
        return <Transactions />;
    }
  }, [activeSection]);
  return (
    <div className="flex w-full items-center justify-between px-8">
      <div>
      <div className="sm:hidden">{section}</div>
        <Header {...headerProps} size="lg" />
        <p className="mb-6 text-gray-500">{description}</p>

        <Button icon={ArrowRight} iconPosition="right">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default InfoSection;
