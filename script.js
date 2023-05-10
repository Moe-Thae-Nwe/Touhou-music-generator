const song = [//Highly Responsive to Prayers
  "A Sacred Lot / A Sacret Lot", "Eternal Shrine Maiden", "Yin-Yang ~ The Positive and Negative / The Positive and Negative", "A Soul Devoted to the Gods ~ Highly Responsive to Prayers / Highly Responsive to Prayers", "Eastern Tale of Fancy", "Angel's Legend", "Oriental Magician", "Blade of Banishment", "Magic Mirror", "the Legend of KAGE", "Now, Until the Moment You Die", "Theme of Turning to Hell / We Shall Die Together / Civilization of Magic", 'Angel of a Distant Star ~ The "★Alice-in-Wonderland" Angel / Swordsman of a Distant Star / Angel of a Distant Star', "Iris", "Shrine of the Wind",
  //Story of Eastern Wonderland
  "Eastern Demon-Sealing Record ~ Pure Land Mandala", "Hakurei ~ Eastern Wind", "She's in a temper!!", "End of Daylight", "Power of Darkness", "World of Fantasies", "Bet on Death", "Himorogi, Burn in Violet", "Love-Coloured Magic", "Eastern Demon-Sealing Record ~ Spectral Boisterous Dance", "Complete Darkness", "Crazy Magic / Extra Love", "The Tank Girl's Dream", "Forest of Tono", "Crossing the Blue Sky / Legendary Wonderland", "Hakurei Shrine Grounds", "Sunfall", "Demon-Sealing Finale",
  //Phantasmagoria of Dim. Dream
  "A Dream Transcending Space-Time", "Selection", "Eastern Mystical Tale of Romance", "Reincarnation", "Dim. Dream", "Tabula Rasa ~ The Empty Girl", "Maniacal Princess", "Vanishing Dream ~ Lost Dream", "Visionary Game ~ Dream War", "Decisive Magic Battle! ~ Fight it out!", "Disunified Field Theory of Magic", "Sailor of Time", "Adoration of Magic", "Strawberry Crisis!!", "Dream of Eternity", "Eastern Blue Sky", "Eternal Full Moon", "Maple Dream...", "Ghostly Person's Holiday", "Victory Demonstration", "Game Over", "Winds of Time", "Starbow Dream", "Phantasmagoria ~ Hardworking Day After Dark / Phantasmagoria",
  //Lotus Land Story
  "Gensoukyou ~ Lotus Land Story", "Witching Dream", "Selene's Light", "Decoration Battle", "Break the Sabbath", "Scarlet Symphony ~ Scarlet Phoneme", "Bad Apple!!", "Spirit Battle ~ Perdition Crisis", "Alice Maestra", "Maiden's Capriccio ~ Cappriccio", "Vessel of Stars ~ Casket of Star", "Lotus Love", "Sleeping Terror", "Dream Land", "Faint Dream ~ Inanimate Dream", "The Inevitably Forbidden Game", "Illusion of a Maid ~ Icemilk Magic", "Cute Devil ~ Innocence", "Days", "Peaceful", "Arcadian Dream", "Those Who Live in Illusions", "Lotus Road", "Dreamy Pilot", "Incomplete Plot", "Border Land", "Magic Shop of Raspberry", "Crescent Dream",
  //Mystic Square
  "Bizarre Romantic Story ~ Mystic Square", "Dream Express", "Magic Square", "Dimension of Reverie", "Spiritual Heaven", "Romantic Children", "Plastic Mind", "Maple Wise", "Forbidden Magic", "Crimson Maiden ~ Crimson Dead!!", "Treacherous Maiden ~ Judas Kiss", "The Last Judgement", "Doll of Misery", "End of the World ~ World's End", "Legendary Illusion ~ Infinite Being", "Alice in Wonderland", "The Grimoire of Alice", "Shinto Shrine", "Endless", "Eternal Paradise", "Mystic Dream", "Peaceful Romancer", "Soul's Resting Place"
  //Shuusou Gyoku
  "Autumn Frost Orb ~ Clockworks", "False Strawberry", "Primrose Shiver", "Fantastic Imperial Capital", "Disastrous Gemini", "Illusion of Flowers, Sky of Scarlet Dreams", "Firmament Army", "Illusionary Sputnik Night", "Mechanical Circus ~ Reverie", "Illusionary Girl from Canaveral", "Magical Girl's Crusade", "Antique Terror", "Dream Machine ~ Innocent Power", "Fantasy Science ~ Doll's Phantom", "Girl's Divinity ~ Pandora's Box", "Silk Road Alice", "The Witches' Ball ~ Magus", "Dichromantic Lotus Butterfly ~ Ancients", "Herselves", "Titled Maid", "Fly Above Hatoyama at Night"
]

