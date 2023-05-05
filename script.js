const song = [//Highly Responsive to Prayers
  "A Sacred Lot / A Sacret Lot", "Eternal Shrine Maiden", "Yin-Yang ~ The Positive and Negative / The Positive and Negative", "A Soul Devoted to the Gods ~ Highly Responsive to Prayers / Highly Responsive to Prayers", "Eastern Tale of Fancy", "Angel's Legend", "Oriental Magician", "Blade of Banishment", "Magic Mirror", "the Legend of KAGE", "Now, Until the Moment You Die", "Theme of Turning to Hell / We Shall Die Together / Civilization of Magic", 'Angel of a Distant Star ~ The "★Alice-in-Wonderland" Angel / Swordsman of a Distant Star / Angel of a Distant Star', "Iris", "Shrine of the Wind",
  //Story of Eastern Wonderland
  "Eastern Demon-Sealing Record ~ Pure Land Mandala", "Hakurei ~ Eastern Wind", "She's in a temper!!", "End of Daylight", "Power of Darkness", "World of Fantasies", "Bet on Death", "Himorogi, Burn in Violet", "Love-Coloured Magic", "Eastern Demon-Sealing Record ~ Spectral Boisterous Dance", "Complete Darkness", "Crazy Magic / Extra Love", "The Tank Girl's Dream", "Forest of Tono", "Crossing the Blue Sky / Legendary Wonderland", "Hakurei Shrine Grounds", "Sunfall", "Demon-Sealing Finale",
  //Phantasmagoria of Dim. Dream
  "A Dream Transcending Space-Time", "Selection", "Eastern Mystical Tale of Romance", "Reincarnation", "Dim. Dream", "Tabula Rasa ~ The Empty Girl", "Maniacal Princess", "Vanishing Dream ~ Lost Dream", "Visionary Game ~ Dream War", "Decisive Magic Battle! ~ Fight it out!", "Disunified Field Theory of Magic", "Sailor of Time", "Adoration of Magic", "Strawberry Crisis!!", "Dream of Eternity", "Eastern Blue Sky", "Eternal Full Moon", "Maple Dream...", "Ghostly Person's Holiday", "Victory Demonstration", "Game Over", "Winds of Time", "Starbow Dream", "Phantasmagoria ~ Hardworking Day After Dark / Phantasmagoria"
]

const src = [//Highly Responsive to Prayers
  "Touhou Reiiden ~ Highly Responsive to Prayers Title screen", "Touhou Reiiden ~ Highly Responsive to Prayers Theme of Levels 1 - 4, Hell Levels 16 - 19", "Touhou Reiiden ~ Highly Responsive to Prayers Shingyoku's Theme", "Touhou Reiiden ~ Highly Responsive to Prayers Theme of Makai Levels 6 - 9 and Credits Theme", "Touhou Reiiden ~ Highly Responsive to Prayers YuugenMagan and Mima's Theme", "Touhou Reiiden ~ Highly Responsive to Prayers Theme of Makai Levels 11 - 14", "Touhou Reiiden ~ Highly Responsive to Prayers Theme of Hell Levels 11 - 14", "Touhou Reiiden ~ Highly Responsive to Prayers Elis and Kikuri's Theme", "Touhou Reiiden ~ Highly Responsive to Prayers Sariel's First Theme", "Touhou Reiiden ~ Highly Responsive to Prayers Sariel's Second Theme", "Touhou Reiiden ~ Highly Responsive to Prayers Kongara's theme", "Touhou Reiiden ~ Highly Responsive to Prayers Ending Theme", "Touhou Reiiden ~ Highly Responsive to Prayers Unused Track",
  //Story of Eastern Wonderland
  "Touhou Fuumaroku ~ Story of Eastern Wonderland Title Screen Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Stage 1 Theme", "Touhou Fuumaroku ~ Rika's First Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Stage 2 Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Meira's Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Stage 3 Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Five Magic Stones' Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Stage 4 Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Marisa's Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Final Stage Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Mima's Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Extra Stage Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Rika's Second Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Ending Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Staff Roll Theme", "Touhou Fuumaroku ~ Story of Eastern Wonderland Unused", "Touhou Fuumaroku ~ Story of Eastern Wonderland Unused", "Touhou Fuumaroku ~ Story of Eastern Wonderland Unused",
  //Phantasmagoria of Dim. Dream
  "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Title Screen Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Character Selection", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Reimu's Dream", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Mima's Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Marisa's Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Ellen's Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Kotohime's Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Kana Anaberal's Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Asakura Rikako's Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Round 7 CPU Battle Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Midboss Demo theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Kitashirakawa Chiyuri's Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Yumemi Demo Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Okazaki Yumemi's Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Common Ending Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Daytime Ending Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Nighttime Ending Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Staff Roll", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Name Registration", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Victorious Demo Theme", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Game Over", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Unused", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Unused", "Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream Unused"
]

