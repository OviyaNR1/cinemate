import { useSearchParams } from "react-router-dom";
import { Card } from "../components"
import { useFetch,useTitle } from "../hooks/";
export const Search = ({ apipath }) => {


  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data } = useFetch(apipath, queryTerm);

  useTitle(`Search result for ${queryTerm}`);


  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{data.length ===0? `Result not found for '${queryTerm}'`: `Result for '${queryTerm}'`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {
            data.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
        </div>
      </section>
    </main>
  )
}

