
import { Movie, Featured, Category } from "@/types/movie";

// Sample data
const featuredMovies: Featured[] = [
  {
    id: "1",
    title: "Dune: Part Two",
    posterUrl: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/lMWKrlqOIVUzwUCWiXDshEYhscg.jpg",
    year: "2024",
    rating: "8.5",
    duration: "2h 45min",
    overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against those who destroyed his family.",
    genres: [
      { id: "sci-fi", name: "Sci-Fi" },
      { id: "adventure", name: "Adventure" },
      { id: "drama", name: "Drama" }
    ],
    actors: [
      { id: "a1", name: "Timothée Chalamet", photoUrl: "https://image.tmdb.org/t/p/w200/BE2sdjpgsa2rYWUKR3XGKilihFJ.jpg" },
      { id: "a2", name: "Zendaya", photoUrl: "https://image.tmdb.org/t/p/w200/r3A7ev7QkjOGocVn3kQrJ0eOouk.jpg" },
      { id: "a3", name: "Rebecca Ferguson", photoUrl: "https://image.tmdb.org/t/p/w200/lJloTOheuQSirSLXNA3ZHwyJ8y3.jpg" }
    ],
    mood: ["thrilling", "epic", "intense"],
    language: "English"
  },
  {
    id: "2",
    title: "Oppenheimer",
    posterUrl: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
    year: "2023",
    rating: "8.3",
    duration: "3h 0min",
    overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    description: "The extraordinary story of physicist J. Robert Oppenheimer, who led the Manhattan Project to develop the atomic bomb during World War II.",
    genres: [
      { id: "drama", name: "Drama" },
      { id: "history", name: "History" },
      { id: "biography", name: "Biography" }
    ],
    actors: [
      { id: "a4", name: "Cillian Murphy", photoUrl: "https://image.tmdb.org/t/p/w200/llkbyWKwoll9SQjM7Sk3YjuBPdX.jpg" },
      { id: "a5", name: "Emily Blunt", photoUrl: "https://image.tmdb.org/t/p/w200/xDc4gBluBBpbG3c6y6cLVz4ZP7c.jpg" },
      { id: "a6", name: "Robert Downey Jr.", photoUrl: "https://image.tmdb.org/t/p/w200/im9SAqJPZKEbVZGmjXuLI4O7RvM.jpg" }
    ],
    mood: ["intense", "thought-provoking", "dramatic"],
    language: "English"
  },
  {
    id: "3",
    title: "Godzilla x Kong: The New Empire",
    posterUrl: "https://image.tmdb.org/t/p/w500/ygMGUuIZqzlOf3cXlGFMnPhzEfo.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/3aJvYn7RUqM84wuNvAs7MsLtaQg.jpg",
    year: "2024",
    rating: "7.1",
    duration: "1h 55min",
    overview: "A team of scientists explore the origins of Kong and the secrets of Skull Island, where they encounter a variety of massive beasts.",
    description: "Godzilla and Kong team up again to face a colossal undiscovered threat hidden within our world, challenging their very existence.",
    genres: [
      { id: "action", name: "Action" },
      { id: "sci-fi", name: "Sci-Fi" },
      { id: "adventure", name: "Adventure" }
    ],
    actors: [
      { id: "a7", name: "Rebecca Hall", photoUrl: "https://image.tmdb.org/t/p/w200/gR5CdLJCZaI3kCfZ4Z3lzJ3R5aC.jpg" },
      { id: "a8", name: "Brian Tyree Henry", photoUrl: "https://image.tmdb.org/t/p/w200/1h4sYHLdEOTwgaga0G2SfQcek2f.jpg" },
      { id: "a9", name: "Dan Stevens", photoUrl: "https://image.tmdb.org/t/p/w200/7qop8j4sEMQm1LBHGzXzQfQsdMZ.jpg" }
    ],
    mood: ["exciting", "thrilling", "epic"],
    language: "English"
  }
];

