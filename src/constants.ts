import { TransformerBot, Category, LoreDetail } from './types';

export const LORE_DETAILS: LoreDetail[] = [
  {
    id: 'Autobot',
    title: 'THE AUTOBOTS',
    subtitle: 'GUARDIANS OF PEACE',
    accentColor: 'bg-secondary-blue',
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Optimus%20Prime%2C%20heroic%20autobot%20leader%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=101',
    paragraphs: [
      "The Autobots are the bravest heroes in the entire galaxy! They come from a far-away metal planet called Cybertron, but now they protect our home, Earth.",
      "Led by the mighty Optimus Prime, these giant robots believe that all living beings should be free and happy. They use their super-strength and high-tech tools to stop anyone who tries to be a bully.",
      "When they aren't saving the day, many Autobots look like normal cars, trucks, and even emergency vehicles. This helps them hide in plain sight and zoom across the world at lightning speed!",
      "Every Autobot has a special heart made of pure light. They work together as a giant family, helping each other solve puzzles and win battles without ever giving up.",
      "Joining the Autobots means promising to be kind, brave, and always ready for a fun new mission. Are you ready to roll out with the good guys?"
    ]
  },
  {
    id: 'Decepticon',
    title: 'THE DECEPTICONS',
    subtitle: 'RUTHLESS CONQUERORS',
    accentColor: 'bg-ink-black',
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Megatron%2C%20menacing%20but%20goofy%20decepticon%20leader%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=102',
    paragraphs: [
      "The Decepticons are a group of powerful, tricky robots who want to rule the whole universe! They are led by the scary Megatron, who has a giant cannon on his arm.",
      "Unlike the Autobots, the Decepticons think that only the strongest robots should be in charge. They travel from planet to planet looking for energy to make themselves even more powerful.",
      "You have to look closely, because Decepticons are masters of disguise! They can turn into sleek jets that scream through the clouds or heavy tanks that can rumble over mountains.",
      "They aren't very good at sharing, and they often argue with each other about who is the boss. But when they work together, they are a very dangerous squad of metal warriors.",
      "Watch out for their purple badges! If you see one, you know there's a Decepticon nearby planning a sneaky trick. Only the bravest heroes can stand in their way!"
    ]
  },
  {
    id: 'Elite Core',
    title: 'CORE SQUAD',
    subtitle: 'Elite Units',
    accentColor: 'bg-tertiary-green',
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20fast%20racing%20robot%20turning%20into%20sports%20car%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=103',
    paragraphs: [
      "The Core Squad is made up of the most famous Transformers you know! These are the heroes and villains who are the fastest on the road and the first into action.",
      "Each member of this squad has a special transformation that they've practiced thousands of times. Some can turn into sporty race cars, while others become tough off-road explorers.",
      "They are called 'Elite' because they are the best at what they do. Whether it's zooming through a city or climbing a giant rock, they always find a way to finish their mission.",
      "Inside every Core Squad robot is a super-computer brain that helps them make split-second decisions. They can talk to each other through radio waves even when they are far apart!",
      "When you join the Core Squad, you're learning the basics of being a Transformer. It's all about speed, smarts, and having the coolest robot mode on the block!"
    ]
  },
  {
    id: 'Combiners',
    title: 'COMBINER SQUAD',
    subtitle: 'Power of Teamwork',
    accentColor: 'bg-tertiary-green',
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20giant%20Combiner%20robot%20made%20of%20colorful%20trucks%20and%20cars%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=104',
    paragraphs: [
      "The Combiner Squad is the ultimate example of teamwork! Separately, they are five or six normal-sized robots, but together, they become a GIANT MEGA-BOT!",
      "When it's time to get big, they shout 'FORM UP!' and click together like giant metal building blocks. One robot becomes the chest, two become the arms, and two become the legs.",
      "The Mega-Bot has the strength of all the robots added together! They can pick up entire buildings or stop a rushing train with just one hand. It's incredible to watch them transform.",
      "The hardest part for a Combiner is that all the robots have to think as one person. They have to agree on where to walk and which way to look, which takes a lot of practice!",
      "Learning about Combiners shows us that we are always stronger when we work with our friends. Two heads—and six robot bodies—are definitely better than one!"
    ]
  },
  {
    id: 'Bonded Units',
    title: 'BONDED SQUAD',
    subtitle: 'Power of Friendship',
    accentColor: 'bg-tertiary-green',
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20huge%20friendly%20robot%20playing%20with%20a%20tiny%20robot%20partner%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=106',
    paragraphs: [
      "The Bonded Squad shows us that everyone's super-power is better when they have a best friend! These robots have special partners called 'Mini-Cons' or human friends who help them out.",
      "A Bonded Unit doesn't just fight alone. Their tiny partners can transform into shields, extra-powerful blasters, or even special armor that makes the main robot faster and tougher.",
      "The bond between the robot and their partner is a deep connection of trust. They can talk to each other without even speaking! It's like they have a secret mental link that makes them act as one.",
      "Sometimes the partners are scouts who look for trouble, and sometimes they are inventors who fix things on the go. No matter what, they always have each other's backs.",
      "Being in the Bonded Squad is all about looking out for your buddies. It reminds us that no matter how big and strong we are, we can always do more when we work with a friend!"
    ]
  },
  {
    id: 'Titans',
    title: 'TITAN SQUAD',
    subtitle: 'Living Castles',
    accentColor: 'bg-tertiary-green',
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20gigantic%20robot%20towering%20as%20tall%20as%20a%20city%20skyline%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=107',
    paragraphs: [
      "The Titan Squad is made of the BIGGEST Transformers ever! These robots are as large as cities! When they stand up, their heads are high above the tallest skyscrapers.",
      "Because they are so big, a Titan can't just turn into a car. Instead, they transform into entire space-bases or floating citadels where hundreds of other Autobots or Decepticons can live and work.",
      "Titans are so powerful that they only wake up when the entire planet is in big trouble. Their footsteps sound like thunder, and their voices can be heard from miles and miles away!",
      "Even though they are giant warriors, Titans are also gentle protectors. They carry smaller robots safely across the stars and provide a warm, safe home for their friends to rest and recharge.",
      "The Titan Squad reminds us of the scale of the universe. They are the ultimate guardians, standing tall to make sure the galaxy stays safe for everyone, big and small!"
    ]
  },
  {
    id: 'Seekers',
    title: 'SEEKER SQUAD',
    subtitle: 'Lords of the Sky',
    accentColor: 'bg-ink-black',
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Seeker%20jets%20Starscream%20Thundercracker%20Skywarp%20formation%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=150',
    paragraphs: [
      "The Seekers are the most famous and feared air force in the entire Decepticon army! These sleek, deadly robots all share the same F-15 fighter jet design, making them fly in perfect formation like a pack of metallic wolves.",
      "Led by the scheming Starscream, the Seekers scream through the sky faster than the speed of sound. Their sonic booms shake buildings and their null-ray blasts can shut down any Autobot they target from miles away!",
      "Each Seeker has a unique paint job and a special talent. Thundercracker rattles the earth with sonic booms, Skywarp teleports in to ambush enemies, and the Coneheads — Thrust, Dirge, and Ramjet — charge headfirst into battle!",
      "Even though they are incredibly powerful, Seekers argue all the time about who is the best flier. Starscream always insists it is him, but every other Seeker respectfully disagrees — at least when Starscream isn't looking!",
      "If you see a formation of fast jets streaking across the sky with a purple Decepticon badge, those are the Seekers — and they mean serious trouble for anyone below!"
    ]
  },
  {
    id: 'Maximals',
    title: 'MAXIMAL SQUAD',
    subtitle: 'Beast Warriors of Tomorrow',
    accentColor: 'bg-secondary-blue',
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Beast%20Wars%20Maximals%20gorilla%20cheetah%20animal%20robots%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=151',
    paragraphs: [
      "The Maximals are the Autobots of the far future — brave animal warriors who crash-landed on prehistoric Earth during the legendary Beast Wars! Instead of turning into cars and trucks, they transform into real animals.",
      "Led by the mighty Optimus Primal who transforms into a powerful gorilla, the Maximals fight to protect ancient Earth from the dangerous Predacons. If they fail, the history of all Transformers everywhere could be wiped out!",
      "Each Maximal has a special animal ability. Cheetor runs as fast as a real cheetah, Rhinox charges like an unstoppable rhino, Rattrap sneaks like the cleverest rat, and Airazor soars on powerful falcon wings!",
      "Being a Maximal is harder than being an Autobot on Earth, because prehistoric jungles are full of danger from giant bugs, volcanoes, and sneaky Predacons hiding in the trees. They have to be brave every single moment.",
      "The Maximals show us that heroism looks different in every era — and that even in a distant future on an ancient planet, the spirit of the Autobots burns as bright as ever!"
    ]
  },
  {
    id: 'Predacons',
    title: 'PREDACON SQUAD',
    subtitle: 'Beast Warriors of Darkness',
    accentColor: 'bg-ink-black',
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Beast%20Wars%20Predacons%20dragon%20wasp%20beast%20robots%20menacing%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=152',
    paragraphs: [
      "The Predacons are the Decepticons of the future — dangerous beast warriors who crash-landed on prehistoric Earth and want to rewrite history itself! They transform into terrifying creatures from the animal kingdom.",
      "Led by the theatrical and cunning Beast Megatron — who transforms into a fearsome T-Rex and later a fire-breathing dragon — the Predacons scheme, plot, and roar their way through every episode of the Beast Wars!",
      "Each Predacon has a sneaky side. Tarantulas spins traps in his dark laboratory, Terrorsaur plots against his own boss, Waspinator stumbles into every explosion imaginable, and the fire-ant Inferno charges into battle shouting for the Royalty!",
      "Unlike the regular Decepticons who use machines and technology, Predacons use animal instinct and beast-mode ferocity to overwhelm their Maximal enemies. Their creature forms are perfectly suited to the prehistoric jungle.",
      "The Predacons remind us that villains come in all shapes, sizes, and geological eras — and that even in the ancient past, heroes always have to stay one step ahead of the sneakiest bad guys in history!"
    ]
  },
];

export const CATEGORY_LORE: Record<Category, { title: string; explanation: string; icon: string }> = {
  'Elite Core': {
    title: 'Elite Core',
    explanation: 'The main team! These bots are fast, strong, and always ready for a mission. They are the heart of every battle!',
    icon: 'shield'
  },
  'Combiners': {
    title: 'Combiners',
    explanation: 'TEAM WORK! Five small bots click together to make one HUGE MEGA-BOT! They are ten times stronger together.',
    icon: 'extension'
  },
  'Multi-Changers': {
    title: 'Multi-Changers',
    explanation: "They aren't just cars! They can turn into planes, tanks, AND robots! Triple the transformation fun!",
    icon: 'directions_car'
  },
  'Bonded Units': {
    title: 'Bonded Units',
    explanation: 'Best friends forever! These bots have a tiny human or robot partner that helps them unlock special super-powers!',
    icon: 'favorite'
  },
  'Titans': {
    title: 'Titans',
    explanation: 'THEY ARE AS BIG AS CITIES! Titans can transform into entire bases where the other bots live!',
    icon: 'location_city'
  },
  'Seekers': {
    title: 'Seekers',
    explanation: 'The Decepticon air force! These F-15 jet warriors fly in deadly formation, led by the scheming Starscream. Fast, loud, and always arguing about who is the best pilot!',
    icon: 'flight'
  },
  'Maximals': {
    title: 'Maximals',
    explanation: 'The Autobots of the future! Maximals transform into powerful animals and fight on prehistoric Earth to protect the timeline from the dangerous Predacons!',
    icon: 'pets'
  },
  'Predacons': {
    title: 'Predacons',
    explanation: 'The Decepticons of the future! Predacons transform into terrifying beasts and are led by the dramatic Beast Megatron on a mission to rewrite all of history!',
    icon: 'pest_control'
  },
};

