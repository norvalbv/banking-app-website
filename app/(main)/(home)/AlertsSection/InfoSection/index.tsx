import Header, { HeaderProps } from '@/components/ui/Header';
import { ReactElement, useMemo } from 'react';
import CustomLimits from '../DataPoints/CustomLimits';
import Transactions from '../DataPoints/Transactions';
import Alerts from '../DataPoints/Alerts';
import useWindowSize from '@/hooks/useWindowSize';

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
  const { width } = useWindowSize();
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
    <div className="flex w-full items-center justify-between sm:px-8">
      <div className="flex flex-col gap-8 lg:gap-0">
        <div>
          <Header {...headerProps} size="lg" />
          <p className="mb-6 text-gray-500">{description}</p>
        </div>
        {width < 1024 && section}
      </div>
    </div>
  );
};

export default InfoSection;
