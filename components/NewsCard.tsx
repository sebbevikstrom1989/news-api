/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface NewsCardProps {
  description: string;
  title: string;
  country: string;
  imgUrl: string;
}

export const NewsCard = ({
  description,
  title,
  country,
  imgUrl,
}: NewsCardProps) => {
  return (
    <>
      {imgUrl ? (
        <Card>
          <CardHeader>
            <img
              src={imgUrl}
              alt="hej"
              className="w-full h-[200px] object-cover"
            />

            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardFooter>
            <p>{country}</p>
          </CardFooter>
        </Card>
      ) : null}
    </>
  );
};