export const SEED_BOTS: TransformerBot[] = [
  {
    id: 'optimus-prime',
    name: 'Optimus Prime',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Supreme Commander',
    description: [
      "Meet Optimus Prime!",
      "He is the fearless leader of all the Autobots and the bravest robot superhero in the entire universe.",
      "When danger strikes, he is the very first one to shout 'Autobots, roll out!' and charge into battle.",
      "He transforms into a giant, shiny red and blue semi-truck and zooms down the highway at incredible speed.",
      "Inside his chest glows a magical object called the Autobot Matrix of Leadership, which gives him wisdom and courage.",
      "Optimus always puts his friends first — whether they are robots or humans — and never, ever gives up.",
      "Even when Megatron tries his sneakiest tricks, Optimus Prime finds a way to outsmart him and save the day.",
      "He speaks with a calm, deep voice that makes everyone around him feel safe and ready to be brave.",
      "His giant ion blaster and battle axe are legendary weapons feared by every Decepticon in the galaxy.",
      "Optimus Prime is proof that the greatest superpower of all is a kind heart combined with unstoppable courage!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Optimus%20Prime%20standing%20tall%20with%20glowing%20Matrix%20chest%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=300',
    stats: { power: 99, speed: 80, bravery: 100 },
    narrative: [
      "Optimus Prime is the biggest, strongest, and bravest Autobot of all!",
      "He transforms into a giant red and blue truck and rushes to help anyone in trouble.",
      "He always puts his friends first and never gives up, no matter what!"
    ]
  },
  {
    id: 'bumblebee',
    name: 'Bumblebee',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Brave Scout',
    description: [
      "Say hello to Bumblebee!",
      "He might be one of the smallest Autobots on the team, but he has the biggest heart and the bravest spirit of them all.",
      "Bumblebee is an awesome scout who sneaks into dangerous places to spy on the sneaky Decepticons.",
      "He transforms into a super cool, lightning-fast yellow sports car with bold black racing stripes.",
      "Because his voice box got hurt in a big battle long ago, Bumblebee often talks by playing songs on his radio.",
      "Even without his normal voice, he always finds a way to make his friends laugh and feel happy.",
      "Bumblebee loves humans more than almost anything, and he is like a giant, loyal, protective metal puppy.",
      "He can fire powerful plasma blasters from his arms that send Decepticons flying through the air.",
      "His small size lets him sneak into tight spots that bigger bots simply cannot reach.",
      "Bumblebee proves every single day that being brave and loyal is far more important than being the biggest bot on the team!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Bumblebee%20yellow%20sports%20car%20robot%20giving%20thumbs%20up%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=301',
    stats: { power: 75, speed: 95, bravery: 98 },
    narrative: [
      "Bumblebee is a brave yellow scout who uses speed and smarts to help his friends.",
      "He transforms into a cool yellow car that can outrun any Decepticon on the road.",
      "Don't underestimate him — his courage is bigger than any Autobot twice his size!"
    ]
  },
  {
    id: 'ironhide',
    name: 'Ironhide',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Iron Guardian',
    description: [
      "Here comes Ironhide, the toughest Autobot you will ever meet!",
      "He is a battle-hardened veteran who has fought in more battles than anyone can count, and he has the dents to prove it.",
      "Ironhide transforms into a big, powerful black pickup truck that rumbles down the road with tremendous force.",
      "He is Optimus Prime's personal bodyguard and the Autobots' strongest line of defense.",
      "His twin water-cooled automatic cannons on his arms can blast through almost any surface a Decepticon hides behind.",
      "He might sound grumpy sometimes, but deep down Ironhide cares deeply about protecting his friends.",
      "He loves to say things like 'One day someone's gonna have to explain the concept of fun to me' — but secretly he loves the action!",
      "Young Autobots look up to Ironhide as a wise and experienced teacher who knows every battle trick.",
      "His thick armored body can absorb incredible amounts of damage and keep on fighting.",
      "When Ironhide shows up on the battlefield, even the biggest Decepticons start looking for a way out!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Ironhide%20tough%20black%20truck%20robot%20with%20arm%20cannons%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=302',
    stats: { power: 90, speed: 65, bravery: 96 },
    narrative: [
      "Ironhide is the Autobots' toughest warrior and bodyguard!",
      "His massive arm cannons can blast through walls and scare off even the bravest Decepticons.",
      "He is gruff but completely loyal — the kind of hero who always has your back!"
    ]
  },
  {
    id: 'ratchet',
    name: 'Ratchet',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Chief Medic',
    description: [
      "Meet Ratchet, the Autobots' most important doctor!",
      "When any Autobot gets hurt in battle, Ratchet is the one who rushes in to fix them up with his amazing medical tools.",
      "He transforms into a bright emergency rescue vehicle with flashing lights and a loud siren.",
      "Inside his hands are cutting lasers, welding torches, and scanners that can find any problem inside a robot's body.",
      "Ratchet can be a little grumpy and impatient, but that is only because he cares so much about his patients.",
      "He works incredibly hard, sometimes through the whole night, to make sure every injured Autobot gets better.",
      "He is also a brilliant scientist who can invent new medicines and gadgets to help the team on tricky missions.",
      "Without Ratchet, many Autobots would not have survived the long war against the Decepticons.",
      "He often argues with soldiers who rush back into battle before they are fully healed, because he knows their safety matters.",
      "Ratchet is living proof that being a healer takes just as much bravery as being a fighter!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Ratchet%20medic%20robot%20with%20glowing%20healing%20tools%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=303',
    stats: { power: 65, speed: 72, bravery: 88 },
    narrative: [
      "Ratchet is the Autobots' brilliant doctor and scientist.",
      "He can fix any wound, invent any gadget, and keep the whole team running strong.",
      "Without his expert care, many Autobot heroes would never survive their toughest battles!"
    ]
  },
  {
    id: 'jazz',
    name: 'Jazz',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Cool Operative',
    description: [
      "Say hello to Jazz, the coolest Autobot on the team!",
      "He is a master of special operations who loves Earth's music, movies, and everything about human culture.",
      "Jazz transforms into a sleek, stylish white sports car that looks like it belongs on a racing track.",
      "His incredible agility lets him flip, spin, and dance through enemy fire while taking down Decepticons left and right.",
      "Jazz has a fun and easy-going personality that makes him friends with everyone he meets, human or robot.",
      "He uses a powerful sonic-wave blaster that can knock groups of enemies off their feet with a single burst.",
      "As Optimus Prime's most trusted special operations expert, he is often sent on the most dangerous secret missions.",
      "Jazz adapts to any situation with a smile, improvising brilliant solutions when things do not go according to plan.",
      "He absolutely loves to listen to Earth music and can often be heard humming a tune even in the middle of a battle.",
      "Jazz shows everyone that staying cool, calm, and creative under pressure is what makes a true hero!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Jazz%20cool%20white%20sports%20car%20robot%20striking%20a%20pose%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=304',
    stats: { power: 78, speed: 90, bravery: 89 },
    narrative: [
      "Jazz is the Autobots' coolest and most stylish special agent.",
      "He blends in anywhere and uses brilliant improvisation to outsmart the Decepticons.",
      "His love of Earth music and culture makes him a true friend to all humans!"
    ]
  },
  {
    id: 'arcee',
    name: 'Arcee',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Lethal Sharpshooter',
    description: [
      "Here comes Arcee, one of the most dangerous warriors in the entire Autobot army!",
      "She is incredibly fast and agile, flipping and rolling through battle zones with acrobatic moves that leave Decepticons spinning.",
      "Arcee transforms into a sleek, fast pink sports car or motorcycle depending on the adventure.",
      "Her twin pistols are so accurate she can hit a target the size of a coin from hundreds of metres away.",
      "Do not let her bright color fool you — Arcee is tougher, faster, and smarter than most bots twice her size.",
      "She is fiercely protective of the humans she befriends and will face any danger to keep them safe.",
      "Arcee has faced incredible loss but has never allowed sadness to stop her from fighting for what is right.",
      "Her speed is her greatest weapon; she attacks so fast that enemies barely have time to react.",
      "She trained under some of the greatest Autobot warriors and has mastered several forms of robot martial arts.",
      "Arcee is proof that true strength has nothing to do with size — only with heart, skill, and determination!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Arcee%20pink%20sleek%20robot%20warrior%20with%20blasters%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=305',
    stats: { power: 72, speed: 96, bravery: 95 },
    narrative: [
      "Arcee is one of the fastest and deadliest warriors on the Autobot team.",
      "She fires with pinpoint accuracy and moves so swiftly that Decepticons can barely keep track of her.",
      "Her fierce loyalty and unbreakable spirit make her one of the Autobots' most vital heroes!"
    ]
  },
  {
    id: 'prowl',
    name: 'Prowl',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Master Strategist',
    description: [
      "Meet Prowl, the brains behind the Autobot battle plans!",
      "While other bots are brave fighters, Prowl is the genius who figures out exactly how to win before the battle even begins.",
      "He transforms into a sleek black and white police car with lights flashing and sirens wailing.",
      "Prowl's mind works like a super-powerful computer — he can calculate thousands of strategies in seconds.",
      "He is calm, precise, and logical even in the middle of chaotic battles when everyone else is panicking.",
      "His shoulder-mounted missile launchers provide plenty of firepower when a strategy requires direct action.",
      "Prowl and Jazz often clash because Jazz likes to improvise, while Prowl insists on following the perfect plan.",
      "He has saved the Autobots countless times by predicting exactly what the Decepticons were going to do next.",
      "Prowl believes deeply that every life matters and works hard to find battle plans with zero casualties.",
      "Prowl shows us that being the smartest person in the room is just as heroic as being the strongest!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Prowl%20black%20and%20white%20police%20car%20robot%20with%20holographic%20battle%20map%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=306',
    stats: { power: 76, speed: 84, bravery: 82 },
    narrative: [
      "Prowl is the Autobots' brilliant military strategist and tactician.",
      "He calculates the perfect battle plan in seconds, always staying ten steps ahead of the enemy.",
      "His calm, precise mind has saved the Autobots from disaster more times than anyone can count!"
    ]
  },
  {
    id: 'wheeljack',
    name: 'Wheeljack',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Mad Engineer',
    description: [
      "Get ready to meet Wheeljack, the Autobots' wildest inventor!",
      "He is a brilliant engineer who builds incredible weapons, gadgets, and vehicles for the entire team.",
      "Wheeljack transforms into a white and green racing car that is almost as fast as his racing thoughts.",
      "His ear-fins light up and flash whenever he is excited, which is almost all the time when he is inventing something.",
      "The only problem with Wheeljack's inventions is that they have a habit of blowing up at the worst possible moment!",
      "He once accidentally launched three of his teammates into orbit while testing a new jet-pack design.",
      "Despite the occasional explosion, his inventions have saved the Autobots so many times that nobody stays angry for long.",
      "He built the legendary Dinobots — the most powerful dinosaur-bots in the universe — almost entirely by himself.",
      "Wheeljack loves science and engineering so much that he sometimes forgets to eat, sleep, or get out of his laboratory.",
      "He shows us that curiosity, creativity, and a fearless love of discovery can change the entire world!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Wheeljack%20white%20race%20car%20robot%20with%20sparking%20inventor%20tools%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=307',
    stats: { power: 74, speed: 78, bravery: 85 },
    narrative: [
      "Wheeljack is the Autobots' brilliant but chaotic inventor.",
      "His gadgets and weapons are incredible — when they don't accidentally explode!",
      "He built the mighty Dinobots and dozens of life-saving machines for the whole Autobot team!"
    ]
  },
  {
    id: 'cliffjumper',
    name: 'Cliffjumper',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Fierce Fighter',
    description: [
      "Here comes Cliffjumper, the scrappiest Autobot you will ever meet!",
      "He is small in size but absolutely enormous in attitude, bravery, and fighting spirit.",
      "Cliffjumper transforms into a compact red sports car that punches well above its weight in speed.",
      "His most unique weapon is the Glass Gas Gun, which can turn Decepticon armor as brittle as glass with one shot.",
      "He is hot-headed and always looking for a fight, sometimes charging into battles before thinking things through.",
      "Cliffjumper hates Decepticons more than anything else and never, ever backs down from a confrontation.",
      "He is Bumblebee's best friend, and the two of them are one of the greatest buddy pairs in Autobot history.",
      "Even the biggest Decepticons like Megatron do not enjoy facing Cliffjumper because of his completely unpredictable attacks.",
      "He proved his incredible bravery countless times, never letting his small frame stop him from taking on giants.",
      "Cliffjumper is living proof that attitude and courage matter far more than how tall you are!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Cliffjumper%20red%20mini-bot%20robot%20with%20huge%20blaster%20cannon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=308',
    stats: { power: 80, speed: 82, bravery: 97 },
    narrative: [
      "Cliffjumper is small but absolutely ferocious — the last bot anyone wants to underestimate!",
      "His Glass Gas Gun can shatter Decepticon armor and his bravery knows no limits.",
      "He is Bumblebee's best friend and the Autobots' most fearlessly aggressive warrior!"
    ]
  },
  {
    id: 'hot-rod',
    name: 'Hot Rod',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Chosen Cavalier',
    description: [
      "Meet Hot Rod, the fastest and most daring young Autobot on the team!",
      "He is brash, enthusiastic, and absolutely loves going fast — sometimes a little too fast for his own good.",
      "Hot Rod transforms into a sleek red racing car covered in cool flame decals that glow when he hits top speed.",
      "He carries powerful photon lasers and an energo-sword that crackle with golden light when drawn.",
      "Hot Rod is incredibly brave but sometimes acts without thinking, rushing into trouble where more careful bots fear to tread.",
      "Deep inside him, a great destiny waits — he is fated to one day become the legendary leader Rodimus Prime.",
      "He inherited the Autobot Matrix of Leadership and carried the impossible responsibility of leading the Autobots through their darkest hour.",
      "Even when he makes mistakes, Hot Rod never stops learning and always gets back up stronger than before.",
      "His speed is almost unmatched — he once outran a Decepticon jet in a straight race across the surface of Cybertron.",
      "Hot Rod shows every young person that mistakes are part of growing up, and that greatness can be earned one brave step at a time!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Hot%20Rod%20dynamic%20red%20racing%20robot%20with%20flame%20decals%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=309',
    stats: { power: 86, speed: 94, bravery: 93 },
    narrative: [
      "Hot Rod is the fastest and most daring young warrior in the Autobot ranks.",
      "His destiny leads him to become Rodimus Prime, the heroic leader who carries the Autobot Matrix.",
      "He proves that even impulsive young heroes can rise to do truly great things!"
    ]
  },
  {
    id: 'kup',
    name: 'Kup',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Grizzled Veteran',
    description: [
      "Meet Kup, the oldest and most experienced Autobot soldier you will ever find!",
      "He has been fighting battles since before most of the other Autobots were even built.",
      "Kup transforms into a tough, rugged light green pickup truck that has seen better days — just like him!",
      "He carries a musket laser that has been in more battles than every other weapon in the Autobot arsenal.",
      "Kup has a story about every situation imaginable, and he loves to share those stories whether anyone asks or not.",
      "He served as a mentor to many young Autobots including Hot Rod, teaching them how to survive impossible situations.",
      "Although he complains about his rusty joints and creaky gears, Kup is still one of the toughest fighters on the team.",
      "His battle experience means he has seen almost every Decepticon trick there is, and he knows how to counter all of them.",
      "Sometimes other Autobots roll their eyes when another Kup story starts, but they always end up glad they listened.",
      "Kup shows us that wisdom, experience, and a lifetime of hard lessons are the greatest treasures a warrior can have!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Kup%20old%20weathered%20green%20robot%20with%20laser%20musket%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=310',
    stats: { power: 82, speed: 60, bravery: 90 },
    narrative: [
      "Kup is the oldest and wisest warrior in the Autobot army.",
      "He has a battle story for every situation and has survived every kind of danger imaginable.",
      "His hard-won experience and gruff wisdom have saved many younger Autobots' lives!"
    ]
  },
  {
    id: 'drift',
    name: 'Drift',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Redeemed Swordsman',
    description: [
      "Meet Drift, one of the most fascinating and mysterious Autobots on the team!",
      "He was once a Decepticon who fought for the wrong side, but he found the courage to change and become a force for good.",
      "Drift transforms into a sleek white sports car with red and blue accents, moving with samurai-like precision.",
      "He carries a massive great-sword and two smaller swords, all charged with glowing energon energy.",
      "As a student of the ancient Cybertronian martial art of Circuit-Su, Drift is one of the most deadly swordsmen alive.",
      "He is calm, philosophical, and deeply spiritual — spending quiet moments meditating and studying ancient Autobot scrolls.",
      "Drift believes everyone deserves a second chance, because he was given one himself when he chose to walk away from evil.",
      "He is incredibly fast in combat, moving with a dancer's grace that belies the devastating power of each sword strike.",
      "His transformation from villain to hero makes him one of the most inspirational Autobots who ever lived.",
      "Drift teaches us that no matter who we were in the past, we always have the power to choose who we want to become!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Drift%20white%20samurai%20robot%20with%20glowing%20energon%20swords%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=311',
    stats: { power: 85, speed: 88, bravery: 92 },
    narrative: [
      "Drift is a former Decepticon who turned his back on evil and became one of the Autobots' finest warriors.",
      "His samurai sword skills are legendary, and his meditative calm makes him deadly in combat.",
      "He is living proof that anyone can choose a better path, no matter their past!"
    ]
  },
  {
    id: 'hound',
    name: 'Hound',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Nature-Loving Tracker',
    description: [
      "Say hello to Hound, the Autobot who loves Earth more than anyone!",
      "He is an expert tracker who can follow an enemy's trail across any terrain, from desert to ocean.",
      "Hound transforms into a rugged military green jeep that is equally happy on jungle paths or city streets.",
      "His most incredible ability is creating detailed 3D holograms — realistic images of anything he has ever seen.",
      "He uses these holograms to confuse enemies, create decoys, and even let his friends visit places they have never been.",
      "Hound dreams of exploring every corner of the natural world and has a deep love for Earth's mountains, forests, and oceans.",
      "He is gentle and thoughtful, preferring to solve problems cleverly rather than through brute force.",
      "His tracking skills are so precise he can identify a Decepticon from footprints left days earlier.",
      "Hound is one of the Autobots most enthusiastic about befriending humans and learning about Earth culture.",
      "He shows us that loving and protecting the natural world is one of the most heroic things anyone can do!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Hound%20green%20jeep%20robot%20projecting%20nature%20hologram%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=312',
    stats: { power: 74, speed: 76, bravery: 84 },
    narrative: [
      "Hound is the Autobots' finest tracker and the biggest lover of planet Earth on the team.",
      "He can project incredible holograms and follow any trail across any terrain.",
      "His gentle heart and brilliant mind make him one of the team's most valuable and beloved heroes!"
    ]
  },
  {
    id: 'mirage',
    name: 'Mirage',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Invisible Spy',
    description: [
      "Meet Mirage, the most mysterious Autobot on the entire team!",
      "He is a noble warrior from one of Cybertron's most prestigious families, but he chose to fight alongside his fellow Autobots.",
      "Mirage transforms into an incredibly fast blue Formula One racing car that can reach almost any speed.",
      "His most spectacular power is the ability to make himself completely invisible — he can vanish right before your eyes!",
      "He can also create convincing illusions to trick enemies into looking in completely the wrong direction.",
      "Mirage is refined, thoughtful, and sometimes seems a little out of place on the rough-and-tumble battlefield.",
      "His loyalty to the Autobot cause has sometimes been questioned, but when it counts, he always comes through.",
      "Working alongside Jazz on intelligence missions, Mirage's invisibility makes him the ultimate secret agent.",
      "He is one of the fastest Autobots alive in vehicle mode, able to outpace almost any Decepticon jet on a straight track.",
      "Mirage proves that brains, agility, and a unique power can be more effective than all the firepower in the world!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Mirage%20blue%20F1%20race%20car%20robot%20flickering%20invisible%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=313',
    stats: { power: 72, speed: 92, bravery: 78 },
    narrative: [
      "Mirage is the Autobots' invisible spy and one of the fastest racers on the team.",
      "He can vanish completely and create illusions that leave Decepticons hopelessly confused.",
      "His noble bearing and incredible abilities make him one of the Autobots' most unusual heroes!"
    ]
  },
  {
    id: 'sideswipe',
    name: 'Sideswipe',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Aggressive Warrior',
    description: [
      "Get ready for Sideswipe, one of the Autobots' most aggressive and exciting fighters!",
      "He loves nothing more than racing into battle at full speed and taking the fight directly to the Decepticons.",
      "Sideswipe transforms into a gorgeous red Lamborghini sports car that turns heads wherever it goes.",
      "He has rocket boosters built into his feet that let him fly short distances and perform incredible aerial attacks.",
      "His pile drivers — enormous fists that punch with rocket-powered force — can punch through reinforced Decepticon armor.",
      "Sideswipe is fearless and energetic, always the first volunteer for the most dangerous missions on the list.",
      "He is the twin brother of Sunstreaker, and the two of them together are nearly unstoppable on the battlefield.",
      "Sideswipe has a mischievous personality and loves playing pranks on teammates when things get too serious.",
      "He is also surprisingly agile for such a powerful bot, dancing around attacks with acrobatic grace.",
      "Sideswipe reminds us that enthusiasm, energy, and a love for the fight are all ingredients of an incredible hero!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Sideswipe%20red%20Lamborghini%20robot%20jet-boosting%20into%20battle%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=314',
    stats: { power: 84, speed: 90, bravery: 88 },
    narrative: [
      "Sideswipe is one of the Autobots' most aggressive and energetic front-line fighters.",
      "His rocket-powered pile drivers can punch through anything, and his aerial speed catches Decepticons off guard.",
      "He and his twin brother Sunstreaker are one of the most fearsome pairs in the entire Autobot army!"
    ]
  },
  {
    id: 'sunstreaker',
    name: 'Sunstreaker',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Vain Destroyer',
    description: [
      "Meet Sunstreaker, the most self-admiring Autobot you will ever encounter!",
      "He is Sideswipe's twin brother and considers himself — loudly and often — the most beautiful robot ever built.",
      "Sunstreaker transforms into a stunning yellow Lamborghini sports car, and he polishes his finish at every opportunity.",
      "Do not let his vanity fool you: in battle, Sunstreaker is a cold, utterly ruthless, and devastatingly effective warrior.",
      "He carries powerful electron pulse guns and is an expert at finding every vulnerability in an enemy's armor.",
      "Sunstreaker fights for the Autobots out of pride — he refuses to let the Decepticons beat him and mess up his perfect paint.",
      "He and Sideswipe have developed incredible tag-team battle moves that leave enemies overwhelmed and confused.",
      "Despite his sometimes selfish attitude, Sunstreaker would sacrifice everything to save his twin brother.",
      "He is one of the most powerful Autobot warriors in direct combat, moving with a cold precision that is almost frightening.",
      "Sunstreaker proves that even a warrior who loves himself a little too much can still be an undeniably incredible hero!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Sunstreaker%20yellow%20Lamborghini%20robot%20polishing%20his%20armor%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=315',
    stats: { power: 86, speed: 88, bravery: 80 },
    narrative: [
      "Sunstreaker is the most vain yet most powerful twin warrior in the Autobot forces.",
      "His yellow finish is matched only by his cold precision in destroying Decepticons.",
      "He and his brother Sideswipe together are one of the most formidable fighting pairs in the galaxy!"
    ]
  },
  {
    id: 'blaster',
    name: 'Blaster',
    faction: 'Autobot',
    category: 'Bonded Units',
    identifier: 'The Music-Loving Spy',
    description: [
      "Tune in and meet Blaster, the Autobots' most musical warrior!",
      "He is the Autobots' communications expert, constantly monitoring every signal and frequency across the galaxy.",
      "Blaster transforms into a powerful red boombox that can also transform into a radio cassette player.",
      "Just like Soundwave, Blaster carries smaller robot allies inside him — Steeljaw, Ramhorn, Rewind, and Eject.",
      "His most powerful weapon fires devastating sonic blasts that can send Decepticons tumbling through the air.",
      "Blaster loves every kind of music and will start a party in the middle of a mission if the beat is right.",
      "He is the polar opposite of Soundwave in every way: loud, fun, optimistic, and bursting with personality.",
      "Blaster can jam Decepticon communications from enormous distances, leaving enemy forces confused and disconnected.",
      "His booming voice can be heard across entire battlefields, boosting Autobot morale with rallying calls.",
      "Blaster shows us that combining incredible skill with a love for music and friendship makes for a truly special hero!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Blaster%20red%20boombox%20robot%20with%20sound%20wave%20blast%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=316',
    stats: { power: 77, speed: 80, bravery: 87 },
    narrative: [
      "Blaster is the Autobots' communications genius and biggest music lover.",
      "His sonic blasts are as powerful as his beats, and he carries miniature allies inside him just like Soundwave.",
      "He keeps the Autobot team connected, motivated, and jamming through every battle!"
    ]
  },
  {
    id: 'perceptor',
    name: 'Perceptor',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Brilliant Scientist',
    description: [
      "Say hello to Perceptor, the smartest robot scientist in the entire Autobot army!",
      "He has devoted his life to science, research, and discovering new ways to help the Autobots win the war.",
      "Perceptor transforms into a powerful microscope — perfect for examining things that are too tiny for normal eyes to see.",
      "He can also use his microscope mode as a powerful long-range cannon in battle situations.",
      "Perceptor speaks in very complicated scientific language, often leaving other Autobots nodding politely while looking confused.",
      "He once discovered the cure for a dangerous virus that was shutting down Autobot systems across the whole fleet.",
      "His brilliant mind has solved dozens of seemingly impossible engineering and science problems for the team.",
      "Perceptor is a little clumsy in combat but makes up for it with the most powerful intellect on the team.",
      "He works closely with Wheeljack and Ratchet to develop new technologies that give the Autobots the edge they need.",
      "Perceptor shows us that curiosity, study, and a love for science can save the day just as surely as the biggest weapon!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Perceptor%20scientist%20robot%20with%20giant%20magnifying%20scope%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=317',
    stats: { power: 62, speed: 58, bravery: 80 },
    narrative: [
      "Perceptor is the Autobots' most brilliant scientist and research expert.",
      "His discoveries and inventions have saved the team from dozens of impossible situations.",
      "He proves that a brilliant scientific mind is one of the most powerful tools in any battle!"
    ]
  },
  {
    id: 'ultra-magnus',
    name: 'Ultra Magnus',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The City Commander',
    description: [
      "Get ready to meet Ultra Magnus, one of the mightiest Autobots who ever lived!",
      "He is the Autobots' City Commander — a massive, powerful warrior who leads with discipline and iron resolve.",
      "Ultra Magnus transforms into a huge white car carrier truck that can haul an entire fleet of vehicles.",
      "He carries the legendary Autobot City Hammer and a rocket launcher that can flatten entire city blocks.",
      "Ultra Magnus was once offered the Autobot Matrix of Leadership but famously said he was 'not worthy' — even though he was.",
      "He is one of the most dutiful, responsible, and rule-following leaders the Autobots have ever had.",
      "Despite his reluctance to lead, Ultra Magnus takes command with total confidence when the situation demands it.",
      "His battle armor makes him nearly indestructible, capable of taking incredible amounts of punishment and fighting on.",
      "He trains Autobot soldiers relentlessly, demanding perfection because he knows perfect preparation saves lives.",
      "Ultra Magnus proves that true leaders are made not by seeking glory, but by stepping up and doing what must be done!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Ultra%20Magnus%20massive%20white%20and%20blue%20robot%20holding%20city%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=318',
    stats: { power: 96, speed: 70, bravery: 94 },
    narrative: [
      "Ultra Magnus is one of the most powerful and disciplined warriors in the entire Autobot army.",
      "His mighty battle armor makes him nearly indestructible, and his leadership inspires every bot around him.",
      "He always does his duty — even when no one else is willing to take on the hardest tasks!"
    ]
  },
  {
    id: 'chromia',
    name: 'Chromia',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Intelligence Chief',
    description: [
      "Meet Chromia, one of the toughest and most capable warriors in the entire Autobot army!",
      "She is the leader of a group of Autobot female warriors who fought the Decepticons on Cybertron for millions of years.",
      "Chromia transforms into a sleek blue motorcycle that can reach extraordinary speeds on any surface.",
      "She is Ironhide's closest companion, and the two of them are one of the greatest partnerships in Autobot history.",
      "Chromia is fierce, direct, and wastes absolutely no words — when she speaks, every Autobot listens carefully.",
      "She is the Autobots' chief intelligence operative, running spy networks and managing secret information flows.",
      "Her energon blade glows bright blue and can cut through Decepticon armor like paper.",
      "Chromia once single-handedly held off a squad of Decepticon seekers long enough for her team to complete an evacuation.",
      "She mentors younger female Autobots, teaching them that strength, skill, and intelligence are equally important in battle.",
      "Chromia is a warrior, a leader, and an inspiration — proof that courage and toughness come in every shape and form!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Chromia%20blue%20fembot%20robot%20with%20energon%20blade%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=319',
    stats: { power: 80, speed: 88, bravery: 91 },
    narrative: [
      "Chromia is one of the fiercest and most skilled female warriors in the Autobot ranks.",
      "Her intelligence network and razor-sharp blade keep the Autobots one step ahead of every Decepticon plot.",
      "She is the ultimate warrior-spy: tough, fast, brilliant, and completely fearless!"
    ]
  },
  {
    id: 'elita-one',
    name: 'Elita One',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Femme Commander',
    description: [
      "Say hello to Elita One, the legendary commander of the Autobot female warriors!",
      "She led a fierce and dedicated team of Autobot femmes who fought for freedom on Cybertron for millions of years.",
      "Elita One transforms into a fast, elegant pink sports car with powerful battle upgrades hidden under the hood.",
      "She possesses a rare and incredible ability — a time-freezing power so dangerous it almost cost her her own life to use.",
      "Elita One and Optimus Prime share a deep bond from their days on Cybertron before the great war began.",
      "She is as brave as Optimus himself and absolutely refuses to give up no matter how hopeless things seem.",
      "Her tactics and leadership skills are so brilliant that even Megatron feared the damage her team could cause.",
      "Elita One inspired her squad to keep fighting through incredible hardship with nothing but heart and determination.",
      "She is kind and warm with her teammates, but becomes a force of nature on the battlefield.",
      "Elita One is a legendary hero who shows that love, loyalty, and courage can stand strong against even the darkest forces!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Elita%20One%20pink%20commander%20robot%20with%20energy%20field%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=320',
    stats: { power: 82, speed: 82, bravery: 96 },
    narrative: [
      "Elita One is the bold and brilliant commander of the Autobot femme warrior squad.",
      "She has a rare time-freezing power and a fighting spirit that even Megatron respects.",
      "Her bond with Optimus Prime and her unbreakable leadership are the stuff of Autobot legend!"
    ]
  },
  {
    id: 'smokescreen',
    name: 'Smokescreen',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Diversionary Tactician',
    description: [
      "Meet Smokescreen, the Autobot who loves confusing the Decepticons!",
      "His whole specialty is misdirection — making enemies look the wrong way at exactly the right moment.",
      "Smokescreen transforms into a slick blue and red racing car with the number 38 painted proudly on his sides.",
      "His smoke-screen launcher fills entire areas with thick, impenetrable fog that blinds and confuses every enemy inside.",
      "While Decepticons stumble around in the smoke, Smokescreen and his teammates sweep in to finish the mission.",
      "He is cheerful, competitive, and always brings energy to the team with his upbeat and optimistic attitude.",
      "Smokescreen is an expert at reading enemy movements and finding the perfect moment to disrupt their plans.",
      "He loves to race and often challenges other Autobots to friendly speed contests when things get quiet.",
      "In the War for Cybertron, Smokescreen was one of the most promising young recruits, destined for great things.",
      "Smokescreen shows us that sometimes the greatest power is not raw strength, but the ability to outsmart your enemies!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Smokescreen%20race%20car%20robot%20firing%20smoke%20screen%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=321',
    stats: { power: 72, speed: 82, bravery: 86 },
    narrative: [
      "Smokescreen is the Autobots' master of confusion and misdirection.",
      "His smoke launchers blind enemies while his team races in to save the day.",
      "His competitive spirit and clever tactics make him one of the team's most valuable strategic assets!"
    ]
  },
  {
    id: 'red-alert',
    name: 'Red Alert',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Security Director',
    description: [
      "Meet Red Alert, the Autobot who is always — and we mean always — on guard!",
      "He is the Autobots' Security Director, responsible for monitoring every sensor, camera, and alarm system on the base.",
      "Red Alert transforms into a red and white Lamborghini Countach with flashing security lights on his doors.",
      "His scanners are so sensitive he can detect Decepticons from incredible distances before anyone else notices a thing.",
      "The slight downside is that Red Alert tends to see danger absolutely everywhere — even where none actually exists.",
      "He once locked down the entire Autobot base for six hours because of a butterfly flying near the front entrance.",
      "Despite his overactive alarm systems, his caution has genuinely saved the team from real ambushes many times.",
      "Red Alert works alongside Inferno as best friends — the calm firefighter balancing out the anxious security chief.",
      "He carries an infra-red sensor and a large laser cannon that makes him genuinely formidable in a real emergency.",
      "Red Alert proves that being careful and thorough — even if sometimes excessive — is a truly valuable quality!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Red%20Alert%20red%20security%20robot%20scanning%20with%20radar%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=322',
    stats: { power: 70, speed: 80, bravery: 76 },
    narrative: [
      "Red Alert is the Autobots' ever-vigilant security director who never misses a potential threat.",
      "His sensors are the most sensitive on the team, and his caution has saved the base many times over.",
      "He might be a little too alert sometimes, but nobody complains when a real danger is spotted first!"
    ]
  },
  {
    id: 'inferno',
    name: 'Inferno',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Fearless Rescuer',
    description: [
      "Say hello to Inferno, the bravest and most enthusiastic rescuer in the Autobot army!",
      "He is a firefighter at heart — always the first one to rush into the most dangerous, fiery situations imaginable.",
      "Inferno transforms into a big red fire truck with powerful water-cannon jets and long extending rescue ladders.",
      "His incredibly heat-resistant armor lets him walk through fires and explosions that would destroy most other bots.",
      "Inferno does not understand the concept of being scared — when others run away from danger, he runs straight toward it.",
      "He and Red Alert are best friends, and together they form the Autobots' emergency response and security team.",
      "Inferno loves helping people more than almost anything and gets tremendous joy from pulling teammates out of difficult spots.",
      "He carries a powerful fire-fighting cannon that can also be reversed to project incredibly hot flame blasts at enemies.",
      "Even when a situation seems totally hopeless, Inferno keeps working with a cheerful, unstoppable determination.",
      "Inferno shows us that there is no braver act than running toward danger to rescue someone who needs your help!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Inferno%20red%20fire%20truck%20robot%20with%20flame%20cannon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=323',
    stats: { power: 82, speed: 74, bravery: 98 },
    narrative: [
      "Inferno is the bravest rescuer in the whole Autobot army — fear is simply not in his programming!",
      "He transforms into a fire truck and can walk through explosions and flames that would stop any other bot.",
      "His cheerful determination to save his friends no matter the danger makes him a true hero!"
    ]
  },
  {
    id: 'grapple',
    name: 'Grapple',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Master Architect',
    description: [
      "Meet Grapple, the Autobots' most artistic and creative engineer!",
      "He is not a fighter by nature — he is a dreamer who imagines and builds beautiful, powerful structures.",
      "Grapple transforms into a large orange crane truck with an extendable boom arm that can reach enormous heights.",
      "His greatest dream is to build incredible skyscrapers and cities that blend Cybertronian design with Earth architecture.",
      "Grapple gets deeply sad when his beautiful creations get destroyed in battles, but he always starts drawing new ones.",
      "He worked with Hoist on several incredible building projects that gave the Autobots important strategic advantages.",
      "Once, he accidentally helped the Decepticons by being tricked into building them a solar energy tower — a mistake he deeply regrets.",
      "Grapple's crane arm is incredibly strong in a battle pinch, and he can lift objects far heavier than most expect.",
      "He finds true happiness not in fighting, but in the peaceful act of designing and creating beautiful things.",
      "Grapple reminds us that the world needs both warriors who protect it and artists who make it worth protecting!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Grapple%20orange%20crane%20robot%20designing%20holographic%20building%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=324',
    stats: { power: 68, speed: 60, bravery: 78 },
    narrative: [
      "Grapple is the Autobots' brilliant architect and creative engineering genius.",
      "He dreams in blueprints and loves building incredible structures more than anything else in the universe.",
      "His artistic soul and powerful crane arm make him a unique and irreplaceable member of the Autobot team!"
    ]
  },
  {
    id: 'tracks',
    name: 'Tracks',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Undercover Agent',
    description: [
      "Say hello to Tracks, the most elegant and self-admiring Autobot undercover agent around!",
      "He considers himself absolutely perfect and takes enormous pride in his gleaming, flawless appearance.",
      "Tracks transforms into a gorgeous black Chevrolet Corvette Stingray — his most prized possession in any form.",
      "He can also extend wings in vehicle mode and fly, making him one of the few Autobots with a flying car mode.",
      "Tracks is assigned to Earth undercover missions where blending in with normal vehicles is absolutely essential.",
      "He once became great friends with a young human named Raoul, proving that he can form genuine deep bonds.",
      "His wing-mounted rocket launchers are powerful enough to take down Decepticon jets in aerial combat.",
      "The downside is that Tracks really, really does not want to get his gorgeous finish scratched in battle.",
      "He is surprisingly compassionate underneath his vain exterior and genuinely cares about the humans he protects.",
      "Tracks shows us that you can have style and substance — caring about your appearance and being a true hero at the same time!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Tracks%20black%20Corvette%20robot%20with%20wing-mounted%20rockets%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=325',
    stats: { power: 74, speed: 86, bravery: 76 },
    narrative: [
      "Tracks is the Autobots' stylish undercover agent who transforms into a stunning black Corvette.",
      "His flying car mode and rocket launchers make him formidable — when he is willing to risk a scratched finish!",
      "His charm and genuine care for humans make him one of Earth's most beloved Autobot protectors!"
    ]
  },
  {
    id: 'trailbreaker',
    name: 'Trailbreaker',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Force-Field Defender',
    description: [
      "Meet Trailbreaker, the Autobot whose shields protect his whole team!",
      "He is one of the most laid-back and cheerful Autobots you will ever meet — always ready with a laugh and a kind word.",
      "Trailbreaker transforms into a rugged black Toyota 4x4 pickup truck built for any kind of off-road terrain.",
      "His most incredible ability is generating powerful force-field bubbles that can protect everyone inside from massive attacks.",
      "Trailbreaker can project his force fields outward to shield his entire team during the most intense bombardments.",
      "He worries that he uses too much energy and jokes about eating extra Energon to power his incredible shields.",
      "Despite his concern about fuel efficiency, he never hesitates to throw up a shield when teammates are in danger.",
      "Trailbreaker is deeply popular among the other Autobots because of his friendly, unpretentious personality.",
      "He has saved entire Autobot units from certain destruction with his force-field bubbles in the nick of time.",
      "Trailbreaker teaches us that protecting others is one of the most powerful and heroic things you can ever do!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Trailbreaker%20black%20camper%20robot%20with%20glowing%20force%20field%20dome%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=326',
    stats: { power: 78, speed: 64, bravery: 86 },
    narrative: [
      "Trailbreaker is the Autobots' cheerful protector who can generate force fields around the whole team.",
      "His shields have saved countless lives, and his friendly attitude lifts everyone's spirits.",
      "He proves that the best heroes are often the ones who put everyone else's safety ahead of their own!"
    ]
  },
  {
    id: 'brawn',
    name: 'Brawn',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Mini-Bot Powerhouse',
    description: [
      "Get ready for Brawn, the strongest mini-bot in the entire Autobot army!",
      "Do not let his small size fool you — Brawn can lift objects many times heavier than himself with ease.",
      "He transforms into a sturdy green Land Rover that can handle the roughest terrain without breaking a sweat.",
      "Brawn is one of the physically strongest Autobots alive, capable of bending steel beams with his bare hands.",
      "He is direct, no-nonsense, and has absolutely no patience for complicated plans when a straightforward solution exists.",
      "Brawn loves the outdoors and thrives on Earth, frequently exploring remote mountain ranges and rugged terrain.",
      "He takes a certain pride in being among the toughest bots in the Autobot ranks despite his compact size.",
      "Brawn once arm-wrestled Ironhide to a complete standstill, impressing every Autobot on the base.",
      "He is fiercely loyal to his teammates and is always the first to volunteer for the most physically dangerous tasks.",
      "Brawn shows us that strength and toughness are not about size — they are about heart, will, and determination!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Brawn%20green%20stocky%20mini-bot%20robot%20lifting%20boulder%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=327',
    stats: { power: 83, speed: 60, bravery: 95 },
    narrative: [
      "Brawn is the Autobots' strongest mini-bot — a powerhouse who can lift things no one expects him to.",
      "He is blunt, tough, and never backs down from a physical challenge, no matter how big the opponent.",
      "His compact frame hides unbelievable strength and an even more unbelievable fighting spirit!"
    ]
  },
  {
    id: 'hoist',
    name: 'Hoist',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Repair Specialist',
    description: [
      "Meet Hoist, the Autobot who keeps the whole team running smoothly!",
      "He is the team's go-to mechanic and repair specialist, and there is nothing he cannot fix with the right tools.",
      "Hoist transforms into a big green tow truck with a powerful winch arm and repair equipment built right in.",
      "He carries a complete workshop inside his body — welding torches, diagnostic scanners, and every kind of tool imaginable.",
      "Hoist is incredibly patient and thorough, never rushing a repair job even when things are moving fast around him.",
      "He has a funny habit of getting distracted by interesting machinery at the worst possible moments during missions.",
      "Hoist once completely overhauled Wheeljack's entire systems in a single night after a particularly explosive experiment.",
      "He genuinely loves his work and considers every repaired Autobot a little personal victory for craftsmanship.",
      "His friendly personality makes him universally liked, and he is always surrounded by teammates seeking help.",
      "Hoist proves that the unsung heroes who keep everything working are just as important as those on the front lines!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Hound%20green%20tow%20truck%20robot%20with%20welding%20torch%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=328',
    stats: { power: 66, speed: 62, bravery: 80 },
    narrative: [
      "Hoist is the cheerful mechanic who keeps every Autobot repaired and ready for battle.",
      "His workshop-truck form and expert skills have saved countless teammates from being sidelined by damage.",
      "He is the quiet backbone of the Autobot operation — always working, always fixing, always essential!"
    ]
  },
  {
    id: 'blurr',
    name: 'Blurr',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Fastest Bot Alive',
    description: [
      "MEET BLURR THE FASTEST AUTOBOT IN THE ENTIRE GALAXY AND POSSIBLY THE UNIVERSE TOO!",
      "He talks incredibly fast — like really, really, really fast — in long sentences that rush together without stopping!",
      "Blurr transforms into a sleek, aerodynamic light-blue futuristic racing car that is basically a blur of motion.",
      "His top speed is nearly unmatched by any other land vehicle in the Autobot or Decepticon forces combined.",
      "He serves as an incredibly fast courier, carrying urgent messages and important items across any distance in record time.",
      "Blurr is disciplined and devoted to his duty, always taking his speedy responsibilities completely seriously.",
      "The hardest challenge Blurr faces is that most other bots simply cannot keep up with him — in running or talking!",
      "His rapid fire personality sometimes exhausts his teammates, but they all appreciate how quickly he gets things done.",
      "Blurr once lapped an entire planet three times to create a diversionary strategy against a Decepticon blockade.",
      "Blurr proves that speed, dedication, and incredible energy channelled in the right direction can achieve anything!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Blurr%20light%20blue%20race%20car%20robot%20mid-sprint%20blur%20effect%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=329',
    stats: { power: 65, speed: 100, bravery: 82 },
    narrative: [
      "Blurr is the single fastest Autobot alive — in both running speed AND talking speed!",
      "He can cross entire continents in minutes and delivers crucial information faster than any other bot.",
      "His unmatched speed makes him the ultimate courier, scout, and rescue specialist all in one amazing package!"
    ]
  },
  {
    id: 'jetfire',
    name: 'Jetfire',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Aerospace Commander',
    description: [
      "Meet Jetfire, one of the most powerful and brilliant Autobots in the whole sky!",
      "He was originally a Decepticon scientist but switched sides when he realized the Decepticon cause was wrong and cruel.",
      "Jetfire transforms into an enormous, incredibly fast white and red fighter jet that dominates the skies.",
      "He is one of the largest and most heavily armed Autobots on the team, with firepower rivalling entire squads.",
      "Jetfire leads the Autobot aerospace forces, coordinating air defense and aerial strikes with brilliant precision.",
      "His scientific background makes him invaluable in research and development, working alongside Wheeljack and Perceptor.",
      "Jetfire once combined with Optimus Prime to create a super-powered battle mode that defeated an entire Decepticon fleet.",
      "He carries enough firepower to level a mountain range, but prefers to use science and strategy first.",
      "Jetfire is honest, direct, and driven by a strong moral compass that has never wavered since choosing the right side.",
      "He proves that it takes tremendous courage and wisdom to admit a mistake and choose a better path!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Jetfire%20massive%20white%20jet%20robot%20with%20powerful%20cannons%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=330',
    stats: { power: 92, speed: 95, bravery: 88 },
    narrative: [
      "Jetfire is the Autobots' most powerful aerial warrior and a brilliant scientific mind.",
      "His enormous fighter-jet form and massive firepower command the skies for the Autobot cause.",
      "His brave choice to leave the Decepticons and fight for good makes him one of the most respected Autobots alive!"
    ]
  },
  {
    id: 'sentinel-prime',
    name: 'Sentinel Prime',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Former Leader',
    description: [
      "Meet Sentinel Prime, the great Autobot leader who came before Optimus Prime!",
      "He was once the most powerful and respected Autobot commander in the entire history of Cybertron.",
      "Sentinel Prime transforms into a large Cybertronian battle vehicle bristling with heavy weapons and strong armor.",
      "He carried the legendary Autobot Matrix of Leadership before passing it on to those who came after him.",
      "Sentinel was a great warrior in his prime, fighting bravely through the darkest chapters of Cybertronian history.",
      "His story is complicated — sometimes he made wrong choices, showing that even great leaders are not perfect.",
      "The legacy he left behind inspired every Autobot leader who came after him, including the great Optimus Prime.",
      "His powerful armored frame could withstand tremendous punishment, built for the front lines of major conflicts.",
      "Sentinel reminds us that history is full of complicated heroes who teach us both what to do and what to avoid.",
      "He proves that even the most celebrated leaders can fall short — and that understanding their stories makes us wiser!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Sentinel%20Prime%20imposing%20orange%20and%20red%20armored%20robot%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=331',
    stats: { power: 90, speed: 68, bravery: 70 },
    narrative: [
      "Sentinel Prime was the greatest Autobot leader before Optimus Prime took command.",
      "He carried the Matrix of Leadership and fought through the darkest eras of Cybertronian history.",
      "His complicated legacy teaches every Autobot — and every young reader — that even heroes are imperfect and human!"
    ]
  },
  {
    id: 'grimlock',
    name: 'Grimlock',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Dinobot King',
    description: [
      "ME GRIMLOCK! KING OF DINOBOTS AND STRONGEST AUTOBOT OF ALL!",
      "Grimlock is a massive, incredibly powerful warrior who transforms into a ferocious Tyrannosaurus Rex.",
      "As a T-Rex, Grimlock breathes fire hot enough to melt most Decepticon armor in seconds.",
      "His robot form carries an energo-sword and a rocket launcher that he uses with surprising tactical skill.",
      "Grimlock is not the most careful speaker — he tends to say 'Me Grimlock' instead of 'I' — but he is nobody's fool.",
      "He is fiercely loyal to his Dinobot team and will battle any enemy who threatens one of his robot dinosaur friends.",
      "Grimlock once defeated Optimus Prime in a fair contest and briefly led all the Autobots — which nobody argues was a great idea.",
      "Despite his rough manner, Grimlock has saved countless Autobots through sheer, unstoppable brute power.",
      "He proves that the mightiest warrior does not need perfect grammar to be a true and powerful hero.",
      "Me Grimlock say: being strong AND loyal makes you the greatest hero of all — even if you are a giant robot dinosaur!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Grimlock%20mighty%20T-Rex%20Dinobot%20king%20with%20crown%20and%20sword%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=332',
    stats: { power: 98, speed: 50, bravery: 99 },
    narrative: [
      "Me Grimlock! King of Dinobots and strongest robot ever!",
      "He transforms into a fire-breathing T-Rex whose power shakes the ground wherever he walks.",
      "His fierce loyalty to his Dinobot team and unstoppable strength make him one of the greatest Autobot warriors!"
    ]
  },
  {
    id: 'windblade',
    name: 'Windblade',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Air Guardian',
    description: [
      "Meet Windblade, the bold and graceful air guardian of the Autobot forces!",
      "She comes from the distant world of Caminus, a planet born from the spark of the Transformers' own creator.",
      "Windblade transforms into a sleek red and black VTOL jet aircraft that can hover with incredible precision.",
      "Her most famous weapon is her sharp energon fan-blade sword, which she uses with incredible martial art skill.",
      "Windblade is also a trained Cityspeaker — she can communicate telepathically with the giant Titan-class robots.",
      "She was the very first Cityspeaker to arrive on Cybertron in generations, making her uniquely powerful and important.",
      "Windblade is brave, honest, and deeply principled, always speaking the truth even when it is uncomfortable.",
      "She has faced enormous challenges as an outsider on Cybertron but earned the deep respect of every Autobot.",
      "Her aerial speed and sword mastery together make her a devastating opponent for any Decepticon who challenges her.",
      "Windblade proves that where you come from does not limit who you become — what matters is the values you stand for!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Windblade%20red%20and%20black%20VTOL%20jet%20fembot%20with%20fan%20blade%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=333',
    stats: { power: 78, speed: 92, bravery: 90 },
    narrative: [
      "Windblade is a bold Autobot air guardian from the distant world of Caminus.",
      "She communicates with planet-sized Titans and fights with breathtaking skill using her energon fan-blade.",
      "Her courage, honesty, and unique Cityspeaker powers make her one of the most important heroes of her era!"
    ]
  },
  {
    id: 'quickshadow',
    name: 'Quickshadow',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Shadow Operative',
    description: [
      "Meet Quickshadow, one of the most secretive and skilled operatives in the entire Autobot intelligence network!",
      "She is an expert undercover agent who can infiltrate the most secure Decepticon operations without detection.",
      "Quickshadow transforms into a sleek, fast black sports car that melts into the night like a living shadow.",
      "Her incredible speed allows her to escape almost any pursuit, and few Decepticons can match her on a straightaway.",
      "Quickshadow is cool, calculating, and utterly composed under pressure — perfect qualities for a spy in the field.",
      "She has completed dozens of missions that most Autobots would consider completely impossible and suicidal.",
      "Her skills in stealth and infiltration are rivalled only by Mirage and Jazz among the Autobot ranks.",
      "Quickshadow relies on wits and speed rather than brute force, making her uniquely effective against larger enemies.",
      "She is deeply committed to the Autobot cause and has sacrificed personal glory many times for the good of the mission.",
      "Quickshadow proves that the most dangerous hero in the room is often the one you never even noticed was there!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Quickshadow%20black%20stealth%20sports%20car%20robot%20vanishing%20in%20shadows%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=334',
    stats: { power: 73, speed: 93, bravery: 87 },
    narrative: [
      "Quickshadow is the Autobots' most elite shadow operative — a spy who moves like darkness itself.",
      "Her black sports car form and incredible speed make her nearly impossible to catch or detect.",
      "She is proof that true heroes do not need applause — they work in the shadows so others can live in the light!"
    ]
  },
  {
    id: 'tailgate',
    name: 'Tailgate',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Eager Newcomer',
    description: [
      "Meet Tailgate, the most enthusiastic young Autobot you will ever encounter!",
      "He joined the Autobot cause bursting with excitement and a burning desire to prove he can be a true hero.",
      "Tailgate transforms into a small, compact white Cybertronian vehicle with surprisingly good speed for his size.",
      "He looks up to almost every other Autobot on the team and studies their moves to improve his own skills.",
      "Tailgate became one of the most beloved Autobots in IDW history after forming a deep friendship with the much older Cyclonus.",
      "His cheerful optimism lifts the spirits of everyone around him, even in the darkest and most difficult moments.",
      "He sometimes exaggerates his past accomplishments to seem more impressive, but always means absolutely no harm.",
      "Tailgate's bravery and willingness to try make up for any lack of experience or raw power.",
      "He has a special talent for connecting with others emotionally and building bridges between conflicting personalities.",
      "Tailgate shows us that eagerness to learn, genuine kindness, and endless enthusiasm are incredible superpowers!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Tailgate%20small%20white%20Autobot%20robot%20with%20big%20cheerful%20grin%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=335',
    stats: { power: 62, speed: 78, bravery: 96 },
    narrative: [
      "Tailgate is the most enthusiastic young Autobot — small in size but enormous in heart.",
      "His eagerness to prove himself and cheerful optimism make everyone around him feel braver.",
      "His unlikely friendship with tough old Cyclonus became one of the greatest partnerships in all of Autobot history!"
    ]
  },
  {
    id: 'beachcomber',
    name: 'Beachcomber',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Peaceful Geologist',
    description: [
      "Say hello to Beachcomber, the most peaceful and Earth-loving Autobot on the whole team!",
      "He is the Autobots' geologist, happily spending his time studying rocks, minerals, and the natural world.",
      "Beachcomber transforms into a rugged blue dune buggy perfectly designed for exploring deserts and wild terrain.",
      "He is a pacifist at heart and finds the very idea of fighting deeply uncomfortable and unnecessary.",
      "Beachcomber would rather collect unusual crystal formations than blast at Decepticons any day of the week.",
      "He has a gentle, laid-back personality that makes him popular despite his reluctance to join in combat missions.",
      "Beachcomber once discovered a rare mineral deposit that provided the Autobots with a crucial new energy source.",
      "He is deeply connected to the natural world and is genuinely saddened whenever Earth's environment is damaged in battle.",
      "When he must fight, Beachcomber uses his terrain knowledge to create strategic advantages rather than direct force.",
      "Beachcomber reminds us that caring for the natural world and all living things is one of the most heroic choices anyone can make!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Beachcomber%20blue%20dune%20buggy%20robot%20collecting%20earth%20rocks%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=336',
    stats: { power: 55, speed: 68, bravery: 72 },
    narrative: [
      "Beachcomber is the Autobots' peaceful geologist who loves the natural world above all else.",
      "He would rather study rocks than fight Decepticons — but his terrain knowledge is secretly invaluable.",
      "His gentle spirit and deep love for Earth make him a unique and irreplaceable member of the Autobot family!"
    ]
  },
  {
    id: 'warpath',
    name: 'Warpath',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Tank Bravado',
    description: [
      "POW! WHAM! KAPOW! Get ready for Warpath, the Autobot with the biggest personality on the battlefield!",
      "He is a walking, talking battle tank who absolutely loves everything about fighting Decepticons.",
      "Warpath transforms into a powerful red Cybertronian mini-tank with a main cannon that packs a tremendous punch.",
      "He punctuates almost everything he says with battle sound effects — 'KAPOW!' when surprised, 'BOOM!' when excited.",
      "His tank treads let him drive over almost any terrain, from rocky mountainsides to frozen tundra and steep hills.",
      "Warpath's cannon can fire explosive shells, plasma bursts, or concussion blasts depending on what the mission needs.",
      "He is incredibly brave and always eager to charge straight into the thickest part of any battle.",
      "Warpath is a loyal teammate who uses his tough tank body to shield his fellow Autobots from heavy fire.",
      "He once drove straight through a Decepticon energy shield that stopped everyone else completely cold.",
      "Warpath — KAPOW! — shows us that enthusiasm and firepower combined make for one absolutely AMAZING hero!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Warpath%20red%20mini-tank%20robot%20flexing%20with%20cannon%20blast%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=337',
    stats: { power: 86, speed: 55, bravery: 90 },
    narrative: [
      "Warpath is the Autobots' most enthusiastic tank-bot, charging into battle with explosive sound effects and even more explosive firepower!",
      "His powerful cannon and tough tank armor make him a wall of steel on the front lines.",
      "He is pure Autobot energy — tough, loud, cheerful, and utterly fearless in the face of any Decepticon!"
    ]
  },
  {
    id: 'seaspray',
    name: 'Seaspray',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Naval Warrior',
    description: [
      "Ahoy! Meet Seaspray, the Autobots' greatest naval warrior and the happiest bot in the ocean!",
      "He is the sea specialist of the team, perfectly at home in any ocean, river, or body of water he encounters.",
      "Seaspray transforms into a powerful military hovercraft that can skim across the water at remarkable speeds.",
      "His underwater and surface combat abilities make him the go-to Autobot whenever missions take place near water.",
      "Seaspray has the most cheerful and warm personality of almost any Autobot — always laughing and telling stories.",
      "He once fell in love with a mermaid on a distant alien ocean world — his was a truly adventurous heart.",
      "Seaspray's bubbling, gurgling voice pattern makes him sound perpetually delighted with everything around him.",
      "He carries powerful torpedoes and surface cannons for both sea and land battles.",
      "Seaspray brings pure joy to every mission, reminding his teammates to appreciate every adventure they go on.",
      "Seaspray proves that the oceans are full of wonder and that the bravest hearts find joy in the wildest adventures!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Seaspray%20white%20hovercraft%20robot%20on%20ocean%20waves%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=338',
    stats: { power: 70, speed: 72, bravery: 84 },
    narrative: [
      "Seaspray is the Autobots' joyful naval warrior, completely at home on any ocean.",
      "His hovercraft mode skims the waves with speed, while his torpedoes pack a serious punch.",
      "His cheerful, bubbling laugh and love of adventure make every mission just a little bit more fun!"
    ]
  },
  {
    id: 'skids',
    name: 'Skids',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Deep Thinker',
    description: [
      "Meet Skids, the most philosophical and thoughtful Autobot on the entire team!",
      "While others charge into battle, Skids prefers to sit quietly and think — very deeply and very carefully — about everything.",
      "He transforms into a blue Honda City Turbo van, blending perfectly into normal Earth traffic.",
      "Skids is the Autobots' foremost expert on alien cultures and has written numerous reports on Earth civilization.",
      "His head is always full of fascinating theories about how societies, languages, and histories work and connect.",
      "Skids sometimes gets so lost in his thoughts that he misses important announcements, meetings, or urgent alarms.",
      "Despite his dreamy nature, Skids is a solid fighter who applies his analytical mind to finding enemy weaknesses.",
      "He once spent three weeks studying a Decepticon base's communications and discovered a flaw that ended a whole campaign.",
      "His insatiable curiosity and love of learning make him one of the most quietly valuable Autobots on the team.",
      "Skids teaches us that a deeply curious, thinking mind is one of the greatest gifts and greatest weapons in existence!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Skids%20blue%20van%20robot%20reading%20Earth%20books%20and%20thinking%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=339',
    stats: { power: 68, speed: 72, bravery: 74 },
    narrative: [
      "Skids is the Autobots' deep-thinking theoretician and Earth culture expert.",
      "He is always lost in fascinating thoughts — and those thoughts have solved many impossible problems.",
      "His love of learning quietly makes him one of the most valuable bots on the whole team!"
    ]
  },
  {
    id: 'optimus-primal',
    name: 'Optimus Primal',
    faction: 'Autobot',
    category: 'Maximals',
    identifier: 'The Maximal Commander',
    description: [
      "MAXIMIZE! Meet Optimus Primal, the greatest leader the Maximals have ever known!",
      "He leads the crew of the Axalon spaceship and protects ancient Earth from the dangerous Predacon army.",
      "Optimus Primal transforms into a powerful silverback gorilla with incredible physical strength and agility.",
      "His jet-pack allows him to fly in robot mode, and he wields powerful sword weapons in close combat.",
      "Primal carries the spirit of the original Optimus Prime inside him — brave, selfless, and utterly devoted to protecting others.",
      "He once sacrificed his own life to save the very spark of the universe, showing incomparable courage and selflessness.",
      "Optimus Primal believes deeply in understanding and even learning from those he opposes, not just defeating them.",
      "His gorilla mode lets him climb, leap, and wrestle in ways that completely surprise enemy combatants.",
      "The Maximals follow him not from duty but from genuine love and respect — he earns it every single day.",
      "Optimus Primal proves that true leadership comes from wisdom, sacrifice, and the willingness to give everything for those you protect!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Optimus%20Primal%20silver%20gorilla%20robot%20standing%20heroically%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=340',
    stats: { power: 94, speed: 78, bravery: 100 },
    narrative: [
      "MAXIMIZE! Optimus Primal is the mightiest and most selfless leader the Maximals ever had.",
      "His gorilla power, jet-boosted flight, and fierce combat skills make him a formidable warrior on any world.",
      "His willingness to sacrifice everything for his friends and the universe makes him a true legend!"
    ]
  },
  {
    id: 'cheetor',
    name: 'Cheetor',
    faction: 'Autobot',
    category: 'Maximals',
    identifier: 'The Blazing Scout',
    description: [
      "Say hello to Cheetor, the fastest Maximal alive and the quickest scout on any planet!",
      "He is young, energetic, and absolutely loves running faster than anyone else can even dream about.",
      "Cheetor transforms into a powerful cheetah with golden-yellow fur and striking black spots.",
      "In cheetah mode, he is virtually uncatchable — his speed rivals some of the fastest vehicles on Earth.",
      "Cheetor started as a young, impulsive rookie but grew into one of the most trusted members of the Maximal team.",
      "He deeply admires Optimus Primal and works hard to earn his commander's respect in every mission.",
      "His gut instincts are incredibly sharp, often sensing Predacon ambushes before anyone else detects any danger.",
      "Cheetor carries powerful plasma pistols and handles his energon weapons with ever-increasing skill.",
      "By the time of Beast Machines, Cheetor had grown from a reckless kid to a mature and dependable warrior.",
      "Cheetor shows us that with time, dedication, and a willingness to learn, anyone can grow into the hero they are meant to be!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Cheetor%20yellow%20cheetah%20robot%20sprinting%20with%20energon%20blades%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=341',
    stats: { power: 68, speed: 99, bravery: 90 },
    narrative: [
      "Cheetor is the fastest Maximal alive — a blazing cheetah scout who can outrun anything!",
      "He grew from a reckless young rookie into one of the Maximals' most dependable and trusted warriors.",
      "His incredible speed and sharp instincts make him the perfect eyes and ears of the Maximal team!"
    ]
  },
  {
    id: 'rhinox',
    name: 'Rhinox',
    faction: 'Autobot',
    category: 'Maximals',
    identifier: 'The Heavy Engineer',
    description: [
      "Get ready to meet Rhinox, the strongest and most reliable Maximal on the whole team!",
      "He is the engineering genius and heavy weapons specialist whose steady presence holds the team together.",
      "Rhinox transforms into a massive, armored white rhinoceros whose charge can crack rock formations.",
      "His famous Gatling gun — the Chain Guns of Doom — spins up and unleashes a storm of energy rounds that clears entire battlefields.",
      "Rhinox is the calmest and most measured member of the Maximal crew, providing steady wisdom in every crisis.",
      "His technical expertise in computer systems and Cybertronian technology is matched only by his physical toughness.",
      "Rhinox once personally wrestled control of the Predacon base's systems and turned its weapons against the enemy.",
      "He deeply values peace and would far prefer solving problems without violence — but when pushed, he is devastating.",
      "His gentle demeanor off the battlefield contrasts sharply with his terrifying effectiveness in combat.",
      "Rhinox proves that the wisest and calmest warrior in the room is often the most dangerous one of all!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Rhinox%20massive%20rhino%20robot%20with%20rotating%20chain-guns%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=342',
    stats: { power: 92, speed: 45, bravery: 88 },
    narrative: [
      "Rhinox is the rock-solid heart of the Maximal team — an unstoppable warrior and brilliant engineer.",
      "His Chain Guns of Doom are among the most feared weapons in the Beast Wars era.",
      "His calm wisdom and incredible strength make him the teammate everyone depends on in any crisis!"
    ]
  },
  {
    id: 'rattrap',
    name: 'Rattrap',
    faction: 'Autobot',
    category: 'Maximals',
    identifier: 'The Cynical Saboteur',
    description: [
      "Say hello to Rattrap — and prepare for one of the most colourful Maximals you will ever meet!",
      "He is the team's spy, saboteur, and all-around complainer, but also secretly one of its most valuable members.",
      "Rattrap transforms into a large brown rat, perfect for sneaking through tight spaces and enemy facilities.",
      "He is a world-class saboteur — give him five minutes inside a Predacon base and the whole thing stops working.",
      "Rattrap is hilariously pessimistic, always convinced that the team is about to fail, die, or blow themselves up.",
      "Despite his constant complaints, Rattrap always shows up when his teammates need him — every single time.",
      "He is one of the most naturally skilled fighters on the crew, using size and sneakiness rather than brute force.",
      "Rattrap and Dinobot started as rivals and ended as one of the greatest friendships in Maximal history.",
      "His street-smart instincts have saved the team countless times from seemingly impossible situations.",
      "Rattrap proves that a pessimist who shows up anyway and gives their best is worth ten optimists who never act!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Rattrap%20small%20rat%20robot%20with%20sneaky%20grin%20and%20bomb%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=343',
    stats: { power: 65, speed: 80, bravery: 77 },
    narrative: [
      "Rattrap is the Maximals' grumpy but brilliantly skilled spy and saboteur.",
      "He transforms into a sneaky rat and can take apart any Predacon system with remarkable speed and cunning.",
      "Despite his constant complaints, he always shows up for his teammates — and that makes him a true hero!"
    ]
  },
  {
    id: 'tigatron',
    name: 'Tigatron',
    faction: 'Autobot',
    category: 'Maximals',
    identifier: 'The Wilderness Guardian',
    description: [
      "Meet Tigatron, the Maximal who loves Earth's wild nature more than any other warrior!",
      "He spends most of his time roaming the wilderness in beast mode, protecting Earth's animals and forests.",
      "Tigatron transforms into a magnificent, powerful white Siberian tiger — one of the most beautiful beast modes ever seen.",
      "Because he crashed far from the other Maximals, he learned to be completely self-sufficient in the wild.",
      "Tigatron feels a deep spiritual connection to Earth's wildlife and often questions whether the Maximals' war belongs on this world.",
      "He is gentle, observant, and deeply philosophical — more at home among tigers and wolves than in battle.",
      "Tigatron and Airazor share a powerful and beautiful bond that makes both of them stronger warriors.",
      "His white tiger form is incredibly fast and powerful, perfect for patrolling vast wilderness territories.",
      "Tigatron uses his knowledge of Earth's natural terrain to outmanoeuvre enemies in ways they never anticipate.",
      "Tigatron shows us that respecting and protecting the natural world takes as much courage as any battle!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Tigatron%20white%20tiger%20robot%20in%20forest%20setting%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=344',
    stats: { power: 73, speed: 85, bravery: 85 },
    narrative: [
      "Tigatron is a magnificent white tiger warrior who loves Earth's wild nature above all else.",
      "He roams vast wildernesses alone, protecting animals and living in harmony with the natural world.",
      "His deep connection to Earth and powerful tiger form make him a uniquely beautiful and capable Maximal warrior!"
    ]
  },
  {
    id: 'airazor',
    name: 'Airazor',
    faction: 'Autobot',
    category: 'Maximals',
    identifier: 'The Falcon Scout',
    description: [
      "Look to the skies and meet Airazor, the Maximals' fastest aerial scout!",
      "She is a keen-eyed, incredibly agile warrior who soars through the skies searching for Predacon activity.",
      "Airazor transforms into a breathtaking peregrine falcon — the fastest diving bird on Earth.",
      "In falcon mode, she can reach extraordinary speeds when diving and can spot movement from miles above the ground.",
      "Airazor is warm, observant, and possesses a quiet confidence that comes from knowing she commands the skies.",
      "She shares a profound and beautiful bond with Tigatron that made both of them legendary figures in Maximal history.",
      "Together, they were eventually merged into the transcendent being called Tigerhawk — a force of nature in battle.",
      "Airazor carries twin shoulder blasters in robot mode that she fires with pinpoint accuracy from the air.",
      "Her aerial perspective gives the team intelligence that ground-based scouts simply cannot provide.",
      "Airazor proves that seeing the bigger picture — quite literally from above — makes every team stronger!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Airazor%20brown%20falcon%20robot%20in%20flight%20over%20clouds%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=345',
    stats: { power: 72, speed: 92, bravery: 87 },
    narrative: [
      "Airazor is the Maximals' swift and perceptive aerial scout who commands the skies.",
      "Her peregrine falcon form gives her breathtaking speed and the ability to spot threats from incredible distances.",
      "Her bond with Tigatron and her sky-high perspective make her an indispensable Maximal hero!"
    ]
  },
  {
    id: 'dinobot',
    name: 'Dinobot',
    faction: 'Autobot',
    category: 'Maximals',
    identifier: 'The Honorable Warrior',
    description: [
      "Meet Dinobot — a warrior of fierce honour who chose right over loyalty to the wrong side!",
      "He was a Predacon who left Beast Megatron's crew because he believed in honour more than blind obedience.",
      "Dinobot transforms into a powerful, razor-clawed Velociraptor with a spinning tail disc weapon.",
      "He is formal, intensely serious, and has a strong personal code of honour that governs every action he takes.",
      "Dinobot challenged Optimus Primal for leadership of the Maximals upon joining — and he meant every word of it.",
      "Despite his gruff and confrontational manner, his friendship with Rattrap became one of the most touching in Beast Wars.",
      "His most legendary act was single-handedly defending a valley of sleeping primitive humans from an entire Predacon army.",
      "That final battle, where he fought alone and gave his life to save humanity's future, is considered one of the greatest acts of heroism ever told.",
      "Even Megatron paused to acknowledge that Dinobot 'died as he lived' — as a warrior beyond compare.",
      "Dinobot proves that true honour, even at the ultimate cost, shines brighter than any victory or any defeat!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Dinobot%20velociraptor%20robot%20with%20spinning%20disc%20weapons%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=346',
    stats: { power: 90, speed: 65, bravery: 96 },
    narrative: [
      "Dinobot is a warrior of unmatched honour who defected from the Predacons to fight for what was right.",
      "His velociraptor form and spinning disc weapons make him devastatingly effective in solo combat.",
      "His final heroic sacrifice to save ancient humanity is considered the greatest single act in Beast Wars history!"
    ]
  },
  {
    id: 'bulkhead',
    name: 'Bulkhead',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Gentle Giant Wrecker',
    description: [
      "Say hello to Bulkhead, the biggest heart — and biggest fists — on the Autobot Prime team!",
      "He is a Wrecker, meaning he belongs to the most elite and most reckless commando unit in the Autobot forces.",
      "Bulkhead transforms into a massive green armored SUV vehicle that barely fits on most city roads.",
      "He is enormously powerful, capable of smashing through walls, vehicles, and Decepticons with his wrecking ball arms.",
      "Despite all that power, Bulkhead is genuinely gentle and kind-hearted — his natural state is warm and cheerful.",
      "He is Miko's best friend, a human teenager who absolutely loves riding into adventure with her massive robot buddy.",
      "Bulkhead is incredibly loyal to Optimus Prime and would follow his leader anywhere without a moment's hesitation.",
      "He is also a surprisingly talented artist, creating bold, energetic paintings that delight everyone who sees them.",
      "Bulkhead knows he is clumsy sometimes, but he faces that fact with good humor and genuine effort to improve.",
      "Bulkhead proves that the most powerful heroes are the ones who carry strength gently, and protect others fiercely!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Bulkhead%20massive%20green%20Wrecker%20robot%20with%20wrecking%20ball%20arm%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=347',
    stats: { power: 90, speed: 55, bravery: 92 },
    narrative: [
      "Bulkhead is the mightiest Wrecker on the Autobot Prime team — enormous power wrapped in a gentle spirit.",
      "His green armored form and crushing wrecking-ball fists make him a terrifying force on the battlefield.",
      "His warm heart, loyalty, and surprising artistic talent make him one of the most beloved Autobots of his era!"
    ]
  },
  {
    id: 'silverbolt-maximal',
    name: 'Silverbolt (Maximal)',
    faction: 'Autobot',
    category: 'Maximals',
    identifier: 'The Noble Fuzor',
    description: [
      "Meet Silverbolt, one of the most noble and romantic warriors in the entire Beast Wars story!",
      "He is a rare type of Transformer called a Fuzor — a being with a beast mode that combines two different animals.",
      "Silverbolt transforms into a magnificent creature that is half wolf and half golden eagle — swift and powerful.",
      "His wolf-eagle form lets him run at incredible speed on the ground and soar on massive wings above the clouds.",
      "Silverbolt is deeply chivalrous and speaks in a poetic, old-fashioned style that sounds like an ancient knight.",
      "He fell in love with the Predacon Blackarachnia and refused to give up on her, believing there was good inside her.",
      "His loyalty to that belief eventually led Blackarachnia to genuinely join the Maximal cause.",
      "Silverbolt carries powerful air-to-ground missiles and close-range slashing talons for fierce aerial combat.",
      "His code of honour and pure heart earn him the deepest respect from every member of the Maximal crew.",
      "Silverbolt shows us that believing in the good inside someone — even an enemy — can change the entire world!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Silverbolt%20wolf-eagle%20Fuzor%20Maximal%20robot%20in%20flight%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=348',
    stats: { power: 78, speed: 84, bravery: 92 },
    narrative: [
      "Silverbolt is a noble wolf-eagle Fuzor warrior who speaks and fights like a legendary knight.",
      "His belief in the good inside Blackarachnia helped turn a Predacon into an ally.",
      "His honour, bravery, and romantic spirit make him one of Beast Wars' most beloved heroes!"
    ]
  },
  {
    id: 'depth-charge',
    name: 'Depth Charge',
    faction: 'Autobot',
    category: 'Maximals',
    identifier: 'The Relentless Hunter',
    description: [
      "Meet Depth Charge, the most relentless and driven warrior in the entire Beast Wars saga!",
      "He has devoted his existence to hunting down the monstrous Predacon criminal Rampage — and he will never stop.",
      "Depth Charge transforms into a sleek, powerful manta ray that cuts through oceans and skies with equal ease.",
      "In the water, he is virtually unmatched — fast, agile, and armed with powerful torpedo launchers.",
      "Depth Charge is dark, solitary, and carries a deep personal grief from tragedies caused by Rampage.",
      "He chose to serve as a Maximal not from joy or team spirit, but from absolute grim determination to end Rampage.",
      "Despite his gloomy manner, Depth Charge is a genuine protector who cares about innocent lives above all else.",
      "His battle with Rampage that ended both their sparks is one of the most emotional moments in all of Beast Wars.",
      "He was not looking for friendship or glory — only justice for those who could no longer seek it themselves.",
      "Depth Charge teaches us that sometimes the bravest thing is carrying grief without letting it stop you from doing what is right!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Depth%20Charge%20dark%20manta%20ray%20robot%20with%20torpedo%20launchers%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=349',
    stats: { power: 88, speed: 76, bravery: 80 },
    narrative: [
      "Depth Charge is a grim and relentless Maximal hunter on a lifelong mission of justice.",
      "His manta ray form dominates the oceans, and his determination in pursuing Rampage never wavers.",
      "His tragic but heroic story shows that true bravery is doing what is right even when your heart is broken!"
    ]
  },
  {
    id: 'bluestreak',
    name: 'Bluestreak',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Chatty Gunner',
    description: [
      "Meet Bluestreak, the Autobot who never, ever runs out of things to say!",
      "He is the team's designated gunner and one of the most accurate long-range marksmen in the Autobot ranks.",
      "Bluestreak transforms into a sleek silver and blue Datsun 280ZX sports car that looks absolutely fantastic.",
      "He talks almost constantly and seems unable to stay quiet for more than a few seconds at a stretch.",
      "Despite his cheerful and chatty nature, Bluestreak carries a deep sadness from losing his home city to the Decepticons.",
      "Talking, he discovered, was how he coped with that loss — and eventually it became just part of who he is.",
      "His shoulder-mounted missiles and artillery are among the most powerful in the standard Autobot arsenal.",
      "Bluestreak earned early respect from Optimus Prime for his ability to keep fighting even when grief weighed heavily.",
      "He never developed a bitter or hateful attitude toward anyone, choosing warmth and connection over anger.",
      "Bluestreak teaches us that healing sometimes comes from talking, connecting with others, and choosing hope over sorrow!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Bluestreak%20blue%20and%20silver%20Datsun%20robot%20talking%20mid-battle%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=350',
    stats: { power: 74, speed: 84, bravery: 83 },
    narrative: [
      "Bluestreak is the Autobots' talkative, warmhearted gunner with impressive long-range firepower.",
      "He chatters non-stop in battle, but his aim is always perfect and his heart is always in the right place.",
      "His resilience in the face of personal tragedy makes him a quietly inspiring figure in Autobot history!"
    ]
  },
  {
    id: 'crosshairs',
    name: 'Crosshairs',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Precise Paratrooper',
    description: [
      "Get ready to meet Crosshairs, the sharpshooter who brings style and accuracy to every mission!",
      "He is the Autobots' finest paratrooper — an expert at fast-dropping into hostile zones and taking control.",
      "Crosshairs transforms into a fast-moving green car with battle-ready upgrades visible from every angle.",
      "He wields dual pistols simultaneously with unmatched accuracy and a confident flair that makes it look effortless.",
      "Crosshairs is opinionated, witty, and not afraid to speak his mind even when Optimus Prime is listening.",
      "He adapted brilliantly to working with human allies, forming effective partnerships with humans on countless missions.",
      "His marksmanship is so precise that other Autobots jokingly ask him to recalibrate their aim just by standing nearby.",
      "Crosshairs deploys from heights, vehicles, and even moving spacecraft with total confidence and zero hesitation.",
      "His tactical eye lets him read a battle zone in seconds and find the perfect position for maximum effectiveness.",
      "Crosshairs proves that precision, confidence, and speaking your truth are all key ingredients of a great warrior!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Crosshairs%20green%20paratrooper%20robot%20with%20dual%20pistols%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=351',
    stats: { power: 76, speed: 82, bravery: 85 },
    narrative: [
      "Crosshairs is the Autobots' most stylish and precise paratrooper-sharpshooter.",
      "His dual pistols never miss, and his confident attitude brings energy to every mission he joins.",
      "He drops into danger zones with total confidence and takes charge like a true professional every time!"
    ]
  },
  {
    id: 'hot-shot',
    name: 'Hot Shot',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Competitive Speedster',
    description: [
      "Meet Hot Shot, the most competitive young Autobot in the Armada universe!",
      "He is passionate, energetic, and absolutely determined to be the best Autobot warrior he can possibly be.",
      "Hot Shot transforms into a sleek, fast yellow sports car that leaves most competitors far behind.",
      "He bonded with a Mini-Con partner called Jolt who amplifies his speed and combat abilities dramatically.",
      "Hot Shot often rushes in before the plan is fully explained, preferring action to careful preparation.",
      "His competitive drive sometimes causes friction with other Autobots, but his genuine heart wins everyone over.",
      "Deep down, Hot Shot wants to be the kind of hero that his fellow bots can be truly proud of.",
      "He grew enormously as a warrior and a person throughout the Armada conflict, learning humility alongside skill.",
      "Optimus Prime recognized his potential early and invested great personal effort in mentoring this passionate young bot.",
      "Hot Shot proves that passion and effort, guided by good mentorship, can turn a rough young hero into something truly great!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Hot%20Shot%20yellow%20race%20car%20Armada%20robot%20in%20competitive%20race%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=352',
    stats: { power: 78, speed: 90, bravery: 88 },
    narrative: [
      "Hot Shot is the most competitive and passionate young Autobot in his era.",
      "His yellow race car speed and fierce determination make him a force to be reckoned with.",
      "His journey from impulsive rookie to reliable hero is one of the most inspiring in Autobot history!"
    ]
  },
  {
    id: 'nightscream',
    name: 'Nightscream',
    faction: 'Autobot',
    category: 'Maximals',
    identifier: 'The Young Organic Scout',
    description: [
      "Say hello to Nightscream, the youngest and wildest Maximal warrior in Beast Machines!",
      "He is one of the last Transformers to survive Megatron's takeover of Cybertron, hiding and fighting alone.",
      "Nightscream transforms into a living organic bat with huge wingspan wings that let him navigate total darkness.",
      "Unlike most Transformers, his beast mode is genuinely organic — not mechanical — a result of Cybertron's strange new state.",
      "He is impulsive, independent, and does not always follow orders immediately, preferring to think for himself.",
      "Nightscream was forced to survive by his wits on a hostile Cybertron before the Maximals even arrived.",
      "His sonic screech attacks in bat mode can disorient large numbers of enemies simultaneously.",
      "He gradually learned to trust the Maximal team and found genuine friendship with Cheetor in particular.",
      "Nightscream's organic nature made him a living symbol of the new Cybertron that Optimus Primal was fighting to create.",
      "Nightscream shows us that young, wild spirits who learn to channel their independence can become true heroes!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Nightscream%20organic%20bat-winged%20robot%20in%20glowing%20moonlight%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=353',
    stats: { power: 62, speed: 80, bravery: 87 },
    narrative: [
      "Nightscream is a young, impulsive Maximal survivor with organic bat wings and a fierce independent spirit.",
      "His sonic screech and darkness navigation make him a unique and invaluable scout for the team.",
      "His growth from lone survivor to trusted teammate is one of Beast Machines' most heartwarming stories!"
    ]
  },
  {
    id: 'override',
    name: 'Override',
    faction: 'Autobot',
    category: 'Elite Core',
    identifier: 'The Speed Champion',
    description: [
      "Start your engines and meet Override, the greatest speed champion in the entire galaxy!",
      "She is the ruler of Velocitron — a planet where speed is everything and racing determines all leadership.",
      "Override transforms into a blazing-fast white racing car that holds virtually every land speed record on her world.",
      "She initially refused to join the Autobots, protecting her world's independence with fierce determination.",
      "Override is confident, competitive, and takes the concept of winning extremely seriously at all times.",
      "She eventually chose to align with the Autobots after witnessing the bigger stakes of the Decepticon threat.",
      "Her racing instincts translate brilliantly to battlefield tactics — she can calculate evasion routes in milliseconds.",
      "Override's leadership style is direct and merit-based: earn your place through action, not words.",
      "She brought Velocitron's incredible speed technology to the Autobot cause, giving the whole team a dramatic advantage.",
      "Override proves that champions are not just about winning races — they are about choosing the right side when it matters!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Override%20female%20speed%20champion%20robot%20in%20white%20race%20car%20form%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=354',
    stats: { power: 75, speed: 97, bravery: 85 },
    narrative: [
      "Override is the fastest bot on planet Velocitron and one of the greatest racing champions in the galaxy.",
      "Her blazing white race car form holds speed records that other bots can barely dream about matching.",
      "Her fierce competitive spirit and leadership of a whole planet make her one of the most impressive Autobots anywhere!"
    ]
  },
  {
    id: 'superion',
    name: 'Superion',
    faction: 'Autobot',
    category: 'Combiners',
    identifier: 'The Aerial Defender',
    description: [
      "Look up in the sky — it's Superion!",
      "He is not just one robot but a GIGANTIC super-warrior made from five brave Autobot jets called the Aerialbots.",
      "When danger is too large for one bot, the Aerialbots shout 'Aerialbots, unite!' and click together into a towering hero.",
      "Silverbolt becomes the body, Fireflight and Slingshot become the arms, Air Raid and Skydive become the legs.",
      "Superion is taller than skyscrapers and strong enough to crush entire Decepticon vehicles in his enormous fists.",
      "His jet engines roar so loudly when he flies that clouds scatter from the shockwave of pure sound.",
      "Because five minds must think as one, he is intensely focused — nothing distracts Superion from protecting the innocent.",
      "He dives from the upper atmosphere to shield his human friends from Decepticon fire with his huge body.",
      "His combined firepower — blasting from five sets of weapons — can overwhelm almost any Decepticon threat.",
      "Superion shows us that five friends working as one perfect team can accomplish what nobody could do alone!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Superion%20giant%20flying%20combining%20Autobot%20robot%20in%20sky%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=400',
    stats: { power: 95, speed: 85, bravery: 90 },
    narrative: [
      "Superion is a colossal Autobot warrior formed when five brave jets combine into one sky-dominating giant.",
      "His aerial firepower and towering strength make him almost unstoppable in the skies above Earth.",
      "He is the ultimate proof that teamwork creates power beyond anything a single warrior could ever achieve!"
    ]
  },
  {
    id: 'defensor',
    name: 'Defensor',
    faction: 'Autobot',
    category: 'Combiners',
    identifier: 'The Civilian Protector',
    description: [
      "Meet Defensor, the gentlest giant and most devoted protector in all of Autobot history!",
      "He is formed from five emergency-service Autobots called the Protectobots — doctors, firefighters, and rescuers.",
      "When civilians are in danger, the Protectobots merge: Hot Spot becomes the body, the rest click into place.",
      "Defensor does not fight for territory or resources — he fights for one reason only: to protect innocent people.",
      "His massive body is essentially a living shield, and he will stand between civilians and danger every single time.",
      "He carries powerful force-field projectors that create protective bubbles around entire city blocks.",
      "Unlike most giants, Defensor speaks quietly and gently, reassuring people even in the middle of massive battles.",
      "He is the Autobots' answer to the question: 'What if a Combiner existed only to save lives, not take them?'",
      "The Stunticons who form Menasor are his natural enemies — chaos meets protection in every confrontation.",
      "Defensor is the greatest example of what a hero truly is: someone who stands up for others, no matter the cost!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Defensor%20giant%20robot%20protecting%20city%20civilians%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=401',
    stats: { power: 88, speed: 60, bravery: 100 },
    narrative: [
      "Defensor is formed from five emergency-service Autobots who combine their hearts into one gentle giant protector.",
      "His only mission is protecting innocent civilians — and he has never failed that mission, not once.",
      "He is the soul of what it means to be a hero: strong, gentle, and entirely dedicated to others!"
    ]
  },
  {
    id: 'computron',
    name: 'Computron',
    faction: 'Autobot',
    category: 'Combiners',
    identifier: 'The Data Gestalt',
    description: [
      "Meet Computron, the smartest giant robot who has ever calculated an answer!",
      "He is formed when five brilliant scientist Autobots called the Technobots combine their incredible minds and bodies.",
      "Scattershot forms the torso, Nosecone and Strafe become the arms, Afterburner and Lightspeed form the legs.",
      "Computron's combined brain can process information at speeds no single robot mind can possibly achieve alone.",
      "He runs complex battle simulations while fighting, calculating the best strategy mid-clash with perfect precision.",
      "The slight downside is that Computron takes so long analyzing every situation that enemies sometimes escape while he calculates.",
      "He is always right in his calculations — the problem is he sometimes takes slightly too long to announce the answer.",
      "Computron can interface directly with any computer system in the galaxy and download entire databases in moments.",
      "In situations requiring brilliant analysis rather than brute force, Computron is absolutely the Autobot to call.",
      "Computron proves that brain power, when combined and coordinated, is the most formidable weapon in any universe!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Computron%20giant%20scientific%20computer%20robot%20with%20data%20screens%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=402',
    stats: { power: 84, speed: 55, bravery: 80 },
    narrative: [
      "Computron is the combined form of five Autobot scientists — the smartest giant robot in existence.",
      "His combined mind processes battle data and discovers solutions at breathtaking computational speeds.",
      "Perfectly right and occasionally a little slow to announce it, he is the ultimate thinking warrior!"
    ]
  },
  {
    id: 'victorion',
    name: 'Victorion',
    faction: 'Autobot',
    category: 'Combiners',
    identifier: 'The Torchbearer',
    description: [
      "Say hello to Victorion, one of the most unique and powerful Combiners ever seen!",
      "She is formed from the Torchbearers, a team of six Autobot femme warriors from the distant world of Caminus.",
      "The Torchbearers — Rust Dust, Jumpstream, Stormclash, Skyburst, Dustup, and Pyra Magna — combine into Victorion.",
      "She carries the eternal flame of the Torch, a symbol of hope passed down through generations of Caminus warriors.",
      "Victorion is fierce, proud, and deeply spiritual — connected to the ancient traditions of her home world.",
      "Her combined form wields powerful magnetic abilities and can manipulate metal from a distance.",
      "Unlike many Combiners, Victorion's six members work in perfect harmony, their personalities complementing each other.",
      "She arrived on Cybertron as an ambassador from Caminus but quickly became one of its greatest defenders.",
      "Victorion's unique powers and origin make her unlike any Combiner created on Cybertron itself.",
      "Victorion proves that diversity — six very different warriors coming from distant worlds — creates the mightiest team of all!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Victorion%20feminine%20combiner%20robot%20with%20blazing%20torch%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=403',
    stats: { power: 90, speed: 68, bravery: 94 },
    narrative: [
      "Victorion is a magnificent Combiner formed from six Autobot femme warriors from the world of Caminus.",
      "She wields the eternal Torch and powerful magnetic abilities that set her apart from all other Combiners.",
      "Her spiritual strength, fierce loyalty, and unique origins make her one of the most remarkable Autobot legends!"
    ]
  },
  {
    id: 'volcanicus',
    name: 'Volcanicus',
    faction: 'Autobot',
    category: 'Combiners',
    identifier: 'The Dinobot Titan',
    description: [
      "RARGH! Behold Volcanicus, the most terrifyingly powerful Dinobot warrior of all time!",
      "He is formed when all five incredible Dinobots — Grimlock, Swoop, Snarl, Slug, and Sludge — combine into one gigantic titan.",
      "Grimlock becomes the mighty torso, the others locking into place with the grinding of massive metal joints.",
      "Volcanicus is so overwhelmingly powerful that even other Combiners think twice before confronting him.",
      "His sheer physical strength is nearly unmatched by any non-Titan Transformer in the entire universe.",
      "He breathes fire, roars with the force of a volcano, and his footsteps cause miniature earthquakes.",
      "The challenge with Volcanicus is that five very strong-willed Dinobots are not the easiest team to coordinate.",
      "Sometimes the different Dinobot personalities argue inside Volcanicus during battle, which makes him unpredictable.",
      "Despite the occasional internal debate, when Volcanicus commits to an attack, nothing in existence can stop him.",
      "Volcanicus proves that raw, primal power combined with the prehistoric spirit of the Dinobots is a truly unstoppable force!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Volcanicus%20massive%20Dinobot%20combiner%20roaring%20with%20fire%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=404',
    stats: { power: 99, speed: 40, bravery: 98 },
    narrative: [
      "Volcanicus is the earth-shaking combined form of all five mighty Dinobots — raw power beyond all measure!",
      "He breathes fire, causes tremors with every step, and can match even the most powerful Decepticon Combiners.",
      "When the five prehistoric warriors combine their spirits into one, the ground itself trembles with awe!"
    ]
  },
  {
    id: 'rail-racer',
    name: 'Rail Racer',
    faction: 'Autobot',
    category: 'Combiners',
    identifier: 'The Rail Guardian',
    description: [
      "All aboard! Meet Rail Racer, the Autobot Combiner who keeps the rails safe for everyone!",
      "He is formed when three Autobot train warriors — Railspike, Rapid Run, and Midnight Express — combine into one.",
      "Together they command enormous speed and firepower that makes them a formidable guardian of transportation routes.",
      "Rail Racer can transform into a super-train mode that travels at jaw-dropping speeds across any rail network.",
      "He specializes in protecting train systems, cities, and transportation hubs from Decepticon attacks.",
      "Each of the three forming robots has a unique specialty — speed, power, and tactics — that Rail Racer combines perfectly.",
      "He appeared in the Robots in Disguise series, protecting humans alongside fellow Autobots against Megatron's forces.",
      "His knowledge of rail networks around the world allows him to plan lightning-fast rapid response missions.",
      "Rail Racer moves with surprising grace for such a large Combiner, his train-merge giving him fluid movement.",
      "Rail Racer proves that protecting the everyday infrastructure that people depend on is a vitally important heroic mission!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Rail%20Racer%20train%20combiner%20robot%20on%20futuristic%20rail%20tracks%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=405',
    stats: { power: 85, speed: 70, bravery: 84 },
    narrative: [
      "Rail Racer is formed from three Autobot train warriors who combine to guard Earth's rail networks!",
      "His super-train mode blazes across tracks at incredible speeds while his combined robot form protects entire cities.",
      "He is a unique and powerful Combiner who proves that protecting everyday life is as heroic as any epic battle!"
    ]
  },
  {
    id: 'magnaboss',
    name: 'Magnaboss',
    faction: 'Autobot',
    category: 'Combiners',
    identifier: 'The Beast Titan',
    description: [
      "MAXIMIZE and MERGE! Meet Magnaboss, the Maximal Combiner of the Beast Wars era!",
      "He is formed when three powerful Maximals — Ironhide, Silverbolt, and Prowl — combine their beast forms.",
      "Together they create a towering warrior with the combined strength of lion, eagle-wolf, and jet-powered might.",
      "Magnaboss brings a unique advantage to the Beast Wars: a Combiner built from organic beast-mode warriors.",
      "His powerful frame carries the speed of Silverbolt, the strength of Maximal Ironhide, and the tactics of Prowl.",
      "Magnaboss appeared as the Maximals' answer to the growing threat of powerful Predacon combinations.",
      "He proves that even on a prehistoric Earth far from Cybertron, teamwork and combination create incredible power.",
      "His organic beast mode parts give him natural camouflage capabilities that pure mechanical Combiners lack.",
      "Forming Magnaboss requires all three members to synchronize their beast instincts — a unique challenge.",
      "Magnaboss shows that even in the wild prehistoric world of Beast Wars, the power of combination wins the day!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Magnaboss%20three-animal%20Maximal%20combiner%20robot%20in%20jungle%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=406',
    stats: { power: 88, speed: 62, bravery: 87 },
    narrative: [
      "Magnaboss is the Beast Wars' own mighty Combiner — three Maximals merging their beast-mode power!",
      "His combined form brings speed, strength, and tactics together into one formidable warrior package.",
      "He is living proof that even on a prehistoric Earth, Autobot teamwork and combination are unbeatable!"
    ]
  },
  {
    id: 'optimus-maximus',
    name: 'Optimus Maximus',
    faction: 'Autobot',
    category: 'Combiners',
    identifier: 'The Prime Titan',
    description: [
      "AUTOBOTS, COMBINE! Behold Optimus Maximus, the most powerful Combiner the Autobots have ever assembled!",
      "He is formed when Optimus Prime himself merges with four chosen Autobot warriors in the Power of the Primes era.",
      "Optimus Prime becomes the mighty torso, with Hot Rod, Ironhide, Mirage, and Sunstreaker completing the form.",
      "Optimus Maximus carries the Autobot Matrix of Leadership, amplifying his already incredible power to new levels.",
      "He is bigger, stronger, and more powerful than almost any other Combiner in the history of Cybertron.",
      "The five merging Autobots share a deep bond of trust that allows their combination to achieve perfect harmony.",
      "Optimus Maximus moves with the precision of Prowl's strategy and the raw power of the strongest Autobots combined.",
      "He was formed in response to Decepticon Combiners posing threats that no single Autobot could answer alone.",
      "When he speaks with Optimus Prime's voice, the battlefield itself seems to respond with renewed Autobot courage.",
      "Optimus Maximus is the ultimate expression of Autobot unity — five hearts beating as one unstoppable champion!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Optimus%20Maximus%20massive%20Prime-based%20Combiner%20robot%20blazing%20with%20light%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=407',
    stats: { power: 100, speed: 65, bravery: 100 },
    narrative: [
      "Optimus Maximus is formed when Optimus Prime himself merges with four mighty Autobots into one supreme warrior.",
      "Carrying the Matrix of Leadership, he is the single most powerful Combiner the Autobots have ever assembled.",
      "He is the living symbol that when Autobots unite behind their leader, nothing in the universe can stop them!"
    ]
  },
  {
    id: 'springer',
    name: 'Springer',
    faction: 'Autobot',
    category: 'Multi-Changers',
    identifier: 'The Triple-Threat Wrecker',
    description: [
      "Get ready for Springer, the most flexible and fun-loving Wrecker in the Autobot forces!",
      "As a Triple Changer, Springer can transform into a car, a helicopter, AND a robot — three incredible forms!",
      "His car mode is a fast, tough green ground vehicle perfect for urban missions and high-speed chases.",
      "His helicopter mode lets him swoop into combat from the air, catching Decepticons completely off guard.",
      "Springer is confident, witty, and keeps his cool even in the most absolutely chaotic battle situations.",
      "He is a core member of the legendary Wrecker unit — the Autobots' most elite and most reckless commando squad.",
      "Springer carries a double-bladed sword and a laser pistol that together make him formidable at any range.",
      "He is the kind of hero who tells jokes while dodging laser fire and somehow still wins every single fight.",
      "His friendship with Hot Rod, Arcee, and the whole Autobot crew is warm, genuine, and deeply inspiring.",
      "Springer shows us that adaptability, humor, and sheer unstoppable confidence are the hallmarks of a true hero!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Springer%20green%20helicopter%20car%20triple-changer%20robot%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=410',
    stats: { power: 88, speed: 88, bravery: 94 },
    narrative: [
      "Springer is a triple-changing Wrecker who transforms into a car, a helicopter, AND a robot warrior.",
      "His confidence, wit, and unstoppable energy make him one of the most beloved Autobots in any continuity.",
      "Three forms, one incredible hero — Springer is always ready for whatever challenge the mission brings!"
    ]
  },
  {
    id: 'sandstorm',
    name: 'Sandstorm',
    faction: 'Autobot',
    category: 'Multi-Changers',
    identifier: 'The Wandering Triple-Changer',
    description: [
      "Meet Sandstorm, the Autobot explorer who has been everywhere and seen absolutely everything!",
      "He is a Triple Changer who transforms into both a desert dune buggy and a VTOL aircraft.",
      "His buggy mode conquers any desert, mountain, or off-road terrain with four-wheel mastery and raw horsepower.",
      "His VTOL helicopter mode gives him vertical takeoff capability, making him effective in any kind of terrain.",
      "Sandstorm is an adventurous free spirit who has spent millennia exploring remote corners of the galaxy.",
      "He joined the Wreckers and proved himself a valuable tactical asset despite his casual, wandering nature.",
      "Sandstorm has a laid-back attitude that hides a surprisingly fierce combat capability.",
      "He knows terrain tricks and shortcuts in environments where other Autobots would be completely lost.",
      "His twin rotary blasters work equally well from the air or the ground, giving him versatility in firefights.",
      "Sandstorm proves that the explorer's spirit — always curious, always adaptable — is one of the greatest gifts a warrior can have!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Sandstorm%20orange%20dune%20buggy%20helicopter%20triple-changer%20robot%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=411',
    stats: { power: 80, speed: 85, bravery: 82 },
    narrative: [
      "Sandstorm is a wandering Triple Changer who transforms into a desert buggy and a VTOL aircraft.",
      "His adventures across the galaxy have given him terrain knowledge and skills that no other Autobot possesses.",
      "His laid-back spirit hides the fierce combat instincts of a battle-hardened Wrecker and explorer!"
    ]
  },
  {
    id: 'broadside',
    name: 'Broadside',
    faction: 'Autobot',
    category: 'Multi-Changers',
    identifier: 'The Mighty Sea-Air Changer',
    description: [
      "Meet Broadside, possibly the most impressive Triple Changer in terms of sheer scale!",
      "He transforms into a giant jet AND an enormous aircraft carrier — one robot who covers both air AND sea warfare.",
      "In aircraft carrier mode, entire Autobot fleets can land on his deck and refuel for the next mission.",
      "His jet mode is powerful and fast, though slightly less graceful than more dedicated air-only warriors.",
      "Here is the funny part: Broadside actually gets terribly motion sick from both flying and sailing.",
      "He complains constantly about his own alt modes, yet dutifully transforms into them because the Autobots need him.",
      "His combat cannons in carrier mode can bombard enemy positions from incredible distances out at sea.",
      "Broadside is incredibly brave for pushing through his discomfort every single time his team needs him.",
      "He is friendly, dependable, and much better in robot mode, where he fights with genuine gusto and skill.",
      "Broadside proves that doing your duty even when it makes you uncomfortable is the definition of true heroism!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Broadside%20massive%20aircraft%20carrier%20jet%20robot%20looking%20queasy%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=412',
    stats: { power: 90, speed: 55, bravery: 78 },
    narrative: [
      "Broadside transforms into a fighter jet AND an entire aircraft carrier — the biggest Triple Changer around.",
      "He gets motion sick from both his own alt modes, but transforms anyway because his team needs him.",
      "His self-sacrificing dutifulness despite personal discomfort makes him quietly one of the bravest Autobots!"
    ]
  },
  {
    id: 'quickswitch',
    name: 'Quickswitch',
    faction: 'Autobot',
    category: 'Multi-Changers',
    identifier: 'The Six-Change Warrior',
    description: [
      "Meet Quickswitch, the most versatile Autobot combatant in the entire history of Cybertron!",
      "As a Six Changer, he can shift between six distinct modes: robot, jet, drill tank, laser pistol, puma, and hovercraft.",
      "No Decepticon can prepare for every form Quickswitch might take — he is the ultimate tactical surprise.",
      "His six modes each specialize in a different combat environment, from deep sea to outer space.",
      "Quickswitch is the son of the legendary Autobot Six Changer Sixshot — a fact that shaped his entire identity.",
      "Unlike his father who served the Decepticons, Quickswitch proudly chose the Autobot cause from the very beginning.",
      "Switching between modes at incredible speed lets him adapt mid-battle to whatever the situation demands.",
      "He is disciplined, focused, and trained to use each form optimally — not just switch randomly.",
      "Quickswitch represents the pinnacle of Cybertronian transformation technology packed into one devoted Autobot.",
      "He proves that flexibility, preparation, and the courage to be different from your own family history are true superpowers!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Quickswitch%20six-changer%20robot%20cycling%20through%20multiple%20forms%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=413',
    stats: { power: 92, speed: 88, bravery: 86 },
    narrative: [
      "Quickswitch is an astonishing Six Changer who can transform into six completely different combat modes!",
      "No enemy can prepare for every form he might take — he is the ultimate tactical wildcard.",
      "His choice to serve the Autobots despite his Decepticon family heritage makes him a true hero of conviction!"
    ]
  },
  {
    id: 'punch-counterpunch',
    name: 'Punch/Counterpunch',
    faction: 'Autobot',
    category: 'Multi-Changers',
    identifier: 'The Ultimate Double Agent',
    description: [
      "Meet Punch — or wait, is that Counterpunch? It depends on which side you're looking at!",
      "He is the most unique Autobot in existence: he can transform into a Decepticon-looking robot form as well as his true Autobot self.",
      "As Punch, he is a loyal Autobot soldier who reports directly to the highest Autobot command.",
      "As Counterpunch, he infiltrates Decepticon ranks and gathers intelligence that saves countless Autobot lives.",
      "He transforms into a blue car regardless of which robot identity he is presenting — same wheels, two personalities.",
      "Living two lives simultaneously is incredibly dangerous and emotionally complex for this dedicated agent.",
      "No Decepticon has ever successfully seen through his Counterpunch disguise, making him the perfect embedded spy.",
      "He carries weapons appropriate to both identities, ready for combat no matter which form he is currently inhabiting.",
      "The strain of maintaining his double life sometimes weighs heavily on him, but he never abandons his mission.",
      "Punch/Counterpunch is the bravest kind of hero — one who gives up his own identity every day for the good of his cause!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Punch%20Counterpunch%20split%20robot%20Autobot%20and%20Decepticon%20sides%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=414',
    stats: { power: 80, speed: 84, bravery: 88 },
    narrative: [
      "Punch/Counterpunch is the Autobots' ultimate spy — a single bot who can become both Autobot and Decepticon!",
      "He infiltrates the Decepticons as Counterpunch and returns vital intelligence that saves Autobot operations.",
      "Living two lives simultaneously makes him the loneliest and most courageous Autobot agent who ever served!"
    ]
  },
  {
    id: 'sky-lynx',
    name: 'Sky Lynx',
    faction: 'Autobot',
    category: 'Multi-Changers',
    identifier: 'The Sky Master',
    description: [
      "Behold Sky Lynx, one of the most majestic and impressively proud Autobots ever to grace the skies!",
      "He transforms into a powerful space shuttle, a bird-like Lynx beast, AND can combine the two into a shuttle-lynx hybrid.",
      "Sky Lynx is genuinely massive — large enough to transport dozens of Autobots across vast interstellar distances.",
      "His shuttle mode can reach orbit and beyond, making him one of the most valuable long-range transport assets the Autobots have.",
      "Sky Lynx is famously proud of his own magnificence and regularly announces his own greatness mid-mission.",
      "Despite his considerable arrogance, he genuinely is one of the most powerful and capable Autobots in the field.",
      "He has a special rivalry with Grimlock, each insisting they are clearly the more impressive and capable warrior.",
      "His bird-beast mode is swift and powerful, combining avian grace with leonine ferocity in a breathtaking package.",
      "Sky Lynx considers himself superior to most other Autobots but would sacrifice everything to protect any one of them.",
      "Sky Lynx shows us that even the most boastful heart can be completely genuine when heroism is what the moment demands!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Sky%20Lynx%20majestic%20white%20shuttle%20bird-beast%20robot%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=415',
    stats: { power: 90, speed: 82, bravery: 85 },
    narrative: [
      "Sky Lynx is a magnificently proud Triple Changer who transforms into a space shuttle and a majestic bird-beast.",
      "His size, firepower, and space-travel capability make him one of the Autobots' most powerful strategic assets.",
      "He may announce his greatness loudly, but every Autobot secretly agrees that Sky Lynx is absolutely worth it!"
    ]
  },
  {
    id: 'doublecross',
    name: 'Doublecross',
    faction: 'Autobot',
    category: 'Multi-Changers',
    identifier: 'The Twin-Headed Monsterbot',
    description: [
      "Watch out for Doublecross — the Autobot who transforms into a two-headed fire-breathing dragon!",
      "He is a Monsterbot, a special class of Autobot who uses terrifying beast modes to confuse and unnerve Decepticons.",
      "In dragon mode, both of Doublecross's heads breathe streams of toxic and corrosive fire simultaneously.",
      "He is unpredictable, erratic, and never quite does things in the way that anyone else expects.",
      "Doublecross enjoys the panicked reactions his monster form causes in Decepticon enemies tremendously.",
      "He is one of three Monsterbots, serving alongside Repugnus and Grotusque as the Autobots' shock-troops.",
      "His two dragon heads sometimes seem to argue with each other, which is both unsettling and strangely endearing.",
      "In robot mode, he is a solid fighter equipped with strong close-range weapons and surprising speed.",
      "Decepticons who have faced Doublecross in battle often report the experience as uniquely disturbing.",
      "Doublecross proves that sometimes the most powerful weapon against the enemy is pure, creative, unpredictable chaos!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Doublecross%20wild%20two-headed%20dragon%20robot%20Monsterbot%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=416',
    stats: { power: 84, speed: 72, bravery: 80 },
    narrative: [
      "Doublecross is a wild Monsterbot who transforms into a two-headed fire-breathing dragon!",
      "His unpredictable nature and terrifying beast mode make him one of the most unsettling Autobots in any battle.",
      "His two dragon heads breathe corrosive fire and strike fear into Decepticons wherever he appears!"
    ]
  },
  {
    id: 'fortress-maximus',
    name: 'Fortress Maximus',
    faction: 'Autobot',
    category: 'Bonded Units',
    identifier: 'The Headmaster Fortress',
    description: [
      "Get ready for Fortress Maximus, one of the most enormous and powerful Autobots who ever existed!",
      "He is a Headmaster, which means his true head is a separate, smaller robot named Cerebros who plugs in on top.",
      "Fortress Maximus transforms into a massive battle fortress city filled with weapons and defenses.",
      "He is so large that hundreds of other Autobots can operate inside him as a fully functioning battle station.",
      "Fortress Maximus is gentle, thoughtful, and deeply weary of war — yet he fights because peace demands protecting.",
      "He carries more firepower than most Autobot units combined, capable of levelling entire enemy installations.",
      "His battle with Scorponok is legendary — two equally matched titan-sized warriors shaking the entire Earth.",
      "Fortress Maximus once grabbed the Decepticon Scorponok by the head with his bare hands and flung him through a mountain.",
      "He is a quiet giant who values friendship, peace, and the protection of every life above personal glory.",
      "Fortress Maximus shows that the biggest warriors carry the heaviest hearts — and the most profound love of peace!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Fortress%20Maximus%20massive%20city-battle%20robot%20with%20detachable%20head%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=420',
    stats: { power: 98, speed: 30, bravery: 96 },
    narrative: [
      "Fortress Maximus is a colossal Headmaster warrior who transforms into an entire battle fortress.",
      "His separate robot head, Cerebros, gives him unique intelligence and command capabilities in the field.",
      "One of the most powerful Autobots who ever lived, he fights tirelessly for peace despite hating war!"
    ]
  },
  {
    id: 'brainstorm',
    name: 'Brainstorm',
    faction: 'Autobot',
    category: 'Bonded Units',
    identifier: 'The Eccentric Headmaster',
    description: [
      "Say hello to Brainstorm, the most magnificently strange scientist in the Autobot forces!",
      "He is a Headmaster whose small Nebulan partner Arcana becomes his head and directly links their minds.",
      "Brainstorm transforms into a fast, well-armed teal jet aircraft with sophisticated battle systems.",
      "His true passion is invention and scientific discovery, and his workspace is cluttered with every kind of gadget.",
      "Brainstorm is wonderfully eccentric — his ideas are spectacular, his experiments explosive, and his plans dramatic.",
      "He invented a time machine, which he used in the most adventurous and dangerous ways possible.",
      "His bond with Arcana gives him unique dual-perspective thinking that generates ideas no individual mind could reach.",
      "Brainstorm genuinely enjoys danger and treats extremely hazardous experiments as just another exciting Tuesday.",
      "He is warm and genuinely funny, with a sharp wit that endears him to every Autobot on the team.",
      "Brainstorm proves that brilliance, friendship, and a complete disregard for reasonable safety precautions make for an amazing hero!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Brainstorm%20teal%20jet%20scientist%20robot%20with%20Nebulan%20partner%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=421',
    stats: { power: 72, speed: 82, bravery: 78 },
    narrative: [
      "Brainstorm is the most brilliantly eccentric scientist in the Autobot ranks — bonded to his Nebulan partner Arcana.",
      "His inventions include a time machine, and his workspace is a beautiful, explosive mess of incredible gadgets.",
      "He approaches every experiment and adventure with infectious enthusiasm and absolutely no regard for danger!"
    ]
  },
  {
    id: 'pointblank',
    name: 'Pointblank',
    faction: 'Autobot',
    category: 'Bonded Units',
    identifier: 'The Targetmaster Guardian',
    description: [
      "Meet Pointblank, the straightest-talking Autobot warrior you will ever meet!",
      "He is a Targetmaster — meaning his weapon is not just a gun but a living, thinking, sentient partner.",
      "His partner is Peacemaker, a Nebulan who transforms into Pointblank's laser pistol in battle.",
      "Together, Pointblank aims and Peacemaker guides each shot with mechanical precision to its exact target.",
      "Pointblank is blunt and says exactly what he means in as few words as absolutely necessary.",
      "He is a pacifist by philosophical belief — deeply opposed to war — yet fights courageously because peace must be defended.",
      "His shooting accuracy with Peacemaker is among the highest in the Autobot army, with almost no wasted shots.",
      "Pointblank transforms into a white Cybertronian car with clean, purposeful lines that mirror his personality.",
      "He takes his partnership with Peacemaker extremely seriously — every shot they fire together has meaning and purpose.",
      "Pointblank proves that even those who hate violence the most can be the most effective and principled warriors for peace!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Pointblank%20white%20Autobot%20robot%20with%20glowing%20sentient%20gun%20partner%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=422',
    stats: { power: 78, speed: 76, bravery: 86 },
    narrative: [
      "Pointblank is a no-nonsense Targetmaster warrior whose sentient partner Peacemaker becomes his deadly accurate gun.",
      "He is a pacifist who fights anyway because he knows peace must be actively defended.",
      "His partnership with Peacemaker and his clean, precise style make him one of the Autobots' most dependable fighters!"
    ]
  },
  {
    id: 'chromedome',
    name: 'Chromedome',
    faction: 'Autobot',
    category: 'Bonded Units',
    identifier: 'The Compassionate Headmaster',
    description: [
      "Meet Chromedome, one of the kindest and most human-hearted warriors in the Autobot army!",
      "He is a Headmaster whose Nebulan partner Stylor transforms into his head and merges their consciousness together.",
      "Chromedome transforms into a white Cybertronian car with sleek, clean styling that matches his personality.",
      "He cares deeply about every member of his team and often acts as an emotional anchor for those who are struggling.",
      "Chromedome has a unique mnemosurgery ability — he can read and write memories — which he uses ethically and carefully.",
      "His history is marked by deep personal loss, yet he continues to fight with an open heart for those he loves.",
      "He is an exceptional driver in vehicle mode, handling emergency precision driving with remarkable calm.",
      "Chromedome values emotional connection and believes that understanding each other is essential to true teamwork.",
      "His partnership with Stylor represents one of the most genuine bonds between Cybertronian and Nebulan.",
      "Chromedome shows us that empathy, emotional depth, and the courage to keep loving despite loss are heroic qualities!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Chromedome%20white%20Headmaster%20robot%20with%20caring%20expression%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=423',
    stats: { power: 80, speed: 80, bravery: 85 },
    narrative: [
      "Chromedome is a compassionate Headmaster warrior whose bond with Nebulan partner Stylor runs deep.",
      "His mnemosurgery ability and emotional intelligence make him invaluable in ways that pure combat skill never could.",
      "His open heart and willingness to keep loving despite loss make him one of the Autobots' most quietly heroic figures!"
    ]
  },
  {
    id: 'nightbeat',
    name: 'Nightbeat',
    faction: 'Autobot',
    category: 'Bonded Units',
    identifier: 'The Detective Headmaster',
    description: [
      "Meet Nightbeat, the Autobot who treats every mission like a mystery to be brilliantly solved!",
      "He is a Headmaster with a detective's instincts, bonded to his Nebulan partner Muzzle.",
      "Nightbeat transforms into a sleek blue and yellow racing car that looks like it belongs in a crime drama.",
      "He approaches every problem analytically, gathering clues and building theories before taking any action.",
      "Nightbeat loves mysteries more than almost anything and gets genuinely excited when a case becomes complicated.",
      "He once spent three days solving a seemingly impossible Decepticon sabotage puzzle purely for the intellectual joy of it.",
      "His detective skills have uncovered Decepticon infiltrations that Autobot security specialists completely missed.",
      "Muzzle provides additional computing power and a second perspective that makes Nightbeat's deductions even sharper.",
      "Nightbeat is calm, methodical, and usually the most collected bot in any confusing or chaotic situation.",
      "He shows us that curiosity, careful observation, and a love of mysteries are tools every hero should sharpen!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Nightbeat%20blue%20detective%20robot%20with%20magnifying%20glass%20and%20partner%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=424',
    stats: { power: 74, speed: 78, bravery: 82 },
    narrative: [
      "Nightbeat is the Autobots' resident detective — a Headmaster who treats every crisis as a mystery to solve.",
      "His brilliant analytical mind and bond with partner Muzzle have uncovered Decepticon schemes that no one else spotted.",
      "He proves that a curious, observant mind is one of the most powerful weapons in any warrior's arsenal!"
    ]
  },
  {
    id: 'hardhead',
    name: 'Hardhead',
    faction: 'Autobot',
    category: 'Bonded Units',
    identifier: 'The Stubborn Headmaster',
    description: [
      "Meet Hardhead, the most stubbornly determined warrior in the Autobot Headmaster corps!",
      "He is bonded to his Nebulan partner Duros, who transforms into Hardhead's head for enhanced battle performance.",
      "Hardhead transforms into a powerful Cybertronian tank with thick armor and devastating main cannon.",
      "His defining trait is absolute refusal to change his mind once it is made up — hence the very fitting name.",
      "Hardhead charges into the most dangerous positions without hesitation because he genuinely does not feel real fear.",
      "He is argumentative and blunt, saying exactly what he thinks regardless of whether anyone agrees with him.",
      "Despite his inflexibility, his battle instincts are excellent and his raw combat effectiveness is among the highest.",
      "Hardhead and Duros argue occasionally about tactics, but always arrive at the best solution together.",
      "His tank-mode provides incredible firepower and armor that makes him one of the Autobots' premier heavy combatants.",
      "Hardhead proves that being completely unmoveable in your convictions — however annoying — sometimes makes you the rock everyone needs!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Hardhead%20green%20tank%20Headmaster%20robot%20charging%20forward%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=425',
    stats: { power: 86, speed: 62, bravery: 88 },
    narrative: [
      "Hardhead is the most stubbornly determined Headmaster in the Autobot army — once decided, nothing changes his course.",
      "His tank mode and thunderous cannon make him a devastating heavy combatant on any battlefield.",
      "His total refusal to back down, combined with Duros's guidance, makes them an unstoppable partnership!"
    ]
  },
  {
    id: 'sureshot',
    name: 'Sureshot',
    faction: 'Autobot',
    category: 'Bonded Units',
    identifier: 'The Perfectionist Marksman',
    description: [
      "Meet Sureshot, the Autobot who is absolutely certain that nobody shoots better than him — and he is probably right!",
      "He is a Targetmaster, meaning his Nebulan partner Spoilsport transforms into his devastating cannon weapon.",
      "Sureshot transforms into a fast orange ground vehicle optimized for speed and tactical positioning.",
      "His marksmanship is extraordinary — he can consistently hit targets at ranges that other Autobots consider impossible.",
      "Sureshot is a perfectionist who practices his shooting constantly and will accept nothing less than absolute accuracy.",
      "He is impatient with those he considers sloppy or careless, which creates occasional friction with teammates.",
      "Spoilsport, his weapon partner, shares his perfectionist nature, making them remarkably compatible.",
      "Together, Sureshot and Spoilsport represent one of the finest sharpshooter partnerships in Autobot history.",
      "His tactical positioning instincts are exceptional — he always finds the perfect angle before taking his shot.",
      "Sureshot proves that dedication to mastering a skill, practiced with obsessive perfectionism, creates truly extraordinary capability!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Sureshot%20orange%20sharpshooter%20robot%20taking%20careful%20aim%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=426',
    stats: { power: 76, speed: 78, bravery: 80 },
    narrative: [
      "Sureshot is the Autobots' perfectionist Targetmaster marksman, teaming up with the sentient weapon Spoilsport.",
      "His extraordinary accuracy and tactical positioning instincts make him one of the finest sharpshooters alive.",
      "He demands perfection from himself in every shot — and almost always delivers it flawlessly!"
    ]
  },
  {
    id: 'metroplex',
    name: 'Metroplex',
    faction: 'Autobot',
    category: 'Titans',
    identifier: 'The Autobot City',
    description: [
      "Get ready to meet Metroplex, the BIGGEST Autobot of them all!",
      "Metroplex is so enormous that he is not just a robot — he is an entire walking, talking robot city!",
      "When times are peaceful, he rests on the ground and acts as a hidden base for all his friends.",
      "Inside Metroplex there are roads, rooms, computer screens, repair bays, and command centers.",
      "The Autobots can hang out inside him, fix their armor, and plan their next great adventure in total safety.",
      "It is like having the most amazing, protective robot house in the entire universe!",
      "If Decepticons try to attack, Metroplex performs the most amazing transformation ever — standing up into a titan!",
      "Buildings shift, roads fold, and he becomes a robot the size of a skyscraper, shaking the world with every step.",
      "Despite his immense size, Metroplex has a kind and gentle heart that cares deeply for every Autobot inside him.",
      "Metroplex is the ultimate protector, standing like an enormous, friendly mountain between his friends and all danger!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Metroplex%20city-sized%20happy%20giant%20robot%20with%20Autobots%20living%20inside%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=430',
    stats: { power: 100, speed: 20, bravery: 100 },
    narrative: [
      "Metroplex is so enormous he transforms into an entire Autobot fortress city!",
      "When danger comes, he stands up into a skyscraper-sized robot and shakes the earth with every footstep.",
      "He is the greatest guardian in the Autobot army — a living city and an unstoppable protector in one!"
    ]
  },
  {
    id: 'omega-supreme',
    name: 'Omega Supreme',
    faction: 'Autobot',
    category: 'Titans',
    identifier: 'The Ultimate Guardian',
    description: [
      "THREAT ALERT! Omega Supreme has been activated — and no Decepticon is safe anymore!",
      "He is the Autobots' ultimate last line of defense, a colossal robot of near-unlimited power and endurance.",
      "Omega Supreme transforms into a massive rocket ship AND a defense base with a moving tracked guardian cannon.",
      "His rocket mode can carry the entire Autobot team into space and reach other planets in remarkably short times.",
      "Omega Supreme speaks in short, clipped sentences — as if processing too much emotion would overwhelm his vast systems.",
      "He once shared a deep friendship with the Constructicons who later betrayed him and joined the Decepticons.",
      "That betrayal left a sadness in Omega Supreme that he carries quietly but never allows to stop him from his duty.",
      "He can withstand punishment that would destroy any lesser bot and keep fighting for as long as necessary.",
      "Omega Supreme is the sentinel who stands between the Autobots and extinction — and he has never abandoned that post.",
      "He proves that loyalty to those you protect, maintained even through heartbreak, is the most powerful force in the universe!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Omega%20Supreme%20giant%20rocket%20defense%20base%20robot%20guardian%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=431',
    stats: { power: 99, speed: 25, bravery: 98 },
    narrative: [
      "Omega Supreme is the Autobots' ultimate guardian — a near-indestructible titan who transforms into a rocket defense base.",
      "His immense power and tireless dedication have saved the Autobots from extinction more than once.",
      "He carries a deep personal sadness but never lets it stop him from protecting every life entrusted to his care!"
    ]
  },
  {
    id: 'primus',
    name: 'Primus',
    faction: 'Autobot',
    category: 'Titans',
    identifier: 'The Creator',
    description: [
      "In the very beginning, there was Primus — the creator god of all Transformers everywhere!",
      "Primus is the most ancient and powerful being connected to the Autobot cause, a divine force of creation and light.",
      "He transforms into and inhabits the planet Cybertron itself — yes, the entire planet is a sleeping giant robot god!",
      "Primus was locked in eternal combat with his dark twin Unicron at the very dawn of existence.",
      "He created the original Thirteen Primes to help carry on his mission of light and protection across the cosmos.",
      "The Autobot Matrix of Leadership itself is a fragment of Primus's own divine spark of life and wisdom.",
      "Every Transformer who ever lived carries a tiny piece of Primus inside them — their own personal energon spark.",
      "Primus only fully awakens when Cybertron faces an existential threat too terrible for any other force to stop.",
      "When he speaks, his voice resonates across the entire planet — heard not as sound, but as a feeling in every spark.",
      "Primus shows us that the greatest creator is one who believes so deeply in others that he gives them the power to protect themselves!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Primus%20glowing%20planet%20Cybertron%20robot%20god%20with%20cosmic%20light%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=432',
    stats: { power: 100, speed: 5, bravery: 100 },
    narrative: [
      "Primus is the divine creator of all Transformers — a god whose body is the planet Cybertron itself!",
      "He created the Thirteen Original Primes and the Matrix of Leadership that guides every Autobot leader.",
      "His ancient light lives inside every Transformer spark, making him the eternal guardian of all life on Cybertron!"
    ]
  },
  {
    id: 'megatron',
    name: 'Megatron',
    faction: 'Decepticon',
    category: 'Elite Core',
    identifier: 'The Ruthless Tyrant',
    description: [
      "Here comes Megatron, the biggest, scariest, and most powerful villain in the whole galaxy!",
      "He is the founder and supreme leader of all the Decepticons, and his ambition knows absolutely no limits.",
      "Megatron transforms into a powerful fusion cannon — in G1 he shrinks down to become Starscream's giant weapon!",
      "His giant fusion cannon attached to his arm can fire blasts powerful enough to level entire city blocks.",
      "Megatron wants to rule every single planet in the universe and will stop at nothing to get there.",
      "He and Optimus Prime were once friends on Cybertron, long before greed and pride tore that friendship apart.",
      "Even his own Decepticons fear him — Megatron expects perfection and punishes failure with terrifying swiftness.",
      "Despite losing to the Autobots again and again, Megatron always comes back with a new and more dangerous plan.",
      "He is genuinely brilliant and would be a great leader — if only he cared about anyone other than himself.",
      "Megatron proves that true greatness requires caring for others, and that power without kindness always eventually falls!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Megatron%20plotting%20evil%20scheme%20with%20fusion%20cannon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=440',
    stats: { power: 100, speed: 70, bravery: 85 },
    narrative: [
      "Megatron is the most powerful and dangerous villain in the entire galaxy!",
      "He transforms into a fusion cannon and leads the Decepticons in their quest to rule the universe.",
      "Despite his terrifying power, he keeps losing to the Autobots — because teamwork and kindness always win!"
    ]
  },
  {
    id: 'starscream',
    name: 'Starscream',
    faction: 'Decepticon',
    category: 'Seekers',
    identifier: 'The Treacherous Air Commander',
    description: [
      "Watch your back when Starscream is around — he is always plotting something sneaky!",
      "He is the Air Commander of the Decepticons and the single most treacherous robot in the entire universe.",
      "Starscream transforms into an incredibly fast F-15 fighter jet that screams through the sky like a missile.",
      "He wants Megatron's leadership position desperately and schemes constantly to take it from him.",
      "The funny thing is, every single plan Starscream makes to overthrow Megatron somehow ends in complete failure.",
      "Despite being constantly caught, punished, and embarrassed, he never, ever stops trying to be the boss.",
      "Starscream's null rays can disrupt any robot's power systems, making him genuinely dangerous in aerial combat.",
      "He is dramatic, vain, and loves to make long speeches about how much better a leader he would be.",
      "Even in death, Starscream's ghost kept floating around the universe looking for a body to inhabit.",
      "Starscream is a perfect reminder that ambition without loyalty, honesty, or hard work always ends in comic disaster!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Starscream%20sneaky%20jet%20robot%20plotting%20behind%20Megatron%27s%20back%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=441',
    stats: { power: 86, speed: 96, bravery: 65 },
    narrative: [
      "Starscream is the most treacherous Decepticon alive — always plotting to steal Megatron's throne!",
      "His lightning-fast F-15 form makes him deadly in the skies, even if his schemes always backfire.",
      "He is proof that sneaky ambition without real substance never truly wins, no matter how many times he tries!"
    ]
  },
  {
    id: 'soundwave',
    name: 'Soundwave',
    faction: 'Decepticon',
    category: 'Elite Core',
    identifier: 'The Superior Spy',
    description: [
      "Soundwave superior. Autobots inferior. Meet Soundwave — the Decepticons' most chilling secret weapon!",
      "He is Megatron's most trusted officer and the greatest spy and communications master in the galaxy.",
      "Soundwave transforms into a powerful blue cassette player — the most menacing music player ever built.",
      "Inside his chest he carries miniature robot operatives: Laserbeak, Ravage, Rumble, Frenzy, and Buzzsaw.",
      "He hears everything — every transmission, every whisper, every secret that passes through the airwaves.",
      "Soundwave speaks in a cold, flat, emotionless monotone that makes every word he says sound like a threat.",
      "He is utterly loyal to Megatron and refuses to plot against him the way other Decepticons constantly do.",
      "His ability to record, analyze, and replay any communication makes him the ultimate intelligence asset.",
      "Soundwave once said just four words — 'Soundwave superior. Autobots inferior.' — and every Decepticon knew he was absolutely right.",
      "He proves that quiet, cold, complete loyalty combined with unmatched intelligence is perhaps the most dangerous power of all!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Soundwave%20blue%20cassette%20robot%20spy%20with%20Laserbeak%20emerging%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=442',
    stats: { power: 88, speed: 72, bravery: 80 },
    narrative: [
      "Soundwave is Megatron's coldly loyal spy master and the most feared intelligence operative in the galaxy.",
      "He carries miniature robot agents in his chest and hears every secret that passes through any frequency.",
      "His chilling monotone and absolute loyalty to Megatron make him one of the most dangerous Decepticons alive!"
    ]
  },
  {
    id: 'shockwave',
    name: 'Shockwave',
    faction: 'Decepticon',
    category: 'Elite Core',
    identifier: 'The Logical Scientist',
    description: [
      "Meet Shockwave, the most coldly logical — and terrifying — scientist the Decepticons have ever produced!",
      "He is Megatron's chief scientist and the guardian of Cybertron, running operations there with absolute precision.",
      "Shockwave transforms into a gigantic laser cannon that fires devastating beams of pure destructive energy.",
      "He has replaced one hand permanently with a powerful cannon that is always ready to fire at any target.",
      "Shockwave has one glowing eye that burns with cold, calculating intelligence — and absolutely no emotion.",
      "Where Megatron acts on passion and anger, Shockwave acts only on pure, calculated logical reasoning.",
      "He believes emotions are inefficient and that logic is the only valid basis for any decision whatsoever.",
      "Shockwave ran experiments on Cybertron for millions of years, creating new Transformer technologies in isolation.",
      "In IDW comics, he was revealed as the mastermind behind some of the most dangerous events in Transformer history.",
      "Shockwave proves that pure logical intelligence without any moral guidance or empathy is perhaps the most dangerous force in the universe!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Shockwave%20purple%20one-eyed%20scientist%20robot%20with%20gun%20arm%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=443',
    stats: { power: 95, speed: 65, bravery: 75 },
    narrative: [
      "Shockwave is the Decepticons' coldly logical scientist — a one-eyed, one-armed villain who runs purely on calculation.",
      "His cannon arm fires devastating blasts and his emotionless mind engineers the most dangerous plots in the galaxy.",
      "He proves that intelligence without empathy or conscience is truly the most frightening kind of power!"
    ]
  },
  {
    id: 'thundercracker',
    name: 'Thundercracker',
    faction: 'Decepticon',
    category: 'Seekers',
    identifier: 'The Doubting Seeker',
    description: [
      "Meet Thundercracker, the Decepticon who fights with one eye always looking in the other direction!",
      "He is one of Starscream's Seeker jets and one of the most skilled pilots in the Decepticon air forces.",
      "Thundercracker transforms into a sleek blue F-15 fighter jet with a distinctive, powerful sonic boom attack.",
      "His sonic boom weapon creates shockwaves so powerful they can knock entire buildings off their foundations.",
      "Here is the secret: Thundercracker privately wonders whether the Decepticon cause is actually right.",
      "He fights alongside the Decepticons partly out of habit, partly from fear, and partly because he does not know what else to do.",
      "His doubts make him far more reluctant to attack innocent targets than most of his fellow Decepticons.",
      "Thundercracker is a genuinely skilled aerial warrior, but his heart is never fully committed to the cause he serves.",
      "In some stories, his doubts eventually lead him to a very different path than the one he started on.",
      "Thundercracker shows us that having doubts about wrong things — and eventually acting on them — can be the start of a heroic journey!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Thundercracker%20blue%20seeker%20jet%20robot%20looking%20conflicted%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=444',
    stats: { power: 84, speed: 94, bravery: 60 },
    narrative: [
      "Thundercracker is a brilliant Decepticon Seeker pilot who privately questions whether fighting for evil is right.",
      "His devastating sonic boom and expert flying make him formidable in the skies over Earth.",
      "His inner doubts make him the most internally conflicted — and perhaps most redeemable — Decepticon in the sky!"
    ]
  },
  {
    id: 'skywarp',
    name: 'Skywarp',
    faction: 'Decepticon',
    category: 'Seekers',
    identifier: 'The Teleporting Bully',
    description: [
      "Meet Skywarp, the Decepticon who loves nothing more than appearing out of nowhere to cause chaos!",
      "He has the incredible ability to teleport short distances — vanishing and reappearing in the blink of an eye.",
      "Skywarp transforms into a black and purple F-15 fighter jet — the most unsettling color scheme in the sky.",
      "His teleportation makes him almost impossible to catch or predict in the middle of a battle.",
      "Skywarp is a classic bully — he uses his powers to ambush and prank both enemies AND his fellow Decepticons.",
      "His favorite tactic is teleporting directly behind an enemy and firing point-blank before they can react.",
      "Despite his incredible teleportation power, Skywarp is not the strategic thinker that Starscream pretends to be.",
      "He is loyal to Megatron mainly because Megatron protects him from the consequences of his own terrible decisions.",
      "Skywarp's pranks on fellow Decepticons are legendary and have gotten him in serious trouble more than once.",
      "Skywarp shows us that having an amazing power means absolutely nothing if you only use it to be mean — real heroes use their gifts to help!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Skywarp%20black%20and%20purple%20teleporting%20seeker%20robot%20blinking%20in%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=445',
    stats: { power: 83, speed: 92, bravery: 70 },
    narrative: [
      "Skywarp is the teleporting Decepticon Seeker bully who vanishes and reappears to ambush everyone around him.",
      "His black and purple jet form and point-blank teleport attacks make him genuinely dangerous in any skirmish.",
      "He proves that powers without wisdom or kindness lead nowhere good — but he keeps teleporting into trouble anyway!"
    ]
  },
  {
    id: 'reflector',
    name: 'Reflector',
    faction: 'Decepticon',
    category: 'Combiners',
    identifier: 'The Three-Bot Camera',
    description: [
      "Watch out — Reflector might be photographing you right now and you would never even know!",
      "He is actually three Decepticons — Viewfinder, Spectro, and Spyglass — who merge into a single device.",
      "Together they transform into a powerful surveillance camera that can record and transmit anything from any distance.",
      "Reflector can zoom into conversations happening kilometers away and photograph documents through closed windows.",
      "All three parts of Reflector share a single consciousness when merged, making them unusually synchronized.",
      "They serve Megatron as his primary intelligence-gathering tool, photographing enemy positions and strategies.",
      "In robot mode, all three can fight independently or maintain formation to coordinate their attacks.",
      "Reflector is often underestimated by enemies who see just a camera and do not look beyond the lens.",
      "The team's ability to share information instantly among all three bodies makes them a highly effective spy network.",
      "Reflector proves that sometimes the most powerful secret weapon is the one that nobody notices is watching them!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Reflector%20three%20robot%20decepticon%20spy%20camera%20trio%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=446',
    stats: { power: 60, speed: 70, bravery: 72 },
    narrative: [
      "Reflector is three Decepticons who merge into a powerful surveillance camera — watching everything for Megatron!",
      "Their coordinated three-body system and ability to photograph anything make them the perfect spy team.",
      "They prove that the most dangerous threat is sometimes the one you never noticed was watching you!"
    ]
  },
  {
    id: 'barricade',
    name: 'Barricade',
    faction: 'Decepticon',
    category: 'Elite Core',
    identifier: 'The Intimidating Enforcer',
    description: [
      "Watch out for Barricade — the scariest police car you will ever see!",
      "He is a Decepticon enforcer who transforms into a black police vehicle to blend in and frighten people.",
      "Barricade uses his police disguise to create fear and confusion among the humans he encounters.",
      "His spiked fists and razor-sharp processing make him a vicious and effective close-quarters combatant.",
      "Barricade is cold, cunning, and takes genuine pleasure in the intimidation of those he pursues.",
      "He can drive at incredible pursuit speeds and never loses a target once he has set his tracking systems on them.",
      "The irony of an evil robot disguised as a protector of the law makes Barricade particularly unsettling.",
      "He carries the Decepticon badge proudly, using his police form as a cruel joke at humanity's expense.",
      "Barricade is totally devoted to the Decepticon cause and executes every mission with terrifying precision.",
      "He proves that appearances can be deeply deceiving — and that choosing fear over protection makes you the real criminal!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Barricade%20menacing%20police%20car%20robot%20with%20spiked%20fists%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=447',
    stats: { power: 82, speed: 90, bravery: 77 },
    narrative: [
      "Barricade is a terrifying Decepticon enforcer disguised as a police car — the law's most sinister impostor!",
      "His blazing pursuit speed and spiked fists make him one of the most dangerous Decepticons in close combat.",
      "He uses his disguise to create fear and confusion, making every police car suspicious to anyone who knows the truth!"
    ]
  },
  {
    id: 'knock-out',
    name: 'Knock Out',
    faction: 'Decepticon',
    category: 'Elite Core',
    identifier: 'The Vain Medic',
    description: [
      "Say hello to Knock Out — the most glamorous and style-obsessed robot in the entire Decepticon army!",
      "He is the Decepticons' chief medical officer who cares about two things equally: fixing robots and his own perfect finish.",
      "Knock Out transforms into a stunning red sports car that he keeps polished to an absolute mirror shine.",
      "He is devastatingly effective with his medical tools — and even more so when using them as weapons.",
      "Knock Out will genuinely threaten any Decepticon who even looks like they might scratch his beautiful paintwork.",
      "His electro-staff can stun, paralyze, or perform complex surgery with equal precision depending on need.",
      "Despite his vanity, Knock Out is genuinely brilliant as a medical scientist and engineer.",
      "He often casts shade at Breakdown for being less stylish, but they are actually close partners in the field.",
      "In Transformers Prime, he eventually develops doubts about the Decepticon cause — stylish bots have depth too.",
      "Knock Out proves that style and substance can coexist — though the best heroes tend to care a little less about scratches!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Knock%20Out%20red%20sports%20car%20medic%20robot%20admiring%20his%20own%20finish%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=448',
    stats: { power: 73, speed: 88, bravery: 68 },
    narrative: [
      "Knock Out is the Decepticons' vainest warrior — a brilliant medic who cares as much about his red finish as his patients!",
      "His electro-staff and surgical precision make him deadly in battle and indispensable in the med bay.",
      "His sharp wit, glamorous style, and surprising depth make him one of the most entertaining Decepticons ever!"
    ]
  },
  {
    id: 'rumble-frenzy',
    name: 'Rumble & Frenzy',
    faction: 'Decepticon',
    category: 'Bonded Units',
    identifier: 'The Chaos Twins',
    description: [
      "Meet Rumble and Frenzy — the most destructive double act in the entire Decepticon roster!",
      "These two miniature bots are carried inside Soundwave's chest and deployed for maximum chaos on the ground.",
      "Rumble (the blue one) uses his pile-driver arms to create devastating ground-shaking earthquakes.",
      "Frenzy (the red one) emits intense sonic disruption frequencies that cause confusion and panic everywhere.",
      "What they lack in size they more than make up for in pure destructive enthusiasm and energy.",
      "Rumble and Frenzy bicker constantly with each other, but work in perfect coordination when battles begin.",
      "Together, they can destabilize entire city blocks: Rumble shakes the foundation while Frenzy rattles the air.",
      "They are among the most loyal servants Soundwave has, returning to him obediently after every mission.",
      "Their pint-sized robot forms make them excellent at slipping through tight spaces before enemies realize the danger.",
      "They prove that even the smallest warrior, deployed at exactly the right moment, can cause the biggest impact!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Rumble%20and%20Frenzy%20small%20destructive%20twin%20robots%20causing%20earthquake%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=449',
    stats: { power: 71, speed: 78, bravery: 82 },
    narrative: [
      "Rumble and Frenzy are Soundwave's destructive twin agents — small in size, enormous in chaos!",
      "Rumble's pile-driver earthquakes and Frenzy's sonic screams together can destabilize entire city blocks.",
      "They bicker constantly but fight in perfect sync — the Decepticons' most entertainingly catastrophic duo!"
    ]
  },
  {
    id: 'laserbeak',
    name: 'Laserbeak',
    faction: 'Decepticon',
    category: 'Bonded Units',
    identifier: 'The Spy Condor',
    description: [
      "Watch the skies — Laserbeak might be up there right now, watching everything!",
      "He is one of Soundwave's most valuable cassette operatives, deploying from the communications master's chest.",
      "Laserbeak transforms into a sleek robotic condor with red body panels and golden trim.",
      "He is the go-to spy for aerial surveillance, soaring silently above targets and recording everything in detail.",
      "Laserbeak's wingtip laser cannons deliver precise strikes from high altitude, often catching enemies completely off guard.",
      "He never speaks — operating with cold, efficient silence that makes him more unsettling than any loud attacker.",
      "Laserbeak is Megatron's personal favorite operative for reconnaissance and targeted information gathering.",
      "He can glide on thermal currents for hours without using any power, making him nearly undetectable.",
      "His loyalty to Soundwave is absolute, and he returns to his chest compartment after every completed mission.",
      "Laserbeak proves that silence, patience, and precision are sometimes more powerful than all the noise in the world!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Laserbeak%20red%20condor%20robot%20spying%20from%20high%20perch%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=450',
    stats: { power: 62, speed: 88, bravery: 70 },
    narrative: [
      "Laserbeak is Soundwave's silent robotic condor spy — watching, recording, and striking from high above.",
      "His laser cannons deliver precise aerial strikes while his stealth makes him almost impossible to detect.",
      "He never speaks, but his cold efficiency speaks volumes — Laserbeak is always watching, always ready!"
    ]
  },
  {
    id: 'ravage',
    name: 'Ravage',
    faction: 'Decepticon',
    category: 'Bonded Units',
    identifier: 'The Shadow Panther',
    description: [
      "In the dark, something moves — and it is Ravage, the most silent hunter in the Decepticon ranks!",
      "He is a sleek black robot panther deployed from Soundwave's chest compartment for stealth ground missions.",
      "Ravage transforms from a microcassette into a lithe, powerful mechanical panther built for silent infiltration.",
      "He can move without making a single sound, slipping through even the most well-guarded Autobot perimeters.",
      "Ravage is extraordinarily intelligent, capable of complex independent decision-making far beyond a simple animal.",
      "He never speaks to anyone — communicating only with Soundwave through direct silent signal transmission.",
      "His electromagnetic disruptors can scramble Autobot systems, and his weapons provide serious firepower in confrontations.",
      "Ravage once single-handedly retrieved critical Decepticon data from the heart of the Autobot headquarters.",
      "In the Beast Wars era, Ravage appeared as a full-sized Predacon agent, revealing his true depth.",
      "Ravage proves that a warrior who moves in absolute silence and strikes without warning is among the most dangerous forces alive!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Ravage%20black%20panther%20cassette%20robot%20stalking%20in%20shadows%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=451',
    stats: { power: 72, speed: 92, bravery: 76 },
    narrative: [
      "Ravage is Soundwave's sleek black panther spy — a silent shadow who slips through any defense undetected.",
      "His silent infiltration abilities and electromagnetic weapons make him one of the most effective covert agents alive.",
      "He never speaks, never hesitates, and never fails — the perfect silent hunter in Megatron's deadly service!"
    ]
  },
  {
    id: 'galvatron',
    name: 'Galvatron',
    faction: 'Decepticon',
    category: 'Elite Core',
    identifier: 'The Reformatted Warlord',
    description: [
      "GALVATRON COMMANDS — and the universe trembles!",
      "He is what happens when Megatron is reborn: stronger, more dangerous, and terrifyingly unpredictable.",
      "Galvatron was rebuilt by the planet-eating god Unicron from Megatron's broken body, given new power and purpose.",
      "He transforms into a devastating particle cannon — capable of firing energy blasts of nearly incomprehensible power.",
      "Galvatron is more powerful than Megatron ever was, but the rebuilding process left him violently unstable.",
      "He screams, rages, and attacks his own Decepticons when the madness inside his rebuilt circuitry takes over.",
      "Even Cyclonus and Scourge, his most loyal commanders, must tread carefully around Galvatron's terrifying moods.",
      "When he is focused, Galvatron is the single most dangerous Decepticon warrior in the entire universe.",
      "His obsession with destroying Optimus Prime and ruling the galaxy drives every action he takes.",
      "Galvatron proves that raw, unchecked power with no wisdom or self-control is the most destructive force imaginable!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Galvatron%20purple%20cannon%20robot%20blazing%20with%20Unicron%20energy%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=452',
    stats: { power: 98, speed: 72, bravery: 80 },
    narrative: [
      "Galvatron is Megatron reborn — rebuilt by Unicron into a more powerful, more terrifying, and much more unstable tyrant!",
      "His particle cannon can blast through almost anything, and his raging power makes him unpredictable even to his own army.",
      "He is living proof that power without stability or wisdom creates more destruction than victory!"
    ]
  },
  {
    id: 'scourge',
    name: 'Scourge',
    faction: 'Decepticon',
    category: 'Elite Core',
    identifier: 'The Sweep Tracker',
    description: [
      "The Sweeps are hunting — and Scourge leads them right to your door!",
      "He is Galvatron's head tracker and commander of the Sweeps, a group of hunters created from fallen Decepticons.",
      "Scourge transforms into a high-speed Cybertronian space cruiser with powerful pursuit capabilities.",
      "He was originally created from the bodies of defeated Decepticon warriors rebuilt by the power of Unicron.",
      "Scourge is cold, calculating, and utterly relentless — once he locks onto a target, escape is nearly impossible.",
      "He briefly carried the Autobot Matrix of Leadership after stealing it, but it burned him from the inside out.",
      "As Galvatron's second most loyal servant, Scourge executes all pursuit and intelligence operations personally.",
      "His Sweep unit can track across star systems, making them the most feared pursuit force in Decepticon history.",
      "Scourge wears his confidence like armor — he genuinely believes no target can escape once the Sweeps begin.",
      "He proves that relentless, cold-blooded determination in service of the wrong cause is deeply, profoundly dangerous!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Scourge%20menacing%20blue%20sweep%20commander%20robot%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=453',
    stats: { power: 84, speed: 86, bravery: 78 },
    narrative: [
      "Scourge is the ice-cold leader of the Sweeps — Galvatron's most relentless trackers and hunters.",
      "His pursuit craft form and cold determination make him almost impossible to escape once he sets his sights on a target.",
      "He is one of Galvatron's most trusted servants and one of the most feared Decepticons in the cosmos!"
    ]
  },
  {
    id: 'thrust',
    name: 'Thrust',
    faction: 'Decepticon',
    category: 'Seekers',
    identifier: 'The Arrogant Conehead',
    description: [
      "Here comes Thrust, the most full of himself Seeker in the entire Decepticon air fleet!",
      "He is a Conehead Seeker — his jet nose points upward in robot mode rather than folding back like standard Seekers.",
      "Thrust transforms into a fast, powerful maroon fighter jet with powerful VTOL engine modifications.",
      "His VTOL engines create massive wind turbines that can literally blow enemies off their feet in close combat.",
      "Thrust is arrogant and constantly boasting about how skilled, dangerous, and impressive he is.",
      "The frustrating thing for everyone around him is that Thrust actually is quite good — just nowhere near as good as he claims.",
      "He is more loyal than Starscream but his oversized ego still creates constant friction with leadership.",
      "Thrust was part of the Decepticon forces both on Earth and in Cybertron's ancient historical conflicts.",
      "His wind-blast attacks have been underestimated by Autobots who assumed they were just a gimmick — a costly mistake.",
      "Thrust shows us that confidence is a useful quality, but honesty about your actual abilities earns far more real respect!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Thrust%20maroon%20conehead%20seeker%20jet%20robot%20posing%20arrogantly%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=454',
    stats: { power: 80, speed: 88, bravery: 68 },
    narrative: [
      "Thrust is the Decepticons' most arrogantly self-confident Conehead Seeker pilot.",
      "His maroon jet form and wind-blast turbines make him genuinely dangerous, though not quite as dangerous as he claims.",
      "His inflated ego is a perfect reminder that real confidence comes from honest self-knowledge, not just loud claims!"
    ]
  },
  {
    id: 'dirge',
    name: 'Dirge',
    faction: 'Decepticon',
    category: 'Seekers',
    identifier: 'The Fear-Spreading Seeker',
    description: [
      "Be afraid — when you hear the mournful wail of Dirge's engines, terror is coming!",
      "He is a Conehead Seeker who specializes in psychological warfare, using fear as his most powerful weapon.",
      "Dirge transforms into a dark blue fighter jet whose engines emit a low, haunting sound that fills hearts with dread.",
      "His sonic weapon creates electromagnetic fear waves that paralyze enemies with pure overwhelming terror.",
      "Dirge himself is perpetually gloomy, speaking in a deep, mournful tone about inevitable doom and disaster.",
      "He genuinely believes that the universe is heading toward a terrible end — and he finds this strangely comforting.",
      "Dirge's fear induction is so powerful it has frozen Autobots in place during critical moments of battle.",
      "He works well with Thrust and Ramjet as a trio of Conehead Seekers serving Megatron's air forces.",
      "Despite his impressive fear-based abilities, even other Decepticons find Dirge's constant doom-and-gloom exhausting.",
      "Dirge proves that spreading fear and despair makes the whole world darker for everyone — including the one spreading it!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Dirge%20dark%20blue%20conehead%20seeker%20robot%20with%20sonic%20fear%20weapons%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=455',
    stats: { power: 80, speed: 88, bravery: 74 },
    narrative: [
      "Dirge is the Decepticons' mournful fear specialist — his sonic engines fill every nearby heart with pure terror.",
      "His deep, gloomy nature and psychological warfare make him one of the most unsettling Seekers in the sky.",
      "He proves that choosing to spread fear and despair is a path that ultimately makes even the spreader miserable!"
    ]
  },
  {
    id: 'ramjet',
    name: 'Ramjet',
    faction: 'Decepticon',
    category: 'Seekers',
    identifier: 'The Kamikaze Conehead',
    description: [
      "Duck! Ramjet is coming straight at you — and he is NOT going to stop!",
      "He is the most reckless Conehead Seeker in the Decepticon air fleet, famous for flying directly into his targets.",
      "Ramjet transforms into a white and red fighter jet with a heavily reinforced nosecone built for impact.",
      "His entire battle strategy is simple: point himself at the enemy and ram them at maximum speed.",
      "He crashes into Autobots, buildings, other aircraft, and occasionally Decepticons who got in his way.",
      "Despite the constant crashes, Ramjet's armor is so reinforced that he walks away almost every single time.",
      "Ramjet is not particularly clever but makes up for it with absolutely devastating enthusiasm and impact force.",
      "He actually lies constantly and badly, telling stories that nobody believes about his combat achievements.",
      "Ramjet loves the Decepticon cause with simple, direct passion and needs no complicated reasons to fight.",
      "He proves that while brains are incredibly useful, sometimes an absolutely unstoppable wall of determination gets the job done!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Ramjet%20white%20conehead%20jet%20robot%20about%20to%20crash%20into%20something%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=456',
    stats: { power: 82, speed: 90, bravery: 84 },
    narrative: [
      "Ramjet is the most recklessly enthusiastic Conehead Seeker — his strategy is to fly straight at things and ram them!",
      "His reinforced nosecone and impact-proof armor let him crash into enemies at full speed and keep on fighting.",
      "He may not be the sharpest bot, but his pure crashing determination makes him genuinely terrifying to face!"
    ]
  },
  {
    id: 'ratbat',
    name: 'Ratbat',
    faction: 'Decepticon',
    category: 'Bonded Units',
    identifier: 'The Frugal Spy Bat',
    description: [
      "Somewhere overhead, Ratbat is watching you — and calculating exactly how much fuel it costs to do so!",
      "He is one of Soundwave's cassette operatives, transforming into a robotic bat for aerial surveillance.",
      "Ratbat is unique among Decepticons because he genuinely obsesses over resource management and fuel efficiency.",
      "He once rose to become one of the Decepticon leaders in the comics, running the faction like a cost-cutting CEO.",
      "Ratbat's bat sonar is extraordinary, able to map environments in complete darkness with perfect precision.",
      "He combines stealth surveillance with a razor-sharp focus on maximizing the return on every drop of Energon spent.",
      "His wing-mounted laser weapons are small but extremely accurate for a bot his size.",
      "Ratbat will criticize any mission that uses more fuel than he calculates is absolutely necessary.",
      "Other Decepticons find him annoying, but his resource management has saved the faction from Energon bankruptcy.",
      "Ratbat proves that understanding how to manage resources wisely — however unsexy — is genuinely powerful leadership!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Ratbat%20fuel%20auditor%20bat%20Decepticon%20robot%20with%20energy%20charts%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=460',
    stats: { power: 58, speed: 80, bravery: 65 },
    narrative: [
      "Ratbat is Soundwave's fuel-auditing bat spy — always watching, always calculating, always cutting costs!",
      "His bat sonar and stealth surveillance make him a frighteningly effective covert agent.",
      "He rose to leadership among the Decepticons through ruthless efficiency — proving that accounting can be surprisingly powerful!"
    ]
  },
  {
    id: 'buzzsaw',
    name: 'Buzzsaw',
    faction: 'Decepticon',
    category: 'Bonded Units',
    identifier: 'The Golden Condor Spy',
    description: [
      "High above in total silence, Buzzsaw is watching — and his aim never misses!",
      "He is one of Soundwave's most elite cassette operatives, transforming into a gleaming golden mechanical condor.",
      "Buzzsaw and Laserbeak are often considered rivals — and those who know both consider Buzzsaw the slightly deadlier one.",
      "His wing-mounted lasers are incredibly precise, capable of hitting targets at extreme range with almost zero margin of error.",
      "Buzzsaw is cold, professional, and utterly without mercy in the execution of his surveillance missions.",
      "Unlike Laserbeak who is Megatron's personal favorite, Buzzsaw is primarily deployed for the most delicate precision work.",
      "His golden body panels are not just decorative — they provide excellent radar reflection properties in flight.",
      "Buzzsaw can glide on warm air currents for extraordinary periods, making him extremely fuel-efficient in the field.",
      "He records everything he observes with crystal-clear precision, missing no detail regardless of range or lighting.",
      "Buzzsaw proves that cold, precise professionalism — directed toward the wrong goals — is still deeply dangerous!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Buzzsaw%20golden%20condor%20cassette%20robot%20with%20precision%20laser%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=461',
    stats: { power: 65, speed: 87, bravery: 72 },
    narrative: [
      "Buzzsaw is Soundwave's golden condor spy — even more precise and deadly than the famous Laserbeak!",
      "His wing lasers hit targets at extreme range with extraordinary accuracy and never miss.",
      "Cold, professional, and silent, he is one of the most frightening precision operatives in the Decepticon arsenal!"
    ]
  },
  {
    id: 'nightbird',
    name: 'Nightbird',
    faction: 'Decepticon',
    category: 'Elite Core',
    identifier: 'The Ninja Infiltrator',
    description: [
      "Moving through the night like a ghost, Nightbird is the most silent and deadly infiltrator imaginable!",
      "She was originally built by human scientists as an advanced humanoid robot — a masterpiece of engineering.",
      "The Decepticons stole her, reprogrammed her with combat skills, and unleashed her as a living weapon.",
      "Nightbird transforms into a sleek black vehicle and moves with the fluid grace of a true martial arts master.",
      "She is equipped with an arsenal of ninja weapons: throwing stars, energy daggers, and concussive gas bombs.",
      "Nightbird once infiltrated Autobot headquarters completely undetected and stole vital tactical data.",
      "She battled Autobots including Arcee and Jazz simultaneously, holding her own against both seasoned warriors.",
      "The Autobots managed to contain her, but the Decepticons have never stopped trying to reactivate their prized weapon.",
      "Nightbird is not driven by ideology — she is a program, executing her mission with perfect, chilling efficiency.",
      "She proves that incredible skill, precision, and stealth make any warrior dangerous regardless of origin!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Nightbird%20black%20ninja%20robot%20with%20throwing%20stars%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=462',
    stats: { power: 75, speed: 94, bravery: 82 },
    narrative: [
      "Nightbird is a human-created ninja robot stolen by the Decepticons and upgraded into a terrifying weapon!",
      "Her martial arts mastery, throwing stars, and ghost-like stealth make her almost impossible to detect or stop.",
      "She proves that precision, grace, and silent skill are among the most formidable weapons in any arsenal!"
    ]
  },
  {
    id: 'lockdown',
    name: 'Lockdown',
    faction: 'Decepticon',
    category: 'Elite Core',
    identifier: 'The Trophy-Hunting Bounty Hunter',
    description: [
      "Meet Lockdown, the most dangerous mercenary robot in the known universe!",
      "He fights not for ideals or factions — he fights for bounties, trophies, and the thrill of the chase.",
      "Lockdown transforms into a fast, sleek muscle car with weapons and gadgets hidden throughout his frame.",
      "His most unique ability is removing special features from defeated opponents and installing them in himself.",
      "He has collected EMP generators, cloaking devices, and dozens of other upgrades from fallen foes.",
      "Lockdown considers both Autobots and Decepticons simply as clients or targets depending on who is paying.",
      "He is a genuine professional — emotionless, methodical, and extraordinarily skilled at tracking any target.",
      "The hook that replaces one of his hands is both a weapon and a chilling symbol of his hunter identity.",
      "Lockdown accepts contracts from anyone with enough Energon to pay and never breaks a deal once made.",
      "He proves that mercenaries without loyalty or principle represent a kind of danger that even ideological enemies rarely match!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Lockdown%20bounty%20hunter%20robot%20with%20collection%20of%20stolen%20weapons%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=463',
    stats: { power: 90, speed: 85, bravery: 78 },
    narrative: [
      "Lockdown is the ultimate mercenary — a trophy hunter who collects stolen abilities from every bot he defeats!",
      "His constantly growing collection of captured weapons and upgrades makes him uniquely unpredictable in battle.",
      "He fights for no cause and owes no loyalty — making him one of the most dangerous wildcards in the galaxy!"
    ]
  },
  {
    id: 'acid-storm',
    name: 'Acid Storm',
    faction: 'Decepticon',
    category: 'Seekers',
    identifier: 'The Acid Rain Seeker',
    description: [
      "The sky turns green — which means Acid Storm is attacking, and the rain is going to burn!",
      "He is a Seeker who has the terrifying ability to generate acid rain clouds over wide areas of the battlefield.",
      "Acid Storm transforms into a green fighter jet with specialized chemical generating chambers in his wings.",
      "His acid clouds can corrode metal, destroy electronics, and force enemies out of defensive positions.",
      "Acid Storm is a competent commander who has led Seeker squadrons in multiple large-scale Decepticon operations.",
      "He is methodical and strategic, using his acid weather attacks as force multipliers for larger battle plans.",
      "Acid Storm rarely appears alone — he tends to arrive at the head of a full Seeker formation.",
      "His environmental weapon attacks are difficult to dodge because the acid rain covers such enormous areas.",
      "He has voiced surprising opinions about the Decepticon cause, suggesting more nuanced views than most of his peers.",
      "Acid Storm proves that controlling the environment around a battle can be just as powerful as any direct weapon!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Acid%20Storm%20green%20seeker%20jet%20robot%20with%20acid%20rain%20clouds%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=464',
    stats: { power: 81, speed: 90, bravery: 74 },
    narrative: [
      "Acid Storm is a Decepticon Seeker commander who rains corrosive acid from the skies onto anyone below!",
      "His chemical storm attacks corrode metal and electronics over wide battle areas, forcing enemies into the open.",
      "He proves that controlling the battlefield environment is one of the most devastating tactical advantages possible!"
    ]
  },
  {
    id: 'beast-megatron',
    name: 'Beast Megatron',
    faction: 'Decepticon',
    category: 'Predacons',
    identifier: 'The Dragon Warlord',
    description: [
      "Yeeesss — Beast Megatron has arrived, and everything is proceeding according to his magnificent plan!",
      "He is the most cunning and dramatic villain of the Beast Wars era, leading the Predacons against the Maximals.",
      "Beast Megatron transforms into an enormous, fearsome purple Tyrannosaurus Rex — and later a huge fire-breathing dragon.",
      "His dragon form breathes devastating fire and his intelligence makes every attack calculated for maximum effect.",
      "Beast Megatron speaks with theatrical grandeur, always confident that his superior intellect will win in the end.",
      "He arrived on prehistoric Earth to change history itself — altering the timeline of the entire Transformer race.",
      "His plans almost succeeded multiple times, and each near-victory shows just how brilliant a strategist he truly is.",
      "Despite his dramatic theatrics, Beast Megatron backs up every speech with genuine, dangerous, devastating action.",
      "He is not the same as G1 Megatron — he is his own character, named in Megatron's honor but entirely himself.",
      "Beast Megatron proves that intelligence, theatrical confidence, and a dragon form are an exceptionally dangerous combination!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Beast%20Megatron%20purple%20dragon%20Predacon%20warlord%20robot%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=465',
    stats: { power: 97, speed: 68, bravery: 82 },
    narrative: [
      "Beast Megatron is the theatrical, cunning dragon warlord who commands the Predacons in the Beast Wars era.",
      "His Tyrannosaurus and dragon forms breathe devastating fire while his intelligence devises galaxy-altering plans.",
      "He is one of the most brilliantly dangerous Decepticon-aligned villains across any Transformer continuity!"
    ]
  },
  {
    id: 'waspinator',
    name: 'Waspinator',
    faction: 'Decepticon',
    category: 'Predacons',
    identifier: 'The Unlucky Predacon',
    description: [
      "Oh no — it is Waspinator, the most accident-prone Predacon in the entire Beast Wars saga!",
      "He is a loyal Predacon who transforms into a large mechanical wasp and flies buzzing into every battle.",
      "Waspinator has been blown up, smashed, reassembled, and destroyed more times than any other character in history.",
      "Every single battle he enters seems to end with poor Waspinator scattered across a wide area in several pieces.",
      "Despite being constantly destroyed, Waspinator gets rebuilt and keeps showing up with stubborn persistence.",
      "He refers to himself in the third person — 'Waspinator blasts Maximal!' — in a lovably confused way.",
      "His stinger and wing blasters are genuinely powerful when they happen to work and he survives long enough to use them.",
      "Waspinator secretly longs for a peaceful life far away from the endless explosions and Maximal attacks.",
      "In the end, he actually achieved that peace, which made fans everywhere incredibly happy for him.",
      "Waspinator proves that persistence and showing up despite constant setbacks is its own form of incredible heroism!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Waspinator%20green%20wasp%20Predacon%20robot%20looking%20confused%20after%20explosion%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=466',
    stats: { power: 65, speed: 80, bravery: 68 },
    narrative: [
      "Waspinator is the lovably unlucky Predacon who gets blown up in almost every single episode of Beast Wars!",
      "His wasp form and stinger blasters make him capable, but his spectacular talent for disaster makes him unforgettable.",
      "He just wants to be left alone — and his eventual peaceful ending made every viewer cheer with genuine joy!"
    ]
  },
  {
    id: 'terrorsaur',
    name: 'Terrorsaur',
    faction: 'Decepticon',
    category: 'Predacons',
    identifier: 'The Treacherous Pterosaur',
    description: [
      "The Predacons have their own version of Starscream — and his name is Terrorsaur!",
      "He is a scheming, treacherous Predacon who transforms into a huge mechanical pterodactyl.",
      "Terrorsaur is constantly plotting to replace Beast Megatron as Predacon leader — constantly failing and paying the price.",
      "His pterosaur mode gives him exceptional speed and aerial agility that makes him one of the most capable fliers.",
      "Terrorsaur wields powerful energy weapons that make him genuinely dangerous in any aerial skirmish.",
      "He is vain, self-serving, and completely unable to commit loyalty to anyone other than himself.",
      "Every attempt to overthrow Beast Megatron ends either in humiliating failure or in Terrorsaur being rebuilt from parts.",
      "Despite his treachery, he is an effective Predacon warrior when he actually focuses on the mission.",
      "His rivalry with Waspinator for the position of most dramatically unfortunate Predacon is surprisingly competitive.",
      "Terrorsaur proves that betrayal without the wisdom or courage to back it up always ends the same way — badly!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Terrorsaur%20red%20pterodactyl%20Predacon%20robot%20plotting%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=467',
    stats: { power: 78, speed: 90, bravery: 62 },
    narrative: [
      "Terrorsaur is the Beast Wars' own scheming air commander — a treacherous pterodactyl who always plots and always fails!",
      "His aerial speed and energy weapons make him genuinely capable when he focuses on fighting rather than scheming.",
      "He proves that treachery without real backing is just ambition repeatedly embarrassing itself!"
    ]
  },
  {
    id: 'tarantulas',
    name: 'Tarantulas',
    faction: 'Decepticon',
    category: 'Predacons',
    identifier: 'The Mad Scientist Predacon',
    description: [
      "Nobody knows exactly what Tarantulas is really planning — and that is exactly how he likes it!",
      "He is the Predacons' most brilliant and most untrustworthy scientist, operating according to his own hidden agenda.",
      "Tarantulas transforms into a large mechanical spider with powerful web-spinning and venom-injecting capabilities.",
      "His spider webs can capture and immobilize enemies or be used to swing between elevated positions at speed.",
      "Tarantulas serves Beast Megatron nominally but is actually working toward goals that serve only himself.",
      "He is secretly affiliated with the Tripredacus Council, a shadowy Predacon government working against both factions.",
      "His laboratory experiments are inventive, terrifying, and often involve other Transformers as unwilling subjects.",
      "Tarantulas speaks with sinister relish and clearly finds his own scheming enormously entertaining.",
      "He managed to survive scenarios that destroyed other Predacons through sheer cunning and preparation.",
      "Tarantulas proves that the most dangerous villain is always the one with the longest and most hidden plan!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Tarantulas%20spider%20scientist%20Predacon%20robot%20in%20dark%20laboratory%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=468',
    stats: { power: 80, speed: 72, bravery: 66 },
    narrative: [
      "Tarantulas is the Beast Wars' most sinister scientist — a spider Predacon with a secret agenda all his own!",
      "His web-spinning abilities and brilliant laboratory mind make him one of the most uniquely dangerous Predacons.",
      "Nobody knows his full plan — and that unpredictability is exactly what makes him so terrifyingly effective!"
    ]
  },
  {
    id: 'scorponok-bw',
    name: 'Scorponok (Beast Wars)',
    faction: 'Decepticon',
    category: 'Predacons',
    identifier: 'The Loyal Predacon Soldier',
    description: [
      "Beware the claws — Scorponok is charging and his loyalty to Megatron is total!",
      "He is a Beast Wars Predacon who transforms into a massive mechanical scorpion bristling with weapons.",
      "Unlike many Predacons who plot and scheme, Scorponok is devoted to Beast Megatron with unwavering faithfulness.",
      "His scorpion claws can crush most metals, and his tail-stinger fires missiles of devastating explosive power.",
      "Scorponok was once temporarily reprogrammed by a Maximal virus and experienced profound internal conflict.",
      "His absolute loyalty means he follows Beast Megatron's orders even when those orders put him in terrible danger.",
      "Scorponok is the Beast Wars counterpart to figures like Thundercracker — skilled, loyal, and genuinely effective.",
      "He fights with a straightforward, powerful style that has no patience for complicated strategies or politics.",
      "The contrast between his simple loyalty and Tarantulas's constant scheming makes Scorponok almost admirable.",
      "He proves that loyalty is a virtue — as long as what you are loyal to deserves that faithful devotion!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Scorponok%20giant%20scorpion%20Predacon%20robot%20charging%20forward%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=469',
    stats: { power: 82, speed: 64, bravery: 86 },
    narrative: [
      "Beast Wars Scorponok is Beast Megatron's most fiercely loyal Predacon warrior.",
      "His massive scorpion claws and missile tail make him a powerful and direct combatant in any engagement.",
      "His unwavering loyalty contrasts sharply with the scheming Predacons around him — making him almost heroic!"
    ]
  },
  {
    id: 'inferno-predacon',
    name: 'Inferno (Predacon)',
    faction: 'Decepticon',
    category: 'Predacons',
    identifier: 'The Fanatical Fire Ant',
    description: [
      "FOR THE ROYALTY! Inferno is here, and he will burn everything that dares oppose the Colony!",
      "He is the most fanatically devoted Predacon warrior — a fire ant who calls Beast Megatron 'the Royalty' at all times.",
      "Inferno transforms into a large mechanical fire ant who can spray devastating streams of burning fire.",
      "His entire existence is centered around serving Beast Megatron and protecting the 'Colony' (the Predacon base).",
      "Inferno is highly effective in combat, using his fire weapons and tough ant exoskeleton with fierce efficiency.",
      "He is so extreme in his dedication that even other Predacons find his intensity somewhat alarming.",
      "Inferno speaks formally and militaristically, treating every order from Megatron as a sacred command.",
      "His fire attacks are among the most damaging of any individual Predacon warrior in the field.",
      "The contrast between his deranged devotion and actual battlefield effectiveness makes him uniquely terrifying.",
      "Inferno proves that while loyalty is admirable, blind, unthinking devotion to any cause is genuinely dangerous!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Inferno%20fire%20ant%20Predacon%20robot%20in%20flames%20saluting%20Megatron%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=470',
    stats: { power: 86, speed: 70, bravery: 96 },
    narrative: [
      "Inferno is the most fanatically devoted Predacon warrior — he calls Beast Megatron 'the Royalty' and obeys with terrifying zeal!",
      "His fire ant form sprays devastating fire and his tough exoskeleton shrugs off enormous amounts of damage.",
      "His extreme, unthinking loyalty is both impressive and unsettling — a perfect example of devotion gone too far!"
    ]
  },
  {
    id: 'airachnid',
    name: 'Airachnid',
    faction: 'Decepticon',
    category: 'Elite Core',
    identifier: 'The Hunter-Sadist',
    description: [
      "Stay very, very still — Airachnid is hunting, and she has never missed a target she wanted.",
      "She is one of the most terrifying Decepticons in Transformers Prime, a hunter who kills for the pure joy of it.",
      "Airachnid transforms into a giant mechanical black spider, moving with terrifying arachnid grace.",
      "She collects the last surviving members of endangered species as trophies — a habit that reveals her true cruelty.",
      "Airachnid is coldly sadistic, combining beauty and danger in a way that makes her all the more unsettling.",
      "She once hunted Arcee specifically for sport, creating a bitter personal rivalry between them.",
      "Airachnid is highly intelligent and tactical, planning hunts with elaborate precision before striking.",
      "She eventually turned against even the Decepticons, pursuing her own terrifying agenda alone.",
      "Her spider silk can restrain even the strongest Transformers, and her venom causes system shutdown.",
      "Airachnid proves that power used purely for cruelty and personal amusement is the darkest possible path!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Airachnid%20dark%20spider%20Decepticon%20robot%20with%20predatory%20eyes%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=471',
    stats: { power: 84, speed: 88, bravery: 72 },
    narrative: [
      "Airachnid is the most terrifying hunter in Transformers Prime — a sadistic spider who hunts for sport!",
      "Her silk and venom can restrain and shut down almost any Transformer, and she has never let a target escape.",
      "She is the darkest example of what happens when a brilliant mind serves pure cruelty with no conscience at all!"
    ]
  },
  {
    id: 'dreadwing',
    name: 'Dreadwing',
    faction: 'Decepticon',
    category: 'Seekers',
    identifier: 'The Honourable Seeker',
    description: [
      "Here is a Decepticon who fights with genuine honour — and Dreadwing is more dangerous for it!",
      "He is a high-ranking Seeker in Transformers Prime, bonded in absolute brotherhood to his twin Skyquake.",
      "Dreadwing transforms into a powerful blue and white fighter jet with formidable weapons and heavy armor.",
      "He is deeply honourable by his own code — not kind or good, but genuinely principled in how he fights.",
      "Dreadwing detests deception, manipulation, and unfairness even when used against his Autobot enemies.",
      "When Skyquake was killed, Dreadwing's grief drove him toward decisions that ultimately cost everything.",
      "He confronted Starscream directly over a point of principle — an act of honourable defiance in a dishonourable army.",
      "Dreadwing uses explosive devices with incredible tactical precision, making him a devastating battlefield strategist.",
      "His willingness to betray even Megatron over points of honour shows a complex moral core few Decepticons possess.",
      "Dreadwing proves that even in a corrupt cause, some warriors maintain a personal code — and that code matters!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Dreadwing%20blue%20and%20white%20honourable%20seeker%20robot%20with%20sword%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=472',
    stats: { power: 90, speed: 88, bravery: 78 },
    narrative: [
      "Dreadwing is the most honourable Decepticon in Transformers Prime — a Seeker warrior with a genuine personal code.",
      "His devastating explosive attacks and jet speed make him one of Megatron's most formidable aerial commanders.",
      "He proves that even within a corrupt army, true honour recognizes no faction — and sometimes pays the ultimate price!"
    ]
  },
  {
    id: 'breakdown',
    name: 'Breakdown',
    faction: 'Decepticon',
    category: 'Elite Core',
    identifier: 'The Paranoid Bruiser',
    description: [
      "Meet Breakdown — the Decepticon who is absolutely convinced that everyone is watching him, always!",
      "He is a massive Decepticon heavy warrior in Transformers Prime, Knock Out's most loyal partner.",
      "Breakdown transforms into a heavy blue sports vehicle loaded with powerful battle upgrades and armor.",
      "He has a debilitating phobia of being examined and studied — the idea of anyone analyzing him causes genuine panic.",
      "Despite this vulnerability, Breakdown is one of the most physically powerful Decepticons in the entire field.",
      "He and Knock Out work together as one of the most effective Decepticon two-bot teams anywhere.",
      "Breakdown treats Knock Out's orders with trust that he extends to almost nobody else in the Decepticon ranks.",
      "His wrecking ball-fists can deliver devastating blows that leave permanent damage in even heavily armored enemies.",
      "Underneath his paranoia and aggression, Breakdown shows flashes of a genuine, if misguided, warrior's heart.",
      "Breakdown proves that personal fears, if left unaddressed, can limit even the most powerful warrior imaginable!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Breakdown%20blue%20heavy%20warrior%20robot%20looking%20over%20his%20shoulder%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=473',
    stats: { power: 88, speed: 68, bravery: 76 },
    narrative: [
      "Breakdown is Knock Out's massive, paranoid partner — powerful beyond measure but deeply afraid of being watched!",
      "His heavy fists and battle armor make him one of the most physically devastating Decepticons in Transformers Prime.",
      "His unusual combination of immense power and irrational paranoia makes him one of the most complex Decepticons around!"
    ]
  },
  {
    id: 'sky-byte',
    name: 'Sky-Byte',
    faction: 'Decepticon',
    category: 'Predacons',
    identifier: 'The Poetic Shark Predacon',
    description: [
      "Meet Sky-Byte, the Decepticon who fights fiercely by day and composes haiku poetry by night!",
      "He is a shark Predacon from the Robots in Disguise series who takes himself VERY seriously in all things.",
      "Sky-Byte transforms into a huge mechanical shark that dominates the oceans with power and speed.",
      "His powerful sonic screech and powerful claws make him genuinely formidable in combat situations.",
      "What makes Sky-Byte legendary is his deep, heartfelt passion for haiku poetry that he shares at every opportunity.",
      "He composes haiku about battles, about the sea, about his own failures, and about the beauty of sharks.",
      "Sky-Byte is the most loyal servant Megatron has in his continuity — a devotion that is both touching and rather sad.",
      "His loyalty is tested constantly as Megatron takes him for granted, yet he remains stubbornly devoted.",
      "The comedy of a powerful shark warrior composing tearful poetry makes him one of the most beloved Decepticons ever.",
      "Sky-Byte proves that creativity, passion, and a tender heart exist in even the most unexpected warriors!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Sky-Byte%20blue%20shark%20Predacon%20robot%20reciting%20poetry%20dramatically%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=474',
    stats: { power: 76, speed: 80, bravery: 82 },
    narrative: [
      "Sky-Byte is the Decepticons' most dramatic poet-warrior — a powerful shark Predacon who composes heartfelt haiku!",
      "His ocean speed, sonic screech, and fierce claws make him a genuine threat in any aquatic engagement.",
      "His passionate poetry and absolute loyalty to Megatron make him one of the most lovably complex Decepticons ever!"
    ]
  },
  {
    id: 'lugnut',
    name: 'Lugnut',
    faction: 'Decepticon',
    category: 'Elite Core',
    identifier: 'The Fanatical Bruiser',
    description: [
      "PRAISE MEGATRON! Lugnut is here, and his fists hit like small thermonuclear devices!",
      "He is the most fanatically devoted Decepticon warrior in Transformers Animated — loyal to Megatron beyond all reason.",
      "Lugnut transforms into a massive military bomber aircraft capable of carrying enormous ordinance payloads.",
      "His right fist houses the POKE — the Punch of Kill Everything — a weapon that detonates like a massive bomb on impact.",
      "Lugnut is almost unique among Decepticons in that he is loyal ONLY to Megatron — not to himself, not to ambition.",
      "He is the polar opposite of Starscream: no scheming, no self-interest, just pure explosive devotion.",
      "Every mission Lugnut undertakes is dedicated to the glory of Megatron, whether Megatron is present or not.",
      "His bomber form can devastate entire military installations with a single strike from altitude.",
      "Other Decepticons sometimes find Lugnut's unconditional devotion as unsettling as they find Starscream's scheming.",
      "Lugnut proves that absolute loyalty, even to the wrong cause, creates a kind of terrifying power all its own!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Lugnut%20massive%20olive%20green%20Decepticon%20robot%20with%20explosive%20punch%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=475',
    stats: { power: 90, speed: 55, bravery: 94 },
    narrative: [
      "Lugnut is Megatron's most fanatically devoted servant — his explosive fists and bomber form make him catastrophically dangerous!",
      "His right-hand POKE detonates like a miniature bomb, and his loyalty to Megatron is completely absolute.",
      "He is the perfect contrast to treacherous Starscream — proving that blind devotion is as dangerous as blind ambition!"
    ]
  },
  {
    id: 'bludgeon',
    name: 'Bludgeon',
    faction: 'Decepticon',
    category: 'Elite Core',
    identifier: 'The Mystical Samurai',
    description: [
      "The ghost of a warrior approaches — but Bludgeon is no ghost, he is very real and very dangerous!",
      "He is a Decepticon who looks like a robotic samurai-skeleton and practices ancient robot martial arts.",
      "Bludgeon transforms into a modified Type 74 battle tank with thick armor and precise artillery.",
      "He is a master practitioner of Metallikato, a deadly ancient Cybertronian martial art of devastating techniques.",
      "Bludgeon's skull-like face and samurai armour make him one of the most visually striking Decepticons ever built.",
      "He is spiritual, philosophical, and utterly committed to achieving warrior perfection in every combat encounter.",
      "Bludgeon once led all the Decepticons when Megatron was incapacitated — and proved a formidable if ruthless leader.",
      "His Metallikato techniques can neutralize opponents far more powerful than himself through precise strikes.",
      "He studies his enemies carefully before engaging, using ancient warrior philosophy to guide every decision.",
      "Bludgeon proves that discipline, philosophy, and the pursuit of martial perfection create a truly fearsome warrior!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Bludgeon%20samurai%20skull-face%20Decepticon%20robot%20with%20katana%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=476',
    stats: { power: 92, speed: 76, bravery: 86 },
    narrative: [
      "Bludgeon is the Decepticons' mystical samurai — a skull-faced warrior who masters the ancient art of Metallikato.",
      "His battle-tank form and precise sword work make him one of the most uniquely skilled Decepticons alive.",
      "His warrior philosophy and pursuit of perfection make him deeply dangerous in ways raw power alone cannot match!"
    ]
  },
  {
    id: 'tarn',
    name: 'Tarn',
    faction: 'Decepticon',
    category: 'Elite Core',
    identifier: 'The DJD Assassin',
    description: [
      "The DJD has arrived — and if Tarn has come for you personally, your time is measured in moments!",
      "He is the leader of the Decepticon Justice Division, the faction's most feared internal enforcement squad.",
      "Tarn transforms into a powerful tank and fights with a combination of brute force and terrifying methodology.",
      "His most nightmarish ability is his voice — he can fatally overload any robot simply by speaking to them.",
      "Tarn is deeply philosophical about the Decepticon cause, treating his murderous assignments as holy duty.",
      "He reads the Decepticon Manifesto constantly and knows it completely by heart, treating it as a sacred text.",
      "The DJD hunts Decepticon traitors and defectors across the galaxy, and no one they pursue has ever escaped.",
      "Behind his mask hides an identity that, when revealed, shakes the entire Decepticon command structure.",
      "Tarn is terrifying not because he is mindless, but because he is intelligent, principled, and completely sincere.",
      "He proves that the most dangerous fanatics are those who truly believe in what they are doing — no matter how wrong!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Tarn%20masked%20Decepticon%20assassin%20leader%20with%20tank%20cannon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=477',
    stats: { power: 98, speed: 72, bravery: 84 },
    narrative: [
      "Tarn is the terrifying masked leader of the DJD — his voice alone can kill, and his tank form finishes the job!",
      "He hunts Decepticon traitors across the galaxy with philosophical conviction and absolute, lethal efficiency.",
      "He is the most frightening kind of villain: one who is completely sincere and completely wrong!"
    ]
  },
  {
    id: 'jhiaxus',
    name: 'Jhiaxus',
    faction: 'Decepticon',
    category: 'Elite Core',
    identifier: 'The Empire Builder',
    description: [
      "The empire is expanding — and Jhiaxus is the cold, brilliant mind ensuring it consumes everything in its path!",
      "He is a Decepticon General from the Generation 2 era, responsible for creating a massive new Decepticon empire.",
      "Jhiaxus transforms into a powerful Cybertronian jet with capabilities far beyond standard Seeker class.",
      "He takes a clinical, almost scientific approach to conquest, treating entire civilizations as strategic problems.",
      "Jhiaxus is the Decepticon general who discovered that Transformers had been reproducing on other worlds.",
      "His cold intelligence and willingness to create entirely new kinds of Transformers made him terrifyingly innovative.",
      "Jhiaxus leads through a combination of absolute competence and ruthless elimination of any failure.",
      "His empire was so vast and so well-organized that even the combined Autobot and Decepticon forces struggled to stop it.",
      "He has no passion for glory or personal drama — only cold, efficient expansion in every direction simultaneously.",
      "Jhiaxus proves that cold, intelligent, systematic evil is among the most difficult forces any hero can face!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Jhiaxus%20imposing%20Decepticon%20general%20robot%20with%20star%20map%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=478',
    stats: { power: 93, speed: 74, bravery: 80 },
    narrative: [
      "Jhiaxus is the brilliant G2 Decepticon general whose cold military genius built an empire spanning star systems.",
      "His powerful jet form and systematic approach to conquest made him a threat unlike any Megatron ever posed.",
      "His cold, efficient evil proves that calculating intelligence in service of conquest is one of history's most dangerous forces!"
    ]
  },
  {
    id: 'black-shadow',
    name: 'Black Shadow',
    faction: 'Decepticon',
    category: 'Elite Core',
    identifier: 'The Phase Sixer',
    description: [
      "Here comes Black Shadow — a Phase Sixer, which means one of the six most powerful single bots in existence!",
      "He is a mercenary bounty hunter of extraordinary destructive capability who fights for profit above all.",
      "Black Shadow transforms into a powerful space-capable fighter jet with devastating long-range weapons.",
      "Phase Sixers are Transformers so powerful they can singlehandedly devastate an entire planet's defense force.",
      "Black Shadow has no ideology, no loyalties, and no principles beyond completing the contract and being paid.",
      "He and fellow Phase Sixers represent a category of threat that requires multiple elite warriors to counter.",
      "Black Shadow's power output is so high that even other Decepticons treat him with extreme caution.",
      "He accepts contracts from the Decepticons but would work for Autobots if the price was right.",
      "His combination of raw power and complete amorality makes him one of the most dangerous forces in the galaxy.",
      "Black Shadow proves that raw, unaccountable power without any moral anchor is the universe's most dangerous resource!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Black%20Shadow%20dark%20Phase%20Sixer%20bounty%20hunter%20robot%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=479',
    stats: { power: 97, speed: 70, bravery: 74 },
    narrative: [
      "Black Shadow is a Phase Sixer — one of the six most destructively powerful individual Transformers in existence!",
      "His mercenary code means he fights for profit alone, with no loyalty to any cause or any faction.",
      "His near-unlimited power combined with complete moral emptiness makes him one of the universe's most dangerous beings!"
    ]
  },
  {
    id: 'devastator',
    name: 'Devastator',
    faction: 'Decepticon',
    category: 'Combiners',
    identifier: 'The First Combiner',
    description: [
      "CONSTRUCTICONS! MERGE INTO DEVASTATOR!",
      "He is the very first Combiner ever created — the original giant robot made from six powerful construction vehicles.",
      "Scrapper, Hook, Long Haul, Bonecrusher, Scavenger, and Mixmaster all join together to form this massive warrior.",
      "Devastator is enormously strong — capable of tearing apart reinforced Autobot fortifications with bare hands.",
      "His greatest weapon is his massive molecular disruption beam, which can disintegrate almost any material.",
      "Devastator is incredibly powerful but not particularly smart — the six merging minds create more brute force than cleverness.",
      "The Autobots first encountered him and were shocked to realize they were fighting an entirely new category of threat.",
      "He was created by the Constructicons who were themselves among the first Decepticons to arrive on Earth.",
      "Devastator's sheer physical presence is so overwhelming that it took multiple Autobot heavy-hitters to engage him.",
      "Devastator proves that when powerful warriors merge their strength into one, they create something truly unprecedented!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Devastator%20massive%20green%20Constructicon%20combiner%20robot%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=480',
    stats: { power: 97, speed: 30, bravery: 88 },
    narrative: [
      "Devastator is the very first Combiner — six construction vehicles merging into an unstoppable giant!",
      "His enormous strength and molecular disruption beam made him a completely new kind of Decepticon threat.",
      "He will always be the original, the greatest, and the most feared first Combiner in Transformer history!"
    ]
  },
  {
    id: 'menasor',
    name: 'Menasor',
    faction: 'Decepticon',
    category: 'Combiners',
    identifier: 'The Road Terror',
    description: [
      "Menasor is coming — and he is in an absolutely terrible mood, as always!",
      "He is formed from the five Stunticon vehicles: Motormaster, Dead End, Breakdown, Drag Strip, and Wildrider.",
      "Motormaster becomes the towering torso, the others joining as limbs of this violent and unstable warrior.",
      "Menasor is psychologically fractured because the five Stunticons despise each other almost completely.",
      "The internal arguments between the Stunticons create a combined being who is unpredictable and dangerously erratic.",
      "He rages and lashes out in every direction, making him as dangerous to his surroundings as to his enemies.",
      "His enormous sword and violent attack style make him one of the most physically destructive Combiners alive.",
      "Defensor, the Autobot Combiner, is his natural nemesis — order and protection against chaos and destruction.",
      "Despite his instability, Menasor's raw power is extraordinary and his momentum in battle nearly unstoppable.",
      "Menasor shows us that hatred, internal conflict, and lack of cooperation create instability — but still dangerous power!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Menasor%20violent%20unstable%20Stunticon%20combiner%20robot%20with%20sword%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=481',
    stats: { power: 93, speed: 65, bravery: 82 },
    narrative: [
      "Menasor is the Decepticons' violently unstable Combiner — five bickering Stunticons forced into one fractured giant!",
      "His enormous sword and erratic aggression make him as dangerous to his own side as to the Autobots.",
      "He is a living lesson that internal conflict and hatred produce power that destroys everything, including itself!"
    ]
  },
  {
    id: 'bruticus',
    name: 'Bruticus',
    faction: 'Decepticon',
    category: 'Combiners',
    identifier: 'The Military Giant',
    description: [
      "COMBATICONS! FORM BRUTICUS!",
      "He is a military-themed Combiner formed from the five elite Combaticon warriors led by Onslaught.",
      "Onslaught forms the powerful torso, with Brawl, Vortex, Swindle, and Blast Off forming his devastating limbs.",
      "Each Combaticon brings a specialized military role: tank, helicopter, race car, space shuttle, and armored transport.",
      "Bruticus is disciplined and tactically focused, fighting with a structured military precision unusual for Combiners.",
      "He is one of the physically strongest Decepticon Combiners and remarkably coordinated given his five forming members.",
      "Bruticus was once temporarily reprogrammed to fight FOR the Autobots, which caused Megatron considerable frustration.",
      "His shoulder-mounted photon cannon can blast through reinforced battle stations at extreme range.",
      "The Combaticons were originally stranded on a deserted asteroid before being retrieved by Megatron.",
      "Bruticus proves that military discipline, combined arms warfare, and genuine teamwork create a truly formidable force!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Bruticus%20military%20combiner%20robot%20with%20heavy%20weapons%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=482',
    stats: { power: 94, speed: 55, bravery: 85 },
    narrative: [
      "Bruticus is the Decepticons' military Combiner — five disciplined soldiers merging into one overwhelmingly powerful warrior!",
      "His coordinated military approach and massive firepower make him one of the most effective Combiners in battle.",
      "He proves that disciplined teamwork, even among villains, creates something far greater than any individual warrior!"
    ]
  },
  {
    id: 'predaking',
    name: 'Predaking',
    faction: 'Decepticon',
    category: 'Combiners',
    identifier: 'The Beast Combiner',
    description: [
      "PREDACONS, UNITE! The most powerful beast Combiner in history — Predaking — has arrived!",
      "He is formed from five Predacon animal warriors: Razorclaw, Tantrum, Headstrong, Divebomb, and Rampage.",
      "Razorclaw becomes the imposing torso while the others form four powerful, beast-enhanced limbs.",
      "Predaking's physical strength is so extraordinary that he is considered one of the strongest Combiners ever created.",
      "He carries a massive energon sword and particle beam rifle that complement his already devastating physical power.",
      "Predaking is unique among Combiners for having a more coordinated and focused mind than most giant mergers.",
      "The Predacons in beast mode bring raw animal ferocity to the combination, making Predaking especially unpredictable.",
      "He has fought and defeated multiple Autobot Combiners simultaneously in some of the most impressive showings ever.",
      "Even Devastator has faced Predaking and discovered that the lion-based Combiner gives absolutely nothing away.",
      "Predaking proves that combining the ferocity of five powerful beasts with giant robot form creates an almost invincible warrior!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Predaking%20powerful%20lion%20beast%20combiner%20robot%20with%20enormous%20sword%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=483',
    stats: { power: 98, speed: 58, bravery: 90 },
    narrative: [
      "Predaking is the most powerful beast Combiner ever assembled — five Predacon animals merging into a titan of incredible strength!",
      "His massive sword, raw animal ferocity, and extraordinary focus make him arguably the strongest Combiner of all.",
      "Even other Combiners respect Predaking's power — he is the pinnacle of what five united beast warriors can become!"
    ]
  },
  {
    id: 'abominus',
    name: 'Abominus',
    faction: 'Decepticon',
    category: 'Combiners',
    identifier: 'The Savage Terror',
    description: [
      "Something enormous and savage is heading this way — it is Abominus, and it wants to smash everything!",
      "He is formed from five Terrorcon beast-bots: Hun-Gurrr, Blot, Cutthroat, Rippersnapper, and Sinnertwin.",
      "Hun-Gurrr becomes the two-headed torso, the others joining as bestial, barely controlled limbs.",
      "Abominus is the most mindlessly savage Combiner in existence — pure destruction with almost no strategic thought.",
      "He attacks everything in range: Autobots, Decepticons, buildings, trees, and anything else nearby.",
      "This makes him simultaneously a powerful weapon and a tremendous liability requiring careful deployment.",
      "The Terrorcons are themselves barely controllable — their combined form is even more chaotically violent.",
      "Abominus was specifically created to counter Computron, the highly intelligent Autobot Combiner.",
      "Where Computron calculates and strategizes, Abominus simply charges and destroys everything in his path.",
      "Abominus proves that raw, uncontrolled savagery might destroy an enemy — but also destroys everything else around them!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Abominus%20savage%20beast%20combiner%20Terrorcon%20monster%20robot%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=484',
    stats: { power: 90, speed: 45, bravery: 75 },
    narrative: [
      "Abominus is the Decepticons' most savage Combiner — five Terrorcon monsters merging into pure mindless destruction!",
      "He attacks everything nearby with no strategy and no restraint, making him a weapon that even Decepticons handle carefully.",
      "He is the opposite of intelligence in battle: a pure, howling force of devastating chaos!"
    ]
  },
  {
    id: 'piranacon',
    name: 'Piranacon',
    faction: 'Decepticon',
    category: 'Combiners',
    identifier: 'The Deep-Sea Destroyer',
    description: [
      "From the darkest depths of the ocean, Piranacon rises — and nothing in the sea is safe!",
      "He is formed from six Seacon Decepticons: Snap Trap, Nautilator, Overbite, Seawing, Skalor, and Tentakil.",
      "Together they form a massive aquatic warrior who dominates underwater environments with terrifying efficiency.",
      "Piranacon's individual members can also detach and function independently, making his team unusually flexible.",
      "He is the Decepticons' answer to any aquatic threat — no ocean is safe when the Seacons are deployed.",
      "Piranacon carries a powerful compression cannon and bio-mechanical crusher claws capable of crushing submarines.",
      "The Seacons can also re-combine in different configurations, giving Piranacon unusual tactical versatility.",
      "He first appeared in the European G1 comics where the Seacons were one of the most dangerous new additions.",
      "Piranacon moves surprisingly well both underwater and on land, making containment extremely difficult.",
      "Piranacon proves that the oceans conceal some of the most terrifying and powerful forces imaginable!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Piranacon%20aquatic%20sea%20Decepticon%20combiner%20robot%20emerging%20from%20ocean%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=485',
    stats: { power: 92, speed: 50, bravery: 82 },
    narrative: [
      "Piranacon is the Decepticons' aquatic Combiner — six Seacon warriors rising from the deep to dominate any ocean!",
      "His combination can reconfigure in multiple ways, and his crushing claws can destroy submarines with ease.",
      "He proves that the darkest depths hide the most terrifying powers — and Piranacon rules those depths absolutely!"
    ]
  },
  {
    id: 'liokaiser',
    name: 'Liokaiser',
    faction: 'Decepticon',
    category: 'Combiners',
    identifier: 'The Victory Titan',
    description: [
      "From the Breastforce squad emerges Liokaiser — one of the most powerful Decepticon Combiners ever assembled!",
      "He is formed from the six Breastforce warriors of the Victory cartoon: Leozack, Hellbat, Drillhorn, Jaguar, Killbison, and Guyhawk.",
      "Each Breastforce member carries a small partner called a Breastmaster that attaches as armor and grants special powers.",
      "Liokaiser is extraordinarily powerful — many fans consider him among the most dangerous Combiners of his era.",
      "He was created to destroy the Autobot Star Saber and came horrifyingly close to succeeding more than once.",
      "Liokaiser carries devastating energy weapons and the combined ferocity of six accomplished individual warriors.",
      "The Breastforce team operates with unusual cohesion for Decepticons, making their combination exceptionally effective.",
      "Liokaiser appeared in the Japanese G1 Victory series where he challenged the greatest Autobot warriors.",
      "His formation is controlled with impressive tactical awareness that makes him more than just a brawler.",
      "Liokaiser proves that a well-organized team with individual specialists can create a truly supreme combined warrior!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Liokaiser%20powerful%20Victory%20Breastforce%20combiner%20robot%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=486',
    stats: { power: 96, speed: 60, bravery: 86 },
    narrative: [
      "Liokaiser is the Breastforce's mighty Victory-era Combiner — one of the most powerful Decepticon giants ever formed!",
      "His six forming members each carry Breastmaster partners, amplifying his already devastating combined power.",
      "He challenged the greatest Autobot warriors of his era and came terrifyingly close to ending them all!"
    ]
  },
  {
    id: 'blitzwing',
    name: 'Blitzwing',
    faction: 'Decepticon',
    category: 'Multi-Changers',
    identifier: 'The Unpredictable Triple Threat',
    description: [
      "Watch out for Blitzwing — he is a Triple Changer, and none of his three personalities will agree on what to do!",
      "He is one of the most unpredictable Decepticons because he has three completely different robot personalities.",
      "Blitzwing transforms into a powerful tank for ground assault AND a fast fighter jet for aerial combat.",
      "His three personalities — Icy (cold and calculating), Hothead (screaming and impulsive), Random (completely unhinged) — cycle without warning.",
      "In Transformers Animated, these three faces are shown literally rotating on his head, which is both alarming and hilarious.",
      "Icy Blitzwing is the most dangerous — cold precision and devastating strategy deployed with ruthless efficiency.",
      "Hothead Blitzwing is destructive and terrifying — pure rage and firepower without any brake.",
      "Random Blitzwing is absolutely chaotic — doing and saying things that make no sense whatsoever to anyone.",
      "Together these three make Blitzwing nearly impossible to predict or plan around in any engagement.",
      "Blitzwing proves that three forms and three personalities might be a tactical advantage — if any of them could agree on a plan!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Blitzwing%20goofy%20purple%20tan%20triple%20changer%20personality%20faces%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=490',
    stats: { power: 86, speed: 90, bravery: 72 },
    narrative: [
      "Blitzwing is a triple-changing Decepticon with three vehicles and three distinct, cycling personalities!",
      "His tank, jet, and robot modes are matched by Icy, Hothead, and Random personalities that switch without warning.",
      "He is utterly unpredictable — which makes him one of the most uniquely dangerous and entertaining Decepticons alive!"
    ]
  },
  {
    id: 'astrotrain',
    name: 'Astrotrain',
    faction: 'Decepticon',
    category: 'Multi-Changers',
    identifier: 'The Space Freight Triple Changer',
    description: [
      "All aboard! Or maybe: blast off! It completely depends on which mode Astrotrain is in right now!",
      "He is a Triple Changer who becomes a massive steam locomotive AND a gigantic space shuttle.",
      "Astrotrain transforms to carry entire squads of Decepticons across continents or through outer space.",
      "His sheer size in both vehicle modes makes him one of the most important logistical assets the Decepticons have.",
      "Astrotrain can use his massive size to his advantage — ramming enemies in train mode at full speed.",
      "In space shuttle mode, he has carried Decepticon forces to Earth's orbit and into battle across star systems.",
      "Astrotrain occasionally manipulates power struggles between Decepticons for his own amusement and benefit.",
      "He has a smuggler's cunning, always looking for personal advantages within the complex Decepticon hierarchy.",
      "His twin heat-ray cannons provide the firepower for self-defense in any of his three operational modes.",
      "Astrotrain proves that a warrior who serves as a bridge between planets is uniquely powerful — especially if he charges for passage!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Astrotrain%20white%20space%20shuttle%20train%20robot%20Decepticon%20transport%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=491',
    stats: { power: 84, speed: 78, bravery: 76 },
    narrative: [
      "Astrotrain is the Decepticons' massive triple-changer who carries armies as a steam train and transports them to orbit as a space shuttle!",
      "His enormous size and dual vehicle modes make him indispensable for long-range Decepticon operations.",
      "His cunning and self-serving nature make every ride with Astrotrain a slightly unpredictable adventure!"
    ]
  },
  {
    id: 'sixshot',
    name: 'Sixshot',
    faction: 'Decepticon',
    category: 'Multi-Changers',
    identifier: 'The Solo Assault Group',
    description: [
      "When Sixshot arrives, a single robot has essentially become an entire army — all by himself!",
      "He is classified as a Solo Assault Group because his six different combat forms make him worth a whole unit.",
      "Sixshot transforms into a winged wolf, a pistol, a laser cannon, a jet fighter, an armored vehicle, and a robot.",
      "Each form is specialized for a different combat environment and situation, making him adaptable to anything.",
      "Sixshot is one of the most powerful non-Combiner Decepticons in existence, a genuine force-multiplier alone.",
      "He is the father of Quickswitch, the heroic Autobot Six Changer — a family divided across opposite sides.",
      "Sixshot is cold, professional, and extremely dangerous — not given to the theatrics of many other Decepticons.",
      "He has been deployed in situations where entire Autobot teams have been needed to match his individual power.",
      "His winged wolf mode alone is one of the most terrifying things any Autobot has ever faced in combat.",
      "Sixshot proves that true mastery — achieving six forms of deadly excellence — makes a single warrior into a force of nature!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Sixshot%20dark%20six%20changer%20robot%20cycling%20through%20six%20transformations%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=492',
    stats: { power: 96, speed: 86, bravery: 80 },
    narrative: [
      "Sixshot is classified as a Solo Assault Group — six devastating forms make this single Decepticon worth an entire army!",
      "His mastery of wolf, cannon, jet, pistol, vehicle, and robot modes means no combat environment can stop him.",
      "He is the father of Autobot hero Quickswitch — a family where both sides chose their own path!"
    ]
  },
  {
    id: 'overlord',
    name: 'Overlord',
    faction: 'Decepticon',
    category: 'Multi-Changers',
    identifier: 'The Phase Sixer Conqueror',
    description: [
      "When Overlord appears, the message is clear: this location is about to be conquered at the highest possible level!",
      "He is a Phase Sixer — one of the most devastatingly powerful individual warriors in all of Transformer existence.",
      "Overlord is unique: he is formed from two vehicles — a tank operated by one pilot and a jet by another — that merge.",
      "In his full combined robot mode, Overlord achieves Phase Sixer power levels that can devastate entire continents.",
      "He is specifically designed to serve as a one-robot invasion force for taking enemy planets.",
      "Overlord is arrogant, powerful, and obsessed with battle as the purest form of existence.",
      "In IDW comics, Overlord was the most terrifying villain arc in a storyline, killing multiple beloved characters.",
      "He considers any opponent beneath his power level an insult rather than a challenge.",
      "Overlord's combination of tank firepower, jet speed, and Phase Sixer durability makes him nearly unkillable.",
      "Overlord proves that some forces are so powerful that only the most creative and courageous heroism can prevail!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Overlord%20massive%20Phase%20Sixer%20Decepticon%20robot%20tank%20and%20jet%20combined%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=493',
    stats: { power: 97, speed: 72, bravery: 80 },
    narrative: [
      "Overlord is a Phase Sixer Decepticon formed from two merging vehicles — a one-robot planetary invasion force!",
      "His near-unlimited power and arrogant, battle-obsessed personality make him one of the most terrifying Decepticons ever.",
      "Only the most extraordinary heroism from the most capable Autobots can hope to stop a Phase Sixer of his magnitude!"
    ]
  },
  {
    id: 'octane',
    name: 'Octane',
    faction: 'Decepticon',
    category: 'Multi-Changers',
    identifier: 'The Greedy Triple Changer',
    description: [
      "Here comes Octane — the Decepticon who is always open for business, no matter what the business is!",
      "He is a Triple Changer who transforms into a tanker truck for ground transport AND a commercial jet for air travel.",
      "Octane's primary concern in any situation is his own comfort, safety, and resource accumulation.",
      "He stores and transports enormous amounts of Energon, making him valuable to the Decepticons as a supply vessel.",
      "Octane once betrayed the Decepticons to work with Trypticon against them — purely for personal gain.",
      "He has dealt with both factions at different points, making him one of the more unpredictable Decepticons.",
      "Octane's opportunistic deals and self-serving nature create more trouble for everyone around him than for himself.",
      "His commercial jet mode is enormous, capable of carrying large cargo loads across continents efficiently.",
      "Despite his cowardly tendencies, Octane is difficult to remove because his fuel-carrying services are so valuable.",
      "Octane proves that self-interest without principles creates a trail of chaos — but also, unfortunately, a comfortable survival!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Octane%20purple%20tanker%20jet%20triple%20changer%20robot%20with%20fuel%20lines%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=494',
    stats: { power: 80, speed: 78, bravery: 68 },
    narrative: [
      "Octane is the Decepticons' self-serving triple-changing tanker — always ready to deal with anyone for personal gain!",
      "His tanker and jet forms carry vital Energon supplies while his self-interest makes him an unreliable ally.",
      "He proves that pure opportunism without loyalty creates endless chaos — but somehow Octane always lands on his feet!"
    ]
  },
  {
    id: 'apeface',
    name: 'Apeface',
    faction: 'Decepticon',
    category: 'Multi-Changers',
    identifier: 'The Obnoxious Headmaster Triple Changer',
    description: [
      "Apeface is here, and things are about to get very loud, very rude, and extremely chaotic!",
      "He is the most obnoxious Decepticon Headmaster alive — a Triple Changer who becomes a jet AND a gorilla.",
      "As a Headmaster, his small partner Spasma transforms into Apeface's head, linking their minds together.",
      "Apeface combines the aerial firepower of a jet with the brute ground strength of a powerful gorilla form.",
      "He is boorish, noisy, and completely disrespectful to everyone around him — including his own Decepticon teammates.",
      "Despite his appalling social skills, Apeface's three different combat modes make him genuinely effective.",
      "His gorilla mode has incredible physical strength that surprises enemies expecting a standard robot warrior.",
      "Spasma, his head-partner, is somewhat more thoughtful than Apeface, occasionally providing a more sensible perspective.",
      "Apeface's jet mode gives him speed and aerial capability that combines unexpectedly well with gorilla ground combat.",
      "He proves that effectiveness in battle does not require charm — though charm makes the mission much more pleasant for everyone nearby!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Apeface%20gorilla%20jet%20headmaster%20Decepticon%20robot%20in%20chaos%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=495',
    stats: { power: 82, speed: 80, bravery: 76 },
    narrative: [
      "Apeface is the most obnoxious Headmaster Triple Changer alive — jet speed, gorilla strength, and zero social skills!",
      "His three combat modes make him genuinely effective despite his boorish behavior and complete lack of manners.",
      "He and his partner Spasma prove that raw capability in three forms can compensate for almost any personality flaw!"
    ]
  },
  {
    id: 'scorponok',
    name: 'Scorponok',
    faction: 'Decepticon',
    category: 'Bonded Units',
    identifier: 'The Headmaster Warlord',
    description: [
      "Scorponok approaches — and the earth shakes under the weight of his terrible purpose!",
      "He is one of the largest and most powerful Headmaster Decepticons ever built, bonded to the Nebulan Lord Zarak.",
      "Lord Zarak transforms into Scorponok's head, merging their consciousnesses in the Headmaster process.",
      "Scorponok transforms into a massive Cybertronian scorpion AND a mighty battle city fortress.",
      "As a battle city, Scorponok can house an entire Decepticon army within his colossal armored body.",
      "He is the Decepticon counterpart to Fortress Maximus — equally vast, equally devastating in scale.",
      "Their legendary battle — city-bot versus city-bot — shook the entire Earth and left both damaged but still standing.",
      "Zarak's political ambitions and Scorponok's raw power combine into one of the most dangerous Decepticon entities.",
      "He carries energy cannons, force fields, and enough missile batteries to engage an entire fleet alone.",
      "Scorponok proves that when political cunning and absolute physical power are combined, the result is terrifyingly effective!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Scorponok%20massive%20scorpion%20fortress%20Headmaster%20Decepticon%20robot%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=500',
    stats: { power: 97, speed: 30, bravery: 88 },
    narrative: [
      "Scorponok is one of the most massive Headmaster Decepticons — bonded to Lord Zarak and armed like a city!",
      "His scorpion and battle-fortress modes make him the perfect Decepticon counterpart to Fortress Maximus.",
      "His combination of political cunning and devastating firepower makes him one of the most formidable Decepticons alive!"
    ]
  },
  {
    id: 'cyclonus',
    name: 'Cyclonus',
    faction: 'Decepticon',
    category: 'Bonded Units',
    identifier: 'The Loyal Second',
    description: [
      "Cyclonus stands at his master's side — loyal beyond question and more dangerous than he appears!",
      "He is Galvatron's most steadfastly devoted officer and the most reliable of all the post-Unicron Decepticons.",
      "Cyclonus transforms into a powerful Cybertronian fighter jet with formidable speed and weaponry.",
      "As a Targetmaster, he is bonded to a Nebulan partner named Nightstick who transforms into his weapon.",
      "Cyclonus was created by Unicron from the bodies of fallen Decepticons, reborn in a new and powerful form.",
      "He executes Galvatron's orders without question, providing steady loyal service in contrast to treacherous Starscream.",
      "In IDW comics, Cyclonus developed an unexpected deep friendship with the young Autobot Tailgate that moved many readers.",
      "His piloting skills are exceptional — one of the finest jet pilots in either faction's entire history.",
      "Cyclonus is cold, efficient, and utterly serious, but his loyalty is genuine and runs extraordinarily deep.",
      "He proves that absolute loyalty, freely given to someone who has earned it, is one of the rarest and most powerful forces!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Cyclonus%20purple%20loyal%20Decepticon%20commander%20robot%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=501',
    stats: { power: 90, speed: 88, bravery: 84 },
    narrative: [
      "Cyclonus is Galvatron's most loyal and capable officer — a Targetmaster warrior of extraordinary devotion and skill.",
      "His powerful jet form and genuine loyalty contrast sharply with the scheming treachery that surrounds him.",
      "His unexpected deep friendship with young Autobot Tailgate is one of the most touching stories across all Transformer continuities!"
    ]
  },
  {
    id: 'mindwipe',
    name: 'Mindwipe',
    faction: 'Decepticon',
    category: 'Bonded Units',
    identifier: 'The Hypnotic Vampire',
    description: [
      "Stare into Mindwipe's eyes — if you can resist his hypnosis, you are doing far better than most!",
      "He is a Decepticon Headmaster who transforms into a robotic vampire bat, drawing on occult power.",
      "Mindwipe is bonded to his Nebulan partner Vorath, a scientist who becomes his head and augments his abilities.",
      "His hypnotic powers can place almost any bot in a suggestible trance, leaving them vulnerable to command.",
      "Mindwipe is deeply interested in the occult, mysticism, and supernatural forces — unusual for a robot warrior.",
      "He genuinely believes in ancient Cybertronian mystical arts, spending considerable time on ritual and study.",
      "His bat form grants him silent flight and echolocation that makes night operations exceptionally effective.",
      "Mindwipe serves the Decepticon cause but is primarily interested in supernatural knowledge and power.",
      "The combination of his hypnosis, bat flight, and Vorath's scientific mind makes him a uniquely dangerous operative.",
      "Mindwipe proves that combining scientific and mystical approaches creates a truly unpredictable and versatile warrior!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Mindwipe%20vampire%20bat%20Headmaster%20Decepticon%20robot%20with%20hypnotic%20eyes%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=502',
    stats: { power: 76, speed: 74, bravery: 72 },
    narrative: [
      "Mindwipe is the Decepticons' hypnotic vampire bat Headmaster — his gaze can put almost any bot in a trance!",
      "His occult interests and silent bat flight make him one of the most uniquely unsettling Decepticons in any continuity.",
      "He proves that when science and mysticism combine in service of a dangerous mind, the result is deeply, uniquely threatening!"
    ]
  },
  {
    id: 'weirdwolf',
    name: 'Weirdwolf',
    faction: 'Decepticon',
    category: 'Bonded Units',
    identifier: 'The Backwards-Speaking Headmaster',
    description: [
      "Strange speaks Weirdwolf — his sentences confuse you, yes they do, before the biting starts!",
      "He is a Decepticon Headmaster who transforms into a swift mechanical wolf, bonded to his Nebulan partner Monzo.",
      "Weirdwolf speaks in reversed sentence structures that leave everyone around him genuinely confused.",
      "His wolf mode is fast, powerful, and uses predatory pack-hunting instincts that make him effective in pursuits.",
      "Monzo becomes Weirdwolf's head in Headmaster mode, adding tactical processing to his animal ferocity.",
      "Weirdwolf hunts his targets with single-minded persistence, using wolf instincts translated into robot combat.",
      "Despite his confusing speech, Weirdwolf understands every order perfectly and executes them with wolfish precision.",
      "He is loyal to the Decepticon cause and serves alongside fellow Headmaster Decepticons with reliable ferocity.",
      "His claws and energon sword make him formidable in close combat once the hunting phase brings him to his prey.",
      "Weirdwolf proves that a loyal warrior is powerful even when — especially when — his enemies cannot understand a word he says!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Weirdwolf%20yellow%20wolf%20Headmaster%20Decepticon%20robot%20stalking%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=503',
    stats: { power: 78, speed: 80, bravery: 78 },
    narrative: [
      "Weirdwolf is the Decepticons' backwards-talking wolf Headmaster — his sentences confuse everyone, but his claws speak clearly!",
      "His wolf-form speed and Monzo's tactical upgrades make him a relentless and effective hunting Decepticon.",
      "Confusing to listen to, terrifying to face — Weirdwolf is one of the most uniquely unsettling Headmasters in the Decepticon ranks!"
    ]
  },
  {
    id: 'misfire',
    name: 'Misfire',
    faction: 'Decepticon',
    category: 'Bonded Units',
    identifier: 'The Notoriously Bad Shot',
    description: [
      "Everybody run — not from Misfire specifically, but from wherever he is currently aiming!",
      "He is a Decepticon Targetmaster whose name tells you everything important about his most famous quality.",
      "Misfire is bonded to his Nebulan partner Aimless, who transforms into his blaster — with similar accuracy issues.",
      "He transforms into a fast pink Cybertronian jet that has excellent speed and maneuverability in the air.",
      "The problem is that when Misfire fires at something, whatever he hits is almost never what he was pointing at.",
      "Somehow, Misfire survives every battle — partly through luck, and partly because enemies keep avoiding his unpredictable shots.",
      "Despite his terrible aim, Misfire is surprisingly popular and genuinely cheerful about his own limitations.",
      "He takes an impressively positive attitude toward being notoriously bad at the most basic aspect of his job.",
      "Misfire and his crew eventually became main characters in the IDW series 'The Scavengers,' where they were endearingly lovable.",
      "Misfire proves that a cheerful heart, loyal friendship, and genuine effort matter even when your aim is absolutely terrible!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Misfire%20pink%20jet%20Decepticon%20robot%20shooting%20wildly%20in%20wrong%20direction%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=504',
    stats: { power: 68, speed: 82, bravery: 74 },
    narrative: [
      "Misfire is the Decepticons' most famously bad shot — his Targetmaster weapon Aimless lives up to its name perfectly!",
      "Despite shooting in the wrong direction at nearly every opportunity, Misfire somehow survives every single battle.",
      "His cheerful attitude about his own terrible aim makes him one of the most unexpectedly lovable Decepticons in history!"
    ]
  },
  {
    id: 'triggerhappy',
    name: 'Triggerhappy',
    faction: 'Decepticon',
    category: 'Bonded Units',
    identifier: 'The Gleefully Trigger-Happy Pilot',
    description: [
      "SHOOTING! MORE SHOOTING! Triggerhappy is here and he is absolutely THRILLED about it!",
      "He is a Decepticon Targetmaster who partners with the Nebulan Blowpipe, who becomes his cannon.",
      "Triggerhappy transforms into a fast blue Cybertronian jet built specifically for rapid-fire aerial combat.",
      "His defining characteristic is that he fires all his weapons at all times at absolutely everything around him.",
      "Triggerhappy does not aim so much as fill the entire sky with energy blasts and hope for favorable outcomes.",
      "Despite this chaotic approach, his enthusiasm and sheer volume of fire does actually achieve results.",
      "He shouts enthusiastically and laughs constantly during battles, which makes him both terrifying and weirdly fun.",
      "Blowpipe, his Nebulan partner, provides some tactical guidance, though Triggerhappy rarely pauses long enough to use it.",
      "In The Scavengers storyline, Triggerhappy became a beloved character showing surprising loyalty to his oddball crew.",
      "He proves that unbounded enthusiasm combined with massive firepower is its own kind of effective — if noisy — combat style!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Triggerhappy%20blue%20jet%20Decepticon%20robot%20blazing%20guns%20everywhere%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=505',
    stats: { power: 74, speed: 86, bravery: 80 },
    narrative: [
      "Triggerhappy is the Decepticons' most gleefully enthusiastic shooter — he fires everything at everything, always!",
      "His blue jet speed and Blowpipe's cannon partnership make him genuinely dangerous despite his chaotic targeting approach.",
      "His overwhelming enthusiasm and surprising loyalty make him one of IDW's most unexpectedly beloved Decepticons!"
    ]
  },
  {
    id: 'snapdragon',
    name: 'Snapdragon',
    faction: 'Decepticon',
    category: 'Bonded Units',
    identifier: 'The Dragon Headmaster Triple Changer',
    description: [
      "Beware both the skies and the dragon — Snapdragon commands both with fearsome efficiency!",
      "He is a Decepticon Headmaster who is also a Triple Changer, transforming into a dragon AND a jet aircraft.",
      "His Nebulan partner Krunk becomes Snapdragon's head, linking their minds for enhanced combat performance.",
      "Snapdragon's dragon mode breathes actual fire and uses powerful tail and claw attacks in close combat.",
      "His jet mode provides high-speed aerial pursuit capability with missile systems for ranged combat.",
      "This triple nature makes Snapdragon unusually versatile among the Decepticon Headmaster corps.",
      "He served alongside Apeface as one of the Decepticon Headmaster duo with beast/vehicle combination modes.",
      "Snapdragon is aggressive and eager for battle in all three of his combat configurations.",
      "Krunk's analytical abilities complement Snapdragon's instinctive fighting style to create effective battlefield decisions.",
      "Snapdragon proves that combining beast ferocity with aerial speed and Headmaster intelligence creates a truly formidable package!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Snapdragon%20dragon%20jet%20Headmaster%20Decepticon%20robot%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=506',
    stats: { power: 84, speed: 80, bravery: 80 },
    narrative: [
      "Snapdragon is the Decepticons' fire-breathing dragon Headmaster Triple Changer — beast, jet, and robot in one!",
      "His dragon fire, jet speed, and Headmaster bond with Krunk make him one of the most versatile Decepticon Headmasters.",
      "Three forms, one fierce warrior — Snapdragon brings maximum danger to every environment he enters!"
    ]
  },
  {
    id: 'trypticon',
    name: 'Trypticon',
    faction: 'Decepticon',
    category: 'Titans',
    identifier: 'The Battle Station Dinosaur',
    description: [
      "ROOAARR! Trypticon is awake — and he is very, very hungry for destruction!",
      "He is the Decepticons' answer to Metroplex — a colossal dinosaur titan who transforms into a battle station city.",
      "Trypticon transforms into a massive Tyrannosaurus Rex-inspired dinosaur AND a fully armed Decepticon city.",
      "His city mode is crammed with weapon systems, hangar bays, and launch platforms for Decepticon forces.",
      "Trypticon is incredibly destructive and not particularly sophisticated — he prefers to smash things directly.",
      "He was specifically built by the Decepticons to counter and hopefully destroy the massive Autobot Metroplex.",
      "Trypticon's battle with Metroplex in the G1 cartoon was one of the most spectacular Titan-vs-Titan clashes.",
      "His immense size means individual Autobots are meaningless obstacles — he simply steps over them or through them.",
      "Despite his fearsome power, Trypticon has been defeated by clever Autobot strategies that exploit his lack of flexibility.",
      "Trypticon proves that even the most enormous force of destruction can be outthought by a determined and clever defender!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Trypticon%20massive%20dark%20dinosaur%20titan%20Decepticon%20city%20robot%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=510',
    stats: { power: 99, speed: 22, bravery: 88 },
    narrative: [
      "Trypticon is the Decepticons' city-sized dinosaur titan — massive, destructive, and endlessly hungry for battle!",
      "His city mode houses entire Decepticon armies while his T-Rex rampage mode levels everything in his path.",
      "He is the ultimate Decepticon instrument of destruction — proof that the biggest hammer needs no subtlety!"
    ]
  },
  {
    id: 'the-nemesis',
    name: 'The Nemesis',
    faction: 'Decepticon',
    category: 'Titans',
    identifier: 'The Warship Titan',
    description: [
      "Through the stars it comes — the dark shape of the Nemesis, the Decepticons' most feared warship!",
      "The Nemesis is the Decepticons' primary capital ship, a massive vessel that serves as their mobile base and weapon.",
      "What makes it truly terrifying is its ability to transform from a warship into an enormous Titan-class robot.",
      "As a ship, the Nemesis carries entire Decepticon armies across interstellar distances.",
      "Its weapons in ship mode include powerful Decepticon-calibre cannons that can devastate entire fleets.",
      "The Nemesis has been pursuing the Autobots since their arrival on Earth — a shadow that never truly leaves.",
      "In Transformers Prime, the Nemesis served as Megatron's command vessel and primary base of operations.",
      "When it transforms into robot mode, it becomes a warrior at the scale of Metroplex — a ship-sized titan.",
      "The Nemesis represents the full military and logistical might of the Decepticon faction in physical form.",
      "The Nemesis proves that the greatest weapons are not just fighters but the vessels that carry those fighters everywhere!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Nemesis%20dark%20Decepticon%20warship%20transforming%20into%20giant%20robot%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=511',
    stats: { power: 97, speed: 45, bravery: 85 },
    narrative: [
      "The Nemesis is the Decepticons' mighty warship that transforms into a Titan-class robot of terrifying scale!",
      "It has served as the Decepticon mobile base and command vessel across multiple Transformer continuities.",
      "It is the living symbol of Decepticon military might — a ship, a city, and an unstoppable warrior in one!"
    ]
  },
  {
    id: 'tidal-wave',
    name: 'Tidal Wave',
    faction: 'Decepticon',
    category: 'Titans',
    identifier: 'The Naval Titan',
    description: [
      "The ocean itself seems to darken when Tidal Wave is nearby — and the horizon is filled with his hull!",
      "He is an enormous Decepticon naval titan who serves as the faction's dominant sea-based weapon platform.",
      "Tidal Wave transforms into a massive battleship that can split into three separate smaller warships.",
      "Each component ship carries significant independent firepower before all three reassemble into the massive titan.",
      "Tidal Wave is devoted to Megatron with quiet, absolute loyalty that makes him one of the most reliable Decepticons.",
      "His size gives him firepower comparable to entire naval fleets — the Autobots have no easy counter at sea.",
      "Tidal Wave appeared in the Armada and Energon series as one of the most loyal and powerful Decepticon warriors.",
      "His enormous size means that even firing a fraction of his weapons creates tsunami-like shockwaves around him.",
      "Despite his immense power, Tidal Wave follows orders obediently, making him the most reliable giant in Decepticon history.",
      "Tidal Wave proves that reliable, disciplined, ocean-spanning power in service of a cause is truly impressive!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Tidal%20Wave%20massive%20Decepticon%20naval%20battleship%20titan%20robot%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=512',
    stats: { power: 95, speed: 28, bravery: 82 },
    narrative: [
      "Tidal Wave is the Decepticons' colossal naval titan — a battleship who splits into three ships and commands entire oceans!",
      "His loyalty to Megatron is absolute, and his firepower can match entire naval fleets simultaneously.",
      "He is the Decepticons' greatest sea weapon — proof that the oceans hold as much potential for devastation as the skies!"
    ]
  },
  {
    id: 'unicron',
    name: 'Unicron',
    faction: 'Decepticon',
    category: 'Titans',
    identifier: 'The Chaos Bringer',
    description: [
      "In the beginning, there was Unicron — and he was hungry for everything that existed!",
      "He is the ultimate cosmic villain: a planet-sized robot god who devours entire worlds for energy.",
      "Unicron transforms from a terrifying robotic monster into a planet that lures ships and civilizations to their doom.",
      "He is the dark twin of Primus, the embodiment of chaos and destruction to counter creation and order.",
      "Unicron rebuilt Megatron into Galvatron, turning a powerful villain into an even more terrifying one.",
      "His mouth opens into a dimension that consumes entire planets — moons, inhabited worlds, and everything on them.",
      "His servants include the Sweeps, Scourge, and Galvatron himself — all twisted to his terrible will.",
      "Even the combined Autobot and Decepticon forces working together have barely managed to stop him.",
      "The Matrix of Leadership, Primus's creation, is the one thing that has proven capable of destroying Unicron.",
      "Unicron proves that the greatest darkness in the universe is not evil done by choice, but chaos done by appetite!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Unicron%20planet-eating%20god%20robot%20dark%20transformation%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=513',
    stats: { power: 100, speed: 10, bravery: 80 },
    narrative: [
      "Unicron is the planet-sized chaos god who devours entire worlds — the ultimate threat to all of existence!",
      "He rebuilt Megatron into Galvatron and commands the most powerful servants in the galaxy as his personal army.",
      "Only the Autobot Matrix of Leadership, a fragment of his twin Primus, has ever proven capable of stopping him!"
    ]
  }
];