const src = [//Highly Responsive to Prayers
  "Touhou Reiiden ~ Highly Responsive to Prayers Title screen", "Touhou Reiiden ~ Highly Responsive to Prayers Theme of Levels 1 - 4, Hell Levels 16 - 19", "Touhou Reiiden ~ Highly Responsive to Prayers Shingyoku's Theme", "Touhou Reiiden ~ Highly Responsive to Prayers Theme of Makai Levels 6 - 9 and Credits Theme", "Touhou Reiiden ~ Highly Responsive to Prayers YuugenMagan and Mima's Theme", "Touhou Reiiden ~ Highly Responsive to Prayers Theme of Makai Levels 11 - 14", "Touhou Reiiden ~ Highly Responsive to Prayers Theme of Hell Levels 11 - 14", "Touhou Reiiden ~ Highly Responsive to Prayers Elis and Kikuri's Theme", "Touhou Reiiden ~ Highly Responsive to Prayers Sariel's First Theme", "Touhou Reiiden ~ Highly Responsive to Prayers Sariel's Second Theme", "Touhou Reiiden ~ Highly Responsive to Prayers Kongara's theme", "Touhou Reiiden ~ Highly Responsive to Prayers Ending Theme", "Touhou Reiiden ~ Highly Responsive to Prayers Unused Track",
  //Story of Eastern Wonderland
  "Touhou Fuumaroku ~ Story of Eastern Wonderland Title Screen Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Stage 1 Theme", "Touhou Fuumaroku ~ Rika's First Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Stage 2 Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Meira's Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Stage 3 Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Five Magic Stones' Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Stage 4 Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Marisa's Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Final Stage Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Mima's Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Extra Stage Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Rika's Second Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Ending Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Staff Roll Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Unused", "Touhou Fuumaroku ~ Story of Eastern Wonderland Unused", "Touhou Fuumaroku ~ Story of Eastern Wonderland Unused",
  //Phantasmagoria of Dim. Dream
  "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Title Screen Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Character Selection", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Reimu's Dream", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Mima's Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Marisa's Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Ellen's Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Kotohime's Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Kana Anaberal's Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Asakura Rikako's Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Round 7 CPU Battle Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Midboss Demo theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Kitashirakawa Chiyuri's Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Yumemi Demo Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Okazaki Yumemi's Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Common Ending Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Daytime Ending Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Nighttime Ending Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Staff Roll", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Name Registration", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Victorious Demo Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Game Over", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Unused", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Unused", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Unused",
  //Lotus Land Story
  "Touhou Gensoukyou ~ Lotus Land Story Title Screen", "Touhou Gensoukyou ~ Lotus Land Story Reimu's Stage 1 Theme", "Touhou Gensoukyou ~ Lotus Land Story Marisa's Stage 1 Theme", "Touhou Gensoukyou ~ Lotus Land Story Orange's Theme", "Touhou Gensoukyou ~ Lotus Land Story Stage 2 Theme", "Touhou Gensoukyou ~ Lotus Land Story Kurumi's Theme", "Touhou Gensoukyou ~ Lotus Land Story Stage 3 Theme", "Touhou Gensoukyou ~ Lotus Land Story Elly's Theme", "Touhou Gensoukyou ~ Lotus Land Story Stage 4 Theme", "Touhou Gensoukyou ~ Lotus Land Story Reimu's Theme", "Touhou Gensoukyou ~ Lotus Land Story Marisa's Theme", "Touhou Gensoukyou ~ Lotus Land Story Stage 5 Theme", "Touhou Gensoukyou ~ Lotus Land Story Yuuka's First Theme", "Touhou Gensoukyou ~ Lotus Land Story Final Stage Theme", "Touhou Gensoukyou ~ Lotus Land Story Yuuka's Second Theme", "Touhou Gensoukyou ~ Lotus Land Story Extra Stage Theme", "Touhou Gensoukyou ~ Lotus Land Story Mugetsu's Theme", "Touhou Gensoukyou ~ Lotus Land Story Gengetsu's Theme", "Touhou Gensoukyou ~ Lotus Land Story Bad Ending", "Touhou Gensoukyou ~ Lotus Land Story Good Ending", "Touhou Gensoukyou ~ Lotus Land Story Staff Roll", "Touhou Gensoukyou ~ Lotus Land Story Name Registration", "Touhou Gensoukyou ~ Lotus Land Story Unused", "Touhou Gensoukyou ~ Lotus Land Story Unused", "Touhou Gensoukyou ~ Lotus Land Story Unused", "Touhou Gensoukyou ~ Lotus Land Story Unused", "Touhou Gensoukyou ~ Lotus Land Story Unused", "Touhou Gensoukyou ~ Lotus Land Story Unused", 
  //Mystic Square
  "Touhou Kaikiden ~ Mystic Square Title Screen Theme", "Touhou Kaikiden ~ Mystic Square Stage 1 Theme", "Touhou Kaikiden ~ Mystic Square Sara's Theme", "Touhou Kaikiden ~ Mystic Square Stage 2 Theme", "Touhou Kaikiden ~ Mystic Square Louise's Theme", "Touhou Kaikiden ~ Lotus Land Story Stage 3 Theme", "Touhou Kaikiden ~ Mystic Square Alice's First Theme", "Touhou Kaikiden ~ Mystic Square Stage 4 Theme", "Touhou Kaikiden ~ Mystic Square Yuki and Mai's Theme", "Touhou Kaikiden ~ Mystic Square Yuki's Theme", "Touhou Kaikiden ~ Mystic Square Mai's Theme", "Touhou Kaikiden ~ Mystic Square Stage 5 Theme", "Touhou Kaikiden ~ Mystic Square Yumeko's Theme", "Touhou Kaikiden ~ Mystic Square Final Stage Theme", "Touhou Kaikiden ~ Mystic Square Shinki's Theme", "Touhou Kaikiden ~ Mystic Square Extra Stage Theme", "Touhou Kaikiden ~ Mystic Square Alice's Second Theme", "Touhou Kaikiden ~ Mystic Square Bad Ending Theme", "Touhou Kaikiden ~ Mystic Square Good Ending Theme 1", "Touhou Kaikiden ~ Mystic Square Good Ending Theme 2", "Touhou Kaikiden ~ Mystic Square Staff Roll", "Touhou Kaikiden ~ Mystic Square Extra Ending Theme", "Touhou Kaikiden ~ Mystic Square Name Registration"
]

