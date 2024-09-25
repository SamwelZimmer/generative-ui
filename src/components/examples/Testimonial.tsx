import Icon from "@/components/common/Icon";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TestimonialItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TestimonialProps {
  data: TestimonialItem;
  className?: string;
}

const PLACEHOLDER_NAME = "Person's Name";
const PLACEHOLDER_USERNAME = "username123";
const PLACEHOLDER_TEXT =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, in repudiandae?";

export default function Testimonial({ data, className }: TestimonialProps) {
  return (
    <Card className={cn("max-w-md h-min rounded-lg", className)}>
      <CardHeader className="flex flex-row justify-between items-start -mt-1">
        <div className="flex flex-row gap-4 my-1 mt-1">
          <UserImage img={data.img} />

          <div className="flex flex-col justify-center gap-1.5">
            <CardTitle>{data?.name ?? PLACEHOLDER_NAME}</CardTitle>
            <CardDescription>
              {"@"}
              {data?.username ?? PLACEHOLDER_USERNAME}
            </CardDescription>
          </div>
        </div>

        <Icon
          name={"twitter"}
          className="w-6 text-muted-foreground hover:text-primary cursor-pointer"
        />
      </CardHeader>
      <CardContent>
        <p>{data?.text ?? PLACEHOLDER_TEXT}</p>
      </CardContent>
    </Card>
  );
}

const UserImage = ({ img }: { img: string }) => {
  return (
    <div className="h-12 aspect-square rounded-full bg-accent flex items-center justify-center overflow-hidden relative shadow-inner">
      <>
        <div className="absolute inset-0 z-20 shadow-inner-strong" />

        <Image
          src={img}
          width={48}
          height={48}
          alt="profile image"
          className="relative z-10"
        />
      </>
    </div>
  );
};
