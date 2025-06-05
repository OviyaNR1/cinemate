import { useEffect } from "react"
import PageNotFoundImg from "../assets/images/pagenotfound.png"
import { Link } from "react-router-dom";
export const PageNotFound = () => {

  useEffect(()=>{
    document.title =`Page Not Found / Cinemate`;
  });

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
          <div className="max-w-lg">
            <img className="rounded" src={PageNotFoundImg} alt="PageNotFound" />
          </div>

        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="w-64 text-xl rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2.5 mr-2 mb-2">Back to Home</button>
          </Link>
        </div>
      </section>
    </main>
  )
}


