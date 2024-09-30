'use client';
import { MultiStepLoader as Loader } from '@/components/ui/multi-step-loader';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

const RTI = () => {
  const disclosures = [
    {
      title: 'Particulars of the public body, its Functions and Duties',
      content: (
        <>
          Punjab Police administers through Police Rules 1934,
          <Link
            href="https://punjabpolice.gov.pk/system/files/police-order-2002-updated-version.pdf"
            className="text-blue-600"
          >
            {' '}
            Police Order 2002
          </Link>
          , and
          <Link
            href="https://punjabpolice.gov.pk/system/files/Standing%20Order%20No.%2003%20of%202018%20-%20DISTRIBUTION%20OF%20WORK.pdf"
            className="text-blue-600"
          >
            {' '}
            IGP’s Standing Order No. 3 of 2018
          </Link>
          . Its main function is to maintain law and order and provide security
          to the public.
        </>
      ),
    },
    {
      title: 'Powers and functions of its officers and employees',
      content: (
        <>
          Punjab Police has different branches/sections to perform duties
          according to
          <Link
            href="https://punjabpolice.gov.pk/system/files/police-order-2002-updated-version.pdf"
            className="text-blue-600"
          >
            {' '}
            Police Order 2002
          </Link>
          and
          <Link
            href="https://punjabpolice.gov.pk/system/files/Standing%20Order%20No.%2003%20of%202018%20-%20DISTRIBUTION%20OF%20WORK.pdf"
            className="text-blue-600"
          >
            {' '}
            IGP’s Standing Order No. 3 of 2018
          </Link>
          .
        </>
      ),
    },
    {
      title: 'Norms and Criteria for Functions',
      content:
        'Discharges functions according to Police Rules 1934, Police Order 2002, CrPC, Pakistan Penal Code, and other relevant laws.',
    },
    {
      title: 'Legal Instruments',
      content: 'For details, please click here.',
    },
    {
      title: 'Categories of Information Held',
      content: 'For statistics, please click here.',
    },
    {
      title: 'Decision-Making Processes',
      content: 'Implements policies issued by the Government of Punjab.',
    },
    {
      title: 'Directory of Officers',
      content:
        'For the directory, please click here. All officers take remuneration as per Government rules.',
    },
    {
      title: 'Budget Details',
      content: 'Punjab Police Budget.',
    },
    {
      title: 'Subsidy Information',
      content: 'Police Welfare details.',
    },
    {
      title: 'Concessions Granted',
      content: 'MoUs for Police Welfare.',
    },
    {
      title: 'Facilities for Obtaining Information',
      content:
        'Chief Information Officer and Public Information Officers are designated for public assistance.',
    },
    {
      title: 'Public Information Officer Details',
      content: 'Public Information Officers are listed on the website.',
    },
    {
      title: 'Other Notifications',
      content: 'Information is issued on the Punjab Police Website.',
    },
  ];

  return (
    <div className="my-6 mx-5">
      <div className="flex gap-4 justify-between mb-5">
        <div className="w-[70vw]">
          <div className="mb-4">
            <h1 className="text-2xl font-extrabold text-primary">
              Right to Information (RTI)
            </h1>
            <div className="bg-primary p-[1.5px] w-[255px] mb-3"></div>
          </div>
          <div className="text-sm">
            {disclosures.map((item, index) => (
              <div key={index} className="mt-5">
                <h2 className="font-bold text-xl mb-2 text-primary">
                  ✅ {item.title}
                </h2>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTI;
