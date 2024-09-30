'use client';
import { useState } from 'react';
import Link from 'next/link';

const FAQ = () => {
  const faqs = [
    {
      question:
        'How can I have a First Information Report (FIR) registered at a Police station?',
      answer: (
        <>
          An FIR is an account of a cognizable offence that is entered in a
          particular format at the police station. Every person has the right to
          report any matter at the concerned police station. The matter may be
          reported orally or in writing. An officer receiving an oral report
          will reduce it to writing and record it in the FIR register. A
          certified copy of the FIR will be provided to the person reporting the
          crime. No police officer can refuse to register a case. If
          registration is denied, inform the Sub-Divisional Police Officer or
          the District Police Officer.
        </>
      ),
    },
    {
      question: 'How can a person obtain a driving license?',
      answer: (
        <>
          A driving license is issued by the Superintendent or Deputy
          Superintendent of Police in charge of the traffic office in each
          district. A learner permit must be obtained first, followed by a
          mandatory 6-week training period. The application for a regular
          license must include three recent passport-size photographs, a copy of
          the computerized national ID card, the original learner permit, and
          revenue stamps. After a successful driving test, a license valid for 5
          years is issued.
        </>
      ),
    },
    {
      question: 'How can one pay the fine for a driving offence?',
      answer: (
        <>
          When a driver violates traffic rules, the Traffic Officer issues a
          challan ticket with payment details. The violator can retrieve their
          documents after paying the fine in the designated bank. If documents
          are not collected on the same day, they will be sent to the concerned
          traffic sector office. After 10 days, documents are sent to the
          Judicial Magistrate, and the violator must pay double the fine if not
          settled within 10 days.
        </>
      ),
    },
    {
      question:
        'What is the procedure for transfer of investigation if unsatisfied?',
      answer: (
        <>
          Police Order, 2002, allows for two transfers of investigation. A party
          can request a transfer if unsatisfied with the investigation quality.
          This complaint must be submitted to the Superintendent of Police or
          higher authorities, preferably in writing with supporting documents.
          The first change is reviewed by a District Standing Board, while the
          second is ordered by the Inspector-General of Police. Investigating
          officers typically continue their work during this process.
        </>
      ),
    },
    {
      question:
        'What is section 182 about the punishment for having a false case registered?',
      answer: (
        <>
          Section 182 of the Pakistan Penal Code provides for a maximum penalty
          of six months in prison or a fine for deliberately having a false case
          registered. This section is non-cognizable, meaning the police cannot
          proceed without a court order.
        </>
      ),
    },
    {
      question: 'What is section 144 and what does it imply?',
      answer: (
        <>
          Section 144 of the CrPC allows district administrations to issue
          orders in public interest, potentially placing a ban on specific
          activities. Violations are enforceable by police under section 188 of
          the Pakistan Penal Code, carrying penalties of up to six months in
          prison or fines.
        </>
      ),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="my-6 mx-5">
      <div className="flex gap-4 justify-between mb-5">
        <div className="w-[70vw]">
          <div className="mb-4">
            <h1 className="text-2xl font-extrabold text-primary">
              Frequently Asked Questions
            </h1>
            <div className="bg-primary p-[1.5px] w-[255px] mb-3"></div>
          </div>
          <div className="text-sm">
            {faqs.map((faq, index) => (
              <div key={index} className="mt-5">
                <h2
                  className="font-bold text-xl mb-2 text-primary cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  {faq.question}
                </h2>
                {activeIndex === index && (
                  <p className="text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
