const techEntries = [
  {
  title: "Compact Disc",
  slug: "compact-disc",
  image: "/images/Compact_Disc_image.png",
  shortDescription: "The shiny circle that ruled the 90s. Perfect sound forever — until you scratched it just a little.",
  longDescription:
    "The Compact Disc (CD) brought digital dazzle to music lovers in the 80s and 90s. It promised “perfect sound forever” — and we believed it, until that one skip ruined your favorite track. If you ever made a mix CD for someone, you knew what love (and frustration) felt like.\n\nCDs hit shelves in 1982 thanks to Philips and Sony, and quickly became the top dog for music storage, knocking out cassettes and vinyl with their crisp digital quality. But once MP3s and streaming rolled in, the towers of jewel cases started collecting dust. Still, for collectors and audiophiles, CDs never really left the stage."
  ,
  category: "Media"
},
  {
  title: "Floppy Disk",
  slug: "floppy-disk",
  image: "/images/Floppy_disk_bg.png",
  shortDescription: "The OG save icon. 1.44MB of pure, unreliable magic — and yes, blowing on it *felt* like it helped.",
  longDescription:
    "The floppy disk was your file's first suitcase. You crammed essays, spreadsheets, and pixelated glory into its humble 1.44MB shell. Before cloud storage and thumb drives, this was how we got files from one place to another — slowly, and with a prayer.\n\nPopularized in the mid-80s by Sony, the 3.5-inch floppy reigned supreme in the personal computing world. Sure, it barely held a photo by today’s standards, but it revolutionized how we backed up and shared data. Its legacy? Immortality as the “Save” icon."
  ,
  category: "Storage"
},
  {
  title: "LaserDisc",
  slug: "laserdisc",
  image: "/images/laser_disc-nbg-preview.png",
  shortDescription: "A dinner-plate-sized disc with dreams of being the future of home video. Mostly just scared your VHS player.",
  longDescription:
    "LaserDiscs looked like vinyls, played like dreams (if you had the setup), and cost a small fortune. They were ahead of their time in quality, but also ahead of their time in being wildly impractical.\n\nReleased in 1978, LaserDisc offered sharper video and better sound than VHS — but couldn’t record, was gigantic, and cost more than your VCR. Still, for film buffs and collectors, it holds a golden place in cinema tech history. Just don’t drop one on your foot."
  ,
  category: "Media"
},
  {
  title: "Napster",
  slug: "napster",
  image: "/images/napster_no_bg.png",
  shortDescription: "The rebel that gave the world free music — and gave Metallica a legal headache.",
  longDescription:
    "Napster flipped the music industry on its head. Suddenly, every song you ever wanted was a click away — and maybe a virus or two. It made MP3s mainstream, freaked out record labels, and turned your hard drive into a jukebox.\n\nLaunched in 1999 by two college kids, Napster pioneered peer-to-peer music sharing. It didn’t last (thanks to lawsuits), but its ripple effect changed how we discover, consume, and fight over digital media forever."
  ,
  category: "Media"
},
  {
  title: "Pager",
  slug: "pager",
  image: "/images/motorola2bpager-removebg.png",
  shortDescription: "The original pocket ping. Before texts, your pocket buzzed and you had to hunt down a payphone — usually with exact change.",
  longDescription:
    "Beepers were everywhere in the 90s — clipped to belts, buried in backpacks, and buzzing at the worst possible times. Doctors had them, dealers had them, and anyone trying to look important had one too. They didn’t send messages, but that little buzz meant someone wanted your attention. Bonus cool points if yours had a translucent case.\n\nPagers (or beepers) have been around since the 1950s, but they hit their stride in the 80s and 90s. Using radio signals to deliver simple numeric (and later text) messages, they were the go-to for quick communication before cell phones took over. While most of us left them behind in the early 2000s, some places — especially hospitals — still keep them buzzing."
  ,
  category: "Communication"
},
  {
  title: "PalmPilot",
  slug: "palmpilot",
  image: "/images/Palm-removebg.png",
  shortDescription: "The smartphone’s nerdy ancestor. Stylus-powered, suit-approved, and completely revolutionary — for a minute.",
  longDescription:
    "PalmPilots were your pocket brain in the late 90s. You wrote in Graffiti (a stylus-only alphabet), tapped through your calendar, and felt like a digital wizard in a sea of paper planners.\n\nDebuting in 1996, Palm’s little PDA ran simple apps for contacts, notes, and tasks — all without a keyboard. Business folks loved it. Techies loved it. But then phones got smarter and PalmPilots became the digital dinosaur we still remember fondly."
  ,
  category: "Personal Computing"
},
  {
  title: "Zip Drive",
  slug: "zip-drive",
  image: "/images/zip_drive-removebg.png",
  shortDescription: "A chunky upgrade to the floppy. Bigger, louder, and prone to dying dramatically.",
  longDescription:
    "The Zip Drive was the next big thing in the late 90s — until it wasn’t. With up to 750MB of storage, it blew floppies out of the water. But that dreaded “click of death”? Unforgettable.\n\nIntroduced by Iomega in 1994, Zip Drives were perfect for big files and backups — until flash drives swooped in. Today, they live on only in IT war stories and dusty desk drawers."
  ,
  category: "Storage"
},
  {
  title: "CRT Monitor",
  slug: "crt-monitor",
  image: "/images/crt_monitor-removebg.png",
  shortDescription: "Built like a tank, glowed like a beacon. Your first screen probably weighed more than your whole PC now.",
  longDescription:
    "The CRT monitor didn’t just display — it dominated. These bulky beasts warmed your room, zapped your fingers, and delivered hours of pixelated glory.\n\nMainstream from the 80s through the early 2000s, CRTs gave us our first gaming wins, MS Paint masterpieces, and shaky webcam chats. LCDs may be sleeker, but CRTs were *loud* in every way."
  ,
  category: "Computer Hardware"
},
  {
  title: "Dial-up Modem",
  slug: "dial-up-modem",
  image: "/images/dial_upmodem-removebg.png",
  shortDescription: "The screech of the internet being born. Took minutes to connect — and dropped the moment someone picked up the phone.",
  longDescription:
    "Dial-up was a symphony of shrieks and hope. Every online journey started with a handshake of static and ended with “Mom, hang up the phone!”\n\nDominant in the 90s, these modems used phone lines to connect you at a blazing 56kbps — fast enough for email, slow enough for everything else. They walked so broadband could run."
  ,
  category: "Communication"
},
  {
  title: "Dot Matrix Printer",
  slug: "dot-matrix-printer",
  image: "/images/dot_matrix_printer-removebg-preview.png",
  shortDescription: "A screeching dinosaur of the office world. Reliable, loud, and still somehow not extinct.",
  longDescription:
    "Dot matrix printers weren’t elegant, but they got the job done. From endless reports to banner-sized birthday signs, these clunky machines screamed productivity.\n\nWith their pin-based printing and feed-hole paper, they were the workhorses of the 80s and 90s. Loud, slow, and still alive in some back offices. Respect."
  ,
  category: "Computer Hardware"
},
  {
  title: "MiniDV Camcorder",
  slug: "minidv-camcorder",
  image: "/images/minidv_cam-removebg-preview.png",
  shortDescription: "Your grainy gateway to stardom. If it fits in your palm and records in 480p, it’s MiniDV magic.",
  longDescription:
    "Before phones filmed everything, the MiniDV camcorder captured our skate tricks, school plays, and cringey teen monologues — one tape at a time.\n\nIntroduced in 1995, it offered digital video in a tiny cassette format. MiniDV was king until memory cards dethroned it. But for a brief moment, everyone was a filmmaker."
  ,
  category: "Media"
},
  {
  title: "Handspring Visor",
  slug: "handspring-visor",
  image: "/images/handpsring_visor-removebg-preview.png",
  shortDescription: "PalmPilot’s weirder sibling — complete with add-ons you never used but definitely bragged about.",
  longDescription:
    "The Handspring Visor wanted to do it all. Add a camera? MP3 player? GPS? Just plug in a Springboard module and pretend it worked flawlessly.\n\nReleased in 1999, it was a more playful, expandable take on Palm OS devices. Too quirky to last, but way too fun to forget."
  ,
  category: "Personal Computing"
},
  {
  title: "Betamax",
  slug: "betamax",
  image: "/images/betamax-removebg-preview.png",
  shortDescription: "The underdog in the great VHS war. Better quality, worse luck.",
  longDescription:
    "Betamax was technically superior — sharper picture, less grain, cooler name. But VHS had better marketing and longer recording time. And so, history was written by the winners.\n\nIntroduced by Sony in 1975, Betamax lost the format war but earned cult status. It’s the Rocky of home video: didn’t win, but still got a standing ovation."
  ,
  category: "Media"
},
  {
  title: "Game Boy Printer",
  slug: "game-boy-printer",
  image: "/images/Game_Boy_Printer-removebg-preview.png",
  shortDescription: "Pixelated selfies on sticky paper — if your AA batteries didn’t give up halfway through.",
  longDescription:
    "The Game Boy Printer turned your grainy camera snaps into tiny thermal masterpieces. It was slow, silly, and perfect.\n\nReleased in 1998 alongside the Game Boy Camera, it let kids print grayscale pixel portraits, memes, and high scores before selfies were even a thing. The paper faded fast, but the memories stuck."
  ,
  category: "Gaming"
}
];

export { techEntries };