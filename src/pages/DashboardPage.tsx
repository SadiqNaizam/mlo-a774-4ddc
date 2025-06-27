import React from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const DashboardPage = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real application, this would also handle clearing authentication tokens.
    console.log('User logging out and redirecting to login page.');
    navigate('/'); // Navigate to the LoginPage route defined in App.tsx
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="items-center text-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl font-bold">Welcome Back!</CardTitle>
            <CardDescription>
              You have successfully logged in to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <p className="text-sm text-center text-muted-foreground px-4">
              This is your main dashboard. From here you can manage your settings and activities.
            </p>
            <Button onClick={handleLogout} className="w-full mt-2" variant="destructive">
              Logout
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;