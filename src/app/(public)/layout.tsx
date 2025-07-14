import type { ReactNode } from "react";
import { Navbar } from "./_components/navbar";
import { Toaster } from "@/components/ui/sonner";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 ">
      <Navbar />
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      </div>
      {children}
      <Toaster />
    </div>
  );
}
