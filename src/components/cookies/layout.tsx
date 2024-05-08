import { ReactNode } from 'react';
import { CSPostHogProvider } from '@/contexts/cookies/providers';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <CSPostHogProvider>
        {children}
      </CSPostHogProvider>
    </>
  );
};

export default RootLayout;