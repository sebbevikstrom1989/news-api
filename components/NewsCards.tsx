"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { NewsCard } from "./NewsCard";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";

const fetchPost = async (page: number) => {
  try {
    //TODO: Replace with API endpoint
    const response = await fetch("");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const articles = data.results || [];
    return articles.slice((page - 1) * 9, page * 9);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return []; // Return an empty array or handle the error as needed
  }
};
export const NewsCards = () => {
  const { data, fetchNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["posts"],
      queryFn: async ({ pageParam = 1 }: { pageParam?: number }) => {
        const response = await fetchPost(pageParam);
        return response;
      },
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
      initialPageParam: 1,
    });
  console.log(data);
  if (isLoading)
    return (
      <div className="flex flex-col justify-center items-center">
        <Loader2Icon className="animate-spin w-24 h-24" />
        <p className="text-muted-foreground animate-pulse">Laddar...</p>
      </div>
    );
  return (
    <>
      {data?.pages.map((page, i) => (
        <div key={i} className="grid grid-cols-3 gap-4 pt-4">
          {page.map((post: any) => (
            <NewsCard
              key={post.article_id}
              country={post.country[0]}
              description={post.description}
              imgUrl={post.image_url}
              title={post.title}
            />
          ))}
        </div>
      ))}
      <div className="flex justify-center pb-24">
        <Button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="mt-4"
        >
          {isFetchingNextPage ? (
            <Loader2Icon className="animate-spin w-6 h-6" />
          ) : (data?.pages.length ?? 0) < 5 ? (
            "Ladda fler nyheter"
          ) : (
            "Inga fler inlägg"
          )}
        </Button>
      </div>
    </>
  );
};
