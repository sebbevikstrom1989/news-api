/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface NewsCardProps {
  description: string;
  title: string;
  country: string;
  imgUrl: string;
  link: string;
  rights: string;
}

export const NewsCard = ({
  description,
  title,
  country,
  imgUrl,
  rights,
  link,
}: NewsCardProps) => {
  return (
    <>
      {imgUrl ? (
        <Link href={link} target="_blank">
          <Card className="h-full">
            <CardHeader>
              <img
                src={imgUrl}
                alt="hej"
                className="w-full h-[200px] object-cover"
              />

              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{country}</p>
            </CardContent>
            <CardFooter className="text-center">
              <p>{rights}</p>
            </CardFooter>
          </Card>
        </Link>
      ) : null}
    </>
  );
};
