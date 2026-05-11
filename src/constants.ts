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
    id: 'Multi-Changers',
    title: 'TRI-SQUAD',
    subtitle: 'Master Multitaskers',
    accentColor: 'bg-tertiary-green',
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20versatile%20robot%20with%20jet%20wings%20and%20tank%20tracks%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=105',
    paragraphs: [
      "The Tri-Squad members are special because they aren't just robots and cars—they have THREE different shapes! They are the most flexible robots in the entire Transformers world.",
      "Most Transformers have to choose between being a car or a robot, but a Tri-Squad member can choose to be a car, a robot, AND a high-speed jet or even a giant tank!",
      "This makes them very useful for missions that start on the ground and end up in outer space. They can drive to the airport, transform into a plane, and fly away without ever stopping.",
      "They have extra complicated gears and wires inside them to handle all those different parts moving around. It's like having three different toys all built into one robot body!",
      "If you love surprises, the Tri-Squad is for you. You never know what they're going to transform into next—it could be a car, a plane, or a powerful robot ready for a high-five!"
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
  }
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
  }
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
      "He is the fearless leader of the Autobots and the biggest, strongest, and bravest superhero robot in the entire universe.",
      "Every time his friends need help, he is the first one ready to roll out and save the day from danger.",
      "When he goes undercover on Earth, Optimus Prime can transform his giant metal body into a super cool, shiny red and blue semi-truck.",
      "With his big roaring engine, he zooms down the highway faster than you can believe, rushing to rescue anyone who is trapped or in trouble.",
      "Optimus Prime has a huge, glowing heart of gold inside his chest.",
      "He believes that everyone, big or small, deserves to be treated kindly and protected from the mean Decepticons.",
      "He always looks out for his friends, including his human buddies, and makes sure they stay safe.",
      "Even when battles get super tough and scary, Optimus Prime never, ever gives up!",
      "He stands tall with his giant shield and blaster, shouting his famous catchphrase 'Autobots, transform and roll out!' while leading his team to a happy victory."
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Optimus%20Prime%20standing%20proudly%20holding%20shield%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=108',
    stats: { power: 99, speed: 80, bravery: 100 },
    narrative: [
      "Optimus Prime is the biggest, strongest, and bravest Autobot of all!",
      "He can transform into a giant, shiny red truck that zooms across the road to help anyone in trouble.",
      "He always looks out for his friends and never gives up when things get tough."
    ]
  },
  {
    id: 'megatron',
    name: 'Megatron',
    faction: 'Decepticon',
    category: 'Elite Core',
    identifier: 'Ruthless Tyrant',
    description: [
      "Here comes Megatron!",
      "He is the big, scary boss of the Decepticons and the most powerful villain in the whole galaxy.",
      "Megatron wants to be the boss of everyone and everything, and he loves to cause trouble wherever he goes.",
      "His huge robot body is made from super tough, dark silver metal that is almost impossible to break.",
      "When he steps onto the battlefield, the ground shakes, and all the other robots know they have to watch out for his sneaky tricks and his giant fusion cannon.",
      "Megatron used to be friends with Optimus Prime a long, long time ago, but then he got greedy and wanted all the power for himself.",
      "Now he spends his days bossing around the other Decepticons and trying to steal all the energy in the universe to make himself even stronger.",
      "Even though he acts tough and mean, he always ends up losing to the Autobots.",
      "They know that teamwork and kindness are the real superpowers.",
      "But Megatron never stops trying, so the Autobots always have to stay on their toes when he is around!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Megatron%20plotting%20a%20schematic%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=109',
    stats: { power: 100, speed: 70, bravery: 85 },
    narrative: [
      "Megatron is the strongest and scariest robot in the whole galaxy!",
      "He is made of tough, dark metal and has a giant cannon that can blast through anything.",
      "He thinks he should be the king of all robots!"
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
      "Bumblebee is an awesome scout who sneaks into dangerous places to spy on the mean Decepticons and help his friends.",
      "When it's time to race, Bumblebee transforms into a super cool, lightning-fast yellow sports car with black racing stripes.",
      "He zooms around corners and does amazing tricks, driving circles around the bad guys before they even know what happened!",
      "Because his voice box got hurt in a big battle, Bumblebee sometimes talks by using his radio, playing fun songs and sound bites to show how he feels.",
      "Even without his normal voice, he tells the best jokes and always knows how to make all of his human and robot friends laugh and smile.",
      "Bumblebee loves Earth and his human friends more than anything.",
      "He is like a loyal and playful giant metal puppy who is always ready for an adventure.",
      "You can always count on Bumblebee to zoom in and save the day when things get tricky!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Bumblebee%20yellow%20sports%20car%20robot%20waving%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=110',
    stats: { power: 75, speed: 95, bravery: 98 },
    narrative: [
      "Bumblebee is a brave scout who uses his speed to help his friends.",
      "He transforms into a cool yellow car that can outrun any Decepticon!"
    ]
  },
  {
    id: 'superion',
    name: 'Superion',
    faction: 'Autobot',
    category: 'Combiners',
    identifier: 'The Gentle Giant',
    description: [
      "Look up in the sky... it's Superion!",
      "He is not just one robot, but a gigantic super-warrior made out of five brave flying Autobots called the Aerialbots.",
      "When they join their powers together, they become a huge hero who protects the clouds and the land.",
      "Superion is incredibly tall—taller than big buildings and mountains!",
      "He is super strong and uses his massive fists to smash through the Decepticons' evil plans.",
      "When he flies, his giant jet engines roar so loud they sound like a thunderstorm.",
      "Because he is made of five different robots, his brain is always combining all of their thoughts into one hero who only wants to do what's right.",
      "He is totally focused on keeping everyone safe and destroying anything the Decepticons throw his way.",
      "Even though he looks super serious and scary to the bad guys, Superion is a gentle giant to his friends.",
      "He will bravely dive down from the sky to catch anyone falling or shield his tiny human buddies from danger with his enormous hands."
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Superion%20giant%20flying%20combining%20robot%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=111',
    stats: { power: 95, speed: 85, bravery: 90 },
    narrative: [
      "Superion is a massive Autobot formed when five brave jets combine together!",
      "When the team merges, they become a giant warrior who can soar through the sky and punch through thick clouds.",
      "He never backs down from a fight to protect the innocent."
    ]
  },
  {
    id: 'blitzwing',
    name: 'Blitzwing',
    faction: 'Decepticon',
    category: 'Multi-Changers',
    identifier: 'The Unpredictable Foe',
    description: [
      "Watch out for Blitzwing!",
      "He is a very tricky Decepticon because he isn't just a robot and a vehicle... he's a Triple Changer!",
      "That means he can transform into three different things, keeping the Autobots guessing what he will do next.",
      "One second, Blitzwing is flying high up in the sky as a super-fast, zooming fighter jet.",
      "The next second, he drops out of the clouds and transforms into a slow, heavy, blasting purple tank that can drive over rocks and walls!",
      "Because he has so many forms, Blitzwing has multiple personalities.",
      "Sometimes he acts super cold and calculating, sometimes he is completely wild and crazy, and other times he is just grumpy and mean.",
      "It makes him unpredictable and very dangerous in a battle.",
      "Even with his amazing triple-changing powers, the smart Autobots always find a way to out-trick him.",
      "Blitzwing often gets confused by all his own changing forms and ends up tumbling into a funny, clanking mess when he tries to show off too much!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Blitzwing%20goofy%20purple%20and%20tan%20triple%20changer%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=112',
    stats: { power: 85, speed: 90, bravery: 70 },
    narrative: [
      "Blitzwing is a triple threat! He can transform into a jet, a tank, AND a robot.",
      "This makes him very tricky to catch, because you never know what form he will take next.",
      "He loves to surprise Autobots by flying high and then dropping crashing down as a heavy tank!"
    ]
  },
  {
    id: 'arcee',
    name: 'Arcee',
    faction: 'Autobot',
    category: 'Bonded Units',
    identifier: 'The Loyal Friend',
    description: [
      "Here comes Arcee!",
      "She is an incredibly brave, fast, and totally awesome Autobot warrior who zips around the battlefield with super speedy flips and kicks.",
      "Nobody can match her incredible stunts and daring moves when she faces the Decepticons.",
      "When she transforms, she turns into a sleek, awesome pink convertible sports car.",
      "She zooms down the highway with the wind blowing, always ready to race to the rescue in style and look super cool doing it.",
      "Arcee is a fiercely loyal friend who will do absolutely anything to protect her teammates.",
      "She has a special bond with her human friends, like Daniel, and she acts like the best big sister ever, keeping them completely safe from even the biggest bad guys.",
      "Don't let her bright color and friendly smile fool you.",
      "Arcee is a tough-as-nails fighter who never runs away from a challenge.",
      "She uses her amazing speed and sharp aim to blast Decepticons out of the park and save the universe, one adventure at a time!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Arcee%20pink%20acrobatic%20robot%20hero%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=113',
    stats: { power: 65, speed: 95, bravery: 95 },
    narrative: [
      "Arcee is a swift and smart Autobot who always protects her friends.",
      "She has a special partner, a human named Daniel, and together they are a great team.",
      "She zooms around like a pink sports car, keeping a close eye on anyone who needs help."
    ]
  },
  {
    id: 'metroplex',
    name: 'Metroplex',
    faction: 'Autobot',
    category: 'Titans',
    identifier: 'The Walking City',
    description: [
      "Get ready to meet Metroplex, the biggest Autobot of them all!",
      "Metroplex is so absolutely huge that he isn't just a vehicle—he is an entire walking, talking robot city!",
      "When times are peaceful, he rests on the ground and acts as a hidden base for his friends.",
      "Inside of Metroplex, there are roads, rooms, computer screens, overpasses, and repair bays.",
      "The Autobots can hang out here, fix their armor, and plan their next big adventure.",
      "It's like having a gigantic, protective robot house!",
      "If the Decepticons try to attack the base, Metroplex performs the biggest transformation ever!",
      "The buildings shift, the roads fold, and he stands up to become an unbelievable superhero the size of a giant skyscraper, shaking the whole world when he takes a step.",
      "He acts slowly because he is so big, but he is incredibly powerful and has a super kind heart.",
      "Metroplex is the ultimate guardian of the Autobots.",
      "He puts himself in front of danger like an enormous, friendly mountain to keep everyone inside him perfectly safe."
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Metroplex%20city-sized%20happy%20robot%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=114',
    stats: { power: 100, speed: 20, bravery: 100 },
    narrative: [
      "Metroplex is so huge that he transforms into an entire Autobot city!",
      "When the Autobots need a base to rest, he lies down and opens his doors for everyone.",
      "If danger approaches, he can stand up into a giant robot the size of a skyscraper!"
    ]
  },
  {
    id: 'ironhide',
    name: 'Ironhide',
    faction: 'Autobot',
    category: 'Elite Core' as any,
    identifier: 'Security',
    description: [
      "Here comes Ironhide!",
      "A grizzled veteran serving as personal bodyguard and muscle.",
      "This brave Autobot is known as a Security and is a critical part of the Elite Core squad.",
      "Just like all Autobots, Ironhide wants to protect everyone and stop the Decepticons from causing trouble.",
      "With their powerful abilities and awesome vehicle or alternate modes, they can zoom into battle to save the day.",
      "When the mission gets tough, Ironhide never gives up and always relies on teamwork.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to help.",
      "Even when facing the biggest challenges, Ironhide stays courageous and strong.",
      "You can always count on this amazing hero to watch your back and keep you safe.",
      "Let's roll out and join Ironhide on the next super exciting adventure!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Ironhide%2C%20A%20grizzled%20veteran%20serving%20as%20personal%20bodyguard%20and%20muscle.%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=200',
    stats: { power: 73, speed: 91, bravery: 95 },
    narrative: [
      "A grizzled veteran serving as personal bodyguard and muscle.",
      "Ironhide is an amazing hero who fights for the Autobots.",
      "With the special skills of a Security, they make the Elite Core squad proud."
    ]
  },
  {
    id: 'ratchet',
    name: 'Ratchet',
    faction: 'Autobot',
    category: 'Elite Core' as any,
    identifier: 'Medical/Scientist',
    description: [
      "Here comes Ratchet!",
      "The primary chief medical officer for the Autobots.",
      "This brave Autobot is known as a Medical/Scientist and is a critical part of the Elite Core squad.",
      "Just like all Autobots, Ratchet wants to protect everyone and stop the Decepticons from causing trouble.",
      "With their powerful abilities and awesome vehicle or alternate modes, they can zoom into battle to save the day.",
      "When the mission gets tough, Ratchet never gives up and always relies on teamwork.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to help.",
      "Even when facing the biggest challenges, Ratchet stays courageous and strong.",
      "You can always count on this amazing hero to watch your back and keep you safe.",
      "Let's roll out and join Ratchet on the next super exciting adventure!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Ratchet%2C%20The%20primary%20chief%20medical%20officer%20for%20the%20Autobots.%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=201',
    stats: { power: 77, speed: 80, bravery: 97 },
    narrative: [
      "The primary chief medical officer for the Autobots.",
      "Ratchet is an amazing hero who fights for the Autobots.",
      "With the special skills of a Medical/Scientist, they make the Elite Core squad proud."
    ]
  },
  {
    id: 'jazz',
    name: 'Jazz',
    faction: 'Autobot',
    category: 'Elite Core' as any,
    identifier: 'Special Ops',
    description: [
      "Here comes Jazz!",
      "An expert in Earth culture and high-stakes covert operations.",
      "This brave Autobot is known as a Special Ops and is a critical part of the Elite Core squad.",
      "Just like all Autobots, Jazz wants to protect everyone and stop the Decepticons from causing trouble.",
      "With their powerful abilities and awesome vehicle or alternate modes, they can zoom into battle to save the day.",
      "When the mission gets tough, Jazz never gives up and always relies on teamwork.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to help.",
      "Even when facing the biggest challenges, Jazz stays courageous and strong.",
      "You can always count on this amazing hero to watch your back and keep you safe.",
      "Let's roll out and join Jazz on the next super exciting adventure!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Jazz%2C%20An%20expert%20in%20Earth%20culture%20and%20high-stakes%20covert%20operations.%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=202',
    stats: { power: 70, speed: 76, bravery: 86 },
    narrative: [
      "An expert in Earth culture and high-stakes covert operations.",
      "Jazz is an amazing hero who fights for the Autobots.",
      "With the special skills of a Special Ops, they make the Elite Core squad proud."
    ]
  },
  {
    id: 'prowl',
    name: 'Prowl',
    faction: 'Autobot',
    category: 'Elite Core' as any,
    identifier: 'Strategy/Tactics',
    description: [
      "Here comes Prowl!",
      "The logic-driven military strategist of the faction.",
      "This brave Autobot is known as a Strategy/Tactics and is a critical part of the Elite Core squad.",
      "Just like all Autobots, Prowl wants to protect everyone and stop the Decepticons from causing trouble.",
      "With their powerful abilities and awesome vehicle or alternate modes, they can zoom into battle to save the day.",
      "When the mission gets tough, Prowl never gives up and always relies on teamwork.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to help.",
      "Even when facing the biggest challenges, Prowl stays courageous and strong.",
      "You can always count on this amazing hero to watch your back and keep you safe.",
      "Let's roll out and join Prowl on the next super exciting adventure!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Prowl%2C%20The%20logic-driven%20military%20strategist%20of%20the%20faction.%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=203',
    stats: { power: 97, speed: 88, bravery: 99 },
    narrative: [
      "The logic-driven military strategist of the faction.",
      "Prowl is an amazing hero who fights for the Autobots.",
      "With the special skills of a Strategy/Tactics, they make the Elite Core squad proud."
    ]
  },
  {
    id: 'wheeljack',
    name: 'Wheeljack',
    faction: 'Autobot',
    category: 'Elite Core' as any,
    identifier: 'Engineer',
    description: [
      "Here comes Wheeljack!",
      "A brilliant, if chaotic, inventor of weapons and gear.",
      "This brave Autobot is known as a Engineer and is a critical part of the Elite Core squad.",
      "Just like all Autobots, Wheeljack wants to protect everyone and stop the Decepticons from causing trouble.",
      "With their powerful abilities and awesome vehicle or alternate modes, they can zoom into battle to save the day.",
      "When the mission gets tough, Wheeljack never gives up and always relies on teamwork.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to help.",
      "Even when facing the biggest challenges, Wheeljack stays courageous and strong.",
      "You can always count on this amazing hero to watch your back and keep you safe.",
      "Let's roll out and join Wheeljack on the next super exciting adventure!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Wheeljack%2C%20A%20brilliant%2C%20if%20chaotic%2C%20inventor%20of%20weapons%20and%20gear.%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=204',
    stats: { power: 84, speed: 95, bravery: 82 },
    narrative: [
      "A brilliant, if chaotic, inventor of weapons and gear.",
      "Wheeljack is an amazing hero who fights for the Autobots.",
      "With the special skills of a Engineer, they make the Elite Core squad proud."
    ]
  },
  {
    id: 'cliffjumper',
    name: 'Cliffjumper',
    faction: 'Autobot',
    category: 'Elite Core' as any,
    identifier: 'Combat',
    description: [
      "Here comes Cliffjumper!",
      "A small but aggressive warrior known for heavy weaponry.",
      "This brave Autobot is known as a Combat and is a critical part of the Elite Core squad.",
      "Just like all Autobots, Cliffjumper wants to protect everyone and stop the Decepticons from causing trouble.",
      "With their powerful abilities and awesome vehicle or alternate modes, they can zoom into battle to save the day.",
      "When the mission gets tough, Cliffjumper never gives up and always relies on teamwork.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to help.",
      "Even when facing the biggest challenges, Cliffjumper stays courageous and strong.",
      "You can always count on this amazing hero to watch your back and keep you safe.",
      "Let's roll out and join Cliffjumper on the next super exciting adventure!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Cliffjumper%2C%20A%20small%20but%20aggressive%20warrior%20known%20for%20heavy%20weaponry.%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=205',
    stats: { power: 88, speed: 90, bravery: 96 },
    narrative: [
      "A small but aggressive warrior known for heavy weaponry.",
      "Cliffjumper is an amazing hero who fights for the Autobots.",
      "With the special skills of a Combat, they make the Elite Core squad proud."
    ]
  },
  {
    id: 'hot-rod',
    name: 'Hot Rod',
    faction: 'Autobot',
    category: 'Elite Core' as any,
    identifier: 'Cavalry',
    description: [
      "Here comes Hot Rod!",
      "A brash, youthful soldier (later the leader Rodimus Prime).",
      "This brave Autobot is known as a Cavalry and is a critical part of the Elite Core squad.",
      "Just like all Autobots, Hot Rod wants to protect everyone and stop the Decepticons from causing trouble.",
      "With their powerful abilities and awesome vehicle or alternate modes, they can zoom into battle to save the day.",
      "When the mission gets tough, Hot Rod never gives up and always relies on teamwork.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to help.",
      "Even when facing the biggest challenges, Hot Rod stays courageous and strong.",
      "You can always count on this amazing hero to watch your back and keep you safe.",
      "Let's roll out and join Hot Rod on the next super exciting adventure!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Hot%20Rod%2C%20A%20brash%2C%20youthful%20soldier%20(later%20the%20leader%20Rodimus%20Prime).%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=206',
    stats: { power: 84, speed: 93, bravery: 96 },
    narrative: [
      "A brash, youthful soldier (later the leader Rodimus Prime).",
      "Hot Rod is an amazing hero who fights for the Autobots.",
      "With the special skills of a Cavalry, they make the Elite Core squad proud."
    ]
  },
  {
    id: 'kup',
    name: 'Kup',
    faction: 'Autobot',
    category: 'Elite Core' as any,
    identifier: 'Veteran',
    description: [
      "Here comes Kup!",
      "An old, cynical warrior who has seen every battle type.",
      "This brave Autobot is known as a Veteran and is a critical part of the Elite Core squad.",
      "Just like all Autobots, Kup wants to protect everyone and stop the Decepticons from causing trouble.",
      "With their powerful abilities and awesome vehicle or alternate modes, they can zoom into battle to save the day.",
      "When the mission gets tough, Kup never gives up and always relies on teamwork.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to help.",
      "Even when facing the biggest challenges, Kup stays courageous and strong.",
      "You can always count on this amazing hero to watch your back and keep you safe.",
      "Let's roll out and join Kup on the next super exciting adventure!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Kup%2C%20An%20old%2C%20cynical%20warrior%20who%20has%20seen%20every%20battle%20type.%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=207',
    stats: { power: 80, speed: 71, bravery: 81 },
    narrative: [
      "An old, cynical warrior who has seen every battle type.",
      "Kup is an amazing hero who fights for the Autobots.",
      "With the special skills of a Veteran, they make the Elite Core squad proud."
    ]
  },
  {
    id: 'drift',
    name: 'Drift',
    faction: 'Autobot',
    category: 'Elite Core' as any,
    identifier: 'Swordsman',
    description: [
      "Here comes Drift!",
      "A former Decepticon who redeemed himself as a samurai-style bot.",
      "This brave Autobot is known as a Swordsman and is a critical part of the Elite Core squad.",
      "Just like all Autobots, Drift wants to protect everyone and stop the Decepticons from causing trouble.",
      "With their powerful abilities and awesome vehicle or alternate modes, they can zoom into battle to save the day.",
      "When the mission gets tough, Drift never gives up and always relies on teamwork.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to help.",
      "Even when facing the biggest challenges, Drift stays courageous and strong.",
      "You can always count on this amazing hero to watch your back and keep you safe.",
      "Let's roll out and join Drift on the next super exciting adventure!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Drift%2C%20A%20former%20Decepticon%20who%20redeemed%20himself%20as%20a%20samurai-style%20bot.%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=208',
    stats: { power: 98, speed: 92, bravery: 89 },
    narrative: [
      "A former Decepticon who redeemed himself as a samurai-style bot.",
      "Drift is an amazing hero who fights for the Autobots.",
      "With the special skills of a Swordsman, they make the Elite Core squad proud."
    ]
  },
  {
    id: 'defensor',
    name: 'Defensor',
    faction: 'Autobot',
    category: 'Combiners' as any,
    identifier: 'Protectobots',
    description: [
      "Here comes Defensor!",
      "Formed by emergency vehicles to protect civilian life.",
      "This brave Autobot is known as a Protectobots and is a critical part of the Combiners squad.",
      "Just like all Autobots, Defensor wants to protect everyone and stop the Decepticons from causing trouble.",
      "With their powerful abilities and awesome vehicle or alternate modes, they can zoom into battle to save the day.",
      "When the mission gets tough, Defensor never gives up and always relies on teamwork.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to help.",
      "Even when facing the biggest challenges, Defensor stays courageous and strong.",
      "You can always count on this amazing hero to watch your back and keep you safe.",
      "Let's roll out and join Defensor on the next super exciting adventure!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Defensor%2C%20Formed%20by%20emergency%20vehicles%20to%20protect%20civilian%20life.%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=209',
    stats: { power: 86, speed: 94, bravery: 83 },
    narrative: [
      "Formed by emergency vehicles to protect civilian life.",
      "Defensor is an amazing hero who fights for the Autobots.",
      "With the special skills of a Protectobots, they make the Combiners squad proud."
    ]
  },
  {
    id: 'computron',
    name: 'Computron',
    faction: 'Autobot',
    category: 'Combiners' as any,
    identifier: 'Technobots',
    description: [
      "Here comes Computron!",
      "A highly intelligent gestalt focused on data and calculation.",
      "This brave Autobot is known as a Technobots and is a critical part of the Combiners squad.",
      "Just like all Autobots, Computron wants to protect everyone and stop the Decepticons from causing trouble.",
      "With their powerful abilities and awesome vehicle or alternate modes, they can zoom into battle to save the day.",
      "When the mission gets tough, Computron never gives up and always relies on teamwork.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to help.",
      "Even when facing the biggest challenges, Computron stays courageous and strong.",
      "You can always count on this amazing hero to watch your back and keep you safe.",
      "Let's roll out and join Computron on the next super exciting adventure!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Computron%2C%20A%20highly%20intelligent%20gestalt%20focused%20on%20data%20and%20calculation.%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=210',
    stats: { power: 94, speed: 72, bravery: 86 },
    narrative: [
      "A highly intelligent gestalt focused on data and calculation.",
      "Computron is an amazing hero who fights for the Autobots.",
      "With the special skills of a Technobots, they make the Combiners squad proud."
    ]
  },
  {
    id: 'victorion',
    name: 'Victorion',
    faction: 'Autobot',
    category: 'Combiners' as any,
    identifier: 'Torchbearers',
    description: [
      "Here comes Victorion!",
      "A rust-based combiner team from the sea of Caminus.",
      "This brave Autobot is known as a Torchbearers and is a critical part of the Combiners squad.",
      "Just like all Autobots, Victorion wants to protect everyone and stop the Decepticons from causing trouble.",
      "With their powerful abilities and awesome vehicle or alternate modes, they can zoom into battle to save the day.",
      "When the mission gets tough, Victorion never gives up and always relies on teamwork.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to help.",
      "Even when facing the biggest challenges, Victorion stays courageous and strong.",
      "You can always count on this amazing hero to watch your back and keep you safe.",
      "Let's roll out and join Victorion on the next super exciting adventure!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Victorion%2C%20A%20rust-based%20combiner%20team%20from%20the%20sea%20of%20Caminus.%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=211',
    stats: { power: 95, speed: 93, bravery: 95 },
    narrative: [
      "A rust-based combiner team from the sea of Caminus.",
      "Victorion is an amazing hero who fights for the Autobots.",
      "With the special skills of a Torchbearers, they make the Combiners squad proud."
    ]
  },
  {
    id: 'volcanicus',
    name: 'Volcanicus',
    faction: 'Autobot',
    category: 'Combiners' as any,
    identifier: 'Dinobots',
    description: [
      "Here comes Volcanicus!",
      "The massive, savage combined form of the five Dinobots.",
      "This brave Autobot is known as a Dinobots and is a critical part of the Combiners squad.",
      "Just like all Autobots, Volcanicus wants to protect everyone and stop the Decepticons from causing trouble.",
      "With their powerful abilities and awesome vehicle or alternate modes, they can zoom into battle to save the day.",
      "When the mission gets tough, Volcanicus never gives up and always relies on teamwork.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to help.",
      "Even when facing the biggest challenges, Volcanicus stays courageous and strong.",
      "You can always count on this amazing hero to watch your back and keep you safe.",
      "Let's roll out and join Volcanicus on the next super exciting adventure!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Volcanicus%2C%20The%20massive%2C%20savage%20combined%20form%20of%20the%20five%20Dinobots.%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=212',
    stats: { power: 78, speed: 76, bravery: 99 },
    narrative: [
      "The massive, savage combined form of the five Dinobots.",
      "Volcanicus is an amazing hero who fights for the Autobots.",
      "With the special skills of a Dinobots, they make the Combiners squad proud."
    ]
  },
  {
    id: 'springer',
    name: 'Springer',
    faction: 'Autobot',
    category: 'Multi-Changers' as any,
    identifier: 'Car/Helicopter',
    description: [
      "Here comes Springer!",
      "A versatile Wrecker with two distinct vehicle modes.",
      "This brave Autobot is known as a Car/Helicopter and is a critical part of the Multi-Changers squad.",
      "Just like all Autobots, Springer wants to protect everyone and stop the Decepticons from causing trouble.",
      "With their powerful abilities and awesome vehicle or alternate modes, they can zoom into battle to save the day.",
      "When the mission gets tough, Springer never gives up and always relies on teamwork.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to help.",
      "Even when facing the biggest challenges, Springer stays courageous and strong.",
      "You can always count on this amazing hero to watch your back and keep you safe.",
      "Let's roll out and join Springer on the next super exciting adventure!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Springer%2C%20A%20versatile%20Wrecker%20with%20two%20distinct%20vehicle%20modes.%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=213',
    stats: { power: 86, speed: 79, bravery: 91 },
    narrative: [
      "A versatile Wrecker with two distinct vehicle modes.",
      "Springer is an amazing hero who fights for the Autobots.",
      "With the special skills of a Car/Helicopter, they make the Multi-Changers squad proud."
    ]
  },
  {
    id: 'sandstorm',
    name: 'Sandstorm',
    faction: 'Autobot',
    category: 'Multi-Changers' as any,
    identifier: 'Buggy/VTOL',
    description: [
      "Here comes Sandstorm!",
      "A traveler capable of both desert and high-altitude flight.",
      "This brave Autobot is known as a Buggy/VTOL and is a critical part of the Multi-Changers squad.",
      "Just like all Autobots, Sandstorm wants to protect everyone and stop the Decepticons from causing trouble.",
      "With their powerful abilities and awesome vehicle or alternate modes, they can zoom into battle to save the day.",
      "When the mission gets tough, Sandstorm never gives up and always relies on teamwork.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to help.",
      "Even when facing the biggest challenges, Sandstorm stays courageous and strong.",
      "You can always count on this amazing hero to watch your back and keep you safe.",
      "Let's roll out and join Sandstorm on the next super exciting adventure!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Sandstorm%2C%20A%20traveler%20capable%20of%20both%20desert%20and%20high-altitude%20flight.%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=214',
    stats: { power: 85, speed: 98, bravery: 92 },
    narrative: [
      "A traveler capable of both desert and high-altitude flight.",
      "Sandstorm is an amazing hero who fights for the Autobots.",
      "With the special skills of a Buggy/VTOL, they make the Multi-Changers squad proud."
    ]
  },
  {
    id: 'broadside',
    name: 'Broadside',
    faction: 'Autobot',
    category: 'Multi-Changers' as any,
    identifier: 'Jet/Aircraft Carrier',
    description: [
      "Here comes Broadside!",
      "A massive triple-changer who suffers from motion sickness.",
      "This brave Autobot is known as a Jet/Aircraft Carrier and is a critical part of the Multi-Changers squad.",
      "Just like all Autobots, Broadside wants to protect everyone and stop the Decepticons from causing trouble.",
      "With their powerful abilities and awesome vehicle or alternate modes, they can zoom into battle to save the day.",
      "When the mission gets tough, Broadside never gives up and always relies on teamwork.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to help.",
      "Even when facing the biggest challenges, Broadside stays courageous and strong.",
      "You can always count on this amazing hero to watch your back and keep you safe.",
      "Let's roll out and join Broadside on the next super exciting adventure!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Broadside%2C%20A%20massive%20triple-changer%20who%20suffers%20from%20motion%20sickness.%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=215',
    stats: { power: 70, speed: 98, bravery: 80 },
    narrative: [
      "A massive triple-changer who suffers from motion sickness.",
      "Broadside is an amazing hero who fights for the Autobots.",
      "With the special skills of a Jet/Aircraft Carrier, they make the Multi-Changers squad proud."
    ]
  },
  {
    id: 'quickswitch',
    name: 'Quickswitch',
    faction: 'Autobot',
    category: 'Multi-Changers' as any,
    identifier: 'Six-Changer',
    description: [
      "Here comes Quickswitch!",
      "Capable of assuming six different combat configurations.",
      "This brave Autobot is known as a Six-Changer and is a critical part of the Multi-Changers squad.",
      "Just like all Autobots, Quickswitch wants to protect everyone and stop the Decepticons from causing trouble.",
      "With their powerful abilities and awesome vehicle or alternate modes, they can zoom into battle to save the day.",
      "When the mission gets tough, Quickswitch never gives up and always relies on teamwork.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to help.",
      "Even when facing the biggest challenges, Quickswitch stays courageous and strong.",
      "You can always count on this amazing hero to watch your back and keep you safe.",
      "Let's roll out and join Quickswitch on the next super exciting adventure!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Quickswitch%2C%20single%20solo%20Transformer%2C%20standing%2C%20full%20body%2C%20no%20multiple%20views%2C%20no%20grid%2C%20neutral%20background%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=9988',
    stats: { power: 86, speed: 77, bravery: 93 },
    narrative: [
      "Capable of assuming six different combat configurations.",
      "Quickswitch is an amazing hero who fights for the Autobots.",
      "With the special skills of a Six-Changer, they make the Multi-Changers squad proud."
    ]
  },
  {
    id: 'fortress-maximus',
    name: 'Fortress Maximus',
    faction: 'Autobot',
    category: 'Bonded Units' as any,
    identifier: 'Headmaster',
    description: [
      "Here comes Fortress Maximus!",
      "His head is a separate bot (Cerebros) that plugs in.",
      "This brave Autobot is known as a Headmaster and is a critical part of the Bonded Units squad.",
      "Just like all Autobots, Fortress Maximus wants to protect everyone and stop the Decepticons from causing trouble.",
      "With their powerful abilities and awesome vehicle or alternate modes, they can zoom into battle to save the day.",
      "When the mission gets tough, Fortress Maximus never gives up and always relies on teamwork.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to help.",
      "Even when facing the biggest challenges, Fortress Maximus stays courageous and strong.",
      "You can always count on this amazing hero to watch your back and keep you safe.",
      "Let's roll out and join Fortress Maximus on the next super exciting adventure!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Fortress%20Maximus%2C%20His%20head%20is%20a%20separate%20bot%20(Cerebros)%20that%20plugs%20in.%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=217',
    stats: { power: 78, speed: 93, bravery: 83 },
    narrative: [
      "His head is a separate bot (Cerebros) that plugs in.",
      "Fortress Maximus is an amazing hero who fights for the Autobots.",
      "With the special skills of a Headmaster, they make the Bonded Units squad proud."
    ]
  },
  {
    id: 'brainstorm',
    name: 'Brainstorm',
    faction: 'Autobot',
    category: 'Bonded Units' as any,
    identifier: 'Headmaster',
    description: [
      "Here comes Brainstorm!",
      "An eccentric scientist bonded to an organic pilot.",
      "This brave Autobot is known as a Headmaster and is a critical part of the Bonded Units squad.",
      "Just like all Autobots, Brainstorm wants to protect everyone and stop the Decepticons from causing trouble.",
      "With their powerful abilities and awesome vehicle or alternate modes, they can zoom into battle to save the day.",
      "When the mission gets tough, Brainstorm never gives up and always relies on teamwork.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to help.",
      "Even when facing the biggest challenges, Brainstorm stays courageous and strong.",
      "You can always count on this amazing hero to watch your back and keep you safe.",
      "Let's roll out and join Brainstorm on the next super exciting adventure!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Brainstorm%2C%20An%20eccentric%20scientist%20bonded%20to%20an%20organic%20pilot.%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=218',
    stats: { power: 81, speed: 73, bravery: 90 },
    narrative: [
      "An eccentric scientist bonded to an organic pilot.",
      "Brainstorm is an amazing hero who fights for the Autobots.",
      "With the special skills of a Headmaster, they make the Bonded Units squad proud."
    ]
  },
  {
    id: 'pointblank',
    name: 'Pointblank',
    faction: 'Autobot',
    category: 'Bonded Units' as any,
    identifier: 'Targetmaster',
    description: [
      "Here comes Pointblank!",
      "A warrior whose gun is a sentient partner named Peacemaker.",
      "This brave Autobot is known as a Targetmaster and is a critical part of the Bonded Units squad.",
      "Just like all Autobots, Pointblank wants to protect everyone and stop the Decepticons from causing trouble.",
      "With their powerful abilities and awesome vehicle or alternate modes, they can zoom into battle to save the day.",
      "When the mission gets tough, Pointblank never gives up and always relies on teamwork.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to help.",
      "Even when facing the biggest challenges, Pointblank stays courageous and strong.",
      "You can always count on this amazing hero to watch your back and keep you safe.",
      "Let's roll out and join Pointblank on the next super exciting adventure!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Pointblank%2C%20A%20warrior%20whose%20gun%20is%20a%20sentient%20partner%20named%20Peacemaker.%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=219',
    stats: { power: 76, speed: 87, bravery: 92 },
    narrative: [
      "A warrior whose gun is a sentient partner named Peacemaker.",
      "Pointblank is an amazing hero who fights for the Autobots.",
      "With the special skills of a Targetmaster, they make the Bonded Units squad proud."
    ]
  },
  {
    id: 'omega-supreme',
    name: 'Omega Supreme',
    faction: 'Autobot',
    category: 'Titans' as any,
    identifier: 'Defense Base',
    description: [
      "Here comes Omega Supreme!",
      "The ultimate guardian who turns into a rocket/base combo.",
      "This brave Autobot is known as a Defense Base and is a critical part of the Titans squad.",
      "Just like all Autobots, Omega Supreme wants to protect everyone and stop the Decepticons from causing trouble.",
      "With their powerful abilities and awesome vehicle or alternate modes, they can zoom into battle to save the day.",
      "When the mission gets tough, Omega Supreme never gives up and always relies on teamwork.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to help.",
      "Even when facing the biggest challenges, Omega Supreme stays courageous and strong.",
      "You can always count on this amazing hero to watch your back and keep you safe.",
      "Let's roll out and join Omega Supreme on the next super exciting adventure!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Omega%20Supreme%2C%20The%20ultimate%20guardian%20who%20turns%20into%20a%20rocket%2Fbase%20combo.%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=220',
    stats: { power: 99, speed: 81, bravery: 85 },
    narrative: [
      "The ultimate guardian who turns into a rocket/base combo.",
      "Omega Supreme is an amazing hero who fights for the Autobots.",
      "With the special skills of a Defense Base, they make the Titans squad proud."
    ]
  },
  {
    id: 'starscream',
    name: 'Starscream',
    faction: 'Decepticon',
    category: 'Elite Core' as any,
    identifier: 'Seeker/Air Commander',
    description: [
      "Look out, it's Starscream!",
      "The treacherous and ambitious leader of the air fleet.",
      "This sneaky Decepticon is known as a Seeker/Air Commander and is a dangerous part of the Elite Core squad.",
      "Like all Decepticons, Starscream wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Starscream usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Starscream is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Starscream!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Starscream%2C%20The%20treacherous%20and%20ambitious%20leader%20of%20the%20air%20fleet.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=300',
    stats: { power: 93, speed: 79, bravery: 98 },
    narrative: [
      "The treacherous and ambitious leader of the air fleet.",
      "Starscream is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Seeker/Air Commander, they make the Elite Core squad a big threat."
    ]
  },
  {
    id: 'soundwave',
    name: 'Soundwave',
    faction: 'Decepticon',
    category: 'Elite Core' as any,
    identifier: 'Communications',
    description: [
      "Look out, it's Soundwave!",
      "A master spy who houses smaller \"cassette\" operatives.",
      "This sneaky Decepticon is known as a Communications and is a dangerous part of the Elite Core squad.",
      "Like all Decepticons, Soundwave wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Soundwave usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Soundwave is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Soundwave!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Soundwave%2C%20A%20master%20spy%20who%20houses%20smaller%20%22cassette%22%20operatives.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=301',
    stats: { power: 79, speed: 71, bravery: 93 },
    narrative: [
      "A master spy who houses smaller \"cassette\" operatives.",
      "Soundwave is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Communications, they make the Elite Core squad a big threat."
    ]
  },
  {
    id: 'shockwave',
    name: 'Shockwave',
    faction: 'Decepticon',
    category: 'Elite Core' as any,
    identifier: 'Logistics/Science',
    description: [
      "Look out, it's Shockwave!",
      "A logical, emotionless scientist focused on efficiency.",
      "This sneaky Decepticon is known as a Logistics/Science and is a dangerous part of the Elite Core squad.",
      "Like all Decepticons, Shockwave wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Shockwave usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Shockwave is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Shockwave!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Shockwave%2C%20A%20logical%2C%20emotionless%20scientist%20focused%20on%20efficiency.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=302',
    stats: { power: 78, speed: 75, bravery: 83 },
    narrative: [
      "A logical, emotionless scientist focused on efficiency.",
      "Shockwave is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Logistics/Science, they make the Elite Core squad a big threat."
    ]
  },
  {
    id: 'thundercracker',
    name: 'Thundercracker',
    faction: 'Decepticon',
    category: 'Elite Core' as any,
    identifier: 'Seeker',
    description: [
      "Look out, it's Thundercracker!",
      "An elite pilot who often doubts the Decepticon cause.",
      "This sneaky Decepticon is known as a Seeker and is a dangerous part of the Elite Core squad.",
      "Like all Decepticons, Thundercracker wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Thundercracker usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Thundercracker is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Thundercracker!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Thundercracker%2C%20An%20elite%20pilot%20who%20often%20doubts%20the%20Decepticon%20cause.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=303',
    stats: { power: 94, speed: 76, bravery: 96 },
    narrative: [
      "An elite pilot who often doubts the Decepticon cause.",
      "Thundercracker is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Seeker, they make the Elite Core squad a big threat."
    ]
  },
  {
    id: 'skywarp',
    name: 'Skywarp',
    faction: 'Decepticon',
    category: 'Elite Core' as any,
    identifier: 'Seeker/Teleportation',
    description: [
      "Look out, it's Skywarp!",
      "A bully who utilizes short-range teleportation in combat.",
      "This sneaky Decepticon is known as a Seeker/Teleportation and is a dangerous part of the Elite Core squad.",
      "Like all Decepticons, Skywarp wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Skywarp usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Skywarp is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Skywarp!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Skywarp%2C%20A%20bully%20who%20utilizes%20short-range%20teleportation%20in%20combat.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=304',
    stats: { power: 99, speed: 98, bravery: 99 },
    narrative: [
      "A bully who utilizes short-range teleportation in combat.",
      "Skywarp is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Seeker/Teleportation, they make the Elite Core squad a big threat."
    ]
  },
  {
    id: 'reflector',
    name: 'Reflector',
    faction: 'Decepticon',
    category: 'Elite Core' as any,
    identifier: 'Surveillance',
    description: [
      "Look out, it's Reflector!",
      "A three-bot team that merges into a single camera.",
      "This sneaky Decepticon is known as a Surveillance and is a dangerous part of the Elite Core squad.",
      "Like all Decepticons, Reflector wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Reflector usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Reflector is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Reflector!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Reflector%2C%20A%20three-bot%20team%20that%20merges%20into%20a%20single%20camera.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=305',
    stats: { power: 99, speed: 77, bravery: 86 },
    narrative: [
      "A three-bot team that merges into a single camera.",
      "Reflector is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Surveillance, they make the Elite Core squad a big threat."
    ]
  },
  {
    id: 'barricade',
    name: 'Barricade',
    faction: 'Decepticon',
    category: 'Elite Core' as any,
    identifier: 'Enforcer',
    description: [
      "Look out, it's Barricade!",
      "A police-themed bot specializing in intimidation and pursuit.",
      "This sneaky Decepticon is known as a Enforcer and is a dangerous part of the Elite Core squad.",
      "Like all Decepticons, Barricade wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Barricade usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Barricade is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Barricade!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Barricade%2C%20A%20police-themed%20bot%20specializing%20in%20intimidation%20and%20pursuit.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=306',
    stats: { power: 70, speed: 87, bravery: 98 },
    narrative: [
      "A police-themed bot specializing in intimidation and pursuit.",
      "Barricade is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Enforcer, they make the Elite Core squad a big threat."
    ]
  },
  {
    id: 'knock-out',
    name: 'Knock Out',
    faction: 'Decepticon',
    category: 'Elite Core' as any,
    identifier: 'Medic/Scientist',
    description: [
      "Look out, it's Knock Out!",
      "A vain, style-obsessed medical officer and engineer.",
      "This sneaky Decepticon is known as a Medic/Scientist and is a dangerous part of the Elite Core squad.",
      "Like all Decepticons, Knock Out wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Knock Out usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Knock Out is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Knock Out!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Knock%20Out%2C%20A%20vain%2C%20style-obsessed%20medical%20officer%20and%20engineer.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=307',
    stats: { power: 87, speed: 75, bravery: 92 },
    narrative: [
      "A vain, style-obsessed medical officer and engineer.",
      "Knock Out is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Medic/Scientist, they make the Elite Core squad a big threat."
    ]
  },
  {
    id: 'rumble-and-frenzy',
    name: 'Rumble & Frenzy',
    faction: 'Decepticon',
    category: 'Elite Core' as any,
    identifier: 'Infiltration',
    description: [
      "Look out, it's Rumble & Frenzy!",
      "Small bots who create shockwaves or cause sonic chaos.",
      "This sneaky Decepticon is known as a Infiltration and is a dangerous part of the Elite Core squad.",
      "Like all Decepticons, Rumble & Frenzy wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Rumble & Frenzy usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Rumble & Frenzy is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Rumble & Frenzy!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Rumble%20%26%20Frenzy%2C%20Small%20bots%20who%20create%20shockwaves%20or%20cause%20sonic%20chaos.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=308',
    stats: { power: 78, speed: 92, bravery: 89 },
    narrative: [
      "Small bots who create shockwaves or cause sonic chaos.",
      "Rumble & Frenzy is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Infiltration, they make the Elite Core squad a big threat."
    ]
  },
  {
    id: 'laserbeak',
    name: 'Laserbeak',
    faction: 'Decepticon',
    category: 'Elite Core' as any,
    identifier: 'Minicon/Cassette',
    description: [
      "Look out, it's Laserbeak!",
      "A robotic condor used for spying and targeted strikes.",
      "This sneaky Decepticon is known as a Minicon/Cassette and is a dangerous part of the Elite Core squad.",
      "Like all Decepticons, Laserbeak wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Laserbeak usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Laserbeak is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Laserbeak!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Laserbeak%2C%20A%20robotic%20condor%20used%20for%20spying%20and%20targeted%20strikes.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=309',
    stats: { power: 92, speed: 95, bravery: 96 },
    narrative: [
      "A robotic condor used for spying and targeted strikes.",
      "Laserbeak is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Minicon/Cassette, they make the Elite Core squad a big threat."
    ]
  },
  {
    id: 'devastator',
    name: 'Devastator',
    faction: 'Decepticon',
    category: 'Combiners' as any,
    identifier: 'Constructicons',
    description: [
      "Look out, it's Devastator!",
      "The first combiner; formed by six heavy construction vehicles.",
      "This sneaky Decepticon is known as a Constructicons and is a dangerous part of the Combiners squad.",
      "Like all Decepticons, Devastator wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Devastator usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Devastator is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Devastator!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Devastator%2C%20The%20first%20combiner%3B%20formed%20by%20six%20heavy%20construction%20vehicles.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=310',
    stats: { power: 78, speed: 89, bravery: 83 },
    narrative: [
      "The first combiner; formed by six heavy construction vehicles.",
      "Devastator is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Constructicons, they make the Combiners squad a big threat."
    ]
  },
  {
    id: 'menasor',
    name: 'Menasor',
    faction: 'Decepticon',
    category: 'Combiners' as any,
    identifier: 'Stunticons',
    description: [
      "Look out, it's Menasor!",
      "A violent, unstable giant formed by five sports cars/trucks.",
      "This sneaky Decepticon is known as a Stunticons and is a dangerous part of the Combiners squad.",
      "Like all Decepticons, Menasor wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Menasor usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Menasor is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Menasor!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Menasor%2C%20A%20violent%2C%20unstable%20giant%20formed%20by%20five%20sports%20cars%2Ftrucks.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=311',
    stats: { power: 70, speed: 73, bravery: 95 },
    narrative: [
      "A violent, unstable giant formed by five sports cars/trucks.",
      "Menasor is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Stunticons, they make the Combiners squad a big threat."
    ]
  },
  {
    id: 'bruticus',
    name: 'Bruticus',
    faction: 'Decepticon',
    category: 'Combiners' as any,
    identifier: 'Combaticons',
    description: [
      "Look out, it's Bruticus!",
      "A military-themed giant formed by tanks, helicopters, and jets.",
      "This sneaky Decepticon is known as a Combaticons and is a dangerous part of the Combiners squad.",
      "Like all Decepticons, Bruticus wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Bruticus usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Bruticus is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Bruticus!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Bruticus%2C%20A%20military-themed%20giant%20formed%20by%20tanks%2C%20helicopters%2C%20and%20jets.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=312',
    stats: { power: 98, speed: 84, bravery: 97 },
    narrative: [
      "A military-themed giant formed by tanks, helicopters, and jets.",
      "Bruticus is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Combaticons, they make the Combiners squad a big threat."
    ]
  },
  {
    id: 'predaking',
    name: 'Predaking',
    faction: 'Decepticon',
    category: 'Combiners' as any,
    identifier: 'Predacons',
    description: [
      "Look out, it's Predaking!",
      "An incredibly strong gestalt formed by five robotic animals.",
      "This sneaky Decepticon is known as a Predacons and is a dangerous part of the Combiners squad.",
      "Like all Decepticons, Predaking wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Predaking usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Predaking is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Predaking!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Predaking%2C%20An%20incredibly%20strong%20gestalt%20formed%20by%20five%20robotic%20animals.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=313',
    stats: { power: 93, speed: 95, bravery: 94 },
    narrative: [
      "An incredibly strong gestalt formed by five robotic animals.",
      "Predaking is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Predacons, they make the Combiners squad a big threat."
    ]
  },
  {
    id: 'abominus',
    name: 'Abominus',
    faction: 'Decepticon',
    category: 'Combiners' as any,
    identifier: 'Terrorcons',
    description: [
      "Look out, it's Abominus!",
      "A mindless, savage beast-bot made of mythological creatures.",
      "This sneaky Decepticon is known as a Terrorcons and is a dangerous part of the Combiners squad.",
      "Like all Decepticons, Abominus wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Abominus usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Abominus is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Abominus!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Abominus%2C%20A%20mindless%2C%20savage%20beast-bot%20made%20of%20mythological%20creatures.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=314',
    stats: { power: 90, speed: 92, bravery: 93 },
    narrative: [
      "A mindless, savage beast-bot made of mythological creatures.",
      "Abominus is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Terrorcons, they make the Combiners squad a big threat."
    ]
  },
  {
    id: 'astrotrain',
    name: 'Astrotrain',
    faction: 'Decepticon',
    category: 'Multi-Changers' as any,
    identifier: 'Train/Shuttle',
    description: [
      "Look out, it's Astrotrain!",
      "A logistical transport bot with two very large alt-modes.",
      "This sneaky Decepticon is known as a Train/Shuttle and is a dangerous part of the Multi-Changers squad.",
      "Like all Decepticons, Astrotrain wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Astrotrain usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Astrotrain is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Astrotrain!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Astrotrain%2C%20A%20logistical%20transport%20bot%20with%20two%20very%20large%20alt-modes.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=315',
    stats: { power: 94, speed: 77, bravery: 94 },
    narrative: [
      "A logistical transport bot with two very large alt-modes.",
      "Astrotrain is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Train/Shuttle, they make the Multi-Changers squad a big threat."
    ]
  },
  {
    id: 'sixshot',
    name: 'Sixshot',
    faction: 'Decepticon',
    category: 'Multi-Changers' as any,
    identifier: 'Six-Changer',
    description: [
      "Look out, it's Sixshot!",
      "A \"Solo Assault Group\" capable of six distinct forms.",
      "This sneaky Decepticon is known as a Six-Changer and is a dangerous part of the Multi-Changers squad.",
      "Like all Decepticons, Sixshot wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Sixshot usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Sixshot is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Sixshot!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Sixshot%2C%20A%20%22Solo%20Assault%20Group%22%20capable%20of%20six%20distinct%20forms.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=316',
    stats: { power: 91, speed: 85, bravery: 81 },
    narrative: [
      "A \"Solo Assault Group\" capable of six distinct forms.",
      "Sixshot is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Six-Changer, they make the Multi-Changers squad a big threat."
    ]
  },
  {
    id: 'overlord',
    name: 'Overlord',
    faction: 'Decepticon',
    category: 'Multi-Changers' as any,
    identifier: 'Jet & Tank',
    description: [
      "Look out, it's Overlord!",
      "A \"Phase Sixer\" made of two vehicles merging into one bot.",
      "This sneaky Decepticon is known as a Jet & Tank and is a dangerous part of the Multi-Changers squad.",
      "Like all Decepticons, Overlord wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Overlord usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Overlord is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Overlord!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Overlord%2C%20A%20%22Phase%20Sixer%22%20made%20of%20two%20vehicles%20merging%20into%20one%20bot.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=317',
    stats: { power: 79, speed: 84, bravery: 85 },
    narrative: [
      "A \"Phase Sixer\" made of two vehicles merging into one bot.",
      "Overlord is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Jet & Tank, they make the Multi-Changers squad a big threat."
    ]
  },
  {
    id: 'scorponok',
    name: 'Scorponok',
    faction: 'Decepticon',
    category: 'Bonded Units' as any,
    identifier: 'Headmaster',
    description: [
      "Look out, it's Scorponok!",
      "A massive warlord bonded to Lord Zarak.",
      "This sneaky Decepticon is known as a Headmaster and is a dangerous part of the Bonded Units squad.",
      "Like all Decepticons, Scorponok wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Scorponok usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Scorponok is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Scorponok!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Scorponok%2C%20A%20massive%20warlord%20bonded%20to%20Lord%20Zarak.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=318',
    stats: { power: 77, speed: 84, bravery: 85 },
    narrative: [
      "A massive warlord bonded to Lord Zarak.",
      "Scorponok is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Headmaster, they make the Bonded Units squad a big threat."
    ]
  },
  {
    id: 'cyclonus',
    name: 'Cyclonus',
    faction: 'Decepticon',
    category: 'Bonded Units' as any,
    identifier: 'Targetmaster',
    description: [
      "Look out, it's Cyclonus!",
      "Galvatron’s second-in-command, bonded to a sentient gun.",
      "This sneaky Decepticon is known as a Targetmaster and is a dangerous part of the Bonded Units squad.",
      "Like all Decepticons, Cyclonus wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Cyclonus usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Cyclonus is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Cyclonus!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Cyclonus%2C%20Galvatron%E2%80%99s%20second-in-command%2C%20bonded%20to%20a%20sentient%20gun.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=319',
    stats: { power: 71, speed: 71, bravery: 89 },
    narrative: [
      "Galvatron’s second-in-command, bonded to a sentient gun.",
      "Cyclonus is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Targetmaster, they make the Bonded Units squad a big threat."
    ]
  },
  {
    id: 'mindwipe',
    name: 'Mindwipe',
    faction: 'Decepticon',
    category: 'Bonded Units' as any,
    identifier: 'Headmaster',
    description: [
      "Look out, it's Mindwipe!",
      "A hypnotic vampire-bot bonded to a separate pilot.",
      "This sneaky Decepticon is known as a Headmaster and is a dangerous part of the Bonded Units squad.",
      "Like all Decepticons, Mindwipe wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Mindwipe usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Mindwipe is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Mindwipe!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Mindwipe%2C%20A%20hypnotic%20vampire-bot%20bonded%20to%20a%20separate%20pilot.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=320',
    stats: { power: 83, speed: 79, bravery: 84 },
    narrative: [
      "A hypnotic vampire-bot bonded to a separate pilot.",
      "Mindwipe is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Headmaster, they make the Bonded Units squad a big threat."
    ]
  },
  {
    id: 'trypticon',
    name: 'Trypticon',
    faction: 'Decepticon',
    category: 'Titans' as any,
    identifier: 'The Battle Station',
    description: [
      "Look out, it's Trypticon!",
      "A dinosaur-like engine of destruction that turns into a city.",
      "This sneaky Decepticon is known as a The Battle Station and is a dangerous part of the Titans squad.",
      "Like all Decepticons, Trypticon wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Trypticon usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Trypticon is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Trypticon!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Trypticon%2C%20A%20dinosaur-like%20engine%20of%20destruction%20that%20turns%20into%20a%20city.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=321',
    stats: { power: 98, speed: 91, bravery: 87 },
    narrative: [
      "A dinosaur-like engine of destruction that turns into a city.",
      "Trypticon is a powerful villain who fights for the Decepticons.",
      "With the special skills of a The Battle Station, they make the Titans squad a big threat."
    ]
  },
  {
    id: 'the-nemesis',
    name: 'The Nemesis',
    faction: 'Decepticon',
    category: 'Titans' as any,
    identifier: 'Ship/Titan',
    description: [
      "Look out, it's The Nemesis!",
      "The primary Decepticon warship that can transform into a bot.",
      "This sneaky Decepticon is known as a Ship/Titan and is a dangerous part of the Titans squad.",
      "Like all Decepticons, The Nemesis wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, The Nemesis usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, The Nemesis is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with The Nemesis!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20The%20Nemesis%2C%20The%20primary%20Decepticon%20warship%20that%20can%20transform%20into%20a%20bot.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=322',
    stats: { power: 78, speed: 98, bravery: 96 },
    narrative: [
      "The primary Decepticon warship that can transform into a bot.",
      "The Nemesis is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Ship/Titan, they make the Titans squad a big threat."
    ]
  },
  {
    id: 'tidal-wave',
    name: 'Tidal Wave',
    faction: 'Decepticon',
    category: 'Titans' as any,
    identifier: 'Battleship/Titan',
    description: [
      "Look out, it's Tidal Wave!",
      "A massive naval vessel that splits into three components.",
      "This sneaky Decepticon is known as a Battleship/Titan and is a dangerous part of the Titans squad.",
      "Like all Decepticons, Tidal Wave wants to defeat the Autobots and take over the galaxy.",
      "With their incredible powers and awesome alternate modes, they can cause a lot of trouble on the battlefield.",
      "When the mission gets tough, Tidal Wave usually tries to come up with a tricky plan.",
      "They have a strong metal body and a super-smart computer brain to help figure out the best way to win.",
      "Even when outmatched, Tidal Wave is always looking for a way to get the upper hand.",
      "You always have to watch out when this tricky villain is around.",
      "Get ready for a super exciting adventure with Tidal Wave!"
    ],
    imageUrl: 'https://image.pollinations.ai/prompt/Transformers%20Tidal%20Wave%2C%20A%20massive%20naval%20vessel%20that%20splits%20into%20three%20components.%2C%20Decepticon%2C%20extremely%20detailed%20colorful%20Saturday%20morning%20cartoon%2C%20youth%20TV%20animation%2C%20vibrant%20colors%2C%20nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=323',
    stats: { power: 99, speed: 70, bravery: 99 },
    narrative: [
      "A massive naval vessel that splits into three components.",
      "Tidal Wave is a powerful villain who fights for the Decepticons.",
      "With the special skills of a Battleship/Titan, they make the Titans squad a big threat."
    ]
  }
];
