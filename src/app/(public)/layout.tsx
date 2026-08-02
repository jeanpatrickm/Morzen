import type { ReactNode } from "react";
import { Navbar } from "./_components/navbar";
import { Toaster } from "@/components/ui/sonner";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#f8f9ff] text-black transition-colors duration-300">
      <Navbar />
      {children}
      <Toaster />
    </div>
  );
}
