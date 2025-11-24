"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedPage({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  // যদি user logged-out হয়, redirect হবে login page
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // যদি Firebase auth এখনও load না হয় বা user logged-out হয়
  if (loading || !user) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  // Logged-in user → children render হবে
  return <>{children}</>;
}
