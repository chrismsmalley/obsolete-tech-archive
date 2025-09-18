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
},
{
  title: "T-Mobile Sidekick",
  slug: "t-mobile-sidekick",
  image: "images/sidekick-removebg-preview.png",
  shortDescription: "The flip-screen messaging machine that made you feel like a hacker in a teen drama.",
  longDescription:
    "Before iPhones ruled the world, the Sidekick was the ultimate flex. That snap-open screen? Iconic. AIM, texting, and browsing all in one — this was mobile magic for the MySpace generation.\n\nLaunched by T-Mobile in the early 2000s, the Sidekick (aka Danger Hiptop) was beloved for its unique swivel screen and full keyboard. It made texting effortless and changed how teens and celebs messaged on the go. It eventually got left behind by app-hungry smartphones, but it walked so the rest could run.",
  category: "Mobile"
},
{
  title: "AIM (AOL Instant Messenger)",
  slug: "aim",
  image: "images/aim-removebg-preview.png",
  shortDescription: "You weren’t online — you were *Away*. The original source of cryptic away messages and buddy list drama.",
  longDescription:
    "AIM was the soundtrack of the early internet. You signed on to that door creak, arranged your crushes by status, and carefully crafted away messages like digital poetry.\n\nLaunched by AOL in 1997, AIM let you chat, flirt, and ghost long before social media made it cool. It shut down in 2017, but its spirit lives on in every DM and '...is typing' bubble.",
  category: "Communication"
},
{
  title: "Windows 95 Startup Disk",
  slug: "windows-95-startup-disk",
  image: "images/windows_95-removebg-preview.png",
  shortDescription: "The floppy that saved your PC (or didn’t). Insert and pray.",
  longDescription:
    "Before boot menus and recovery partitions, there was the Windows 95 startup disk. One floppy to rule them all — unless it was corrupted, then you were toast.\n\nUsed to troubleshoot and boot stubborn PCs, this humble disk was your best friend and worst enemy in the 90s. It asked tough questions like, 'Do you want to load CD-ROM support?' and made you feel like a hacker for saying yes.",
  category: "Personal Computing"
},
{
  title: "Sega Dreamcast",
  slug: "sega-dreamcast",
  image: "images/dreamcast-removebg-preview.png",
  shortDescription: "The console that was too cool, too early. Internet gaming before anyone else thought it was a good idea.",
  longDescription:
    "Dreamcast was Sega’s bold, beautiful last stand. It had VMUs, online play, and games that made you whisper 'whoa' — but it arrived just a little too early.\n\nReleased in 1999, Dreamcast was ahead of its time with features like a built-in modem, visual memory unit, and a killer launch lineup. Despite its innovations, it got buried by the PS2 hype train. Still, it’s a cult favorite and a love letter to what gaming *could’ve been*.",
  category: "Gaming"
},
{
  title: "8-Track Tape",
  slug: "8-track-tape",
  image: "images/8_track-removebg-preview.png",
  shortDescription: "Clunky, chunky, and guaranteed to switch tracks mid-chorus.",
  longDescription:
    "8-Tracks were the soundtrack of shag-carpeted cars and living rooms. The size of a brick and just as subtle, they played music in loops — whether you wanted them to or not.\n\nPopular from the mid-60s through the late 70s, 8-Tracks offered portable music for the first time. You could pop one into your car stereo and cruise — just don’t get mad when it changes songs mid-solo. Cassette tapes eventually took over, but 8-Tracks paved the way.",
  category: "Media"
},
{
  title: "Clippy",
  slug: "clippy",
  image: "images/clippy-removebg-preview.png",
  shortDescription: "The overly helpful paperclip who just wanted to be loved — and closed.",
  longDescription:
    "Clippy (real name: Clippit) popped up uninvited in Microsoft Office to offer help — usually when you didn’t need it. 'It looks like you're writing a letter...' became both meme and menace.\n\nIntroduced in Office 97, Clippy was supposed to make digital documents easier. Instead, it became the face of annoying assistants everywhere. Retired in the early 2000s, Clippy now lives on in internet legend and ironic merch.",
  category: "Personal Computing"
},
{
  title: "Rotary Phone",
  slug: "rotary-phone",
  image: "/images/rotary_phone-removebg-preview.png",
  shortDescription: "Dialing took effort. And if you messed up the last number? Start over.",
  longDescription:
    "Rotary phones weren’t just tools — they were patience trainers. Each spin of the dial was a commitment, especially if your friend’s number had too many 9s.\n\nCommon from the 1920s through the 1980s, rotary phones were a fixture in homes before buttons took over. No screens, no texting, just pure analog satisfaction and the occasional finger cramp.",
  category: "Communication"
},
{
  title: "Calculator Watch",
  slug: "calculator-watch",
  image: "images/cal_watch-removebg-preview.png",
  shortDescription: "For the kid who was ready for math *anytime*. Bonus points if it had a tiny stylus.",
  longDescription:
    "The calculator watch was part gadget, part status symbol for nerds and geniuses alike. Tiny buttons, endless beeps, and serious brainiac vibes.\n\nPopularized in the 80s and 90s by Casio, these watches combined timekeeping with 8-digit math — and looked surprisingly cool doing it. Smartphones stole their thunder, but calculator watches still pop up for retro flair.",
  category: "Wearables"
},
{
  title: "Geocities",
  slug: "geocities",
  image: "images/geocities-removebg-preview.png",
  shortDescription: "Your first homepage. Blinking text, MIDI music, and way too many GIFs.",
  longDescription:
    "Geocities gave the masses a place to build *whatever* they wanted — and it showed. Neon backgrounds, guestbooks, visitor counters, and unlicensed fan pages ruled the early web.\n\nLaunched in 1994 and bought by Yahoo in 1999, Geocities was a DIY internet village. It was shut down in 2009, but parts live on in archives, forever preserving the chaos and creativity of the early web.",
  category: "Web Culture"
},
{
  title: "Slide Projector",
  slug: "slide-projector",
  image: "/images/slide_projector-removebg-preview.png",
  shortDescription: "Click, whirr, *next slide*. Family vacations never looked so dusty.",
  longDescription:
    "Before PowerPoint and HDMI, there was the slide projector — a box of light, noise, and nostalgia. You loaded your slides, dimmed the lights, and subjected guests to a slow scroll through your summer road trip.\n\nUsed widely from the 50s through the 80s, slide projectors were a classroom staple and living room centerpiece. Today, they mostly live in attics — or ironically on Instagram.",
  category: "Photography"
},
{
  title: "Cassette Tape",
  slug: "cassette-tape",
  image: "images/cassette_tape-removebg-preview.png",
  shortDescription: "Rewind with a pencil. Mixtape magic and hiss included.",
  longDescription:
    "Cassette tapes let you make mixtapes for your crush, your car, or your Walkman — sometimes all three. They clicked, hissed, and occasionally got eaten by the player, but we loved them anyway.\n\nLaunched in the 1960s by Philips, the cassette revolutionized personal audio. By the 80s, they were everywhere — until CDs and digital music came calling. But nostalgia runs deep, and cassettes have been making a slow, squeaky comeback.",
  category: "Media"
},
{
  title: "Netbook",
  slug: "netbook",
  image: "images/netbook-removebg-preview.png",
  shortDescription: "Tiny laptop, big dreams. Just don’t open too many tabs.",
  longDescription:
    "Netbooks were like laptops that hit puberty early — small, awkward, and full of potential. They were cheap, portable, and perfect for light browsing and word docs.\n\nPopular in the late 2000s, netbooks made mobile computing affordable, but were often underpowered and cramped. Once tablets and ultrabooks hit the scene, the netbook quietly shuffled offstage. We salute its effort.",
  category: "Personal Computing"
},
{
  title: "BlackBerry",
  slug: "blackberry",
  image: "images/blackberry-removebg-preview.png",
  shortDescription: "The business phone with a keyboard so good, people mourned it.",
  longDescription:
    "Before the iPhone, there was the BlackBerry — email in your pocket, tactile keys under your thumbs, and a blinking red light that meant *you were important*.\n\nBlackBerry phones were the go-to for execs, government workers, and anyone addicted to email. Their peak was the 2000s, but they couldn’t keep up with the touchscreen revolution. Still, no virtual keyboard ever quite matched that click.",
  category: "Mobile"
},
{
  title: "TV Guide Channel",
  slug: "tv-guide-channel",
  image: "/images/tv guide channel.jpeg",
  shortDescription: "You waited 10 minutes just to find out what was on at 8pm.",
  longDescription:
    "The TV Guide Channel was slow, unskippable, and strangely mesmerizing. You’d turn it on to check what's playing... and end up watching it scroll for 15 minutes.\n\nPart cable info, part background noise, it was a relic of pre-DVR patience. By the time you saw your show listed, it had already started. And yes, the ads on the top half were always weird.",
  category: "Media"
},
{
  title: "FireWire",
  slug: "firewire",
  image: "images/firewire-removebg-preview.png",
  shortDescription: "Apple’s fast little port that almost made it.",
  longDescription:
    "FireWire was supposed to be the future of fast data transfer. It zipped video from camcorders and audio from interfaces with speed USB couldn’t touch — at least at first.\n\nApple loved it. Video editors loved it. But USB 2.0 got cheaper and more widespread, and FireWire faded into niche use. A cool port with a cooler name that just couldn’t win the popularity contest.",
  category: "Computer Hardware"
},
{
  title: "TiVo",
  slug: "tivo",
  image: "/images/vivo-removebg-preview.png",
  shortDescription: "The DVR that taught us how to pause live TV — and skip commercials like rebels.",
  longDescription:
    "TiVo felt like magic. You’d pause live TV to grab a snack, rewind to catch that joke again, or fast-forward through ads like some kind of remote-wielding wizard.\n\nLaunched in 1999, TiVo was the original digital video recorder (DVR) that made watching TV feel like time travel. It let you binge before bingeing was a thing and became a verb in the process. Eventually, cable companies copied the idea, and streaming buried it. But for a while, TiVo was peak couch power.",
  category: "Media"
},
{
  title: "MySpace",
  slug: "myspace",
  image: "/images/myspace.jpeg",
  shortDescription: "The original social network — complete with glitter, chaos, and your Top 8.",
  longDescription:
    "MySpace was where HTML met hormones. You’d spend hours tweaking your profile song, ranking your friends, and throwing virtual glitter all over your page.\n\nLaunched in 2003, MySpace gave everyone a crash course in personal branding and passive-aggressive friend management. Tom was everyone’s first friend — and honestly, the most loyal. It was messy, loud, and kind of perfect before Facebook showed up with its clean lines and real names.",
  category: "Web Culture"
},
{
  title: "iPod Classic",
  slug: "ipod-classic",
  image: "/images/Apple-iPod-Original-1st-Generation-Specs-removebg-preview.png",
  shortDescription: "1,000 songs in your pocket — and a scroll wheel that felt *just right*.",
  longDescription:
    "The iPod Classic was the digital mixtape king. That satisfying click wheel, the grayscale screen, and the ability to carry your entire music library in your jeans — it changed everything.\n\nReleased in 2001, the iPod wasn’t the first MP3 player, but it was the one that got it right. It turned Apple into a lifestyle and gave us those iconic silhouette ads. Eventually, it was replaced by phones, but nothing ever scrolled quite like it.",
  category: "Media"
},
{
  title: "Google Glass",
  slug: "google-glass",
  image: "/images/google_glass-removebg-preview.png",
  shortDescription: "The future was on your face. Unfortunately, so were the looks you got.",
  longDescription:
    "Google Glass was part gadget, part social experiment. You wore it on your face, took photos with a wink, and learned very quickly that not everyone loved being around a cyborg.\n\nReleased in 2013 as an early AR headset, Glass had promise — notifications, directions, camera — but also privacy concerns and a sky-high price tag. It didn’t go mainstream, but it walked so future wearables could learn how *not* to make people uncomfortable.",
  category: "Wearables"
},
{
  title: "Ask Jeeves",
  slug: "ask-jeeves",
  image: "/images/ask_jeeves-removebg-preview.png",
  shortDescription: "Before Google, we asked a butler. He tried his best.",
  longDescription:
    "Ask Jeeves was your polite internet butler. You typed out full questions like, 'What’s the weather like in Paris?' and he’d fetch answers with a digital bow.\n\nLaunched in 1996, it stood out in the early search engine crowd by encouraging natural language. But as algorithms improved, Jeeves got out-Googled and eventually disappeared from the homepage — probably to enjoy early retirement in a virtual mansion.",
  category: "Web Culture"
},
{
  title: "VHS Rewinder",
  slug: "vhs-rewinder",
  image: "images/VHS_tape_rewinder-removebg-preview.png",
  shortDescription: "Because rewinding in the VCR was just too slow. Be kind, rewind — fast.",
  longDescription:
    "Before Netflix, there was Blockbuster. And before returning your tape, you had to rewind it — or risk the wrath of late fees and passive-aggressive stickers.\n\nEnter the VHS rewinder: a separate little machine that did one job and did it fast. Some looked like racecars. Some made weird noises. All of them saved your VCR’s motor from an early death. A truly niche appliance with a very specific kind of glory.",
  category: "Media"
},
{
  title: "Windows XP",
  slug: "windows-xp",
  image: "/images/windows xp.jpeg",
  shortDescription: "The rolling green hills. The startup chime. The last time Windows felt cozy.",
  longDescription:
    "Windows XP was like your favorite hoodie — comfy, reliable, and somehow still running on that one computer in the basement.\n\nLaunched in 2001, it combined usability with the kind of visual flair that made people feel like computers weren’t just for work anymore. It stuck around for over a decade, resisting upgrades like a stubborn grandparent. And let’s be honest — that startup sound still lives rent-free in your brain.",
  category: "Personal Computing"
},
{
  title: "MapQuest Printouts",
  slug: "mapquest-printouts",
  image: "/images/mapquest-removebg-preview.png",
  shortDescription: "Turn left in 0.3 miles… if you can read your crumpled paper in time.",
  longDescription:
    "Before GPS talked to you, you talked to your passenger — usually while holding a printout from MapQuest, squinting at 10-point font.\n\nLaunched in 1996, MapQuest was the OG online navigation tool. You’d plan a route, print the turn-by-turns, and hope your ink didn’t run out. A wrong turn meant guessing, backtracking, and maybe stopping to ask for directions (gasp). RIP, glovebox printers.",
  category: "Web Culture"
},
{
  title: "Nintendo Power Glove",
  slug: "nintendo-power-glove",
  image: "/images/power_glove-removebg-preview.png",
  shortDescription: "It looked cooler than it worked — and that was enough.",
  longDescription:
    "The Power Glove was 80s tech optimism in wearable form. You wore it, waved it, and hoped Mario would listen. He usually didn’t.\n\nReleased in 1989, it promised motion control gaming long before the Wii. It was clunky, awkward, and barely functional — but it looked so rad doing it. Immortalized in *The Wizard*, it remains a glorious example of style over substance.",
  category: "Gaming"
},
{
  title: "CD Wallet",
  slug: "cd-wallet",
  image: "/images/cd_wallet-removebg-preview.png",
  shortDescription: "A binder full of bangers — and at least one scratched copy of Linkin Park.",
  longDescription:
    "The CD wallet was your mobile music library, your personality, and a backseat heat trap for plastic discs. Flipping through it on a road trip? Peak 2000s energy.\n\nAvailable in every size from ‘fits in your backpack’ to ‘basically luggage,’ it held burned mix CDs, that one weird trance album, and a few you definitely didn’t buy legally. It jingled. It zipped. It was the original Spotify playlist, but louder.",
  category: "Media"
},
{
  title: "Bluetooth Earpiece",
  slug: "bluetooth-earpiece",
  image: "/images/Bluetooth_headset-removebg-preview.png",
  shortDescription: "Business in your ear, party on the other line.",
  longDescription:
    "The Bluetooth earpiece was the ultimate hands-free flex. If you walked around talking to the air in 2006, odds are you were closing a deal — or pretending to.\n\nWorn mostly by sales reps, early adopters, and your one uncle who really leaned into tech trends, these little head-huggers freed up your hands and made you feel important. Siri may live in our phones now, but these paved the way for talking to our tech.",
  category: "Wearables"
},
{
  title: "Punch Cards",
  slug: "punch-cards",
  image: "/images/punched_card-removebg-preview.png",
  shortDescription: "Before keyboards, you programmed with holes. Very, very slowly.",
  longDescription:
    "Punch cards were the OG programming method — stacks of cardboard with carefully placed holes that told the computer what to do. One typo? Start over.\n\nThey date back to the 1800s but became computing staples through the 60s and 70s. Used in early IBM machines, punch cards were fragile, confusing, and deeply satisfying to stack. They're basically ancient floppy disks, but less convenient.",
  category: "Computer Hardware"
},
{
  title: "RealPlayer",
  slug: "realplayer",
  image: "/images/real player.png",
  shortDescription: "The video player that buffered like its life depended on it.",
  longDescription:
    "RealPlayer was one of the first ways to stream media online — and one of the first reasons you learned what 'buffering' meant.\n\nReleased in 1995, it let you play video and audio in proprietary formats. It also installed toolbars you didn’t want and played video in a window the size of a postage stamp. But hey — it worked (sometimes), and that made it revolutionary.",
  category: "Media"
},
{
  title: "Physical Media Rentals",
  slug: "physical-media-rentals",
  image: "images/vhs rental store.jpg",
  shortDescription: "Friday night wasn’t complete without a trip to the video store.",
  longDescription:
    "Blockbuster. Hollywood Video. Family-owned joints with carpets that smelled like popcorn and ambition. Physical media rentals were a whole vibe.\n\nYou’d wander the aisles, judge covers, fight for the last copy of *The Matrix*, and maybe grab a Butterfinger at checkout. The late fees were real. The memories? Even more so.",
  category: "Media"
},
{
  title: "The Under Construction GIF",
  slug: "under-construction-gif",
  image: "/images/under_costruction-removebg-preview.png",
  shortDescription: "If your webpage didn’t have this, was it even a webpage?",
  longDescription:
    "Ah yes, the blinking jackhammer guy. A staple of Geocities, Angelfire, and every page that dreamed of being something… someday.\n\nThe ‘Under Construction’ GIF was the neon sticky note of the early web. No updates? No problem. Toss in a GIF and let the world know greatness was coming. Eventually.",
  category: "Web Culture"
},
{
  title: "Trackball Mouse",
  slug: "trackball-mouse",
  image: "/images/trackball_-removebg-preview.png",
  shortDescription: "Spin the ball, steer your destiny. Or at least your cursor.",
  longDescription:
    "The trackball mouse was part controller, part conversation piece. Instead of dragging a mouse, you spun the ball like a tiny arcade game.\n\nPopular with graphic designers and office rebels, it offered precision — and occasional wrist confusion. It still has fans today, but most folks moved on to scroll wheels and touchpads. RIP, thumb calluses.",
  category: "Computer Hardware"
},
{
  title: "Internet Explorer 6",
  slug: "internet-explorer-6",
  image: "/images/internet_explorer_logo_6.webp",
  shortDescription: "The browser you loved to hate — but only because you had to use it.",
  longDescription:
    "IE6 was the browser that came with your PC, whether you wanted it or not. It was slow, insecure, and incompatible with half the web — but it was *there*.\n\nReleased in 2001, IE6 stuck around for way too long thanks to corporate IT inertia and lack of competition. It gave developers nightmares and security teams headaches. If you ever had to write a CSS hack just for IE6, you deserve a medal.",
  category: "Web Culture"
},
{
  title: "Digital Picture Frame",
  slug: "digital-picture-frame",
  image: "/images/digital_picture_frame-removebg-preview.png",
  shortDescription: "Because grandma needed a slideshow… but techier.",
  longDescription:
    "Digital picture frames were supposed to modernize your mantle. Load in a memory card, and boom — a never-ending slideshow of slightly oversharpened photos.\n\nThey felt futuristic in the 2000s but often had clunky interfaces and screens that washed out in sunlight. Still, they were a staple gift for birthdays, holidays, and grandparents with too many grandkids to frame.",
  category: "Personal Computing"
},
{
  title: "MiniDisc",
  slug: "minidisc",
  image: "images/minidisc-removebg-preview.png",
  shortDescription: "The forgotten middle child between CDs and MP3s.",
  longDescription:
    "MiniDiscs were compact, rewritable, and durable — a perfect bridge between analog and digital music. But somehow, they just never caught on.\n\nReleased by Sony in 1992, MiniDiscs had all the makings of a hit. But with CDs dominating and MP3s on the rise, it got lost in the shuffle. Audiophiles still praise it, but the rest of us barely knew it existed.",
  category: "Media"
},
{
  title: "Flash Website Intros",
  slug: "flash-intros",
  image: "/images/flash_website_intros.png",
  shortDescription: "Skip Intro? Please. This was the *main event* in 2003.",
  longDescription:
    "Flash intros were the overdramatic red carpet of early websites. Animated logos, swooshing text, epic soundtracks — and a loading bar that took forever.\n\nThey were flashy (literally), unnecessary, and extremely cool at the time. But they died with the fall of Flash, taking autoplay audio and unnecessary wait times with them. A beautiful, bloated chapter in web history.",
  category: "Web Culture"
},
  {
    title: "Zune",
    slug: "zune",
    image: "/images/Zune-removebg-preview.png",
    shortDescription: "Microsoft’s cool MP3 player that arrived to the party right as the DJ went home.",
    longDescription:
      "Zune actually slapped — clean UI, great sound, even wireless sharing (that no one used). But going toe‑to‑toe with the iPod is like arm‑wrestling a bulldozer.\n\nLaunched in 2006, Zune tried playlists, social features, and bold colors. Fans loved it; the market shrugged. Today it’s a cult classic and a reminder that good products still need a lucky timeline.",
    category: "Media"
  },
  {
    title: "Netscape Navigator",
    slug: "netscape-navigator",
    image: "/images/netscape.jpeg",
    shortDescription: "The browser that taught the web how to web — before IE ‘borrowed’ its lunch.",
    longDescription:
      "If you clicked around the early internet, you probably did it in Netscape. Animated GIFs! Under construction signs! Right‑click, view source!\n\nReleased in 1994, it dominated until Microsoft bundled Internet Explorer with Windows. Netscape faded, but its codebase lived on as Mozilla and Firefox. Legends never really 404.",
    category: "Web Culture"
  },
  {
    title: "HD DVD",
    slug: "hd-dvd",
    image: "/images/hd_dvd-removebg-preview.png",
    shortDescription: "Blu‑ray’s worthy rival that brought a laser to a format knife fight — and still lost.",
    longDescription:
      "Toshiba’s HD DVD looked sharp, loaded fast, and even had early interactive features. But studio deals swung blue, and retail shelves followed.\n\nFrom 2006 to 2008 it was the high‑def home video duel of the decade. Then one day, *poof* — discounted players and a lot of shiny coasters.",
    category: "Media"
  },
  {
    title: "Google Reader",
    slug: "google-reader",
    image: "/images/Google_Reader_logo.png",
    shortDescription: "The quiet superstar of the open web — until it got sunsetted at peak productivity.",
    longDescription:
      "Reader was how nerds kept up with the entire internet without doomscrolling. Subscribe to feeds, skim headlines, share with friends — bliss.\n\nLaunched in 2005 and killed in 2013, it left a hole that newsletters and Twitter never quite filled. Long live RSS.",
    category: "Web Culture"
  },
  {
    title: "Pebble Smartwatch",
    slug: "pebble-smartwatch",
    image: "/images/pebble-removebg-preview.png",
    shortDescription: "Week‑long battery, pixel‑perfect vibes, and a Kickstarter that broke the internet.",
    longDescription:
      "Pebble made smartwatches fun *and* useful: notifications, fitness, custom faces — with e‑paper battery life that laughed at chargers.\n\nBorn in 2012 from a record‑breaking Kickstarter, it was beloved by devs and minimalists. Bought, sunsetted, but never forgotten — Rebble lives on.",
    category: "Wearables"
  },
  {
    title: "Windows Phone",
    slug: "windows-phone",
    image: "/images/Windows_phone-removebg-preview.png",
    shortDescription: "Tiles so clean you could eat off them. Apps so few you might have to.",
    longDescription:
      "Metro UI was gorgeous — bold colors, live tiles, typography for days. The hardware? Solid. The camera? Often best‑in‑class.\n\nBut without developer love, an ecosystem starves. Between 2010–2017, Windows Phone fought hard and bowed out gracefully. Design students still use its screenshots in portfolios.",
    category: "Mobile"
  },
  {
    title: "Vine",
    slug: "vine",
    image: "/images/vine-removebg-preview.png",
    shortDescription: "Six seconds of pure chaos that launched a thousand memes (and careers).",
    longDescription:
      "Vine distilled comedy into micro‑bursts: perfect loops, weird timing, and quotable audio. ‘Road work ahead?’ ‘I sure hope it does.’\n\nAcquired by Twitter, it peaked fast and vanished in 2016 — but its DNA lives in TikTok, Reels, and your brain’s meme folder.",
    category: "Web Culture"
  },
  {
    title: "LimeWire",
    slug: "limewire",
    image: "/images/limewire-removebg-preview.png",
    shortDescription: "Where you got that one song… and probably three viruses named after it.",
    longDescription:
      "Peer‑to‑peer file sharing at its most chaotic. You’d search for a track, download five fakes, and hope the sixth wasn’t a trojan.\n\nFrom the early 2000s until legal hammers fell, LimeWire was digital piracy’s messy middle child — and a rite of passage for many.",
    category: "Web Culture"
  },
  {
    title: "Yahoo Messenger",
    slug: "yahoo-messenger",
    image: "/images/yahoo_messenger-removebg-preview.png",
    shortDescription: "BRB, away message set to mysterious lyrics and something about pizza.",
    longDescription:
      "Yahoo Messenger was the purple portal to late‑night chats, status games, and that one friend who *always* buzzed you.\n\nLaunched in 1998, it rode the wave of early IM culture with emoticons, webcams, and chat rooms galore. It faded as phones took over, but for a while, your buddy list was the internet.",
    category: "Communication"
  },
  {
    title: "ICQ",
    slug: "icq",
    image: "/images/icq-removebg-preview.png",
    shortDescription: "Uh‑oh! The OG instant messenger with a sound you can still hear in your soul.",
    longDescription:
      "ICQ was instant messaging before instant messaging was cool. You had a UIN number, a weird flower icon, and the ‘uh‑oh’ that announced every new message.\n\nBorn in 1996, it pioneered features we take for granted today: file transfers, histories, statuses. It never fully vanished — but its golden age is pure 90s internet.",
    category: "Communication"
  },
  {
    title: "AltaVista",
    slug: "altavista",
    image: "/images/Altavista_logo-removebg-preview.png",
    shortDescription: "Once upon a time, this *was* how you found things online.",
    longDescription:
      "AltaVista felt like hacking the universe: type words, get webpages — fast. It was the default in computer labs and libraries before Google ate everyone’s lunch.\n\nLaunched in 1995, it introduced powerful search and translation. But branding flips and portal bloat slowed it down. By 2013, the lights went out for good.",
    category: "Web Culture"
  },
  {
    title: "Friendster",
    slug: "friendster",
    image: "/images/Friendster-removebg-preview.png",
    shortDescription: "Pre‑Facebook social networking where everyone was ‘single’ and photobooth pics reigned.",
    longDescription:
      "Friendster was the proto‑social network: profiles, testimonials, drama. It taught us how online popularity worked — and how sites crumble when scale hits.\n\nLaunched in 2002, it exploded, then buckled under growth and competition. It later pivoted to gaming, but by then the party had moved.",
    category: "Web Culture"
  },
  {
    title: "Nokia N‑Gage",
    slug: "nokia-n-gage",
    image: "/images/Nokia-N-Gage-removebg-preview.png",
    shortDescription: "Part phone, part game console, all taco. Side‑talking legend.",
    longDescription:
      "The N‑Gage tried to merge Game Boy fun with Nokia durability. You got swappable game cards, Bluetooth multiplayer — and jokes about holding a taco to your head.\n\nReleased in 2003, it was ambitious but awkward. Gamers wanted buttons; callers wanted comfort. It’s a meme now, but a lovable one.",
    category: "Mobile"
  },
  {
    title: "Palm Pre",
    slug: "palm-pre",
    image: "/images/Palm_Pre-removebg-preview.png",
    shortDescription: "Swipe cards, wireless charging, and webOS magic — a gem that arrived too soon.",
    longDescription:
      "The Palm Pre introduced card‑based multitasking and inductive charging before it was cool. webOS was slick, thoughtful, and way ahead of its time.\n\nLaunched in 2009, it couldn’t out‑market iPhone and Android. But designers still borrow its ideas. Pour one out for Synergy.",
    category: "Mobile"
  },
  {
    title: "Google Wave",
    slug: "google-wave",
    image: "/images/google_wave-removebg-preview.png",
    shortDescription: "Email, chat, docs — all at once! Also, confusion — all at once.",
    longDescription:
      "Google Wave tried to reinvent online collaboration with live‑updating threads you could edit mid‑conversation. Powerful, wild, and… hard to explain to your team.\n\nLaunched in 2009 and sunset in 2010, it left behind ideas that reappeared in modern tools. Visionary, but a tough UX sell.",
    category: "Web Culture"
  },
  {
    title: "Windows Media Center",
    slug: "windows-media-center",
    image: "/images/Windows_Media_Center-removebg-preview.png",
    shortDescription: "Big‑screen DVR vibes for your PC — green glow included.",
    longDescription:
      "Media Center turned Windows into a living‑room DVR: TV tuners, EPGs, recordings, the whole couch potato stack.\n\nBundled with certain Windows editions from 2002 onward, it peaked in the HTPC era before streaming and smart TVs made it feel extra. Still missed by home theater nerds.",
    category: "Media"
  },
  {
    title: "SmartMedia Card",
    slug: "smartmedia-card",
    image: "/images/SmartMedia_Card_-removebg-preview.png",
    shortDescription: "Paper‑thin camera storage with a talent for getting lost in your bag.",
    longDescription:
      "SmartMedia was an ultra‑thin flash card used in early digital cameras. Lightweight, fragile, and ready to corrupt at the worst time.\n\nPopular around the late 90s/early 2000s, it eventually lost to SD cards, which were smaller, sturdier, and less dramatic.",
    category: "Storage"
  },
  {
    title: "Windows Movie Maker",
    slug: "windows-movie-maker",
    image: "/images/Windows_Movie_Maker_logo-removebg-preview.png",
    shortDescription: "Where every school project got star wipes and Arial Black titles.",
    longDescription:
      "Movie Maker made editing feel possible: trim, drag, add a corny transition, export, win the class. It was basic — and perfect for its moment.\n\nBundled with Windows in the 2000s, it turned a generation into amateur editors before phones took over the job.",
    category: "Media"
  },
  {
    title: "Adobe Flash Player",
    slug: "adobe-flash-player",
    image: "/images/Adobe_Flash_Player.png",
    shortDescription: "The plugin that powered half the web — and crashed the other half.",
    longDescription:
      "Flash gave us games, cartoons, and weird interactive websites with loading bars that lied. It also gave us pop‑ups, battery drain, and security holes.\n\nFrom the late 90s to the 2010s, Flash ruled rich media. Then HTML5 arrived, mobile said ‘nope,’ and the plugin rode into the sunset in 2020.",
    category: "Web Culture"
  }
];

export { techEntries };