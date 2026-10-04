import { Suspense } from "react";
import { Header } from "@/components/ui/Header";
import { Banner } from "@/components/ui/Banner";
import { MovieRow } from "@/components/ui/MovieRow";
import { RowSkelton } from "@/components/ui/RowSkelton";
import { fetchRandomMovies, getMovieCategories } from "@/lib/tmdb";

export default async function HomePage() {
  const bannerMovie = await fetchRandomMovies();
  const movieCategories = getMovieCategories();

  return (
    <div className="App">
      <Header />
      <Banner movie={bannerMovie} />
      {movieCategories.map((category) => (
        <Suspense key={category.title} fallback={<RowSkelton />}>
          <MovieRow category={category} />
        </Suspense>
      ))}
    </div>
  );
}
