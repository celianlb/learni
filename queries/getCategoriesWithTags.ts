import prisma from "@/lib/prisma";

export interface CategoryWithTags {
  id: number;
  name: string;
  slug: string;
  tags: {
    id: number;
    name: string;
    formationCount: number;
  }[];
}

export async function getCategoriesWithTags(): Promise<CategoryWithTags[]> {
  try {
    const categories = await prisma.category.findMany({
      include: {
        tags: {
          include: {
            _count: {
              select: {
                formations: true,
              },
            },
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    return categories.map((category) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      tags: category.tags.map((tag) => ({
        id: tag.id,
        name: tag.name,
        formationCount: tag._count.formations,
      })),
    }));
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des catégories avec tags:",
      error
    );
    throw error;
  }
}
