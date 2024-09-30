import Link from 'next/link';

const Footer = () => {
  return (
    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <p class="mt-2 text-sm text-primary">
            The police are not here to create disorder, they're here to preserve
            disorder.
          </p>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Helplines
            </h2>
            <nav class="list-none mb-10">
              <li className="flex flex-col mb-1">
                <div className="text-md font-bold text-primary">
                  IGP Complaint Center
                </div>
                <div className="text-sm -mt-1">1787</div>
              </li>
              <li className="flex flex-col mb-1">
                <div className="text-md font-bold text-primary">
                  Police Emergency
                </div>
                <div className="text-sm -mt-1">15</div>
              </li>
              <li className="flex flex-col mb-1">
                <div className="text-md font-bold text-primary">
                  Fire Brigade
                </div>
                <div className="text-sm -mt-1">16</div>
              </li>
              <li className="flex flex-col mb-1">
                <div className="text-md font-bold text-primary">
                  Services Hospital
                </div>
                <div className="text-sm -mt-1">(042) 99203402-25</div>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"></h2>
            <nav class="list-none mb-10">
              <li className="flex flex-col mb-1">
                <div className="text-md font-bold text-primary">
                  CTD Counter Terrorism Department
                </div>
                <div className="text-sm -mt-1">0800-111-11</div>
              </li>
              <li className="flex flex-col mb-1">
                <div className="text-md font-bold text-primary">
                  RS Rescue Service
                </div>
                <div className="text-sm -mt-1">1122</div>
              </li>
              <li className="flex flex-col mb-1">
                <div className="text-md font-bold text-primary">
                  Railway Enquiry
                </div>
                <div className="text-sm -mt-1">117</div>
              </li>
              <li className="flex flex-col mb-1">
                <div className="text-md font-bold text-primary">
                  General Hospital
                </div>
                <div className="text-sm -mt-1">042-99264091-8</div>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Procurement
            </h2>
            <nav class="list-none mb-10">
              <li className="cursor-pointer">
                <Link
                  href={'https://punjabpolice.gov.pk/active-tenders'}
                  class="text-gray-600 hover:text-gray-800"
                >
                  Active Tenders
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  href={'/https://punjabpolice.gov.pk/archived-tenders'}
                  class="text-gray-600 hover:text-gray-800"
                >
                  Archived Tenders
                </Link>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav class="list-none mb-10">
              <li className="cursor-pointer">
                <Link
                  href={'https://punjabpolice.gov.pk/police_welfare'}
                  class="text-blue-800 hover:text-blue-900 text-md font-bold"
                >
                  Police Welfare
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  href={'/https://punjabpolice.gov.pk/performance-stat'}
                  class="text-blue-800 hover:text-blue-900 text-md font-bold"
                >
                  Police Performance
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  href={'https://punjabpolice.gov.pk/punjabpolice-jobs'}
                  class="text-blue-800 hover:text-blue-900 text-md font-bold"
                >
                  Join Punjab Police
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-gray-100">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">
            © Punjab Police, Government of the Punjab - Created By Muhammad
            Mustajab based in Faisalabad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
