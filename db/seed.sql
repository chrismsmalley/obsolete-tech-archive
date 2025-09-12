-- db/seed.sql (auto-generated)
-- WARNING: This file will wipe and reseed the 'technologies' table.
PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
DELETE FROM technologies;
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('compact-disc','Compact Disc','Media',NULL,NULL,'The shiny circle that ruled the 90s. Perfect sound forever — until you scratched it just a little.','The Compact Disc (CD) brought digital dazzle to music lovers in the 80s and 90s. It promised “perfect sound forever” — and we believed it, until that one skip ruined your favorite track. If you ever made a mix CD for someone, you knew what love (and frustration) felt like.

CDs hit shelves in 1982 thanks to Philips and Sony, and quickly became the top dog for music storage, knocking out cassettes and vinyl with their crisp digital quality. But once MP3s and streaming rolled in, the towers of jewel cases started collecting dust. Still, for collectors and audiophiles, CDs never really left the stage.','/images/Compact_Disc_image.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('floppy-disk','Floppy Disk','Storage',NULL,NULL,'The OG save icon. 1.44MB of pure, unreliable magic — and yes, blowing on it *felt* like it helped.','The floppy disk was your file''s first suitcase. You crammed essays, spreadsheets, and pixelated glory into its humble 1.44MB shell. Before cloud storage and thumb drives, this was how we got files from one place to another — slowly, and with a prayer.

Popularized in the mid-80s by Sony, the 3.5-inch floppy reigned supreme in the personal computing world. Sure, it barely held a photo by today’s standards, but it revolutionized how we backed up and shared data. Its legacy? Immortality as the “Save” icon.','/images/Floppy_disk_bg.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('laserdisc','LaserDisc','Media',NULL,NULL,'A dinner-plate-sized disc with dreams of being the future of home video. Mostly just scared your VHS player.','LaserDiscs looked like vinyls, played like dreams (if you had the setup), and cost a small fortune. They were ahead of their time in quality, but also ahead of their time in being wildly impractical.

Released in 1978, LaserDisc offered sharper video and better sound than VHS — but couldn’t record, was gigantic, and cost more than your VCR. Still, for film buffs and collectors, it holds a golden place in cinema tech history. Just don’t drop one on your foot.','/images/laser_disc-nbg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('napster','Napster','Media',NULL,NULL,'The rebel that gave the world free music — and gave Metallica a legal headache.','Napster flipped the music industry on its head. Suddenly, every song you ever wanted was a click away — and maybe a virus or two. It made MP3s mainstream, freaked out record labels, and turned your hard drive into a jukebox.

Launched in 1999 by two college kids, Napster pioneered peer-to-peer music sharing. It didn’t last (thanks to lawsuits), but its ripple effect changed how we discover, consume, and fight over digital media forever.','/images/napster_no_bg.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('pager','Pager','Communication',NULL,NULL,'The original pocket ping. Before texts, your pocket buzzed and you had to hunt down a payphone — usually with exact change.','Beepers were everywhere in the 90s — clipped to belts, buried in backpacks, and buzzing at the worst possible times. Doctors had them, dealers had them, and anyone trying to look important had one too. They didn’t send messages, but that little buzz meant someone wanted your attention. Bonus cool points if yours had a translucent case.

Pagers (or beepers) have been around since the 1950s, but they hit their stride in the 80s and 90s. Using radio signals to deliver simple numeric (and later text) messages, they were the go-to for quick communication before cell phones took over. While most of us left them behind in the early 2000s, some places — especially hospitals — still keep them buzzing.','/images/motorola2bpager-removebg.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('palmpilot','PalmPilot','Personal Computing',NULL,NULL,'The smartphone’s nerdy ancestor. Stylus-powered, suit-approved, and completely revolutionary — for a minute.','PalmPilots were your pocket brain in the late 90s. You wrote in Graffiti (a stylus-only alphabet), tapped through your calendar, and felt like a digital wizard in a sea of paper planners.

Debuting in 1996, Palm’s little PDA ran simple apps for contacts, notes, and tasks — all without a keyboard. Business folks loved it. Techies loved it. But then phones got smarter and PalmPilots became the digital dinosaur we still remember fondly.','/images/Palm-removebg.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('zip-drive','Zip Drive','Storage',NULL,NULL,'A chunky upgrade to the floppy. Bigger, louder, and prone to dying dramatically.','The Zip Drive was the next big thing in the late 90s — until it wasn’t. With up to 750MB of storage, it blew floppies out of the water. But that dreaded “click of death”? Unforgettable.

Introduced by Iomega in 1994, Zip Drives were perfect for big files and backups — until flash drives swooped in. Today, they live on only in IT war stories and dusty desk drawers.','/images/zip_drive-removebg.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('crt-monitor','CRT Monitor','Computer Hardware',NULL,NULL,'Built like a tank, glowed like a beacon. Your first screen probably weighed more than your whole PC now.','The CRT monitor didn’t just display — it dominated. These bulky beasts warmed your room, zapped your fingers, and delivered hours of pixelated glory.

Mainstream from the 80s through the early 2000s, CRTs gave us our first gaming wins, MS Paint masterpieces, and shaky webcam chats. LCDs may be sleeker, but CRTs were *loud* in every way.','/images/crt_monitor-removebg.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('dial-up-modem','Dial-up Modem','Communication',NULL,NULL,'The screech of the internet being born. Took minutes to connect — and dropped the moment someone picked up the phone.','Dial-up was a symphony of shrieks and hope. Every online journey started with a handshake of static and ended with “Mom, hang up the phone!”

Dominant in the 90s, these modems used phone lines to connect you at a blazing 56kbps — fast enough for email, slow enough for everything else. They walked so broadband could run.','/images/dial_upmodem-removebg.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('dot-matrix-printer','Dot Matrix Printer','Computer Hardware',NULL,NULL,'A screeching dinosaur of the office world. Reliable, loud, and still somehow not extinct.','Dot matrix printers weren’t elegant, but they got the job done. From endless reports to banner-sized birthday signs, these clunky machines screamed productivity.

With their pin-based printing and feed-hole paper, they were the workhorses of the 80s and 90s. Loud, slow, and still alive in some back offices. Respect.','/images/dot_matrix_printer-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('minidv-camcorder','MiniDV Camcorder','Media',NULL,NULL,'Your grainy gateway to stardom. If it fits in your palm and records in 480p, it’s MiniDV magic.','Before phones filmed everything, the MiniDV camcorder captured our skate tricks, school plays, and cringey teen monologues — one tape at a time.

Introduced in 1995, it offered digital video in a tiny cassette format. MiniDV was king until memory cards dethroned it. But for a brief moment, everyone was a filmmaker.','/images/minidv_cam-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('handspring-visor','Handspring Visor','Personal Computing',NULL,NULL,'PalmPilot’s weirder sibling — complete with add-ons you never used but definitely bragged about.','The Handspring Visor wanted to do it all. Add a camera? MP3 player? GPS? Just plug in a Springboard module and pretend it worked flawlessly.

Released in 1999, it was a more playful, expandable take on Palm OS devices. Too quirky to last, but way too fun to forget.','/images/handpsring_visor-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('betamax','Betamax','Media',NULL,NULL,'The underdog in the great VHS war. Better quality, worse luck.','Betamax was technically superior — sharper picture, less grain, cooler name. But VHS had better marketing and longer recording time. And so, history was written by the winners.

Introduced by Sony in 1975, Betamax lost the format war but earned cult status. It’s the Rocky of home video: didn’t win, but still got a standing ovation.','/images/betamax-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('game-boy-printer','Game Boy Printer','Gaming',NULL,NULL,'Pixelated selfies on sticky paper — if your AA batteries didn’t give up halfway through.','The Game Boy Printer turned your grainy camera snaps into tiny thermal masterpieces. It was slow, silly, and perfect.

Released in 1998 alongside the Game Boy Camera, it let kids print grayscale pixel portraits, memes, and high scores before selfies were even a thing. The paper faded fast, but the memories stuck.','/images/Game_Boy_Printer-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('t-mobile-sidekick','T-Mobile Sidekick','Mobile',NULL,NULL,'The flip-screen messaging machine that made you feel like a hacker in a teen drama.','Before iPhones ruled the world, the Sidekick was the ultimate flex. That snap-open screen? Iconic. AIM, texting, and browsing all in one — this was mobile magic for the MySpace generation.

Launched by T-Mobile in the early 2000s, the Sidekick (aka Danger Hiptop) was beloved for its unique swivel screen and full keyboard. It made texting effortless and changed how teens and celebs messaged on the go. It eventually got left behind by app-hungry smartphones, but it walked so the rest could run.','/images/sidekick-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('aim','AIM (AOL Instant Messenger)','Communication',NULL,NULL,'You weren’t online — you were *Away*. The original source of cryptic away messages and buddy list drama.','AIM was the soundtrack of the early internet. You signed on to that door creak, arranged your crushes by status, and carefully crafted away messages like digital poetry.

Launched by AOL in 1997, AIM let you chat, flirt, and ghost long before social media made it cool. It shut down in 2017, but its spirit lives on in every DM and ''...is typing'' bubble.','/images/aim-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('windows-95-startup-disk','Windows 95 Startup Disk','Personal Computing',NULL,NULL,'The floppy that saved your PC (or didn’t). Insert and pray.','Before boot menus and recovery partitions, there was the Windows 95 startup disk. One floppy to rule them all — unless it was corrupted, then you were toast.

Used to troubleshoot and boot stubborn PCs, this humble disk was your best friend and worst enemy in the 90s. It asked tough questions like, ''Do you want to load CD-ROM support?'' and made you feel like a hacker for saying yes.','/images/windows_95-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('sega-dreamcast','Sega Dreamcast','Gaming',NULL,NULL,'The console that was too cool, too early. Internet gaming before anyone else thought it was a good idea.','Dreamcast was Sega’s bold, beautiful last stand. It had VMUs, online play, and games that made you whisper ''whoa'' — but it arrived just a little too early.

Released in 1999, Dreamcast was ahead of its time with features like a built-in modem, visual memory unit, and a killer launch lineup. Despite its innovations, it got buried by the PS2 hype train. Still, it’s a cult favorite and a love letter to what gaming *could’ve been*.','/images/dreamcast-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('8-track-tape','8-Track Tape','Media',NULL,NULL,'Clunky, chunky, and guaranteed to switch tracks mid-chorus.','8-Tracks were the soundtrack of shag-carpeted cars and living rooms. The size of a brick and just as subtle, they played music in loops — whether you wanted them to or not.

Popular from the mid-60s through the late 70s, 8-Tracks offered portable music for the first time. You could pop one into your car stereo and cruise — just don’t get mad when it changes songs mid-solo. Cassette tapes eventually took over, but 8-Tracks paved the way.','/images/8_track-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('clippy','Clippy','Personal Computing',NULL,NULL,'The overly helpful paperclip who just wanted to be loved — and closed.','Clippy (real name: Clippit) popped up uninvited in Microsoft Office to offer help — usually when you didn’t need it. ''It looks like you''re writing a letter...'' became both meme and menace.

Introduced in Office 97, Clippy was supposed to make digital documents easier. Instead, it became the face of annoying assistants everywhere. Retired in the early 2000s, Clippy now lives on in internet legend and ironic merch.','/images/clippy-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('rotary-phone','Rotary Phone','Communication',NULL,NULL,'Dialing took effort. And if you messed up the last number? Start over.','Rotary phones weren’t just tools — they were patience trainers. Each spin of the dial was a commitment, especially if your friend’s number had too many 9s.

Common from the 1920s through the 1980s, rotary phones were a fixture in homes before buttons took over. No screens, no texting, just pure analog satisfaction and the occasional finger cramp.','/images/rotary_phone-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('calculator-watch','Calculator Watch','Wearables',NULL,NULL,'For the kid who was ready for math *anytime*. Bonus points if it had a tiny stylus.','The calculator watch was part gadget, part status symbol for nerds and geniuses alike. Tiny buttons, endless beeps, and serious brainiac vibes.

Popularized in the 80s and 90s by Casio, these watches combined timekeeping with 8-digit math — and looked surprisingly cool doing it. Smartphones stole their thunder, but calculator watches still pop up for retro flair.','/images/cal_watch-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('geocities','Geocities','Web Culture',NULL,NULL,'Your first homepage. Blinking text, MIDI music, and way too many GIFs.','Geocities gave the masses a place to build *whatever* they wanted — and it showed. Neon backgrounds, guestbooks, visitor counters, and unlicensed fan pages ruled the early web.

Launched in 1994 and bought by Yahoo in 1999, Geocities was a DIY internet village. It was shut down in 2009, but parts live on in archives, forever preserving the chaos and creativity of the early web.','/images/geocities-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('slide-projector','Slide Projector','Photography',NULL,NULL,'Click, whirr, *next slide*. Family vacations never looked so dusty.','Before PowerPoint and HDMI, there was the slide projector — a box of light, noise, and nostalgia. You loaded your slides, dimmed the lights, and subjected guests to a slow scroll through your summer road trip.

Used widely from the 50s through the 80s, slide projectors were a classroom staple and living room centerpiece. Today, they mostly live in attics — or ironically on Instagram.','/images/slide_projector-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('cassette-tape','Cassette Tape','Media',NULL,NULL,'Rewind with a pencil. Mixtape magic and hiss included.','Cassette tapes let you make mixtapes for your crush, your car, or your Walkman — sometimes all three. They clicked, hissed, and occasionally got eaten by the player, but we loved them anyway.

Launched in the 1960s by Philips, the cassette revolutionized personal audio. By the 80s, they were everywhere — until CDs and digital music came calling. But nostalgia runs deep, and cassettes have been making a slow, squeaky comeback.','/images/cassette_tape-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('netbook','Netbook','Personal Computing',NULL,NULL,'Tiny laptop, big dreams. Just don’t open too many tabs.','Netbooks were like laptops that hit puberty early — small, awkward, and full of potential. They were cheap, portable, and perfect for light browsing and word docs.

Popular in the late 2000s, netbooks made mobile computing affordable, but were often underpowered and cramped. Once tablets and ultrabooks hit the scene, the netbook quietly shuffled offstage. We salute its effort.','/images/netbook-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('blackberry','BlackBerry','Mobile',NULL,NULL,'The business phone with a keyboard so good, people mourned it.','Before the iPhone, there was the BlackBerry — email in your pocket, tactile keys under your thumbs, and a blinking red light that meant *you were important*.

BlackBerry phones were the go-to for execs, government workers, and anyone addicted to email. Their peak was the 2000s, but they couldn’t keep up with the touchscreen revolution. Still, no virtual keyboard ever quite matched that click.','/images/blackberry-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('tv-guide-channel','TV Guide Channel','Media',NULL,NULL,'You waited 10 minutes just to find out what was on at 8pm.','The TV Guide Channel was slow, unskippable, and strangely mesmerizing. You’d turn it on to check what''s playing... and end up watching it scroll for 15 minutes.

Part cable info, part background noise, it was a relic of pre-DVR patience. By the time you saw your show listed, it had already started. And yes, the ads on the top half were always weird.','/images/tv guide channel.jpeg');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('firewire','FireWire','Computer Hardware',NULL,NULL,'Apple’s fast little port that almost made it.','FireWire was supposed to be the future of fast data transfer. It zipped video from camcorders and audio from interfaces with speed USB couldn’t touch — at least at first.

Apple loved it. Video editors loved it. But USB 2.0 got cheaper and more widespread, and FireWire faded into niche use. A cool port with a cooler name that just couldn’t win the popularity contest.','/images/firewire-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('tivo','TiVo','Media',NULL,NULL,'The DVR that taught us how to pause live TV — and skip commercials like rebels.','TiVo felt like magic. You’d pause live TV to grab a snack, rewind to catch that joke again, or fast-forward through ads like some kind of remote-wielding wizard.

Launched in 1999, TiVo was the original digital video recorder (DVR) that made watching TV feel like time travel. It let you binge before bingeing was a thing and became a verb in the process. Eventually, cable companies copied the idea, and streaming buried it. But for a while, TiVo was peak couch power.','/images/vivo-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('myspace','MySpace','Web Culture',NULL,NULL,'The original social network — complete with glitter, chaos, and your Top 8.','MySpace was where HTML met hormones. You’d spend hours tweaking your profile song, ranking your friends, and throwing virtual glitter all over your page.

Launched in 2003, MySpace gave everyone a crash course in personal branding and passive-aggressive friend management. Tom was everyone’s first friend — and honestly, the most loyal. It was messy, loud, and kind of perfect before Facebook showed up with its clean lines and real names.','/images/myspace.jpeg');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('ipod-classic','iPod Classic','Media',NULL,NULL,'1,000 songs in your pocket — and a scroll wheel that felt *just right*.','The iPod Classic was the digital mixtape king. That satisfying click wheel, the grayscale screen, and the ability to carry your entire music library in your jeans — it changed everything.

Released in 2001, the iPod wasn’t the first MP3 player, but it was the one that got it right. It turned Apple into a lifestyle and gave us those iconic silhouette ads. Eventually, it was replaced by phones, but nothing ever scrolled quite like it.','/images/Apple-iPod-Original-1st-Generation-Specs-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('google-glass','Google Glass','Wearables',NULL,NULL,'The future was on your face. Unfortunately, so were the looks you got.','Google Glass was part gadget, part social experiment. You wore it on your face, took photos with a wink, and learned very quickly that not everyone loved being around a cyborg.

Released in 2013 as an early AR headset, Glass had promise — notifications, directions, camera — but also privacy concerns and a sky-high price tag. It didn’t go mainstream, but it walked so future wearables could learn how *not* to make people uncomfortable.','/images/google_glass-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('ask-jeeves','Ask Jeeves','Web Culture',NULL,NULL,'Before Google, we asked a butler. He tried his best.','Ask Jeeves was your polite internet butler. You typed out full questions like, ''What’s the weather like in Paris?'' and he’d fetch answers with a digital bow.

Launched in 1996, it stood out in the early search engine crowd by encouraging natural language. But as algorithms improved, Jeeves got out-Googled and eventually disappeared from the homepage — probably to enjoy early retirement in a virtual mansion.','/images/ask_jeeves-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('vhs-rewinder','VHS Rewinder','Media',NULL,NULL,'Because rewinding in the VCR was just too slow. Be kind, rewind — fast.','Before Netflix, there was Blockbuster. And before returning your tape, you had to rewind it — or risk the wrath of late fees and passive-aggressive stickers.

Enter the VHS rewinder: a separate little machine that did one job and did it fast. Some looked like racecars. Some made weird noises. All of them saved your VCR’s motor from an early death. A truly niche appliance with a very specific kind of glory.','/images/VHS_tape_rewinder-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('windows-xp','Windows XP','Personal Computing',NULL,NULL,'The rolling green hills. The startup chime. The last time Windows felt cozy.','Windows XP was like your favorite hoodie — comfy, reliable, and somehow still running on that one computer in the basement.

Launched in 2001, it combined usability with the kind of visual flair that made people feel like computers weren’t just for work anymore. It stuck around for over a decade, resisting upgrades like a stubborn grandparent. And let’s be honest — that startup sound still lives rent-free in your brain.','/images/windows xp.jpeg');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('mapquest-printouts','MapQuest Printouts','Web Culture',NULL,NULL,'Turn left in 0.3 miles… if you can read your crumpled paper in time.','Before GPS talked to you, you talked to your passenger — usually while holding a printout from MapQuest, squinting at 10-point font.

Launched in 1996, MapQuest was the OG online navigation tool. You’d plan a route, print the turn-by-turns, and hope your ink didn’t run out. A wrong turn meant guessing, backtracking, and maybe stopping to ask for directions (gasp). RIP, glovebox printers.','/images/mapquest-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('nintendo-power-glove','Nintendo Power Glove','Gaming',NULL,NULL,'It looked cooler than it worked — and that was enough.','The Power Glove was 80s tech optimism in wearable form. You wore it, waved it, and hoped Mario would listen. He usually didn’t.

Released in 1989, it promised motion control gaming long before the Wii. It was clunky, awkward, and barely functional — but it looked so rad doing it. Immortalized in *The Wizard*, it remains a glorious example of style over substance.','/images/power_glove-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('cd-wallet','CD Wallet','Media',NULL,NULL,'A binder full of bangers — and at least one scratched copy of Linkin Park.','The CD wallet was your mobile music library, your personality, and a backseat heat trap for plastic discs. Flipping through it on a road trip? Peak 2000s energy.

Available in every size from ‘fits in your backpack’ to ‘basically luggage,’ it held burned mix CDs, that one weird trance album, and a few you definitely didn’t buy legally. It jingled. It zipped. It was the original Spotify playlist, but louder.','/images/cd_wallet-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('bluetooth-earpiece','Bluetooth Earpiece','Wearables',NULL,NULL,'Business in your ear, party on the other line.','The Bluetooth earpiece was the ultimate hands-free flex. If you walked around talking to the air in 2006, odds are you were closing a deal — or pretending to.

Worn mostly by sales reps, early adopters, and your one uncle who really leaned into tech trends, these little head-huggers freed up your hands and made you feel important. Siri may live in our phones now, but these paved the way for talking to our tech.','/images/Bluetooth_headset-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('punch-cards','Punch Cards','Computer Hardware',NULL,NULL,'Before keyboards, you programmed with holes. Very, very slowly.','Punch cards were the OG programming method — stacks of cardboard with carefully placed holes that told the computer what to do. One typo? Start over.

They date back to the 1800s but became computing staples through the 60s and 70s. Used in early IBM machines, punch cards were fragile, confusing, and deeply satisfying to stack. They''re basically ancient floppy disks, but less convenient.','/images/punched_card-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('realplayer','RealPlayer','Media',NULL,NULL,'The video player that buffered like its life depended on it.','RealPlayer was one of the first ways to stream media online — and one of the first reasons you learned what ''buffering'' meant.

Released in 1995, it let you play video and audio in proprietary formats. It also installed toolbars you didn’t want and played video in a window the size of a postage stamp. But hey — it worked (sometimes), and that made it revolutionary.','/images/real player.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('physical-media-rentals','Physical Media Rentals','Media',NULL,NULL,'Friday night wasn’t complete without a trip to the video store.','Blockbuster. Hollywood Video. Family-owned joints with carpets that smelled like popcorn and ambition. Physical media rentals were a whole vibe.

You’d wander the aisles, judge covers, fight for the last copy of *The Matrix*, and maybe grab a Butterfinger at checkout. The late fees were real. The memories? Even more so.','/images/vhs rental store.jpg');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('under-construction-gif','The Under Construction GIF','Web Culture',NULL,NULL,'If your webpage didn’t have this, was it even a webpage?','Ah yes, the blinking jackhammer guy. A staple of Geocities, Angelfire, and every page that dreamed of being something… someday.

The ‘Under Construction’ GIF was the neon sticky note of the early web. No updates? No problem. Toss in a GIF and let the world know greatness was coming. Eventually.','/images/under_costruction-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('trackball-mouse','Trackball Mouse','Computer Hardware',NULL,NULL,'Spin the ball, steer your destiny. Or at least your cursor.','The trackball mouse was part controller, part conversation piece. Instead of dragging a mouse, you spun the ball like a tiny arcade game.

Popular with graphic designers and office rebels, it offered precision — and occasional wrist confusion. It still has fans today, but most folks moved on to scroll wheels and touchpads. RIP, thumb calluses.','/images/trackball_-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('internet-explorer-6','Internet Explorer 6','Web Culture',NULL,NULL,'The browser you loved to hate — but only because you had to use it.','IE6 was the browser that came with your PC, whether you wanted it or not. It was slow, insecure, and incompatible with half the web — but it was *there*.

Released in 2001, IE6 stuck around for way too long thanks to corporate IT inertia and lack of competition. It gave developers nightmares and security teams headaches. If you ever had to write a CSS hack just for IE6, you deserve a medal.','/images/internet_explorer_logo_6.webp');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('digital-picture-frame','Digital Picture Frame','Personal Computing',NULL,NULL,'Because grandma needed a slideshow… but techier.','Digital picture frames were supposed to modernize your mantle. Load in a memory card, and boom — a never-ending slideshow of slightly oversharpened photos.

They felt futuristic in the 2000s but often had clunky interfaces and screens that washed out in sunlight. Still, they were a staple gift for birthdays, holidays, and grandparents with too many grandkids to frame.','/images/digital_picture_frame-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('minidisc','MiniDisc','Media',NULL,NULL,'The forgotten middle child between CDs and MP3s.','MiniDiscs were compact, rewritable, and durable — a perfect bridge between analog and digital music. But somehow, they just never caught on.

Released by Sony in 1992, MiniDiscs had all the makings of a hit. But with CDs dominating and MP3s on the rise, it got lost in the shuffle. Audiophiles still praise it, but the rest of us barely knew it existed.','/images/minidisc-removebg-preview.png');
INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('flash-intros','Flash Website Intros','Web Culture',NULL,NULL,'Skip Intro? Please. This was the *main event* in 2003.','Flash intros were the overdramatic red carpet of early websites. Animated logos, swooshing text, epic soundtracks — and a loading bar that took forever.

They were flashy (literally), unnecessary, and extremely cool at the time. But they died with the fall of Flash, taking autoplay audio and unnecessary wait times with them. A beautiful, bloated chapter in web history.','/images/flash_website_intros.png');
COMMIT;