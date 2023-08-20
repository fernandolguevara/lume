import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';

import { NDKProvider } from '@libs/ndk/provider';
import { StorageProvider } from '@libs/storage/provider';

import App from './app';

const queryClient = new QueryClient();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <QueryClientProvider client={queryClient}>
    <StorageProvider>
      <NDKProvider>
        <App />
      </NDKProvider>
    </StorageProvider>
  </QueryClientProvider>
);
