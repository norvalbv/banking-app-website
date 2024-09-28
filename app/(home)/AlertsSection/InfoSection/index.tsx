import { Button } from '@/components/ui/Button';
import Header, { HeaderProps } from '@/components/ui/Header';
import { ArrowRight } from 'lucide-react';
import { ReactElement } from 'react';

type DetailsProps = {
  description: string;
} & HeaderProps;

const InfoSection = ({ description, ...headerProps }: DetailsProps): ReactElement => {
  return (
    <div className="flex w-full items-center justify-between px-8">
      <div>
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
