'use client';
import React from 'react';
import { StickyScroll } from './ui/sticky-scroll-reveal';
import Image from 'next/image';

const content = [
  {
    title: 'Video Conferencing',
    description:
      'This facility is fully operational at the provincial, regional and district level police offices of Punjab. All conferences throughout Punjab with RPOs, CPOs and DPOs, are held on this system on a notice of few minutes by the IGP Punjab. This system has proved to be highly efficient, time and resource saving.          ',
    content: (
      <Image
        className="h-full w-full flex items-center justify-center text-white object-cover"
        src={'/initiatives/1.png'}
        width={400}
        height={500}
      />
    ),
  },
  {
    title: 'Media Control Room',
    description:
      'With the electronic and social media explosion in Pakistan during the last decade, Police has been subjected to a lot of pressure since negative reporting against the department was not being responded to adequately. In this regard to publish/broadcast the point view of department, a Media Control Room has been set-up in which all the electronic channels and social media is being monitored round the clock. Any news item which is aired about the Punjab Police is responded by the DPR Branch immediately. This branch has been revamped...',
    content: (
      <Image
        className="h-full w-full flex items-center justify-center text-white object-cover"
        src={'/initiatives/2.png'}
        width={400}
        height={500}
      />
    ),
  },
  {
    title:
      'Front Desks, Complaint Management System (CMS) and Police Station Record Management System (PSRMS)',
    description:
      'In order to facilitate the applicants at the Police Stations, Front Desks/Reception Rooms have been established throughout Punjab. These Reception Rooms are being run by civilian female and male officials of the I.T. branch. In order to entertain the complaints of the visitors a Complaint Management System (CMS) software is functional, the complainants are issued an E-Tag after receiving their applications. Once the application is entered into the system its follow up is monitored by Senior Supervisory Officers and Provincial...',
    content: (
      <Image
        className="h-full w-full flex items-center justify-center text-white object-cover"
        src={'/initiatives/3.png'}
        width={400}
        height={500}
      />
    ),
  },
  {
    title: 'Provincial Monitoring Room and Control Rooms',
    description:
      'A Provincial Monitoring Room has been established in the Central Police Office, Lahore and is being supervised by AIG/Monitoring, Punjab. All softwares like PSRMS, CRMS, HRMIS, Front Desks, CMS etc. which are under the use of Punjab police are monitored here in CPO. I.T. qualified and trained civilian staff has been posted to monitor the regular progress/status of different systems so that analysis and reports are readily available whenever required on daily basis.  Similarly Control Rooms have been established at the regional and...',
    content: (
      <Image
        className="h-full w-full flex items-center justify-center text-white object-cover"
        src={'/initiatives/4.png'}
        width={400}
        height={500}
      />
    ),
  },
  {
    title: 'IGP Police Complaint Center 1787',
    description:
      ' One of the initiatives of Punjab Police is the establishment of an integrated IGP Police Complaint Center. Previously the complaints were received through post or a person had to travel to Lahore to submit his complaint in person at the Inspector General of Police office. This initiative aims at receiving complaints through SMS and voice calls on a short code (1787). Moreover, complaints are also received online as well as through emails.  A dedicated team of young IT professionals has been deputed to handle these complaints in an...',
    content: (
      <div className="">
        <Image
          className="h-full w-full flex items-center justify-center text-white object-cover"
          src={'/initiatives/5.png'}
          width={400}
          height={500}
        />
      </div>
    ),
  },
];
export function Initiatives() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