// Add Tamil and Korean movies
const tamilMovies: Movie[] = [
  {
    id: "20",
    title: "Jailer",
    posterUrl: "https://image.tmdb.org/t/p/w500/bOXFJQdUJ1PU7RfJCXYByKn4Nni.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/tM5YPT5dOLvdKBu77J6b935KJDD.jpg",
    year: "2023",
    rating: "7.5",
    duration: "2h 48min",
    overview: "A retired jailer goes on a manhunt to find his son's killers. But the road leads him to a familiar place, facing off against old enemies and new allies.",
    genres: [
      { id: "action", name: "Action" },
      { id: "thriller", name: "Thriller" }
    ],
    actors: [
      { id: "a30", name: "Rajinikanth", photoUrl: "https://image.tmdb.org/t/p/w200/if0BYxKDOonnGKFx1h5IHgEgVRY.jpg" },
      { id: "a31", name: "Mohanlal", photoUrl: "https://image.tmdb.org/t/p/w200/8tWt9VEXLGgtF9cUKgkrN2Tm8yk.jpg" },
      { id: "a32", name: "Tamannaah Bhatia", photoUrl: "https://image.tmdb.org/t/p/w200/5ymqPHPOOl4bsRMYFzXRuWcKwm9.jpg" }
    ],
    mood: ["thrilling", "action-packed", "intense"],
    language: "Tamil"
  },
  {
    id: "21",
    title: "Leo",
    posterUrl: "https://image.tmdb.org/t/p/w500/pTDpZpJ7mcqJSQEJ5aqrbLOvrX5.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/lkVpWgn2x0D1hCsKgCvzxz0CJhJ.jpg",
    year: "2023",
    rating: "7.3",
    duration: "2h 44min",
    overview: "Parthiban is a mild-mannered café owner in Kashmir, who fends off a gang of murderous thugs and becomes a target of Leo Das, a notorious criminal who believes Parthiban is his long-lost brother.",
    genres: [
      { id: "action", name: "Action" },
      { id: "thriller", name: "Thriller" }
    ],
    actors: [
      { id: "a33", name: "Vijay", photoUrl: "https://image.tmdb.org/t/p/w200/mfHzMRVQYs9k4vB8rE7CZkbwRY9.jpg" },
      { id: "a34", name: "Trisha Krishnan", photoUrl: "https://image.tmdb.org/t/p/w200/86cX0GJT9RKttHdLn0mluRpCZZY.jpg" },
      { id: "a35", name: "Sanjay Dutt", photoUrl: "https://image.tmdb.org/t/p/w200/5lc0Vw0fIMzrZydr5N5N5kn7kY.jpg" }
    ],
    mood: ["intense", "action-packed", "thrilling"],
    language: "Tamil"
  }
];

const koreanMovies: Movie[] = [
  {
    id: "22",
    title: "Parasite",
    posterUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
    year: "2019",
    rating: "8.6",
    duration: "2h 12min",
    overview: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    genres: [
      { id: "thriller", name: "Thriller" },
      { id: "comedy", name: "Comedy" },
      { id: "drama", name: "Drama" }
    ],
    actors: [
      { id: "a36", name: "Song Kang-ho", photoUrl: "https://image.tmdb.org/t/p/w200/myZTvyYcDqIYjBkXs6nZaeHk0Rz.jpg" },
      { id: "a37", name: "Lee Sun-kyun", photoUrl: "https://image.tmdb.org/t/p/w200/rEKRPxLyeqQoGkJKvGWHy9xDEAA.jpg" },
      { id: "a38", name: "Cho Yeo-jeong", photoUrl: "https://image.tmdb.org/t/p/w200/r74hBU56JQE0TTzJJOhCXGPuL0A.jpg" }
    ],
    mood: ["thought-provoking", "intense", "suspenseful"],
    language: "Korean"
  },
  {
    id: "23",
    title: "Train to Busan",
    posterUrl: "https://image.tmdb.org/t/p/w500/2lLxfaYS0Hu5WBk8HQfaIyLfBCj.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/fVpFOcQyHJM2di9upgSIwWD5wvT.jpg",
    year: "2016",
    rating: "7.8",
    duration: "1h 58min",
    overview: "When a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan.",
    genres: [
      { id: "horror", name: "Horror" },
      { id: "action", name: "Action" },
      { id: "thriller", name: "Thriller" }
    ],
    actors: [
      { id: "a39", name: "Gong Yoo", photoUrl: "https://image.tmdb.org/t/p/w200/5SAmzx40A0C3VOgzYPlcOmwmEBG.jpg" },
      { id: "a40", name: "Jung Yu-mi", photoUrl: "https://image.tmdb.org/t/p/w200/j7iBzVY38NzLSYOYKXcWOvHKC6L.jpg" },
      { id: "a41", name: "Ma Dong-seok", photoUrl: "https://image.tmdb.org/t/p/w200/9ZZzFDzUZCAvAGdidYTbNQA3JFx.jpg" }
    ],
    mood: ["intense", "heart-racing", "emotional"],
    language: "Korean"
  }
];

