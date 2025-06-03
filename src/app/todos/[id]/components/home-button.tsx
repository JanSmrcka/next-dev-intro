"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Spinner } from "@/components/spinner";

export const HomeButton = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleRedirect = () => {
    startTransition(() => {
      router.push("/");
    });
  };

  if (isPending) {
    return <Spinner />;
  }

  return (
    <button onClick={handleRedirect} className="back-button">
      Back to Home
    </button>
  );
};
