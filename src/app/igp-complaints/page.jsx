'use client';
import { MultiStepLoader as Loader } from '@/components/ui/multi-step-loader';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
const IGP = () => {
  const points = [
    { text: 'Non-Registration of FIRs' },
    { text: 'Faulty investigations' },
    { text: 'Illegal detentions' },
    { text: 'Arrests of innocent persons' },
    { text: 'Registration of false FIR' },
    { text: 'Slackness in Duty ' },
    { text: 'Demand of illegal gratificatio' },
  ];
  return (
    <div className="my-6 mx-5">
      <div className="flex gap-4 justify-between mb-5">
        <div className="w-[50vw]">
          <div className="mb-4">
            <h1 className="text-2xl font-extrabold text-primary">
              IGP Police Complaint Center 1787
            </h1>
            <div className="bg-primary p-[1.5px] w-[255px] mb-3"></div>
          </div>
          <div>
            <div className="text-sm">
              <p>
                One of the initiatives of Punjab Police is the establishment of
                an integrated IGP Police Complaint Center. Previously the
                complaints were received through post or a person had to travel
                to Lahore to submit his complaint in person at the Inspector
                General of Police office. This initiative aims at receiving
                complaints through SMS and voice calls on a short code (1787).
                Moreover, complaints are also received online as well as through
                emails.
              </p>
              <p>
                A dedicated team of young IT professionals has been deputed to
                handle these complaints in an expeditious manner. The system is
                highly interactive and the complainant is kept in the loop till
                the disposal of the complaint. The complainant can view the
                progress of his complaint online and can send his feedback at
                any moment, online or through SMS.
              </p>
              <div className="mt-5">
                <h3 className="font-bold text-lg mb-2 text-primary">
                  Following nature of complaints are entertained at the IGP
                  Complaints Center:
                </h3>
                <Loader loadingStates={points} loading={true} duration={2000} />
              </div>
              <p>
                All complaints are sent to senior ranking officers for due
                action and in any case they are not marked to an officer below
                the rank of a Sub Divisional Police officer, who is bound to
                call the complainant himself within 8 hours and report to the
                IGP Complaints center that he has made contact with the
                complainant. Moreover, these officers have to send their final
                reports within stipulated timelines.
              </p>
            </div>
          </div>
        </div>
        <Image
          src={'/complaints_1.jpg'}
          width={600}
          height={400}
          className="cursor-default"
        />
      </div>
      <div className="flex gap-4 justify-between">
        <Image
          src={'/complaints_2.jpeg'}
          width={700}
          height={700}
          className="cursor-default"
        />
        <div className="flex justify-center items-start gap-3 flex-col">
          <p>
            Replies received from respective offices are cross checked by the
            staff at Police Complaints Center by making telephonic calls to the
            complainants. In case of any ambiguity or the complainant has
            expressed dissatisfaction regarding the reply, the matter is sent to
            a senior officer for verification. The complaint is not disposed of
            till it's either redressed or has proved to be false after
            verification by a senior officer.
          </p>
          <p className='font-bold'>
            For online registration of complaint please click{' '}
            <Link className='text-blue-600' href={'https://igp-8787-center.psca.gop.pk/online/complaint'}>
              here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IGP;