const trendingMovies: Movie[] = [
  {
    id: "4",
    title: "The Fall Guy",
    posterUrl: "https://image.tmdb.org/t/p/w500/aCZJpMHQ8YfcyIOgCI5xJYkzbCc.jpg", 
    backdropUrl: "https://image.tmdb.org/t/p/original/ulhFLDtZtauSY2Wc2ZO8YT5naKT.jpg",
    year: "2024",
    rating: "7.1",
    duration: "2h 6min",
    overview: "A stuntman is recruited back into service when the star of a big-budget film goes missing.",
    genres: [
      { id: "action", name: "Action" },
      { id: "comedy", name: "Comedy" }
    ]
  },
  {
    id: "5",
    title: "Ghostbusters: Frozen Empire",
    posterUrl: "https://image.tmdb.org/t/p/w500/gAjCj7v8YWrIAnDRHuQnrY7j3zd.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg",
    year: "2024",
    rating: "7.2",
    duration: "1h 55min",
    overview: "When the discovery of an ancient artifact unleashes an evil spirit, Ghostbusters new and old must join forces to protect their home.",
    genres: [
      { id: "comedy", name: "Comedy" },
      { id: "fantasy", name: "Fantasy" },
      { id: "adventure", name: "Adventure" }
    ]
  },
  {
    id: "6",
    title: "Kingdom of the Planet of the Apes",
    posterUrl: "https://image.tmdb.org/t/p/w500/trdnugzBJc3rtOUTZ6H4b5fXbP0.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/vJNJj4QgJrnR2I3jRiNI8qY94tF.jpg",
    year: "2024",
    rating: "7.4",
    duration: "2h 25min",
    overview: "Several generations in the future following Caesar's reign, apes are now the dominant species while humans have been reduced to living in the shadows.",
    genres: [
      { id: "action", name: "Action" },
      { id: "sci-fi", name: "Sci-Fi" },
      { id: "adventure", name: "Adventure" }
    ]
  },
  {
    id: "7",
    title: "Civil War",
    posterUrl: "https://image.tmdb.org/t/p/w500/aAngiE34BMFDTOXpHAb3g5VYZGZ.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg",
    year: "2024",
    rating: "7.2",
    duration: "1h 49min",
    overview: "In the near future, a team of journalists travel across the United States during a rapidly escalating civil war that has engulfed the entire nation.",
    genres: [
      { id: "action", name: "Action" },
      { id: "thriller", name: "Thriller" },
      { id: "drama", name: "Drama" }
    ]
  },
  {
    id: "8",
    title: "Challengers",
    posterUrl: "https://image.tmdb.org/t/p/w500/jIseBXuk3mfKVxYEQ9S7VBwHf3N.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/33n39vWqClxEi6l1WfZ655gy4mX.jpg",
    year: "2024",
    rating: "7.5",
    duration: "2h 11min",
    overview: "A former tennis prodigy turned coach and her husband, a champion on a losing streak, take on a rising star.",
    genres: [
      { id: "drama", name: "Drama" },
      { id: "romance", name: "Romance" },
      { id: "sport", name: "Sport" }
    ]
  }
];

