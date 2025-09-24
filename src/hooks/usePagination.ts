import { useCallback } from 'react';
import useUserStore from '../store/userStore';

export const usePagination = () => {
  const { 
    users, 
    isLoading, 
    hasMore, 
    loadMoreUsers 
  } = useUserStore();

  const handleLoadMore = useCallback(() => {
    if (!isLoading && hasMore) {
      loadMoreUsers();
    }
  }, [isLoading, hasMore, loadMoreUsers]);

  const shouldShowLoadMore = hasMore && !isLoading && users.length > 0;

  return {
    users,
    isLoading,
    hasMore,
    handleLoadMore,
    shouldShowLoadMore,
  };
};

export default usePagination;