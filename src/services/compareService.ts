
import { create } from 'zustand';
import { MovieForComparison } from '@/types/movie';
import { getMovieById } from './movieService';

interface CompareState {
  comparisonList: MovieForComparison[];
  addToComparison: (movieId: string) => void;
  removeFromComparison: (movieId: string) => void;
  clearComparison: () => void;
  isInComparison: (movieId: string) => boolean;
}

export const useCompareStore = create<CompareState>((set, get) => ({
  comparisonList: [],
  
  addToComparison: (movieId: string) => {
    const movie = getMovieById(movieId);
    if (!movie) return;
    
    const isAlreadyAdded = get().isInComparison(movieId);
    if (isAlreadyAdded) return;
    
    set((state) => ({
      comparisonList: [...state.comparisonList, { ...movie, selected: true }]
    }));
  },
  
  removeFromComparison: (movieId: string) => {
    set((state) => ({
      comparisonList: state.comparisonList.filter(movie => movie.id !== movieId)
    }));
  },
  
  clearComparison: () => {
    set({ comparisonList: [] });
  },
  
  isInComparison: (movieId: string) => {
    return get().comparisonList.some(movie => movie.id === movieId);
  }
}));
