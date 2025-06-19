import { Metadata } from "next";
import SearchResultsContent from "./SearchResultsContent";

interface PageProps {
  searchParams: Promise<{ q?: string; category?: string; tag?: string }>;
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const { q: query, category, tag } = await searchParams;

  if (query || category || tag) {
    const searchTerms = [query, category, tag].filter(Boolean).join(" ");
    return {
      title: `Recherche: "${searchTerms}" - Formations | Learni`,
      description: `Découvrez nos formations correspondant à votre recherche "${searchTerms}". Trouvez la formation idéale pour développer vos compétences.`,
      keywords: [
        `formation ${searchTerms}`,
        `formation professionnelle ${searchTerms}`,
        `apprentissage ${searchTerms}`,
      ],
      openGraph: {
        title: `Recherche: "${searchTerms}" - Formations | Learni`,
        description: `Découvrez nos formations correspondant à votre recherche "${searchTerms}". Trouvez la formation idéale pour développer vos compétences.`,
        type: "website",
      },
    };
  }

  return {
    title: "Recherche de formations - Learni",
    description:
      "Recherchez parmi nos formations professionnelles. Trouvez la formation idéale pour développer vos compétences et faire évoluer votre carrière.",
    keywords: [
      "formations",
      "formation professionnelle",
      "apprentissage",
      "développement de compétences",
    ],
    openGraph: {
      title: "Recherche de formations - Learni",
      description:
        "Recherchez parmi nos formations professionnelles. Trouvez la formation idéale pour développer vos compétences et faire évoluer votre carrière.",
      type: "website",
    },
  };
}

export default async function Page({ searchParams }: PageProps) {
  const { q: query, category, tag } = await searchParams;

  // Données structurées JSON-LD pour le SEO
  const searchTerms = [query, category, tag].filter(Boolean).join(" ");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: searchTerms
      ? `Recherche: "${searchTerms}" - Formations`
      : "Recherche de formations",
    description: searchTerms
      ? `Découvrez nos formations correspondant à votre recherche "${searchTerms}". Trouvez la formation idéale pour développer vos compétences.`
      : "Recherchez parmi nos formations professionnelles. Trouvez la formation idéale pour développer vos compétences et faire évoluer votre carrière.",
    url: searchTerms
      ? `https://learni.fr/formations/recherche?${new URLSearchParams({
          q: query || "",
          category: category || "",
          tag: tag || "",
        }).toString()}`
      : "https://learni.fr/formations/recherche",
    mainEntity: {
      "@type": "ItemList",
      name: "Formations",
      description: "Liste des formations disponibles",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SearchResultsContent searchParams={searchParams} />
    </>
  );
}
