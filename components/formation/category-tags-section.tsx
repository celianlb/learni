import { CategoryWithTags } from "@/queries/getCategoriesWithTags";
import Link from "next/link";

interface CategoryTagsSectionProps {
  category: CategoryWithTags;
}

export default function CategoryTagsSection({
  category,
}: CategoryTagsSectionProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-custom-blue-900 mb-4">
        {category.name}
      </h2>
      <div className="flex flex-wrap gap-3">
        {category.tags.map((tag) => (
          <Link
            key={tag.id}
            href={`/formations/recherche?category=${encodeURIComponent(
              category.slug
            )}&tag=${encodeURIComponent(tag.name)}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-custom-blue-900 rounded-full hover:bg-gray-200 transition-colors duration-200 text-sm font-medium"
          >
            <span>{tag.name}</span>
            <span className="bg-custom-blue-700 text-white py-1 px-2 leading-none rounded-full text-xs font-semibold">
              {tag.formationCount}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
