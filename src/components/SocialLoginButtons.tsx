import React from "react";
import { Button } from "@/components/ui/button";

// A simple, single-color Google logo SVG component
const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Google</title>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.78 4.13-1.12 1.12-3.24 3.3-7.06 3.3-5.77 0-10.44-4.83-10.44-10.7S4.67 10.7 10.44 10.7c3.18 0 5.46 1.27 6.66 2.39l2.84-2.72C19.64 1.95 16.46 0 12.48 0 5.88 0 .81 5.4 0 12s5.88 12 .81 12c4.49 0 8.42-2.95 10.6-5.19-2.22-2.22-5.19-5.19-5.19-5.19z" />
  </svg>
);

// A simple, single-color GitHub logo SVG component
const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const SocialLoginButtons = () => {
  console.log("SocialLoginButtons loaded");

  const handleGoogleLogin = () => {
    // Placeholder for actual Google authentication logic
    console.log("Attempting login with Google...");
  };

  const handleGitHubLogin = () => {
    // Placeholder for actual GitHub authentication logic
    console.log("Attempting login with GitHub...");
  };

  return (
    <div className="w-full space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <Button variant="outline" type="button" onClick={handleGoogleLogin}>
          <GoogleIcon className="mr-2 h-4 w-4" />
          Google
        </Button>
        <Button variant="outline" type="button" onClick={handleGitHubLogin}>
          <GitHubIcon className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>
    </div>
  );
};

export default SocialLoginButtons;