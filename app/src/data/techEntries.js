const techEntries = [
  {
  title: "Compact Disc",
  slug: "compact-disc",
  image: "/images/Compact_Disc_image.png",
  shortDescription: "The shiny circle that replaced cassettes. CDs promised perfect sound forever and lived in our glove compartments and towers of jewel cases.",
  longDescription:
    "The Compact Disc (CD) revolutionized how we consumed music in the 80s and 90s. Promising 'perfect sound forever', CDs were the gold standard for audio quality and collectibility — until MP3s and streaming shuffled in. If you ever made a mix CD for someone, you understand its emotional power.\n\nIntroduced commercially in 1982 by Philips and Sony, the Compact Disc offered digital audio storage with far better quality than analog formats like cassette tapes or vinyl records. CDs quickly became the dominant music format throughout the 1980s and 1990s. As digital downloads and streaming services emerged in the 2000s, CD sales declined sharply. Despite this, CDs remain a popular physical format for collectors and audiophiles."
  ,
  category: "Media"
},
  {
  title: "Floppy Disk",
  slug: "floppy-disk",
  image: "/images/Floppy_disk_bg.png",
  shortDescription: "The OG save icon. Stored a whole 1.44MB — just enough for a document and maybe a low-res JPEG if you were lucky.",
  longDescription:
    "Once the king of file transfers, the floppy disk held a mighty 1.44MB — enough for a document and maybe a pixel or two. It’s still the universal symbol for 'save,' even if most people under 20 have never used one. Blow on it before inserting, just to be safe.\n\nThe 3.5-inch floppy disk was introduced in the mid-1980s, primarily by Sony. It became the dominant format for portable storage in personal computing for over a decade. Despite its limited storage capacity by today’s standards, it revolutionized file sharing and backup for everyday users. The rise of USB flash drives and cloud storage eventually rendered floppy disks obsolete by the mid-2000s."
  ,
  category: "Storage"
},
  {
  title: "LaserDisc",
  slug: "laserdisc",
  image: "/images/laser_disc-nbg-preview.png",
  shortDescription: "The VHS-sized disc that tried to be the future of home video. Massive in size and ambition, it never quite found its audience.",
  longDescription:
    "LaserDiscs were the size of vinyl records but promised the clarity of digital video. Though they never achieved mass-market success due to size, cost, and lack of recording capability, they paved the way for DVDs and hold a cult status among collectors and cinephiles.\n\nIntroduced in 1978 by MCA and Philips, LaserDisc was the first optical disc storage format for commercial video. While it offered superior video and audio quality compared to VHS, its high cost, bulky size, and limited recording functionality kept it from widespread adoption. LaserDisc remained popular among enthusiasts until DVDs took over in the late 1990s. Today, it remains a niche collectible among home video fans."
  ,
  category: "Media"
},
  {
  title: "Napster",
  slug: "napster",
  image: "/images/napster_no_bg.png",
  shortDescription: "The outlaw king of early digital music. Before Spotify, there was Napster — wild, free, and sued into oblivion.",
  longDescription:
    "Napster changed the game forever — not by making music, but by making it free. The peer-to-peer file sharing service gave us access to every song imaginable (legally questionable, of course). It sparked lawsuits, shaped the future of digital media, and turned 'MP3' into a household word. Napster didn’t last, but its impact echoes in every stream.\n\nNapster was launched in 1999 by Shawn Fanning and Sean Parker as one of the first peer-to-peer (P2P) file sharing networks focused on music. Its rapid rise in popularity led to significant legal battles with the recording industry and artists such as Metallica. The original Napster was forced to shut down in 2001. However, its influence directly shaped the development of modern streaming platforms like Spotify and Apple Music."
  ,
  category: "Media"
},
  {
  title: "Pager",
  slug: "pager",
  image: "/images/motorola2bpager-removebg.png",
  shortDescription: "The original pocket ping. Before texts, you got buzzed — and had to find a payphone.",
  longDescription:
    "Beepers were the lifeline of the 90s — essential for doctors, dealers, and dramatic TV moments. They couldn’t send messages, but their little buzz meant something important was waiting. If you were really cool, yours had a translucent case.\n\nPagers (or beepers) were introduced in the 1950s, but their widespread popularity came in the 1980s and 1990s. Operating on radio frequencies, they allowed one-way or limited two-way messaging. With the rise of mobile phones offering instant voice and text communication, pager usage dramatically declined by the 2000s, although some industries like healthcare still use them today."
  ,
  category: "Communication"
},
  {
  title: "PalmPilot",
  slug: "palmpilot",
  image: "/images/Palm-removebg.png",
  shortDescription: "The godfather of your smartphone. A stylus, a screen, and more scheduled meetings than a Fortune 500 executive.",
  longDescription:
    "PalmPilots were personal digital assistants before the term was cool. You wrote in Graffiti (yes, a made-up alphabet), managed your contacts like a boss, and felt like you were living in the future. Until, of course, phones learned to do it all better.\n\nReleased in 1996 by Palm, Inc., the PalmPilot ran on Palm OS and featured a monochrome touchscreen, simple apps for calendar, contacts, tasks, and a stylus-based input system. It became widely popular with business professionals throughout the late 1990s and early 2000s before being rendered obsolete by smartphones. Today, PalmPilots are a nostalgic symbol of early mobile computing."
  ,
  category: "Personal Computing"
},
  {
  title: "Zip Drive",
  slug: "zip-drive",
  image: "/images/zip_drive-removebg.png",
  shortDescription: "Like a floppy disk, but thick. Iomega’s big idea stored a whopping 100MB — until it clicked its way to death.",
  longDescription:
    "The Zip Drive was supposed to save us from floppy limitations. It gave us triple-digit storage and a unique sound that struck fear into hearts when it started clicking. It burned bright, then got smoked by USB sticks and cloud storage.\n\nReleased in 1994 by Iomega, the Zip Drive initially offered 100MB of storage, later expanding to 250MB and 750MB models. It was popular for backups and large file transfers in the late 90s. However, hardware failures (known as the 'click of death') and the rise of USB flash drives made the Zip Drive obsolete by the early 2000s."
  ,
  category: "Storage"
},
  {
  title: "CRT Monitor",
  slug: "crt-monitor",
  image: "/images/crt_monitor-removebg.png",
  shortDescription: "A desk-dominating beast that doubled as a space heater. You didn’t just use it — you braced for it.",
  longDescription:
    "The cathode ray tube monitor wasn’t just a screen — it was a statement. Heavy, bulky, and prone to static shock, CRTs were your gateway to Minesweeper, AOL chat, and your first Geocities site. Flat screens may be sleek, but they’ll never have that *thunk*.\n\nCRT (Cathode Ray Tube) monitors became mainstream in the 1980s and 1990s as personal computing spread to homes and offices. These displays offered reliable, sharp visuals for the time, but were bulky, heavy, and consumed significant power. The early 2000s saw a shift toward LCD and LED monitors, quickly replacing CRT technology due to better image quality, lower weight, and energy efficiency."
  ,
  category: "Computer Hardware"
},
  {
  title: "Dial-up Modem",
  slug: "dial-up-modem",
  image: "/images/dial_upmodem-removebg.png",
  shortDescription: "That screechy symphony meant you were finally online. Just don’t let anyone pick up the phone.",
  longDescription:
    "Before Wi-Fi, the dial-up modem was your noisy handshake with the internet. It was a ritual — the chirps, the whines, and the thrill of a 56kbps connection. Bonus nostalgia points if you remember yelling, ‘I’m online!’ so no one picked up the landline.\n\nDial-up modems became popular in the early 1990s, allowing personal computers to connect to the internet over standard telephone lines. Speeds started at 14.4 kbps and eventually maxed out at 56 kbps. Dial-up ruled home internet access until broadband technologies like DSL and cable took over in the early 2000s, offering faster, always-on connectivity."
  ,
  category: "Communication"
},
  {
  title: "Dot Matrix Printer",
  slug: "dot-matrix-printer",
  image: "/images/dot_matrix_printer-removebg-preview.png",
  shortDescription: "Loud, slow, and unstoppable. You knew it was working by the screech.",
  longDescription:
    "The dot matrix printer was a relic of clattering progress. With its perforated paper edges and typewriter-like sound, it powered offices and computer labs through the 80s and 90s. Not pretty, not fast — but dependable. And let’s be honest: that sound is burned into your brain forever.\n\nDot matrix printers first gained popularity in the 1970s and 1980s, offering affordable, reliable printing for both home and business users. These printers used impact pins to strike ink ribbons, creating characters on continuous-feed paper. Despite their noise, they were known for durability and low-cost operation. They were largely replaced by inkjet and laser printers by the 2000s."
  ,
  category: "Computer Hardware"
},
  {
  title: "MiniDV Camcorder",
  slug: "minidv-camcorder",
  image: "/images/minidv_cam-removebg-preview.png",
  shortDescription: "A pocket-sized time machine. MiniDV tapes captured your birthday parties, backyard stunts, and everything in between — with glorious grain and handheld charm.",
  longDescription:
    "Before smartphones and DSLR vloggers, there was the MiniDV camcorder. Small tapes, big dreams. Whether you were filming a birthday party or your first skate trick, this device captured moments in glorious 480p. Bonus points if you labeled each tape with a Sharpie.\n\nMiniDV was introduced in 1995 as a digital video cassette format. The compact size, combined with digital recording quality, made MiniDV camcorders a popular choice for consumers and amateur filmmakers throughout the late 90s and early 2000s. MiniDV eventually lost ground to hard drive, SD card, and solid-state recording formats as digital camcorders advanced."
  ,
  category: "Media"
},
  {
  title: "Handspring Visor",
  slug: "handspring-visor",
  image: "/images/handpsring_visor-removebg-preview.png",
  shortDescription: "PalmPilot’s wild cousin — with a slot for modules no one used.",
  longDescription:
    "Born from former Palm engineers, the Handspring Visor ran on Palm OS but aimed to be more: MP3 player? Camera? Game Boy rival? Simply plug in a Springboard module. It was ahead of its time, but sometimes being early means being forgotten.\n\nThe Handspring Visor was released in 1999 by Handspring, Inc. as a PDA running Palm OS. Its unique feature was the Springboard expansion slot, which allowed users to add modules for functionality like cameras, MP3 players, and GPS. Though innovative, its short commercial lifespan ended by the early 2000s as Palm and other competitors absorbed the PDA market."
  ,
  category: "Personal Computing"
},
  {
  title: "Betamax",
  slug: "betamax",
  image: "/images/betamax-removebg-preview.png",
  shortDescription: "A technical marvel that couldn’t outmaneuver VHS. Sharper quality, loyal fans — but still the underdog in the home video showdown of the '80s.",
  longDescription:
    "Betamax was Sony’s bold foray into home video — better quality than VHS, but worse marketing. It became a textbook example of how the best tech doesn’t always win. Collectors still argue its superiority, but for most, it's a trivia answer.\n\nIntroduced by Sony in 1975, Betamax offered superior video quality compared to its rival, VHS. However, VHS quickly gained market dominance due to longer recording times, cheaper licensing, and broader manufacturer support. Betamax officially ceased production in 2002 but remains an iconic example of a format war where technical quality lost to market factors."
  ,
  category: "Media"
},
  {
  title: "Game Boy Printer",
  slug: "game-boy-printer",
  image: "/images/Game_Boy_Printer-removebg-preview.png",
  shortDescription: "Tiny thermal prints of pixelated Pokémon — if the batteries didn’t die first.",
  longDescription:
    "Bundled with the Game Boy Camera, the Game Boy Printer let you print grayscale selfies, high scores, or pixel art stickers. It was slow, fuzzy, and absolutely charming. Just don't expect the thermal paper to survive more than a few summers.\n\nThe Game Boy Printer was released by Nintendo in 1998 as an accessory for the original Game Boy. It used thermal printing technology to create small stickers and grayscale images captured by the Game Boy Camera. While limited in function, it became a beloved novelty among Nintendo fans. The device was discontinued in the early 2000s and is now a collector's item for retro gaming enthusiasts."
  ,
  category: "Gaming"
}
];

export { techEntries };