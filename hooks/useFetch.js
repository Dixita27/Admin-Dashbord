import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useFetch = (endpoint) => {
  const { data, error } = useSWR(endpoint, fetcher);
  return { data, error, isLoading: !data && !error };
};