const vid = [//Highly Responsive to Prayers
  "https://youtu.be/R9HjUslCi00", "https://youtu.be/nWJ-MWfdiOM", "https://youtu.be/MvKCbr9uz7M", "https://youtu.be/zh0LmBOubgM", "https://youtu.be/No6uEomo8VQ", "https://youtu.be/m6QMRKjnFVw", "https://youtu.be/enKZ7FD81wI", "https://youtu.be/T4O63PNPTXU", "https://youtu.be/zi6A2E4nay4", "https://youtu.be/1aJmgfdMpbw", "https://youtu.be/bzt87vI6YT0", "https://youtu.be/xJi6XDROyJw", "https://youtu.be/_vNRLUU0YOI", "https://youtu.be/JT-qd0-pLyQ", "https://youtu.be/DdCsWBMHqfU",
  //Story of Eastern Wonderland
  "https://youtu.be/WRMVJZi9afI", "https://youtu.be/ql7MCX5CLho", "https://youtu.be/29jTZiQZgV0", "https://youtu.be/7SUHh_ZzaeA", "https://youtu.be/5C8vjzAbfkQ", "https://youtu.be/PC1Gx7X8uB8", "https://youtu.be/JQBQXzxiMcg", "https://youtu.be/Z7wlAEqOu6s", "https://youtu.be/YroQw984m-I", "https://youtu.be/n0Vsox5q3m4", "https://youtu.be/orIqtLELaqI", "https://youtu.be/Htotsd2GMuQ", "https://youtu.be/3-5YjFKoxD8", "https://youtu.be/5WZrzSQjDI0", "https://youtu.be/5jRkU-eS7XE", "https://youtu.be/RqMEVFTkHAA", "https://youtu.be/1rDbfSPYfcM", "https://youtu.be/Og1Zpe2MK4A",
  //Phantasmagoria of Dim. Dream
  "https://youtu.be/Q2Mzy15QSaI", "https://youtu.be/3rg6Gz7YcOg", "https://youtu.be/5FtxvAUc-9U", "https://youtu.be/unvd6VIOd0k", "https://youtu.be/GY6UfBKktEY", "https://youtu.be/8j8ViWM-Bns", "https://youtu.be/ZYWLgPuYyjQ", "https://youtu.be/un1Vv0lNrmM", "https://youtu.be/un1Vv0lNrmM", "https://youtu.be/8WUYLT9E5ew", "https://youtu.be/iPB8XrjK_zQ", "https://youtu.be/n0FK7sqgytQ", "https://youtu.be/sUmLAHCY0Vs", "https://youtu.be/DfvnXALuVXc", "https://youtu.be/09vW0lQEVaM", "https://youtu.be/N7r7iXcys_8", "https://youtu.be/-M8FzQ0zZfk", "https://youtu.be/Ym778oHGEhg", "https://youtu.be/jLqrQy5wc4Q", "https://youtu.be/bvd4XdQsMjQ", "https://youtu.be/VIO5AAbroNA", "https://youtu.be/ZLuaxdViyK0", "https://youtu.be/bV6CRjn_8GM", "https://youtu.be/5VPXSZhnlrY",
  //Lotus Land Story
  "https://youtu.be/Uz7JXAxj2ZU", "https://youtu.be/pVWW8h1KAl4", "https://youtu.be/ZbmNKjJXF7g", "https://youtu.be/-AVvs0W_o8g", "https://youtu.be/iOhQJ4hISj4", "https://youtu.be/8bo9R1pdF8M", "https://youtu.be/w7IoHiD0Kuo", "https://youtu.be/7k0EVISpxow", "https://youtu.be/jY6U8prDEY4", "https://youtu.be/6r_826wNorw", "https://youtu.be/4kaXK4ab95M", "https://youtu.be/vf1pHbFUkEE", "https://youtu.be/RhZkDOayjvQ", "https://youtu.be/lWQ3l2t2p9c", "https://youtu.be/z-5lSz9r0H8", "https://youtu.be/9OKt9K23I1g", "https://youtu.be/BTDE3Y2n-pI", "https://youtu.be/HymHWSc--sY", "https://youtu.be/CeZG6pwMSbo", "https://youtu.be/IbwFk7Md6JA", "https://youtu.be/4SIpy7UJBPI", "https://youtu.be/XgFRI8IU2gc", "https://youtu.be/KHxD79y0xR0", "https://youtu.be/Jx3OcN_sFmk", "https://youtu.be/FOXvc1-rXzo", "https://youtu.be/OKdflesUb5E", "https://youtu.be/Q0wTljpCHdU", "https://youtu.be/XVFM-KhENtc",
  //Mystic Square
  "https://youtu.be/tJULBrA7XD8", "https://youtu.be/W8x3Oh6GaJ4", "https://youtu.be/2uMuj0QF86M", "https://youtu.be/e9-UdiZI-zY", "https://youtu.be/NZfQznR6FPw", "https://youtu.be/nMaqhhrZkvc", "https://youtu.be/ijituRe039w", "https://youtu.be/ZfUV5GjAhRs", "https://youtu.be/OQvFZU524Mg", "https://youtu.be/Vsj7QloW5Zo", "https://youtu.be/g-xX4q8Lu2Q", "https://youtu.be/macGxMXKjI8", "https://youtu.be/sCDLJFdDSjs", "https://youtu.be/4NDYUMKFwCk", "https://youtu.be/VjqVDoL15g8", "https://youtu.be/n0jbvJjTXPw", "https://youtu.be/dtlSEofUEK4", "https://youtu.be/8NA2cCYOxXo", "https://youtu.be/_SDaLsimBtk", "https://youtu.be/PzGP4Sr2-Sc", "https://youtu.be/_zLyHd5jB7c", "https://youtu.be/F3zGyOs91eg", "https://youtu.be/2M3thjGSX1E"
]

