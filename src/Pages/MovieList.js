import { Card } from "../components"
import { useFetch,useTitle } from "../hooks/";


export const MovieList = ({ apipath, title }) => {

  const { data } = useFetch(apipath);

  useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {
            data.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}


        </div>
      </section>

    </main>
  )
}


