"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { NewsCard } from "./NewsCard";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import { useEffect } from "react";
import { useIntersection } from "@mantine/hooks";
import { subMonths, format } from "date-fns";

const fetchPost = async (page: number) => {
  try {
    const oneMonthAgo = format(subMonths(new Date(), 1), "yyyy/MM/dd");

    // Adjust the URL to include query parameters directly or use URLSearchParams for dynamic parameters
    const queryParams = new URLSearchParams({
      q: "malmbanan",
      from: oneMonthAgo,
      countries: "se",
    });

    const url = `https://api.newscatcherapi.com/v2/search?${queryParams}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_NEWS_API!,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const articles = data.articles || [];

    // Assuming each page has 9 articles and you want to paginate locally
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

  const { ref, entry } = useIntersection({
    threshold: 1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage]);
  const _posts = data?.pages.flatMap((page) => page);

  if (isLoading)
    return (
      <div className="flex flex-col justify-center items-center">
        <Loader2Icon className="animate-spin w-24 h-24" />
        <p className="text-muted-foreground animate-pulse">Laddar...</p>
      </div>
    );
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
        {_posts?.map((post, i) => (
          <div
            key={i}
            className={`${i === _posts.length - 1 ? "mb-24" : ""}`}
            ref={i === _posts.length - 1 ? ref : null}
          >
            <NewsCard
              key={post._id}
              country={post.country}
              description={post.excerpt}
              title={post.title}
              imgUrl={post.media}
              rights={post.rights}
              link={post.link}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center pb-24">
        <Button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="mt-4"
        >
          {isFetchingNextPage ? (
            <Loader2Icon className="animate-spin w-6 h-6" />
          ) : (data?.pages.length ?? 0) < 9 ? (
            "Ladda fler nyheter"
          ) : (
            "Inga fler inlägg"
          )}
        </Button>
      </div>
    </>
  );
};