const popularMovies: Movie[] = [
  {
    id: "9",
    title: "Gladiator II",
    posterUrl: "https://image.tmdb.org/t/p/w500/mCRiHyzGXlum1L3XgfwHJYCOjL1.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/6OnoMgGFKY4mDcCKjGQHG9jFqTk.jpg", 
    year: "2024",
    rating: "8.3",
    duration: "2h 30min",
    overview: "A sequel to the historical epic Gladiator, following the story of Lucius, the son of Lucilla and nephew of Commodus.",
    genres: [
      { id: "action", name: "Action" },
      { id: "drama", name: "Drama" },
      { id: "history", name: "History" }
    ]
  },
  {
    id: "10",
    title: "Inside Out 2",
    posterUrl: "https://image.tmdb.org/t/p/w500/rwl3s7HtThlRcTxAKRRDPTJtYJb.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/hYJ46wQ2kkPxrEG0CLrhXmKvpxF.jpg",
    year: "2024",
    rating: "8.4",
    duration: "1h 45min",
    overview: "Follow Riley in her teenage years as new emotions join her core emotions inside her mind.",
    genres: [
      { id: "animation", name: "Animation" },
      { id: "comedy", name: "Comedy" },
      { id: "family", name: "Family" }
    ]
  },
  {
    id: "11",
    title: "Furiosa: A Mad Max Saga",
    posterUrl: "https://image.tmdb.org/t/p/w500/a3jDY7v3XwKsmd8uq1Yr5zyFXBx.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/qmItOuIQPEOSFbmfnQvqT0FVhcz.jpg",
    year: "2024",
    rating: "8.0",
    duration: "2h 28min",
    overview: "The origin story of renegade warrior Furiosa before her encounter with Mad Max.",
    genres: [
      { id: "action", name: "Action" },
      { id: "adventure", name: "Adventure" },
      { id: "sci-fi", name: "Sci-Fi" }
    ]
  },
  {
    id: "12",
    title: "Deadpool & Wolverine",
    posterUrl: "https://image.tmdb.org/t/p/w500/3OuYFrDKCmtL3RGKhMSg2rHQtPw.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/ltmV2w7qPP9QHUNWyD7Oe4iwW2C.jpg",
    year: "2024",
    rating: "8.5",
    duration: "2h 7min",
    overview: "Deadpool joins forces with Wolverine in this new entry in the Marvel Cinematic Universe.",
    genres: [
      { id: "action", name: "Action" },
      { id: "comedy", name: "Comedy" },
      { id: "superhero", name: "Superhero" }
    ]
  },
  {
    id: "13",
    title: "The Lord of the Rings: The War of the Rohirrim",
    posterUrl: "https://image.tmdb.org/t/p/w500/kiuWBeYTVQbQm1SxtMUHPu1pJU3.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/w0tFZl5XyHY46KfFclYGiWJpHJ0.jpg",
    year: "2024",
    rating: "8.7",
    duration: "2h 10min",
    overview: "An anime feature exploring the untold story of Helm's Deep and the man who gave it its name.",
    genres: [
      { id: "animation", name: "Animation" },
      { id: "fantasy", name: "Fantasy" },
      { id: "adventure", name: "Adventure" }
    ]
  }
];

const categories: Category[] = [
  {
    id: "action",
    name: "Action",
    imageUrl: "https://image.tmdb.org/t/p/original/hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg"
  },
  {
    id: "comedy",
    name: "Comedy",
    imageUrl: "https://image.tmdb.org/t/p/original/x1JkFXPOScVJ17ZKFnfNHXEJOKr.jpg"
  },
  {
    id: "drama",
    name: "Drama",
    imageUrl: "https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg"
  },
  {
    id: "sci-fi",
    name: "Sci-Fi",
    imageUrl: "https://image.tmdb.org/t/p/original/lMWKrlqOIVUzwUCWiXDshEYhscg.jpg"
  },
  {
    id: "horror",
    name: "Horror",
    imageUrl: "https://image.tmdb.org/t/p/original/bWIIWhnaoWx3NTMhqnhLs4Pu3Y1.jpg"
  },
  {
    id: "romance",
    name: "Romance",
    imageUrl: "https://image.tmdb.org/t/p/original/33n39vWqClxEi6l1WfZ655gy4mX.jpg"
  },
  {
    id: "animation",
    name: "Animation",
    imageUrl: "https://image.tmdb.org/t/p/original/hYJ46wQ2kkPxrEG0CLrhXmKvpxF.jpg"
  },
  {
    id: "adventure",
    name: "Adventure",
    imageUrl: "https://image.tmdb.org/t/p/original/vJNJj4QgJrnR2I3jRiNI8qY94tF.jpg"
  }
];

