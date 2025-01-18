"use client";
import Footer from "@/components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";
import { useState } from "react";
import "./globals.css";

const QueryProvider = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full ">
        <Head>
          <title>Cat Facts 🐱</title>
        </Head>
        <div className="flex flex-col items-center p-6 pb-20 gradient min-h-screen">
          <header className="w-full py-8">
            <h1 className="text-3xl text-gray-600 font-bold text-center">
              Cat Facts 🐱
            </h1>
          </header>
          <QueryProvider>
            <div className="bg-slate-100 border border-gray-200 shadow-lg rounded-lg p-6 max-w-2xl w-full">
              {children}
            </div>
            <Footer />
          </QueryProvider>
        </div>
      </body>
    </html>
  );
}
