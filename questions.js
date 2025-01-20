
const questions = [
  {
    category: "History",
    questions: [
      {
        question: "Who was the first President of the United States?",
        options: ["George Washington", "John Adams", "Thomas Jefferson", "James Madison"],
        correctAnswer: 0,
      },
      {
        question: "What year did the American Civil War begin?",
        options: ["1860", "1861", "1862", "1863"],
        correctAnswer: 1,
      },
      {
        question: "Who wrote the Declaration of Independence?",
        options: ["Benjamin Franklin", "Thomas Jefferson", "John Hancock", "James Madison"],
        correctAnswer: 1,
      },
      {
        question: "What empire was known for its road system?",
        options: ["Roman Empire", "Mongol Empire", "Ottoman Empire", "Byzantine Empire"],
        correctAnswer: 0,
      },
      {
        question: "Who was the first female Prime Minister of the UK?",
        options: ["Theresa May", "Margaret Thatcher", "Queen Elizabeth I", "Angela Merkel"],
        correctAnswer: 1,
      },
      {
        question: "What year did World War II end?",
        options: ["1944", "1945", "1946", "1947"],
        correctAnswer: 1,
      },
      {
        question: "Which ancient wonder was located in Babylon?",
        options: [
          "The Great Pyramid",
          "The Hanging Gardens",
          "The Colossus of Rhodes",
          "The Temple of Artemis",
        ],
        correctAnswer: 1,
      },
      {
        question: "Who was the first Emperor of Rome?",
        options: ["Julius Caesar", "Augustus", "Nero", "Tiberius"],
        correctAnswer: 1,
      },
      {
        question: "The 'Trail of Tears' was a result of which policy?",
        options: [
          "The Homestead Act",
          "The Indian Removal Act",
          "The Dawes Act",
          "The Missouri Compromise",
        ],
        correctAnswer: 1,
      },
      {
        question: "What ancient civilization built Machu Picchu?",
        options: ["Aztec", "Inca", "Maya", "Olmec"],
        correctAnswer: 1,
      },
      {
        question: "Who led the Soviet Union during World War II?",
        options: ["Joseph Stalin", "Vladimir Lenin", "Nikita Khrushchev", "Leon Trotsky"],
        correctAnswer: 0,
      },
      {
        question: "What event marked the start of the Great Depression?",
        options: ["World War I", "Stock Market Crash of 1929", "Dust Bowl", "Pearl Harbor"],
        correctAnswer: 1,
      },
      {
        question: "What country did the United States gain independence from?",
        options: ["France", "Spain", "Great Britain", "Netherlands"],
        correctAnswer: 2,
      },
      {
        question: "The Berlin Wall was constructed in what year?",
        options: ["1959", "1960", "1961", "1962"],
        correctAnswer: 2,
      },
      {
        question: "Who discovered America in 1492?",
        options: ["Leif Erikson", "Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan"],
        correctAnswer: 1,
      },
      {
        question: "What year did the Titanic sink?",
        options: ["1910", "1911", "1912", "1913"],
        correctAnswer: 2,
      },
      {
        question: "Who was the first man to step on the moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
        correctAnswer: 1,
      },
      {
        question: "What was the capital of the Byzantine Empire?",
        options: ["Rome", "Constantinople", "Athens", "Alexandria"],
        correctAnswer: 1,
      },
      {
        question: "Which leader was known as 'The Sun King'?",
        options: ["Louis XIV", "Henry VIII", "Napoleon Bonaparte", "Philip II"],
        correctAnswer: 0,
      },
      {
        question: "The United Nations was founded in what year?",
        options: ["1944", "1945", "1946", "1947"],
        correctAnswer: 1,
      },
      {
        question: "Who was the longest-reigning monarch in British history?",
        options: ["Queen Victoria", "Queen Elizabeth II", "King George III", "Henry VIII"],
        correctAnswer: 1,
      },
      {
        question: "Which war was fought between the North and South in the United States?",
        options: ["Revolutionary War", "War of 1812", "Civil War", "World War I"],
        correctAnswer: 2,
      },
      {
        question: "Who led the Indian independence movement?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Indira Gandhi"],
        correctAnswer: 1,
      },
      {
        question: "Which city was the center of the Renaissance?",
        options: ["Paris", "Florence", "Rome", "Athens"],
        correctAnswer: 1,
      },
      {
        question: "What year did the Cold War officially end?",
        options: ["1988", "1989", "1990", "1991"],
        correctAnswer: 3,
      },
    ],
  },
  {
    category: "Gaming",
    questions: [
      {
        question: "What is the best-selling video game of all time?",
        options: ["Minecraft", "Grand Theft Auto V", "Tetris", "Wii Sports"],
        correctAnswer: 0,
      },
      {
        question: "Which company created the PlayStation console?",
        options: ["Nintendo", "Microsoft", "Sony", "Sega"],
        correctAnswer: 2,
      },
      {
        question: "What year was the Nintendo Entertainment System (NES) released in North America?",
        options: ["1983", "1985", "1987", "1989"],
        correctAnswer: 1,
      },
      {
        question: "Which game is considered the first true battle royale?",
        options: ["Fortnite", "PUBG", "H1Z1", "DayZ"],
        correctAnswer: 2,
      },
      {
        question: "What is the highest rank in Counter-Strike: Global Offensive?",
        options: ["Supreme Master First Class", "Global Elite", "Legendary Eagle", "Master Guardian"],
        correctAnswer: 1,
      },
      {
        question: "In which game series do you fight the Covenant and the Flood?",
        options: ["Halo", "Doom", "Gears of War", "Destiny"],
        correctAnswer: 0,
      },
      {
        question: "What is the name of the main protagonist in The Legend of Zelda series?",
        options: ["Zelda", "Link", "Ganondorf", "Epona"],
        correctAnswer: 1,
      },
      {
        question: "Which game popularized the phrase 'The cake is a lie'?",
        options: ["Portal", "Half-Life 2", "BioShock", "Fallout 3"],
        correctAnswer: 0,
      },
      {
        question: "What is the name of the fictional city where Grand Theft Auto V takes place?",
        options: ["Liberty City", "Los Santos", "Vice City", "San Fierro"],
        correctAnswer: 1,
      },
      {
        question: "Which game features a mode called 'Zombies'?",
        options: ["Call of Duty", "Battlefield", "Apex Legends", "Valorant"],
        correctAnswer: 0,
      },
      {
        question: "What is the main currency used in Fortnite?",
        options: ["V-Bucks", "Robux", "Gold Coins", "Battle Points"],
        correctAnswer: 0,
      },
      {
        question: "Who is the developer of the Dark Souls series?",
        options: ["FromSoftware", "Capcom", "Square Enix", "Bethesda"],
        correctAnswer: 0,
      },
      {
        question: "What year was the first Call of Duty game released?",
        options: ["2001", "2002", "2003", "2004"],
        correctAnswer: 2,
      },
      {
        question: "In Overwatch, which hero is known for their catchphrase 'It's high noon'?",
        options: ["McCree", "Tracer", "Reaper", "Genji"],
        correctAnswer: 0,
      },
      {
        question: "What is the name of Mario's dinosaur companion?",
        options: ["Yoshi", "Toad", "Bowser", "Luigi"],
        correctAnswer: 0,
      },
      {
        question: "Which game studio developed The Witcher series?",
        options: ["BioWare", "CD Projekt Red", "Obsidian", "Rockstar Games"],
        correctAnswer: 1,
      },
      {
        question: "What color is the ghost Blinky in Pac-Man?",
        options: ["Blue", "Pink", "Orange", "Red"],
        correctAnswer: 3,
      },
      {
        question: "What is the main objective in Among Us?",
        options: ["Collect stars", "Complete tasks and find impostors", "Win battles", "Solve puzzles"],
        correctAnswer: 1,
      },
      {
        question: "Which game features the character Solid Snake?",
        options: ["Metal Gear Solid", "Splinter Cell", "Hitman", "Deus Ex"],
        correctAnswer: 0,
      },
      {
        question: "What was the first commercially successful video game?",
        options: ["Pong", "Space Invaders", "Pac-Man", "Asteroids"],
        correctAnswer: 0,
      },
      {
        question: "Which video game series features the character Samus Aran?",
        options: ["Metroid", "Star Fox", "Mega Man", "Castlevania"],
        correctAnswer: 0,
      },
      {
        question: "What is the subtitle of The Legend of Zelda game released for the Nintendo Switch in 2017?",
        options: ["Breath of the Wild", "Ocarina of Time", "Twilight Princess", "Skyward Sword"],
        correctAnswer: 0,
      },
      {
        question: "Which video game series includes 'Ezio's Trilogy'?",
        options: ["Assassin's Creed", "Uncharted", "The Witcher", "Tomb Raider"],
        correctAnswer: 0,
      },
      {
        question: "In which game would you find the map 'Dust II'?",
        options: ["Counter-Strike", "Overwatch", "Valorant", "Rainbow Six Siege"],
        correctAnswer: 0,
      },
      {
        question: "What is the name of the blocky world-building game released in 2011?",
        options: ["Roblox", "Terraria", "Minecraft", "Lego Worlds"],
        correctAnswer: 2,
      },
    ],
  },
  {
    category: "Music",
    questions: [
      {
        question: "Who is known as the 'King of Pop'?",
        options: ["Michael Jackson", "Elvis Presley", "Prince", "Madonna"],
        correctAnswer: 0,
      },
      {
        question: "Which artist released the album 'Lemonade' in 2016?",
        options: ["Beyoncé", "Rihanna", "Taylor Swift", "Adele"],
        correctAnswer: 0,
      },
      {
        question: "What year did The Beatles break up?",
        options: ["1967", "1968", "1970", "1971"],
        correctAnswer: 2,
      },
      {
        question: "Which of these songs was performed by Whitney Houston?",
        options: ["I Will Always Love You", "Rolling in the Deep", "Like a Prayer", "Billie Jean"],
        correctAnswer: 0,
      },
      {
        question: "What genre of music is associated with Bob Marley?",
        options: ["Reggae", "Rock", "Pop", "Jazz"],
        correctAnswer: 0,
      },
      {
        question: "Who was the lead vocalist of Queen?",
        options: ["Freddie Mercury", "John Lennon", "Mick Jagger", "David Bowie"],
        correctAnswer: 0,
      },
      {
        question: "Which song did Ed Sheeran release in 2017 that became a worldwide hit?",
        options: ["Shape of You", "Perfect", "Castle on the Hill", "Galway Girl"],
        correctAnswer: 0,
      },
      {
        question: "Which pop diva is known for the hits 'Toxic' and 'Baby One More Time'?",
        options: ["Britney Spears", "Christina Aguilera", "Lady Gaga", "Kesha"],
        correctAnswer: 0,
      },
      {
        question: "What was Elvis Presley’s first hit song?",
        options: ["Heartbreak Hotel", "Hound Dog", "Jailhouse Rock", "Love Me Tender"],
        correctAnswer: 0,
      },
      {
        question: "Who sang the hit song 'Rolling in the Deep'?",
        options: ["Adele", "Beyoncé", "Lady Gaga", "Rihanna"],
        correctAnswer: 0,
      },
      {
        question: "What year did Michael Jackson release 'Thriller'?",
        options: ["1982", "1984", "1986", "1988"],
        correctAnswer: 0,
      },
      {
        question: "Which genre of music is known for artists like Tupac and The Notorious B.I.G.?",
        options: ["Hip Hop", "Pop", "Rock", "Jazz"],
        correctAnswer: 0,
      },
      {
        question: "Which female artist is known for the song 'Like a Virgin'?",
        options: ["Madonna", "Beyoncé", "Shakira", "Celine Dion"],
        correctAnswer: 0,
      },
      {
        question: "Which famous rock band performed 'Bohemian Rhapsody'?",
        options: ["Queen", "The Rolling Stones", "Led Zeppelin", "The Who"],
        correctAnswer: 0,
      },
      {
        question: "What is the title of the first album by The Beatles?",
        options: ["Please Please Me", "Rubber Soul", "Revolver", "Let It Be"],
        correctAnswer: 0,
      },
      {
        question: "Which artist released 'Blonde' in 2016?",
        options: ["Frank Ocean", "Kanye West", "Drake", "Jay-Z"],
        correctAnswer: 0,
      },
      {
        question: "Which pop group was known for the hit song 'Wannabe'?",
        options: ["Spice Girls", "Destiny's Child", "Backstreet Boys", "NSYNC"],
        correctAnswer: 0,
      },
      {
        question: "What song did Lady Gaga perform at the 2016 Super Bowl halftime show?",
        options: ["Bad Romance", "Poker Face", "Just Dance", "Million Reasons"],
        correctAnswer: 0,
      },
      {
        question: "Which artist is known for the hit song 'Royals'?",
        options: ["Lorde", "Kesha", "Adele", "Taylor Swift"],
        correctAnswer: 0,
      },
      {
        question: "Who was the lead singer of Nirvana?",
        options: ["Kurt Cobain", "Eddie Vedder", "Chris Cornell", "Scott Weiland"],
        correctAnswer: 0,
      },
      {
        question: "What year did the song 'Smells Like Teen Spirit' release?",
        options: ["1990", "1991", "1992", "1993"],
        correctAnswer: 1,
      },
      {
        question: "Who won the Grammy Award for Album of the Year in 2016?",
        options: ["Taylor Swift", "Adele", "Kendrick Lamar", "Ed Sheeran"],
        correctAnswer: 0,
      },
      {
        question: "What famous music festival is held annually in California?",
        options: ["Coachella", "Lollapalooza", "Glastonbury", "Burning Man"],
        correctAnswer: 0,
      },
      {
        question: "Which boy band was known for hits like 'I Want It That Way'?",
        options: ["Backstreet Boys", "NSYNC", "Boyz II Men", "New Kids on the Block"],
        correctAnswer: 0,
      },
      {
        question: "Which legendary musician is known as 'The Boss'?",
        options: ["Bruce Springsteen", "Bob Dylan", "John Lennon", "David Bowie"],
        correctAnswer: 0,
      },
    ],
  },
  {
  category: "Movies/TV Shows",
  questions: [
    {
      question: "Who directed the movie 'Inception'?",
      options: ["Christopher Nolan", "Steven Spielberg", "Martin Scorsese", "Quentin Tarantino"],
      correctAnswer: 0,
    },
    {
      question: "What year was 'The Godfather' released?",
      options: ["1970", "1972", "1974", "1976"],
      correctAnswer: 1,
    },
    {
      question: "Which movie features the character 'Forrest Gump'?",
      options: ["The Shawshank Redemption", "Forrest Gump", "The Green Mile", "Cast Away"],
      correctAnswer: 1,
    },
    {
      question: "Who played the character of Harry Potter in the film series?",
      options: ["Daniel Radcliffe", "Rupert Grint", "Matthew Lewis", "Tom Felton"],
      correctAnswer: 0,
    },
    {
      question: "Which actor starred in the movie 'The Pursuit of Happyness'?",
      options: ["Will Smith", "Denzel Washington", "Jamie Foxx", "Morgan Freeman"],
      correctAnswer: 0,
    },
    {
      question: "What animated movie features the character Elsa?",
      options: ["Moana", "Frozen", "Tangled", "Zootopia"],
      correctAnswer: 1,
    },
    {
      question: "Which actor played Iron Man in the Marvel Cinematic Universe?",
      options: ["Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo", "Chris Evans"],
      correctAnswer: 1,
    },
    {
      question: "Which movie won the Academy Award for Best Picture in 1994?",
      options: ["Schindler's List", "Forrest Gump", "The Shawshank Redemption", "Pulp Fiction"],
      correctAnswer: 1,
    },
    {
      question: "Who directed 'Jurassic Park'?",
      options: ["Steven Spielberg", "James Cameron", "Peter Jackson", "Ridley Scott"],
      correctAnswer: 0,
    },
    {
      question: "Which movie features a character named 'Jack Dawson'?",
      options: ["Titanic", "The Notebook", "Avatar", "The Revenant"],
      correctAnswer: 0,
    },
    {
      question: "What is the name of the fictional African country in 'Black Panther'?",
      options: ["Wakanda", "Zamunda", "Genovia", "Elbonia"],
      correctAnswer: 0,
    },
    {
      question: "Which actor starred as the Joker in 'The Dark Knight'?",
      options: ["Heath Ledger", "Jared Leto", "Jack Nicholson", "Mark Hamill"],
      correctAnswer: 0,
    },
    {
      question: "Who directed 'Pulp Fiction'?",
      options: ["Quentin Tarantino", "Martin Scorsese", "Ridley Scott", "Tim Burton"],
      correctAnswer: 0,
    },
    {
      question: "Which movie is about a group of kids who become friends after discovering a dead body?",
      options: ["The Goonies", "Stand by Me", "The Sandlot", "It"],
      correctAnswer: 1,
    },
    {
      question: "What 2019 film featured a character named 'Joaquin Phoenix' as the Joker?",
      options: ["Joker", "The Dark Knight", "Suicide Squad", "Birds of Prey"],
      correctAnswer: 0,
    },
    {
      question: "Which film franchise is known for its 'Death Star'?",
      options: ["Star Wars", "Star Trek", "Battlestar Galactica", "The Matrix"],
      correctAnswer: 0,
    },
    {
      question: "In which TV series would you find a character named 'Walter White'?",
      options: ["Breaking Bad", "The Sopranos", "Mad Men", "Stranger Things"],
      correctAnswer: 0,
    },
    {
      question: "Which movie features a dinosaur named 'Rex'?",
      options: ["Toy Story", "Jurassic Park", "The Land Before Time", "The Good Dinosaur"],
      correctAnswer: 0,
    },
    {
      question: "Who won the Oscar for Best Actor for 'The Revenant'?",
      options: ["Matt Damon", "Tom Hardy", "Leonardo DiCaprio", "Brad Pitt"],
      correctAnswer: 2,
    },
    {
      question: "Which TV show features the characters 'Phoebe Buffay' and 'Ross Geller'?",
      options: ["Friends", "How I Met Your Mother", "The Office", "Big Bang Theory"],
      correctAnswer: 0,
    },
    {
      question: "What movie features the quote 'May the Force be with you'?",
      options: ["Star Wars", "The Matrix", "Avatar", "Guardians of the Galaxy"],
      correctAnswer: 0,
    },
    {
      question: "Who starred as the lead character in 'Jack Reacher'?",
      options: ["Tom Cruise", "Brad Pitt", "Matt Damon", "Will Smith"],
      correctAnswer: 0,
    },
    {
      question: "Which film series includes a character named 'Lara Croft'?",
      options: ["Tomb Raider", "Indiana Jones", "National Treasure", "Pirates of the Caribbean"],
      correctAnswer: 0,
    },
    {
      question: "Which movie features a character called 'The Bride' seeking revenge?",
      options: ["Kill Bill", "The Matrix", "Pulp Fiction", "Gladiator"],
      correctAnswer: 0,
    },
    {
      question: "Who directed 'Avatar'?",
      options: ["James Cameron", "Steven Spielberg", "George Lucas", "Peter Jackson"],
      correctAnswer: 0,
    },
    {
      question: "Which movie features a character named 'Elliot' and an alien named 'E.T.'?",
      options: ["E.T. the Extra-Terrestrial", "Close Encounters of the Third Kind", "The Iron Giant", "The War of the Worlds"],
      correctAnswer: 0,
    },
    {
      question: "What is the name of the fictional planet in 'Star Wars' where Luke Skywalker grows up?",
      options: ["Tatooine", "Endor", "Coruscant", "Hoth"],
      correctAnswer: 0,
    },
    {
      question: "Who played the character of 'Indiana Jones'?",
      options: ["Harrison Ford", "Bruce Willis", "Tom Cruise", "Johnny Depp"],
      correctAnswer: 0,
    },
    {
      question: "Which film won the Oscar for Best Picture in 1994?",
      options: ["The Shawshank Redemption", "Forrest Gump", "The Godfather", "Schindler's List"],
      correctAnswer: 1,
    },
    {
      question: "Which movie features a character named 'Rocky Balboa'?",
      options: ["Rocky", "Raging Bull", "The Fighter", "Creed"],
      correctAnswer: 0,
    }
  ]
}
]