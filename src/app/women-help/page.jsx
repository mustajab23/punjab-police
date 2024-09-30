'use client';

import { useState } from 'react';

const WomenHelp = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = index => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      title: 'Inheritance Rights',
      content: (
        <div>
          <p>
            To ensure the share of women in inheritance, distribution of
            property has been held <strong>mandatory</strong> after sanctioning
            mutation of inheritance <em>(S.135-A, 142-A Land Revenue Act)</em>.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Mandatory:</strong> Produce the NIC and Form B of the
              deceased and all legal heirs, including women.
            </li>
            <li>
              If there is no consensus in <strong>30 days</strong>, the revenue
              officer will conduct partition.
            </li>
            <li>
              Decisions must be made within{' '}
              <strong className="text-red-600">6 months</strong>.
            </li>
            <li>
              The registration fee for women’s inherited property has been{' '}
              <strong className="text-red-600">abolished</strong>.
            </li>
            <li>
              A District Enforcement of Inheritance Rights Committee has been
              established to address grievances.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Under-age & Forced Marriages',
      content: (
        <div>
          <strong className="text-red-600">
            Under-age & Forced Marriage is a Crime:
          </strong>
          <ul className="list-disc list-inside mb-4">
            <li>
              Marrying a girl under <strong>16 years</strong> is punishable with
              imprisonment up to <strong>6 months</strong> and a fine of{' '}
              <em>Rs. 50,000</em>.
            </li>
            <li>
              Customs like <em>Wanni</em> are illegal and punishable with{' '}
              <strong>3 to 7 years</strong> imprisonment.
            </li>
            <li>
              Forcibly marrying a girl against her will incurs a penalty of{' '}
              <strong>3 to 7 years</strong> imprisonment.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'More than one Marriages',
      content: (
        <div>
          <strong>Rights regarding more than one marriage:</strong>
          <ul className="list-disc list-inside mb-4">
            <li>
              Entering a second marriage without permission incurs imprisonment
              up to <strong>1 year</strong> and a fine of <em>Rs. 500,000</em>.
            </li>
            <li>
              A wife can demand maintenance from the husband through the union
              council.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Nikkah Nama',
      content: (
        <div>
          <strong>Rights related to Nikkah:</strong>
          <ul className="list-disc list-inside mb-4">
            <li>
              Nikkah khawan must read all columns of Nikkah Nama, violation
              leads to punishment.
            </li>
            <li>
              Nikkah must be registered, failure to do so can result in
              imprisonment.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Laws for Women Protection',
      content: (
        <div>
          <ul className="list-disc list-inside mb-4">
            <li>
              The{' '}
              <em>
                Protection against Harassment of Women at Workplace Act, 2010
              </em>
              .
            </li>
            <li>
              The <em>Acid Control and Acid Crime Prevention Act, 2011</em>.
            </li>
            <li>
              The <em>Prevention of Anti-Women Practices Act, 2011</em>.
            </li>
            <li>
              The{' '}
              <em>Protection of Women (Criminal Laws Amendment) Act, 2006</em>.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'General Safety Tips',
      content: (
        <div>
          <ul className="list-disc list-inside mb-4">
            <li>Keep the least amount of money while shopping; use cards.</li>
            <li>Wear minimal jewelry.</li>
            <li>Always hang your purse at the front.</li>
            <li>Lock vehicle doors while driving.</li>
            <li>Do not accept edibles from strangers.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Women Development Achievements',
      content: (
        <div>
          <p>
            For further information, visit the Women Development Department
            website for details on initiatives and achievements.
          </p>
        </div>
      ),
    },
    {
      title: 'Women Ombudsperson Punjab',
      content: (
        <div>
          <p>
            The Ombudsperson provides <strong>confidential</strong> services for
            women with problems or concerns.
          </p>
          <p>
            For details, contact:
            <br />
            Ombudsperson Punjab
            <br />
            174-Shadman-II, Lahore
            <br />
            Phone: <strong>042-99268281-2</strong>
          </p>
        </div>
      ),
    },
    {
      title: 'Punjab Commission on the Status of Women',
      content: (
        <div>
          <p>
            Established for the promotion of women rights, the PCSW ensures
            policies promote gender equality in Punjab. For more details, visit
            their website.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="my-6 mx-5">
      <h1 className="text-2xl font-extrabold text-primary mb-4">Women Help</h1>
      <div className="bg-primary p-[1.5px] w-[255px] mb-3"></div>

      {sections.map((section, index) => (
        <div key={index} className="mb-4">
          <h2
            onClick={() => toggleSection(index)}
            className="cursor-pointer text-xl font-semibold text-primary"
          >
            {section.title}
          </h2>
          {openSection === index && (
            <div className="mt-2">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WomenHelp;
