import Link from 'next/link';

const Emergency = () => {
  return (
    <div className="my-6 h-auto bg-cover flex flex-col gap-3 justify-center items-center p-4 md:p-8">
      <h2 className="text-lg md:text-xl text-center">
        An <span className="text-red-800">emergency</span> is a situation that
        poses an immediate risk to health, life, property, or environment. If it
        is a medical emergency call{' '}
        <span className="font-extrabold text-green-700">1122</span>, if you
        suspect any suspicious or terrorist activity call{' '}
        <span className="font-extrabold text-green-700">15</span>.
      </h2>
      <Link
        href="https://igp-8787-center.psca.gop.pk/online/complaint"
        className="shadow-[0_0_0_3px_#ff0000_inset] px-4 md:px-6 py-2 bg-transparent border border-[#ff0000] dark:border-white dark:text-white text-[#ff0000] rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 outline-[#ff0000] text-center"
      >
        Lodge E-Complaint
      </Link>
    </div>
  );
};

export default Emergency;
