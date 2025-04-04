
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
}

export interface Featured extends Movie {
  description: string;
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
}
