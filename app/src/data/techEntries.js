const techEntries = [
  {
    title: "Compact Disc",
    slug: "compact-disc",
    image: "/images/Compact_Disc_image.png",
    shortDescription: "The shiny circle that replaced cassettes. CDs promised perfect sound forever and lived in our glove compartments and towers of jewel cases.",
    longDescription:
      "The Compact Disc (CD) revolutionized how we consumed music in the 80s and 90s. Promising 'perfect sound forever,' CDs were the gold standard for audio quality and collectibility — until MP3s and streaming shuffled in. If you ever made a mix CD for someone, you understand its emotional power.",
    category: "Media"
  },
  {
    title: "Floppy Disk",
    slug: "floppy-disk",
    image: "/images/Floppy_disk_bg.png",
    shortDescription: "The OG save icon. Stored a whole 1.44MB — just enough for a document and maybe a low-res JPEG if you were lucky.",
    longDescription:
      "Once the king of file transfers, the floppy disk held a mighty 1.44MB — enough for a document and maybe a pixel or two. It’s still the universal symbol for 'save,' even if most people under 20 have never used one. Blow on it before inserting, just to be safe.",
    category: "Storage"
  },
  {
    title: "LaserDisc",
    slug: "laserdisc",
    image: "/images/laser_disc-nbg-preview.png",
    shortDescription: "The VHS-sized disc that tried to be the future of home video. Massive in size and ambition, it never quite found its audience.",
    longDescription:
      "LaserDiscs were the size of vinyl records but promised the clarity of digital video. Though they never achieved mass-market success due to size, cost, and lack of recording capability, they paved the way for DVDs and hold a cult status among collectors and cinephiles.",
    category: "Media"
  },
  {
    title: "Napster",
    slug: "napster",
    image: "/images/napster_no_bg.png",
    shortDescription: "The outlaw king of early digital music. Before Spotify, there was Napster — wild, free, and sued into oblivion.",
    longDescription:
      "Napster changed the game forever — not by making music, but by making it free. The peer-to-peer file sharing service gave us access to every song imaginable (legally questionable, of course). It sparked lawsuits, shaped the future of digital media, and turned 'MP3' into a household word. Napster didn’t last, but its impact echoes in every stream.",
    category: "Media"
  },
  {
    title: "Pager",
    slug: "pager",
    image: "/images/motorola2bpager-removebg.png",
    shortDescription: "The original pocket ping. Before texts, you got buzzed — and had to find a payphone.",
    longDescription:
      "Beepers were the lifeline of the 90s — essential for doctors, dealers, and dramatic TV moments. They couldn’t send messages, but their little buzz meant something important was waiting. If you were really cool, yours had a translucent case.",
    category: "Communication"
  },
  {
    title: "PalmPilot",
    slug: "palmpilot",
    image: "/images/Palm-removebg.png",
    shortDescription: "The godfather of your smartphone. A stylus, a screen, and more scheduled meetings than a Fortune 500 executive.",
    longDescription:
      "PalmPilots were personal digital assistants before the term was cool. You wrote in Graffiti (yes, a made-up alphabet), managed your contacts like a boss, and felt like you were living in the future. Until, of course, phones learned to do it all better.",
    category: "Personal Computing"
  },
  {
    title: "Zip Drive",
    slug: "zip-drive",
    image: "/images/zip_drive-removebg.png",
    shortDescription: "Like a floppy disk, but thick. Iomega’s big idea stored a whopping 100MB — until it clicked its way to death.",
    longDescription:
      "The Zip Drive was supposed to save us from floppy limitations. It gave us triple-digit storage and a unique sound that struck fear into hearts when it started clicking. It burned bright, then got smoked by USB sticks and cloud storage.",
    category: "Storage"
  },
  {
    title: "CRT Monitor",
    slug: "crt-monitor",
    image: "/images/crt_monitor-removebg.png",
    shortDescription: "A desk-dominating beast that doubled as a space heater. You didn’t just use it — you braced for it.",
    longDescription:
      "The cathode ray tube monitor wasn’t just a screen — it was a statement. Heavy, bulky, and prone to static shock, CRTs were your gateway to Minesweeper, AOL chat, and your first Geocities site. Flat screens may be sleek, but they’ll never have that *thunk*.",
    category: "Computer Hardware"
  },
  {
    title: "Dial-up Modem",
    slug: "dial-up-modem",
    image: "/images/dial_upmodem-removebg.png",
    shortDescription: "That screechy symphony meant you were finally online. Just don’t let anyone pick up the phone.",
    longDescription:
      "Before Wi-Fi, the dial-up modem was your noisy handshake with the internet. It was a ritual — the chirps, the whines, and the thrill of a 56kbps connection. Bonus nostalgia points if you remember yelling, ‘I’m online!’ so no one picked up the landline.",
    category: "Communication"
  },
  {
    title: "Dot Matrix Printer",
    slug: "dot-matrix-printer",
    image: "/images/dot_matrix_printer-removebg-preview.png",
    shortDescription: "Loud, slow, and unstoppable. You knew it was working by the screech.",
    longDescription:
      "The dot matrix printer was a relic of clattering progress. With its perforated paper edges and typewriter-like sound, it powered offices and computer labs through the 80s and 90s. Not pretty, not fast — but dependable. And let’s be honest: that sound is burned into your brain forever.",
    category: "Computer Hardware"
  },
  {
    title: "MiniDV Camcorder",
    slug: "minidv-camcorder",
    image: "/images/minidv_cam-removebg-preview.png",
    shortDescription: "A pocket-sized time machine. MiniDV tapes captured your birthday parties, backyard stunts, and everything in between — with glorious grain and handheld charm.",
    longDescription:
      "Before smartphones and DSLR vloggers, there was the MiniDV camcorder. Small tapes, big dreams. Whether you were filming a birthday party or your first skate trick, this device captured moments in glorious 480p. Bonus points if you labeled each tape with a Sharpie.",
    category: "Media"
  },
  {
    title: "Handspring Visor",
    slug: "handspring-visor",
    image: "/images/handpsring_visor-removebg-preview.png",
    shortDescription: "PalmPilot’s wild cousin — with a slot for modules no one used.",
    longDescription:
      "Born from former Palm engineers, the Handspring Visor ran on Palm OS but aimed to be more: MP3 player? Camera? Game Boy rival? Simply plug in a Springboard module. It was ahead of its time, but sometimes being early means being forgotten.",
    category: "Personal Computing"
  },
  {
    title: "Betamax",
    slug: "betamax",
    image: "/images/betamax-removebg-preview.png",
    shortDescription: "A technical marvel that couldn’t outmaneuver VHS. Sharper quality, loyal fans — but still the underdog in the home video showdown of the '80s.",
    longDescription:
      "Betamax was Sony’s bold foray into home video — better quality than VHS, but worse marketing. It became a textbook example of how the best tech doesn’t always win. Collectors still argue its superiority, but for most, it's a trivia answer.",
    category: "Media"
  },
  {
    title: "Game Boy Printer",
    slug: "game-boy-printer",
    image: "/images/Game_Boy_Printer-removebg-preview.png",
    shortDescription: "Tiny thermal prints of pixelated Pokémon — if the batteries didn’t die first.",
    longDescription:
      "Bundled with the Game Boy Camera, the Game Boy Printer let you print grayscale selfies, high scores, or pixel art stickers. It was slow, fuzzy, and absolutely charming. Just don't expect the thermal paper to survive more than a few summers.",
    category: "Gaming"
  }
];

export { techEntries };