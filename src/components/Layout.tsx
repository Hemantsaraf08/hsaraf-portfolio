import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
// import Loader from "@/ui/Loader";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: any) => setLoading(true);
    const handleComplete = (url: any) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <div className="relative">
      <Navbar />
      <main className="mt-[80px]">{loading ? <p>Loading ....</p> : <>{children}</>}</main>
    </div>
  );
}
