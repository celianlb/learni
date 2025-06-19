import CategoryTagsSection from "@/components/formation/category-tags-section";
import { getCategoriesWithTags } from "@/queries/getCategoriesWithTags";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toutes les catégories de formations - Learni",
  description:
    "Découvrez toutes nos catégories de formations professionnelles et leurs tags spécialisés. Trouvez la formation idéale pour développer vos compétences.",
  keywords: [
    "catégories formations",
    "tags formations",
    "formations professionnelles",
    "développement compétences",
    "apprentissage",
  ],
  openGraph: {
    title: "Toutes les catégories de formations - Learni",
    description:
      "Découvrez toutes nos catégories de formations professionnelles et leurs tags spécialisés.",
    type: "website",
  },
};

export default async function CategoriesPage() {
  const categories = await getCategoriesWithTags();

  // Données structurées JSON-LD pour le SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Toutes les catégories de formations",
    description:
      "Découvrez toutes nos catégories de formations professionnelles et leurs tags spécialisés.",
    url: "https://learni.fr/formations/toutes-les-categories",
    mainEntity: {
      "@type": "ItemList",
      name: "Catégories de formations",
      description: "Liste des catégories de formations disponibles",
      numberOfItems: categories.length,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className=" rounded-4xl mt-28  text-white py-20 bg-[radial-gradient(ellipse_50.00%_61.40%_at_50.00%_50.00%,_#243876_0%,_#1C1E63_100%)] ">
          <div className="container mx-auto px-4 text-center">
            <h1 className="[text-shadow:_0px_0px_15px_rgb(255_255_255_/_0.40)] text-[28px] md:text-[48px] font-manrope tracking-[-2px] md:tracking-[-3px] font-bold mb-6">
              Toutes les catégories
            </h1>
            <p className="text-[18px] font-work-sans tracking-[-1px] text-blue-100 max-w-xl mx-auto">
              Explorez nos catégories de formations et découvrez les tags
              spécialisés pour trouver la formation parfaite qui correspond à
              vos besoins.
            </p>
          </div>
        </section>

        {/* Contenu principal */}
        <section className="py-16">
          <div className="flex flex-col gap-8">
            {categories.map((category) => (
              <CategoryTagsSection key={category.id} category={category} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
