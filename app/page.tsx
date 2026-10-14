import { Suspense } from "react";
import { Header } from "@/app/components/ui/Header";
import { Banner } from "@/app/components/ui/Banner";
import { MovieRow } from "@/app/components/ui/MovieRow";
import { RowSkelton } from "@/app/components/ui/RowSkelton";
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
