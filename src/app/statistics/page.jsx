import { Statistic } from '@/components/Statistic';
import Link from 'next/link';
const Statistics = () => {
  return (
    <>
      <Link
        href={'/'}
        className="absolute right-10 top-20 px-3 py-2 rounded-md bg-yellow-600 hover:bg-yellow-800 text-white transition-colors"
      >
        👈🏽 Go Home
      </Link>
      <Statistic />
    </>
  );
};

export default Statistics;
