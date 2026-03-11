import { Link } from '@tanstack/react-router'


export default function Header() {
  return (
    <>
      <nav className="flex p-4 justify-around items-center mx-auto border-2 rounded-3xl bg-blue-400 max-w-[1200px] text-black">
        <Link
          to="/home"
          className="flex items-center gap-3 rounded-lg  "
        >
          <span className="font-medium">Home</span>
        </Link>

        <Link
          to="/about-us"
          className="flex items-center gap-3 rounded-lg  "
        >
          <span className="font-medium">About us</span>
        </Link>

        <Link
          to="/contact"
          className="flex items-center gap-3 rounded-lg  "
        >
          <span className="font-medium">Contact</span>
        </Link>
      </nav>
    </>
  )
}
