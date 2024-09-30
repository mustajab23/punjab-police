'use client';

const EmergencyHelplines = () => {
  const helplines = [
    {
      category: 'Police Helplines',
      numbers: [
        { name: 'Punjab Police', number: '15' },
        { name: 'IGP Complaint Helpline', number: '1787, 042-99212609' },
        { name: 'Counter Terrorism Department (CTD)', number: '0800-111-11' },
        { name: 'Lahore Police Complaint', number: '8300, UAN: 0304-1110911' },
      ],
    },
    {
      category: 'Inquiries',
      numbers: [
        { name: 'Railway Enquiry', number: '117' },
        { name: 'PIA Enquiry', number: '114' },
        { name: 'Railway Police Helpline', number: 'City code-1333' },
      ],
    },
    {
      category: 'Emergencies',
      numbers: [
        { name: 'Rescue Service', number: '1122' },
        { name: 'Fire Brigade', number: '16' },
      ],
    },
    {
      category: 'Medical Facilities',
      numbers: [
        { name: 'Edhi Main Control Room', number: '115' },
        { name: 'Bomb Disposal Squad', number: '042-99212111' },
        { name: 'Fatimeed Blood Bank', number: '042-35863950' },
        { name: 'Punjab Institute of Cardiology', number: '042-99203051-6' },
        { name: 'Services Hospital', number: '042-99203402-25' },
        { name: 'General Hospital', number: '042-99264091-8' },
        { name: 'Mayo Hospital', number: '042-99211100' },
        { name: 'Jinnah Hospital', number: '042-99231400' },
        { name: 'Ganga Ram Hospital', number: '042-99200572-9' },
      ],
    },
  ];

  return (
    <div className="my-6 mx-5">
      <h1 className="text-2xl font-extrabold text-primary mb-4">
        Emergency Helplines
      </h1>
      <div className="bg-primary p-[1.5px] w-[255px] mb-3"></div>
      <div className="flex flex-col gap-6">
        {helplines.map((category, index) => (
          <div key={index}>
            <h2 className="font-bold text-xl text-primary mb-2">
              {category.category}
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {category.numbers.map((item, idx) => (
                <li key={idx} className="mb-1">
                  {item.name}:{' '}
                  <span className="font-medium">{item.number}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmergencyHelplines;
