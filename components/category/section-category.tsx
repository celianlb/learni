import { getAllCategories } from "@/queries/getCategories";
import Image from "next/image";
import Link from "next/link";
import AllCategory from "./all-category";

interface Category {
  id: number;
  name: string;
  slug: string;
}

export default async function CategorySection() {
  const categoriesData = await getAllCategories();
  const formattedCategories = categoriesData.map((cat: Category) => ({
    id: cat.id,
    title: cat.name,
    slug: cat.slug,
  }));

  return (
    <section className="relative flex flex-col gap-10 mt-24">
      <h2 className="text-white">Les domaines d&apos;interventions</h2>
      <AllCategory categories={formattedCategories} />
      <div className="flex items-center justify-end gap-2 group w-fit ml-auto">
        <Link
          href={"/formations/tous-les-domaines"}
          className="font-work-sans text-[16px] tracking-[-1px]  text-custom-blue-900 group-hover:text-gray-400 transition-all duration-300"
        >
          Voir tous les domaines d&apos;interventions
        </Link>
        <Image
          width={24}
          height={24}
          src={"/svg/arrow.svg"}
          alt="tous les domaines d'interventions"
          className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300"
        />
      </div>
    </section>
  );
}
