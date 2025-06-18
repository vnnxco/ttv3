import React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import DashboardPage from '../app/dashboard/page';

function App() {
  return (
    <div className="h-screen bg-sidebar overflow-hidden">
      <ThemeProvider defaultTheme="dark" attribute="class">
        <DashboardPage />
      </ThemeProvider>
    </div>
  );
}

export default App;