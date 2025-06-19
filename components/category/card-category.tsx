import { cn } from "@/lib/utils";
import Link from "next/link";
import "../UI/Card/card.css";

export default function CardCategory({
  children,
  className,
  backgroundType,
  link,
}: CategoryCardProps) {
  const cardContent = (
    <div
      className={cn(
        backgroundType === "radial" &&
          "bg-custom-blue-700 hover:bg-custom-blue-900/80 border-custom-blue-600 hover:border-custom-blue-700",
        backgroundType === "white" &&
          "bg-white hover:bg-blue-50 border-custom-blue-800",
        "p-6 shadow-lg rounded-2xl border  flex flex-col gap-10 group transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );

  if (link) {
    return (
      <Link
        href={link}
        className="block font-work-sans tracking-[-1px] font-medium w-full h-full"
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
