import { God } from './god';

/** creo una serie di oggetti da far visualizzare in home, separo i dati dalla logica **/
export const GODS: God[] = [
  { id: 1, name: 'Boccob', pic: 'boccob.jpg', epithet: 'The god of magic', description: 'The god of magic, Boccob, is neutral. His titles include the Uncaring, Lord of All Magics, and Archmage of the Deities. Boccob is a distant deity who promotes no special agenda in the world of mortals. As a god of magic and knowledge, he is worshiped by wizards, sorcerers, and sages. The domains he is associated with are Knowledge, Magic, and Trickery. The quarterstaff is his favored weapon.'},
  { id: 2, name: 'Corellon Larethian', pic: 'corellon_larethian.jpg', epithet: 'The god of elves', description: 'The god of elves, Corellon Larethian, is chaotic good. He is known as the Creator of the Elves, the Protector, Protector and Preserver of Life, and Ruler of All Elves. Corellon Larethian is the creator and protector of the elf race. He governs those things held in highest esteem among elves, such as magic, music, arts, crafts, poetry, and warfare. Elves, half-elves, and bards worship him. The domains Illus. by S. Wood he is associated with are Chaos, Good, Protection, and War. His favored weapon is the longsword. Gruumsh is his nemesis, and it is because of Corellon’s battle prowess that Gruumsh is called “One-Eye.”'},
  { id: 3, name: 'Ehlonna', pic: 'ehlonna.jpg', epithet: 'The goddess of the woodlands', description: 'Ehlonna, the goddess of the woodlands, is neutral good. Her most commonly encountered title is Ehlonna of the Forests. Ehlonna watches over all good people who live in the forest, love the woodlands, or make their livelihood there. She is pictured sometimes as an elf and sometimes as a human. She is especially close to elves, gnomes, half-elves, and halflings. She is also worshiped by rangers and some druids. The domains she is associated with are Animal, Good, Plant, and Sun. Her favored weapon is the longbow. '},
  { id: 4, name: 'Erythnul', pic: 'erythnul.jpg', epithet: 'The god of slaughter', description: 'The god of slaughter, Erythnul, is chaotic evil. His title is the Many. Erythnul delights in panic and slaughter. In civilized lands, his followers (including evil fighters, barbarians, and rogues) form small, criminal cults. In savage lands, evil barbarians, gnolls, bugbears, ogres, and trolls commonly worship him. The domains he is associated with are Chaos, Evil, Trickery, and War. His favored weapon is a morningstar with a blunt stone head.'},
  { id: 5, name: 'Fharlanghn', pic: 'fharlanghn.jpg', epithet: 'The god of roads', description: 'Fharlanghn, the god of roads, is neutral. His title is Dweller on the Horizon. Fharlanghn’s wayside shrines are common on well-used roads, for he is the god of travel, roads, distance, and horizons. Bards, other wandering adventurers, and merchants favor Fharlanghn. The domains he is associated with are Luck, Protection, and Travel. The quarterstaff is his favored weapon.'},
  { id: 6, name: 'Garl Glittergold', pic: 'garl-glittergold.jpg', epithet: 'The god of gnomes', description: 'The god of gnomes, Garl Glittergold, is neutral good. He is known as the Joker, the Watchful Protector, the Priceless Gem, and the Sparkling Wit. Garl Glittergold discovered the gnomes and led them into the world. Since then, he has been their protector. He governs humor, wit, gemcutting, and jewelrymaking. The domains he is associated with are Good, Protection, and Trickery. Garl’s favored weapon is the battleaxe. He is renowned for the jokes and pranks he pulls on other deities, though not all his victims laugh off his jests. Garl once collapsed the cavern of Kurtulmak, the god of the kobolds. Since then, the two deities have been sworn enemies.'},
  { id: 7, name: 'Gruumsh', pic: 'gruumsh.jpg', epithet: 'Chief god of the orcs', description: 'Gruumsh, chief god of the orcs, is chaotic evil. His titles are One-Eye and He-- Who-Never-Sleeps. Gruumsh calls on his followers to be strong, to cull the weak from their numbers, and to take all the territory that Gruumsh thinks is rightfully theirs (which is almost everything). The domains he is associated with are Chaos, Evil, Strength, and War. Gruumsh’s favored weapon is the spear. He harbors a special hatred for Corellon Larethian, Moradin, and their followers. In ages past, Corellon Larethian put out Gruumsh’s left eye in a fight.'},
  { id: 8, name: 'Heironeous', pic: 'heironeous.jpg', epithet: 'The god of valor', description: 'The god of valor, Heironeous, is lawful good. His title is the Invincible. Heironeous promotes justice, valor, chivalry, and honor. The domains he is associated with are Good, Law, and War. His favored weapon is the longsword, and he is worshiped by paladins, good fighters, and good monks. His archenemy is Hextor, his half-brother.'},
  { id: 9, name: 'Hextor', pic: 'hextor.jpg', epithet: 'The god of tyranny', description: 'The god of tyranny, Hextor, is lawful evil. His titles are Champion of Evil, Herald of Hell, and Scourge of Battle. Hextor is the six-armed god of war, conflict, and destruction. Hextor’s worshipers include evil fighters and monks. The domains he is associated with are Destruction, Evil, Law, and War. His favored weapon is the flail. He sends his followers to commit evil, and their special purpose is to overthrow the followers of his half-brother Heironeous wherever they are found.'},
  { id: 10, name: 'Kord', pic: 'kord.jpg', epithet: 'The god of strength', description: 'Kord, the god of strength, is chaotic good. He is known as the Brawler. Kord is the patron of athletes, especially wrestlers. His worshipers include good fighters, barbarians, and rogues. The domains he is associated with are Chaos, Good, Luck, and Strength. Kord’s favored weapon is the greatsword.'},
  { id: 11, name: 'Moradin', pic: 'moradin.jpg', epithet: 'The god of dwarves', description: 'The god of dwarves, Moradin, is lawful good. His titles include the Soul Forger, Dwarffather, the All-Father, and the Creator. Moradin forged the first dwarves out of metal and gems and breathed life into them. He governs the arts and sciences of the dwarves: smithing, metalworking, engineering, and war. The domains he is associated with are Earth, Good, Law, and Protection. His favored weapon is the warhammer.'},
  { id: 12, name: 'Nerull', pic: 'nerull.jpg', epithet: 'The god of death', description: 'The god of death, Nerull, is neutral evil. He is known as the Reaper, the Foe of All Good, Hater of Life, Bringer of Darkness, King of All Gloom, and Reaper of Flesh. Nerull is the patron of those who seek the greatest evil for their own enjoyment or gain. The domains he is associated with are Death, Evil, and Trickery. His worshipers, who include evil necromancers and rogues, depict him as an almost skeletal cloaked figure who bears a scythe, his favored weapon.'},
  { id: 13, name: 'Obad-Hai', pic: 'obad-hai.jpg', epithet: 'The god of nature', description: 'Obad-Hai, the god of nature, is neutral. He is known as the Shalm. Obad-Hai rules nature and the wilderness, and he is a friend to all who live in harmony with the natural world. Barbarians, rangers, and druids sometimes worship him. The domains he is associated with are Air, Animal, Earth, Fire, Plant, and Water. Because Obad-Hai strictly adheres to neutrality, he is a rival of Ehlonna. Obad-Hai plays a shalm (a double-reed woodwind musical instrument, also spelled “shawm”) and takes his title from this instrument. His favored weapon is the quarterstaff.'},
  { id: 14, name: 'Olidammara', pic: 'olidammara.jpg', epithet: 'The god of rogues', description: 'The god of rogues, Olidammara, is chaotic neutral. His title is the Laughing Rogue. Olidammara delights in wine, women, and song. He is a vagabond, a prankster, and a master of disguise. His temples are few, but many people are willing to raise a glass in his honor. Rogues and bards are frequently among his worshipers. The domains he is associated with are Chaos, Luck, and Trickery. The rapier is his favored weapon.'},
  { id: 15, name: 'Pelor', pic: 'pelor.jpg', epithet: 'The god of the sun', description: 'Pelor, god of the sun, is neutral good. His title is the Shining One. Pelor is the creator of many good things, a supporter of those in need, and an adversary of all that is evil. He is the most commonly worshiped deity among ordinary humans, and his priests are well received wherever they go. Rangers and bards are found among his worshipers. The domains he is associated with are Good, Healing, Strength, and Sun. The mace is his favored weapon.'},
  { id: 16, name: 'St. Cuthbert', pic: 'st-cuthbert.jpg', epithet: 'The god of retribution', description: 'The god of retribution, St. Cuthbert, is lawful neutral. He is known as St. Cuthbert of the Cudgel. St. Cuthbert exacts revenge and just punishment on those who transgress the law. Because evil creatures more commonly and flagrantly violate laws than good creatures do, St. Cuthbert favors good over evil, though he is not good himself. (His clerics cannot be evil.) The domains he is associated with are Destruction, Law, Protection, and Strength. His favored weapon is the mace.'},
  { id: 17, name: 'Vecna', pic: 'vecna.jpg', epithet: 'The god of secrets', description: 'Vecna, the god of secrets, is neutral evil. He is known as the Maimed Lord, the Whispered One, and the Master of All That Is Secret and Hidden. Vecna rules that which is not meant to be known and that which people wish to keep secret. The domains he is associated with are Evil, Knowledge, and Magic. He usually appears as a lich who is missing his left hand and left eye. He lost his hand and eye in a fight with his traitorous lieutenant, Kas. Vecna’s favored weapon is the dagger.'},
  { id: 18, name: 'Wee Jas', pic: 'wee-jas.jpg', epithet: 'The goddess of death and magic', description: 'Wee Jas, the goddess of death and magic, is lawful neutral. Her titles are Witch Goddess, Ruby Sorceress, Stern Lady, and Death’s Guardian. Wee Jas is a demanding goddess who expects obedience from her followers. Her temples are few and far between, but she counts many powerful sorcerers and wizards (especially necromancers) among her worshipers. The domains she is associated with are Death, Law, and Magic. Her favored weapon is the dagger.'},
  { id: 19, name: 'Yondalla', pic: 'yondalla.jpg', epithet: 'The goddess of halflings', description: 'The goddess of halflings, Yondalla, is lawful good. Her titles include the Protector and Provider, the Nurturing Matriarch, and the Blessed One. Yondalla is the creator and protector of the halfling race. She espouses harmony within the halfling race and stalwart defense against their enemies. Her followers hope to lead safe, prosperous lives by following her guidance. The domains she is associated with are Good, Law, and Protection. The short sword is her favored weapon.'},
];
