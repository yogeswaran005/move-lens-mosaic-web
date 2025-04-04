
export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  backdropUrl: string;
  year: string;
  rating: string;
  duration: string;
  overview: string;
  genres: { id: string; name: string }[];
  actors?: { id: string; name: string; photoUrl: string }[];
  mood?: string[];
  language?: string;
}

export interface MovieForComparison extends Movie {
  selected?: boolean;
}

export interface Featured extends Movie {
  description: string;
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Review {
  id: string;
  movieId: string;
  userId: string;
  userName: string;
  userPhotoUrl: string;
  rating: number;
  comment: string;
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  photoUrl: string;
  favorites: string[];
  watchlist: string[];
}
