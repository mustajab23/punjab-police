import Link from 'next/link';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import Image from 'next/image';

export function Statistic() {
  return (
    <BentoGrid className="max-w-4xl mx-6 md:mx-auto my-6">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h2 className="text-primary font-bold text-3xl mb-2 ">Statistics</h2>
          <div className="bg-primary p-[1px] -mt-2 w-[55px] mb-3"></div>
        </div>
        <div className="flex flex-col">
          <Link
            href={'/'}
            className="text-blue-500 hover:text-700 transition-colors text-sm px-3 py-1 rounded-md hover:bg-blue-500 hover:text-white"
          >
            Police Performance
          </Link>
          <Link
            href={'/'}
            className="text-blue-500 hover:text-700 transition-colors text-sm px-3 py-1 rounded-md hover:bg-blue-500 hover:text-white"
          >
            Crime Statistics
          </Link>
          <Link
            href={'/'}
            className="text-blue-500 hover:text-700 transition-colors text-sm px-3 py-1 rounded-md hover:bg-blue-500 hover:text-white"
          >
            Honour Killing
          </Link>
          <Link
            href={'/'}
            className="text-blue-500 hover:text-700 transition-colors text-sm px-3 py-1 rounded-md hover:bg-blue-500 hover:text-white"
          >
            Our Budget
          </Link>
        </div>
      </div>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ children }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    {children}
  </div>
);
const items = [
  {
    title: 'Total Complaints',
    description: '319,031',
    header: (
      <Skeleton>
        <Image
          src={'/statistics/complaint.png'}
          width={400}
          height={400}
          className="object-cover w-full object-center rounded-xl"
        />
      </Skeleton>
    ),
  },
  {
    title: 'Disposed',
    description: '309,719.',
    header: (
      <Skeleton>
        <Image
          src={'/statistics/disposed.jpg'}
          width={400}
          height={400}
          className="object-cover w-full object-center rounded-xl"
        />
      </Skeleton>
    ),
  },
  {
    title: 'Redressed',
    description: '241,580',
    header: (
      <Skeleton>
        <Image
          src={'/statistics/redressed.webp'}
          width={400}
          height={400}
          className="object-cover w-full object-center rounded-xl"
        />
      </Skeleton>
    ),
  },
  {
    title: 'IGP Police Complaint Center',
    description: '1787 Call / SMS',
    header: (
      <Skeleton>
        <Image
          src={'/statistics/igp.jpg'}
          width={400}
          height={400}
          className="object-cover w-full object-center rounded-xl"
        />
      </Skeleton>
    ),
  },
];
