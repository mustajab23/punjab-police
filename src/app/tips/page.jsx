'use client';

const SafetyTips = () => {
  const tips = [
    'Always stay alert and be aware of your surroundings.',
    'Get to know the neighborhoods and neighbors where you live and work.',
    'Authenticate persons before renting them a room or house.',
    'When sitting in your shops or offices, keep a vigilant eye around and ensure proper security arrangements.',
    'If you see something unusual in your surroundings, evaluate it. If you still cannot determine if a threat exists, notify the area police station.',
    'Police should also be informed of any strangers who may have come to stay in your neighborhood and whose activities appear suspicious.',
    'Try to avoid visiting crowded places, markets, hotels, offices, and video shops without necessity.',
    'Do not touch any unidentified object; explosives could be concealed in various objects including toys, transistors, lunch boxes, bottles, bags, etc.',
    'Do not accept any parcels from strangers.',
    'Make eye contact with people around you.',
    'While traveling, always check under your seats for any suspicious objects.',
    'Keep your mobile phone charged and make sure all emergency numbers are saved in your mobile.',
    'Inform the police regarding any suspicious activities, abandoned vehicles, articles, and other objects by visiting the nearest police station or by calling 15.',
    'Lock doors while driving.',
    'Ensure that you close all windows and quarter glasses of your vehicle and lock up the vehicle every time you park it, even if you’ll be gone only for a short while. The bonnet and boot should also be properly secured.',
    'Look around for people before leaving your car.',
    'Before opening a car door, drivers should make sure that its boot, bonnet, and doors have not been tampered with. If there is any sign of suspicion, approach the local police for help immediately.',
    'Be aware of signs of suspected suicide bombers, such as abnormally extra clothing, heavy-footed walking, excessive perspiration, something protruding from the body, nervousness, or displaying suspicious behavior.',
  ];

  return (
    <div className="my-6 mx-5">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-extrabold text-primary mb-4">
          Safety Tips
        </h1>
        <div className="bg-primary p-[1.5px] w-[255px] mb-3"></div>
        <ul className="list-disc list-inside text-sm">
          {tips.map((tip, index) => (
            <li key={index} className="mb-2 text-gray-700">
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SafetyTips;
