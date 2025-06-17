import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

interface MediaQueryContextValue {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  loading: boolean;
}

const MediaQueryContext = createContext<MediaQueryContextValue>({
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  loading: true,
});

export const useMediaQueryContext = () => useContext(MediaQueryContext);

interface MediaQueryProviderProps {
  children: ReactNode;
}

export const MediaQueryProvider = function MediaQueryProvider({
  children,
}: MediaQueryProviderProps) {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(min-width: 601px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <MediaQueryContext.Provider
      value={{ isMobile, isTablet, isDesktop, loading }}
    >
      {children}
    </MediaQueryContext.Provider>
  );
};
