import type { MovieCategory } from "@/lib/tmdb";

type MovieRowProps = {
  category: MovieCategory;
};

export async function MovieRow({ category }: MovieRowProps) {
  return <div className="h-64 bg-gray-900">{category.title}</div>;
}