const vid = [//Highly Responsive to Prayers
  "https://youtu.be/R9HjUslCi00", "https://youtu.be/nWJ-MWfdiOM", "https://youtu.be/MvKCbr9uz7M", "https://youtu.be/zh0LmBOubgM", "https://youtu.be/No6uEomo8VQ", "https://youtu.be/m6QMRKjnFVw", "https://youtu.be/enKZ7FD81wI", "https://youtu.be/T4O63PNPTXU", "https://youtu.be/zi6A2E4nay4", "https://youtu.be/1aJmgfdMpbw", "https://youtu.be/bzt87vI6YT0", "https://youtu.be/xJi6XDROyJw", "https://youtu.be/_vNRLUU0YOI", "https://youtu.be/JT-qd0-pLyQ", "https://youtu.be/DdCsWBMHqfU",
  //Story of Eastern Wonderland
  "https://youtu.be/WRMVJZi9afI", "https://youtu.be/ql7MCX5CLho", "https://youtu.be/29jTZiQZgV0", "https://youtu.be/7SUHh_ZzaeA", "https://youtu.be/5C8vjzAbfkQ", "https://youtu.be/PC1Gx7X8uB8", "https://youtu.be/JQBQXzxiMcg", "https://youtu.be/Z7wlAEqOu6s", "https://youtu.be/YroQw984m-I", "https://youtu.be/n0Vsox5q3m4", "https://youtu.be/orIqtLELaqI", "https://youtu.be/Htotsd2GMuQ", "https://youtu.be/3-5YjFKoxD8", "https://youtu.be/5WZrzSQjDI0", "https://youtu.be/5jRkU-eS7XE", "https://youtu.be/RqMEVFTkHAA", "https://youtu.be/1rDbfSPYfcM", "https://youtu.be/Og1Zpe2MK4A",
  //Phantasmagoria of Dim. Dream
  "https://youtu.be/Q2Mzy15QSaI", "https://youtu.be/3rg6Gz7YcOg", "https://youtu.be/5FtxvAUc-9U", "https://youtu.be/unvd6VIOd0k", "https://youtu.be/GY6UfBKktEY", "https://youtu.be/8j8ViWM-Bns", "https://youtu.be/ZYWLgPuYyjQ", "https://youtu.be/un1Vv0lNrmM", "https://youtu.be/un1Vv0lNrmM", "https://youtu.be/8WUYLT9E5ew", "https://youtu.be/iPB8XrjK_zQ", "https://youtu.be/n0FK7sqgytQ", "https://youtu.be/sUmLAHCY0Vs", "https://youtu.be/DfvnXALuVXc", "https://youtu.be/09vW0lQEVaM", "https://youtu.be/N7r7iXcys_8", "https://youtu.be/-M8FzQ0zZfk", "https://youtu.be/Ym778oHGEhg", "https://youtu.be/jLqrQy5wc4Q", "https://youtu.be/bvd4XdQsMjQ", "https://youtu.be/VIO5AAbroNA", "https://youtu.be/ZLuaxdViyK0", "https://youtu.be/bV6CRjn_8GM", "https://youtu.be/5VPXSZhnlrY"
]