const comment = [//Highly Responsive to Prayers
  "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", 
  //Story of Eastern Wonderland
  "The title theme. It's a pretty long song for a title screen, so the demo will start if you try to listen to the whole thing. \n So, what part of this is Eastern?", "The first stage theme. It (the atmosphere) sounds heavy. A lot of shmups have really upbeat first stage themes, and this song is, too, but it's so dark. Even though the story for this game is a joke, the music is so serious, and the enemies are so hard. \n I like that kind of mismatch.", "The stage 1 boss theme. I tried to make it feel as weak as possible. I think this song sounds a little oriental.", "The second stage theme, I actually wrote this quite some time ago, so I think it feels different than the other songs. Actually, I wrote this song envisioning the dawn, but there weren't any scenes like that in the game, so I'm using it for a night scene. I wanted it to contrast the first stage theme - day and night, light and darkness - but the first stage theme was too heavy. Mmmm~", "The stage 2 boss theme. I tried making something cool, but it's really short, isn't it?", "I wonder just where the World of Fantasies is? I don't think it's anywhere in outer space, but...", "The third stage boss theme. The boss suddenly gets strong in this stage. However, the song has a long loop, so about the time the main melody ends; the boss should be dead.", "The '~ni moe' in the title means burning, I think it's definitely different from moe~ The rhythm is unusual. In a word, strange. Ah, what's Oriental about this song, anyway~", "Marisa's theme. She's the strongest magical girl. I tried to make the song feel like something from an anime, but try as I might, I just couldn't make something that had that heroine feel to it (I'm still practicing), so I tried to make something strong and witchy. I think it feels a little oriental.", "This was going to be the title song. Now it's an uninteresting stage 5 theme. To tell you the truth, this is the first song I made in PMD, so it didn't go that well, but it's the only song that changes rhythm. (The only one?) Still, it's the song I'm most familiar with.", "Mima's theme. There are a few points that I think are promised to last boss themes. Needless to say, it can't be too light, it can't be too simple, and it has to be mysterious, among other things. Of course, that's my opinion, so others may not agree.", "This is the Extra Stage song. This song and the next are all, are you sure you want to keep going? Let's do our best to beat the next person with a no continue clear. (Easy is fine, too.) So, that's what the song is like. Yep. Uja uja...", "The theme for a certain girl genius. At the early par, it's deliberately meant to feel particularly cute. In later part, I intended to finish the song in a cool style. The song uses the same progression as Extra Love. Still, conversely, this song is... too strong (^^;", "The ending song. It's a little dark, but the ending isn't really dark at all.", "The staff roll song. I thought the staff roll song should be an upbeat song with strong rhythm, but... It's energetic, but isn't it a little too dark?", "I made this, intending for it to be the first stage theme, but... Since the early songs in Highly Responsive to Prayers were so dark, so I thought I'd make this one brighter, and it ended up like this. But, I threw it out (^^;;;;", "I was going to use this for stage 2. It's not bad, but... It felt half-hearted, so I threw it out.", "I had planned on using this for the staff roll , but... The rhythm is so light it's almost unthinkable now (^^;;; It has a rather fine pedigree, but it didn't balance well with the other songs in the game, so I threw it out.",
  //Phantasmagoria of Dim. Dream
  "This is the title music. Suddenly it doesn't seem too Touhou-like, right? \n Even if I do say so myself, for someone who's made music with such an unsuitable atmosphere I don't look too worried, I've been thinking lately. \n But lately, maybe it's because I've become accustomed to such an atmosphere, or maybe I actually am in this kind of atmosphere. I feel my game has to be like this or it's no good. \n In any case, right from the beginning I'm already talking about music like this. Oh no!", "What should I talk about for this song? (lol) \n It's a pretty heavy song, isn't it? \n Why is the character select song for a game with such a silly story like this? \n Oh well, it's pretty short... (The song, the development time, and the comments.)", "The game's main character also happens to be a shrine maiden, but... \n Is this really a shrine maiden's song? Well, uh. That's. You see. \n But, I do like it. And it does have a rather oriental feel to it, and the melody is pretty nice. Right? (Begging)", "For those who don't know Mima, she was the last boss from the last game, Story of Eastern Wonderland. \n This time, she's not a boss or anything, just a normal character, so I tried not to make her theme song too badass... \n You know, I just don't get her personality at all. \n (Even though she's my own character *sweatdrop*) \n Well, what about the song. The melody for the main chorus part is very simple, but feels really nice... Doesn't it? (Maybe because it's simple?)", "For those who don't know Mima, she was the last boss from the last game, Story of Eastern Wonderland. \n This time, she's not a boss or anything, just a normal character, so I tried not to make her theme song too badass... \n You know, I just don't get her personality at all. \n (Even though she's my own character *sweatdrop*) \n Well, what about the song. The melody for the main chorus part is very simple, but feels really nice... Doesn't it? (Maybe because it's simple?)", "Yeees. The composer is not too good at cute songs. This song doesn't seem very cute, does it? \n (If anyone knows the comic Ellen came from... sorry, it doesn't match her very well, does it?) \n Well, anyway, this song is actually a song I wrote a loooooong time ago to practice MIDI; I rewrote it all in FM. \n It was one of my favorite original songs, but it was completely Oriental-style, and... (I think this song is, too ...) I don't know how it ended up being a foreign girl's theme.", "She's a strange character. It's a strange song. Yes. \n What to say, what to say .... yeah. \n Well, I guess the high-speed xylophone-like sound is the main attraction for this song. \n Anyway, the melody's pretty weird. Do you all think so too? I knew it.", "She isn't human, either... \n When I'm making up characters, I'll write down a bunch on paper, and just choose some. This character has a pretty loli feel about her, but... \n The song is unusually cool. \n I said this before, but I'm not that good at making cute songs. This song turned out the same way... \n A cuter song would have been nice for this character... \n Aahhhh, all the songs feel kind of half-assed~ (It's cool, but it's got kind of girly instrumentation in it... ) Oh, well, it's okay. I guess I like this kind of song, after all.", "I like this song quite a bit, I really do, but it doesn't really fit the character at all, does it (^^; \n Oh well. This song's loop is pretty long, but it's pretty repetitive. \n Let's see, but, aside from the bosses, isn't it the coolest of the seven characters' themes? (Especially the main part, and even the intro)", "This song doesn't play in VS mode. Who the 7th is depends on which character you picked, but this song plays no matter who that was. So, if it's someone like Ellen, then this song will be totally out of place (^^; \nI was going for a boss feel, not a last boss feel, but... \n The main melody is almost the same as Reimu's theme. \n The main part is pretty cool... ...right? Well... maybe it's kind of odd?", "The demo is a little too long, isn't it? \n Honestly, since this song is so short, it has to loop a few times. \n Well, it seems like all the songs in this game are strangely cool ... \n By the way, if you press ESC during the demo, you can speed through it. If you press it twice, you can skip through it. Since it's a pretty pointless scene.", "This is the theme for the mid-boss who I don't know why she's there (^^; \n I was also going for a boss theme, not a last boss theme, but. Ummm. \n This is the only song in the game that's sycned up with the STAGE 8 START display. Did you notice? \n Well, anyway, that's a real sailor uniform. Er, ahh~", "This is pretty short. Still, I tried to give it that certain feeling. Well, that's about it.", "Well, I guess this is the last boss theme. I had a hard time with this one. Well, it turned out, so I guess it went well in the end. Since all the other characters' songs were pretty cool, I worked hard at this one. I ended up using a guitar-like sound, which I don't do often. And, the main part(?)'s melody was supposed to be really high-class, but. Maybe it's not?", "It's very ending-ish, but does it really match the ending scenes? 　Well, it's short.", "The song that plays during daytime endings. \n It definitely makes me think of shrines. Actually, this is the most shrine-maiden-ish song here, isn't it? \n See, doesn't this kind of song always play for shrines and shrine maidens in eroge? (lol)", "The song that plays during night-time endings. All the endings have a particular oriental feel to them. Hooray!", "Somehow it doesn't seem to fit the game at all either ... oh well. \n Still, I think this song works well as a staff roll song. \n It's cool, isn't it? Even if I'm the only member of the staff (lol) \n Maybe I put in too many weird parts~", "I remember finishing making this in no time at all. Well, it is a simple melody.", "", "", "I used this as I was building the game system before I made any characters. \n There weren't any characters that really fit this song, so I tossed it.", "A very spacey(?) song. \n I don't make many songs like this one. It's the only one that really seems like it's a STG song, but (because of that?) I tossed it. \n (Because there aren't any characters that fit this song!)", "For some reason, this song that actually has a pyramid feel to it got tossed. \n I wonder what kind of character would go with this song?",
  //Lotus Land Story
  "It's the usual. And we've just about had them enough already (^^;; \n I wonder what makes a song Japanese-styled. \n Hm, well, I do like the song itself quite a bit, but... \n Not much else, aside from the fact that it doesn't really match the title screen (^^;;; \n Well, I suppose even that (not matching the title picture) is a trademark of this series (^^; (Not really)", "Weeell. This song turned out kind of a pretty cool one. But, it might be a little too dark. \n There's that drum pattern in the second half that's almost out of desperation. Just a little. \n Yep. Ah, well.", "This is a pretty cute song, isn't it? \n I guess the kind of cute that you'd say fits a witch girl? (No way, it's definitely not.) \n I always write my songs pretty haphazardly, so I never really have any idea how they'll turn out. \n I do seriously put some thought into the theme, but... \n (By the way, this is a pretty cute song (^^;)", "The first boss song is pretty hard. It's popular for boss music nowadays to be dignified, but as you can see, most of the bosses in this series are cute girls, so I try to make their songs cool. \n So, why are the first boss songs hard, well, it's actually pretty easy for me to make a cool (sounding) song most of the time (I think). But, if the first stage boss theme is really cool, I don't have anything left over for the rest of the songs, and end up making something really weird - that's my pattern. \n So, it's a pretty serious problem. Well, what do you think of this song? (^^;;", "The patterns in this song are similar to those from last time. \n It starts bit-by-bit and goes pah-pa pah-pa (mysterious) \n It was actually pretty easy to make, so it didn't leave a strong impression (^^;", "My boss songs are basically short. If they're long, you might not be able to hear the whole thing. (^^; \n I was going for a song that would evoke the image of a westernized demon, but... ? \n Well, it has a nice feel (^^", "This song feels like my older songs. \n Well, since it started turning out weird, I did try to make it at least sound like something I might have written long ago ... \n It's nice to have something this rhythmical(?). And, it's very 3rd-stage-ish(??)...", "I kind of like this song. \n The stage 3 boss is kind of strong. The song has the same feel to it. \n She may look strong, but the song gives you the feeling you'll definitely win(?)", "I imagined a cool-looking Western-style mansion while making this song, and it ended up turning into something I really don't understand (^^; \n But, I think it has an altogether different atmosphere from the the other songs... \n (Or maybe it's the same (^^;;;)", "Yeah. I really like this song. \n The biggest problem, is no matter who listens, it's just not a shrine maiden song at all (^^; \n But, I think this song best expresses the atmosphere of this game. \n It's a little cute, too.", "It's hard to make weirder songs than this. \n The intro has a kind of boss-ish feel to it. \n It has a bit of a somber feel to it. \n (Hm, I wonder, yeah)", "I had no idea what this was when I made it, but it's grown on me now. \n Once you get used to it, you can see how it's quite cool, and how it has quite a nice feel. Quite. \n The stage is short, too, so in-game the song only loops once. Poor thing.", "I'm usually pretty haphazard in my song writing, but this time I pretty much had the thing all planned out (in my head) before I got started. \n I don't think I use this type of bass pattern very often, though. \n But, I didn't have many voices in the 26 version, so it didn't come out all that well (;_;", "This is a very short song (^^; \n I think it came out very lonely-sounding, too (^^;;; \n Well, in any case, is it, I wonder? \n Kind of. Uja~", "The last boss theme. It has a very final feel to it. \n I think it came out pretty cool somehow~ \n Nobody really knows if Yuuka herself is cool. \n Personally, I think I rather like her.", "I made this one fairly rhythmical (not) \n The main part is pretty simple, so it feels nice. I get the feeling listening to it that this is how my songs are most of the time. \n I like songs like this, but sometimes I want to write something with a different atmosphere.", "The younger sister, Mugetsu's, theme. Somehow, she looks like a maid. \n This is a pretty cool song, isn't it? Even though it's short. (Because it's short?) \n Well, in any case, it turned out to be a pretend-maid song like this.", "The theme for the older sister Gengetsu, the most terrible, most fearful boss. I wanted for it to have a real Western feel to it, but ... ? \n I was aiming for a song that was pretty similar to Mugetsu's theme. \n Rather, I was really hoping to come up with a Mr. Dracula sort of song ... (;_;", "Hmm. It's a song that feels like there's no reason for hopes or dreams. \n At least when I know I can't make bright songs, the bad end song will come out well. \n Except the good end feels like a bad end, too.", "Huh, it feels kind of peaceful. \n Maybe ... a little bright?", "Well, the staff roll is kind of cool, after all. (Is that all you can say? (^^;) \n It seems like a very simple song, but it might actually be a very simple song. \n Well, there's very little staff, so I don't really need a long staff roll song (^^) \n For some reason, it's a lot like a boss song (^^;;;", "Seems like there should be a game over song, too. \n Yeah. Maybe a little too energetic.", "I was going to use this as the stage 1 theme. \n But, I thought it was a little too light, so I didn't use it...", "I was going to use this as the stage 4 theme. \n I thought it was kind of air-headed, though, so I threw it out. \n But, maybe it's not that bad?", "I was going to use this as the stage 5 theme. \n But for some reason I threw it out. (laugh) \n It's pretty nice, too ...", "I was going to use this as the stage 6 theme. \n I thought the last stage theme should be a bit more mellow, though, so I threw it out.", "I was going to use this as the extra stage theme. \n But I thought the extra stage song should be a little lighter, so I cried and cried and threw it out.", "I was going to use this for the staff roll. \n It's not STG-esque, though, so I threw it out.",
  //Mystic Square
  "The usual title theme. \n This is the song that really determined the direction of the rest of the game's music. \n Not bad, huh? (^^;;;", "This is a fairly rhythmical song. \n For once (^^;; I created this with the idea of the East in mind. \n I hope you'll enjoy the Dream Express-like fast pace of the hook.", "This song really cements the image of the soundtrack of the game as a whole. \n It's got an atmosphere of a little glum elegance (^^; and cuteness (or so I hope). \n It kind of feels like the tone of Lotus Land Story comes through in the melody...", "I wanted it to have a catchy rhythm... \n Listening to it, I guess the melody is cool, too. \n Well, the stage 1 song had a nice rhythm, right? \n I wanted the stage 2 theme to have a sense of speed throughout this time, and, well, this is how it turned out.", "This is the theme for a boss who I don't know why she's even here. (^^;; \n This has way too much grit (lol). \n I probably could've done more with it, though...", "It has a pretty good Makai feel about it, doesn't it? \n The stage 1, 2 and 3 songs all turned out with a real sense of speed. \n Since it's Makai, I think it feels more western... hmm.", "If you listen carefully (?), it's pretty dark. ^^; \n I think the third stage boss of a shmup is a significant turning point, so I put some extra spirit into the making of this song. \n Well, it's not like I was slacking on the other songs or anything... (^^;;;)", "This ended up a pretty calm song all of a sudden. \n (Really, though?) \n This was a pretty hard song to make. \n But for what it's worth, it turned out pretty cool. \n (Didn't it?)", 'I was going for something simple, yet cool in this song. \n This song is closest to the songs from the last game. \n It was really easy to finish compared to "Maple Wise". (^^;;', "The melody somehow feels like something out of Story of Eastern Wonderland. \n All I can really remember is before I knew it, the song was done. \n It's kind of like something from my older games.", 'Compared to "Crimson Maiden", this one is a bit more musical. I figured she should be strong, since it\'s the 4th stage, so I gave this song that type of feel. (Which is?)', "I think I managed to make it feel pretty endgame-ish this time. \n Hmm, it's pretty cool, isn't it? \n I really like it(^^)", "This was a tough one. It has the most complex chord progressions I've ever done. \n I think this is the first song I worked all day to finish. \n I wanted to make this song pretty dark, so this is how it came out. \n I like this song a lot, so I hope you'll listen to it.", "The stage is just there for you to collect some items before the final boss, so it's pretty short. \n Actually, I wanted to try to do this with just a heartbeat sound, but this isn't that kind of game (lol)", "This is the last boss theme. Of course, I really put a lot of spirit into it. \n I was trying to make a song that had the right blend of coolness and cuteness. \n The main melody is pretty easy to remember, so it has a nice feel to it. \n Overall, I'm pretty fond of it.", "Fairy tale-esque and cool is what I was going for this time. \n Well, it's probably not fairy tale-esque, but it's pretty coooool. \n You have to dodge lots of bullets in the game, so you probably can't listen to it too closely, though. (lol)", "Compared to my other extra stage boss themes, this has heavy emphasis on the rhythm. \n No matter how cheap their attacks are, emerge victorious with a superior groove (^^;;", "It sounds like all my other good endings, but it's the bad ending. (lol) \n Well, I guess that's just because all my good ending themes were kind of dark.", "We've got unusually forceful ending themes this time. (lol) \n But it's very shrine-like. (^^;", "I wanted to make something like a piano solo, but... \n Yeah... (lol) \n It totally ends right in the middle, though...", "It's a very short song. \n Still, it's because I wanted to match what was happening on the screen with the music. \n In other words, it means there isn't much staff (so the staff roll is short). (lol)", "I figured I'd do a nice, rhythmical Japanese piece as rehabilitation. \n The rehabilitation failed. (lol) \n But I really like the song. (^^) \n I guess I just really like this kind of song (since I can only make this kind).", "I tried making it fairly Japanese sounding. \n Frankly, I feel like there should've been more Japanese-esque songs in the game, but... (lol)"
]

function generate() {
  let randint = Math.floor(Math.random() * song.length);
  document.getElementById("name").innerText = song[randint];
  document.getElementById("source").innerText = src[randint];
  document.getElementById("vid").src = vid[randint];
  document.getElementById("cmt").innerText = comment[randint];
}
