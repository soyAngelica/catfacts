"use client";
import Results from "@/components/Result";
import List from "@/components/List";
import Skeleton from "@/components/Skeleton";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function Home() {
  const [catFacts, setCatFacts] = useState([]);
  const { data, isLoading } = useQuery(["catFacts"], async () => {
    const response = await fetch("/api/catFacts");
    if (!response.ok) {
      throw new Error("Error fetching cat facts");
    }
    return response.json();
  });

  useEffect(() => {
    if (data) {
      setCatFacts(data.data);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="max-h-[600px] min-h-[600px] items-center justify-items-center p-8 overflow-hidden">
        <Skeleton />
      </div>
    );
  }

  return (
    <div className="max-h-[600px] min-h-[600px] items-center justify-items-center p-8 overflow-hidden">
      {data?.error ? (
        <Results errorMessage={data.message || "Error fetching cat facts"} />
      ) : !isLoading && Array.isArray(catFacts) && catFacts.length > 0 ? (
        <List listItems={catFacts.map((item) => item.fact)} />
      ) : (
        <Results errorMessage={data.message || "No cat facts available"} />
      )}
    </div>
  );
}
