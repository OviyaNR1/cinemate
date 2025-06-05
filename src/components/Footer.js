import {Link} from "react-router-dom"
export const Footer = () => {
  return (
    <footer>
      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://www.instagram.com/oviya.raveendran/" rel="noreferrer" target="_blank" className="hover:underline me-4 md:me-6">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/oviyanr/" rel="noreferrer" target="_blank" className="hover:underline me-4 md:me-6">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.facebook.com/oviya.raveendran/" rel="noreferrer" target="_blank" className="hover:underline me-4 md:me-6">Facebook</a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="hover:underline">Youtube</a>
          </li>
        </ul>
      </footer>

    </footer>
  )
}


