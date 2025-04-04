
import { User } from "@/types/movie";

// Sample user data
const currentUser: User = {
  id: "user1",
  name: "Movie Fan",
  email: "user@example.com",
  photoUrl: "/placeholder.svg",
  favorites: ["1", "3", "6"],
  watchlist: ["2", "5", "9"],
};

// Sample reviews data
const reviews = [
  {
    id: "r1",
    movieId: "1",
    userId: "user1",
    userName: "Movie Fan",
    userPhotoUrl: "/placeholder.svg",
    rating: 4.5,
    comment: "Fantastic visual effects and storyline. Must watch!",
    date: "2024-04-01"
  },
  {
    id: "r2",
    movieId: "2",
    userId: "user2",
    userName: "Cinema Lover",
    userPhotoUrl: "/placeholder.svg",
    rating: 5,
    comment: "One of the best films I've seen this year. The performances are exceptional.",
    date: "2024-03-28"
  },
  {
    id: "r3",
    movieId: "1",
    userId: "user3",
    userName: "Film Critic",
    userPhotoUrl: "/placeholder.svg",
    rating: 3.5,
    comment: "Good but not great. Some scenes felt rushed.",
    date: "2024-03-25"
  }
];

export const getCurrentUser = (): User => {
  return currentUser;
};

export const updateUserPhoto = (photoUrl: string): void => {
  currentUser.photoUrl = photoUrl;
};

export const getReviewsForMovie = (movieId: string) => {
  return reviews.filter(review => review.movieId === movieId);
};

export const addReview = (movieId: string, rating: number, comment: string) => {
  const newReview = {
    id: `r${reviews.length + 1}`,
    movieId,
    userId: currentUser.id,
    userName: currentUser.name,
    userPhotoUrl: currentUser.photoUrl,
    rating,
    comment,
    date: new Date().toISOString().split('T')[0]
  };
  
  reviews.push(newReview);
  return newReview;
};

export const toggleFavorite = (movieId: string): boolean => {
  const index = currentUser.favorites.indexOf(movieId);
  if (index === -1) {
    currentUser.favorites.push(movieId);
    return true;
  } else {
    currentUser.favorites.splice(index, 1);
    return false;
  }
};

export const toggleWatchlist = (movieId: string): boolean => {
  const index = currentUser.watchlist.indexOf(movieId);
  if (index === -1) {
    currentUser.watchlist.push(movieId);
    return true;
  } else {
    currentUser.watchlist.splice(index, 1);
    return false;
  }
};

export const isInFavorites = (movieId: string): boolean => {
  return currentUser.favorites.includes(movieId);
};

export const isInWatchlist = (movieId: string): boolean => {
  return currentUser.watchlist.includes(movieId);
};