const comment = [//Highly Responsive to Prayers
  "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", 
  //Story of Eastern Wonderland
  "The title theme. It's a pretty long song for a title screen, so the demo will start if you try to listen to the whole thing. \n So, what part of this is Eastern?", "The first stage theme. It (the atmosphere) sounds heavy. A lot of shmups have really upbeat first stage themes, and this song is, too, but it's so dark. Even though the story for this game is a joke, the music is so serious, and the enemies are so hard. \n I like that kind of mismatch.", "The stage 1 boss theme. I tried to make it feel as weak as possible. I think this song sounds a little oriental.", "The second stage theme, I actually wrote this quite some time ago, so I think it feels different than the other songs. Actually, I wrote this song envisioning the dawn, but there weren't any scenes like that in the game, so I'm using it for a night scene. I wanted it to contrast the first stage theme - day and night, light and darkness - but the first stage theme was too heavy. Mmmm~", "The stage 2 boss theme. I tried making something cool, but it's really short, isn't it?", "I wonder just where the World of Fantasies is? I don't think it's anywhere in outer space, but...", "The third stage boss theme. The boss suddenly gets strong in this stage. However, the song has a long loop, so about the time the main melody ends; the boss should be dead.", "The '~ni moe' in the title means burning, I think it's definitely different from moe~ The rhythm is unusual. In a word, strange. Ah, what's Oriental about this song, anyway~", "Marisa's theme. She's the strongest magical girl. I tried to make the song feel like something from an anime, but try as I might, I just couldn't make something that had that heroine feel to it (I'm still practicing), so I tried to make something strong and witchy. I think it feels a little oriental.", "This was going to be the title song. Now it's an uninteresting stage 5 theme. To tell you the truth, this is the first song I made in PMD, so it didn't go that well, but it's the only song that changes rhythm. (The only one?) Still, it's the song I'm most familiar with.", "Mima's theme. There are a few points that I think are promised to last boss themes. Needless to say, it can't be too light, it can't be too simple, and it has to be mysterious, among other things. Of course, that's my opinion, so others may not agree.", "This is the Extra Stage song. This song and the next are all, are you sure you want to keep going? Let's do our best to beat the next person with a no continue clear. (Easy is fine, too.) So, that's what the song is like. Yep. Uja uja...", "The theme for a certain girl genius. At the early par, it's deliberately meant to feel particularly cute. In later part, I intended to finish the song in a cool style. The song uses the same progression as Extra Love. Still, conversely, this song is... too strong (^^;", "The ending song. It's a little dark, but the ending isn't really dark at all.", "The staff roll song. I thought the staff roll song should be an upbeat song with strong rhythm, but... It's energetic, but isn't it a little too dark?", "I made this, intending for it to be the first stage theme, but... Since the early songs in Highly Responsive to Prayers were so dark, so I thought I'd make this one brighter, and it ended up like this. But, I threw it out (^^;;;;", "I was going to use this for stage 2. It's not bad, but... It felt half-hearted, so I threw it out.", "I had planned on using this for the staff roll , but... The rhythm is so light it's almost unthinkable now (^^;;; It has a rather fine pedigree, but it didn't balance well with the other songs in the game, so I threw it out.",
  //Phantasmagoria of Dim. Dream
  "This is the title music. Suddenly it doesn't seem too Touhou-like, right? \n Even if I do say so myself, for someone who's made music with such an unsuitable atmosphere I don't look too worried, I've been thinking lately. \n But lately, maybe it's because I've become accustomed to such an atmosphere, or maybe I actually am in this kind of atmosphere. I feel my game has to be like this or it's no good. \n In any case, right from the beginning I'm already talking about music like this. Oh no!", "What should I talk about for this song? (lol) \n It's a pretty heavy song, isn't it? \n Why is the character select song for a game with such a silly story like this? \n Oh well, it's pretty short... (The song, the development time, and the comments.)", "The game's main character also happens to be a shrine maiden, but... \n Is this really a shrine maiden's song? Well, uh. That's. You see. \n But, I do like it. And it does have a rather oriental feel to it, and the melody is pretty nice. Right? (Begging)", "For those who don't know Mima, she was the last boss from the last game, Story of Eastern Wonderland. \n This time, she's not a boss or anything, just a normal character, so I tried not to make her theme song too badass... \n You know, I just don't get her personality at all. \n (Even though she's my own character *sweatdrop*) \n Well, what about the song. The melody for the main chorus part is very simple, but feels really nice... Doesn't it? (Maybe because it's simple?)", "For those who don't know Mima, she was the last boss from the last game, Story of Eastern Wonderland. \n This time, she's not a boss or anything, just a normal character, so I tried not to make her theme song too badass... \n You know, I just don't get her personality at all. \n (Even though she's my own character *sweatdrop*) \n Well, what about the song. The melody for the main chorus part is very simple, but feels really nice... Doesn't it? (Maybe because it's simple?)", "Yeees. The composer is not too good at cute songs. This song doesn't seem very cute, does it? \n (If anyone knows the comic Ellen came from... sorry, it doesn't match her very well, does it?) \n Well, anyway, this song is actually a song I wrote a loooooong time ago to practice MIDI; I rewrote it all in FM. \n It was one of my favorite original songs, but it was completely Oriental-style, and... (I think this song is, too ...) I don't know how it ended up being a foreign girl's theme.", "She's a strange character. It's a strange song. Yes. \n What to say, what to say .... yeah. \n Well, I guess the high-speed xylophone-like sound is the main attraction for this song. \n Anyway, the melody's pretty weird. Do you all think so too? I knew it.", "She isn't human, either... \n When I'm making up characters, I'll write down a bunch on paper, and just choose some. This character has a pretty loli feel about her, but... \n The song is unusually cool. \n I said this before, but I'm not that good at making cute songs. This song turned out the same way... \n A cuter song would have been nice for this character... \n Aahhhh, all the songs feel kind of half-assed~ (It's cool, but it's got kind of girly instrumentation in it... ) Oh, well, it's okay. I guess I like this kind of song, after all.", "I like this song quite a bit, I really do, but it doesn't really fit the character at all, does it (^^; \n Oh well. This song's loop is pretty long, but it's pretty repetitive. \n Let's see, but, aside from the bosses, isn't it the coolest of the seven characters' themes? (Especially the main part, and even the intro)", "This song doesn't play in VS mode. Who the 7th is depends on which character you picked, but this song plays no matter who that was. So, if it's someone like Ellen, then this song will be totally out of place (^^; \nI was going for a boss feel, not a last boss feel, but... \n The main melody is almost the same as Reimu's theme. \n The main part is pretty cool... ...right? Well... maybe it's kind of odd?", "The demo is a little too long, isn't it? \n Honestly, since this song is so short, it has to loop a few times. \n Well, it seems like all the songs in this game are strangely cool ... \n By the way, if you press ESC during the demo, you can speed through it. If you press it twice, you can skip through it. Since it's a pretty pointless scene.", "This is the theme for the mid-boss who I don't know why she's there (^^; \n I was also going for a boss theme, not a last boss theme, but. Ummm. \n This is the only song in the game that's sycned up with the STAGE 8 START display. Did you notice? \n Well, anyway, that's a real sailor uniform. Er, ahh~", "This is pretty short. Still, I tried to give it that certain feeling. Well, that's about it.", "Well, I guess this is the last boss theme. I had a hard time with this one. Well, it turned out, so I guess it went well in the end. Since all the other characters' songs were pretty cool, I worked hard at this one. I ended up using a guitar-like sound, which I don't do often. And, the main part(?)'s melody was supposed to be really high-class, but. Maybe it's not?", "It's very ending-ish, but does it really match the ending scenes? 　Well, it's short.", "The song that plays during daytime endings. \n It definitely makes me think of shrines. Actually, this is the most shrine-maiden-ish song here, isn't it? \n See, doesn't this kind of song always play for shrines and shrine maidens in eroge? (lol)", "The song that plays during night-time endings. All the endings have a particular oriental feel to them. Hooray!", "Somehow it doesn't seem to fit the game at all either ... oh well. \n Still, I think this song works well as a staff roll song. \n It's cool, isn't it? Even if I'm the only member of the staff (lol) \n Maybe I put in too many weird parts~", "I remember finishing making this in no time at all. Well, it is a simple melody.", "", "", "I used this as I was building the game system before I made any characters. \n There weren't any characters that really fit this song, so I tossed it.", "A very spacey(?) song. \n I don't make many songs like this one. It's the only one that really seems like it's a STG song, but (because of that?) I tossed it. \n (Because there aren't any characters that fit this song!)", "For some reason, this song that actually has a pyramid feel to it got tossed. \n I wonder what kind of character would go with this song?"
]

function generate() {
  let randint = Math.floor(Math.random() * song.length);
  document.getElementById("name").innerText = song[randint];
  document.getElementById("source").innerText = src[randint];
  document.getElementById("vid").src = vid[randint];
  document.getElementById("cmt").innerText = comment[randint];
}