// Combine all movies for search functionality
const allMovies = [
  ...featuredMovies, 
  ...trendingMovies, 
  ...popularMovies, 
  ...tamilMovies, 
  ...koreanMovies
];

// Update categories to include Language categories
const categories: Category[] = [
  { id: "action", name: "Action", imageUrl: "https://image.tmdb.org/t/p/original/hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg" },
  { id: "comedy", name: "Comedy", imageUrl: "https://image.tmdb.org/t/p/original/x1JkFXPOScVJ17ZKFnfNHXEJOKr.jpg" },
  { id: "drama", name: "Drama", imageUrl: "https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg" },
  { id: "sci-fi", name: "Sci-Fi", imageUrl: "https://image.tmdb.org/t/p/original/lMWKrlqOIVUzwUCWiXDshEYhscg.jpg" },
  { id: "horror", name: "Horror", imageUrl: "https://image.tmdb.org/t/p/original/bWIIWhnaoWx3NTMhqnhLs4Pu3Y1.jpg" },
  { id: "romance", name: "Romance", imageUrl: "https://image.tmdb.org/t/p/original/33n39vWqClxEi6l1WfZ655gy4mX.jpg" },
  { id: "animation", name: "Animation", imageUrl: "https://image.tmdb.org/t/p/original/hYJ46wQ2kkPxrEG0CLrhXmKvpxF.jpg" },
  { id: "adventure", name: "Adventure", imageUrl: "https://image.tmdb.org/t/p/original/vJNJj4QgJrnR2I3jRiNI8qY94tF.jpg" },
  { id: "tamil", name: "Tamil Movies", imageUrl: "https://image.tmdb.org/t/p/original/tM5YPT5dOLvdKBu77J6b935KJDD.jpg" },
  { id: "korean", name: "Korean Movies", imageUrl: "https://image.tmdb.org/t/p/original/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg" }
];

// Moods for filtering
const moods = [
  { id: "funny", name: "Funny" },
  { id: "thrilling", name: "Thrilling" },
  { id: "heart-breaking", name: "Heart-breaking" },
  { id: "intense", name: "Intense" },
  { id: "thought-provoking", name: "Thought-provoking" },
  { id: "action-packed", name: "Action-packed" },
  { id: "epic", name: "Epic" },
  { id: "emotional", name: "Emotional" }
];

export const getMovieById = (id: string): Movie | undefined => {
  return allMovies.find(movie => movie.id === id);
};

export const getFeaturedMovies = (): Featured[] => {
  return featuredMovies;
};

export const getTrendingMovies = (): Movie[] => {
  return trendingMovies;
};

export const getPopularMovies = (): Movie[] => {
  return popularMovies;
};

export const getCategories = (): Category[] => {
  return categories;
};

export const getMoods = () => {
  return moods;
};

export const searchMovies = (query: string): Movie[] => {
  const lowerCaseQuery = query.toLowerCase();
  return allMovies.filter(movie => 
    movie.title.toLowerCase().includes(lowerCaseQuery) || 
    movie.overview.toLowerCase().includes(lowerCaseQuery)
  );
};

export const getMoviesByGenre = (genreId: string): Movie[] => {
  return allMovies.filter(movie => 
    movie.genres.some(genre => genre.id === genreId)
  );
};

export const getMoviesByLanguage = (language: string): Movie[] => {
  return allMovies.filter(movie => movie.language === language);
};

export const getTamilMovies = (): Movie[] => {
  return tamilMovies;
};

export const getKoreanMovies = (): Movie[] => {
  return koreanMovies;
};

export const getMoviesByMood = (mood: string): Movie[] => {
  return allMovies.filter(movie => movie.mood?.includes(mood));
};

export const getMoviesByActor = (actorId: string): Movie[] => {
  return allMovies.filter(movie => 
    movie.actors?.some(actor => actor.id === actorId)
  );
};

export const getAllActors = () => {
  const actorsMap = new Map();
  
  allMovies.forEach(movie => {
    movie.actors?.forEach(actor => {
      if (!actorsMap.has(actor.id)) {
        actorsMap.set(actor.id, actor);
      }
    });
  });
  
  return Array.from(actorsMap.values());
};
