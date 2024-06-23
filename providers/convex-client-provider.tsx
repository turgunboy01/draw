"use client";

import { ClerkProvider, SignIn, useAuth, useUser } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

// Ensure NEXT_PUBLIC_CONVEX_URL is defined in your environment
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);
const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;

const AuthStatus = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();

  console.log("isLoaded:", isLoaded);
  console.log("isSignedIn:", isSignedIn);
  console.log("user:", user);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return (
      <div>
        <SignIn />
      </div>
    );
  }

  return <>{children}</>;
};

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <AuthStatus>{children}</AuthStatus>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
