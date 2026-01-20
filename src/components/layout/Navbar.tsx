const Navbar = () => {
  return (
    <nav className="fixed top-0 start-0 z-20 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo */}
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="./src/assets/Logo.jpg"
            className="h-7 rounded-sm"
            alt="CA Monk Logo"
          />
          <span className="self-center text-xl font-bold whitespace-nowrap text-black-800">
            CA MONK
          </span>
        </a>

        {/* Right buttons */}
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="
              text-white 
              bg-blue-700 
              hover:bg-blue-800 
              focus:ring-4 
              focus:ring-blue-200 
              shadow-sm 
              font-semibold
              rounded-full
              text-sm 
              px-8
              py-2 
              transition
            "
          >
            Profile
          </button>

          <button
            type="button"
            className="
              inline-flex 
              items-center 
              justify-center 
              w-10 
              h-10 
              text-gray-700 
              rounded-md 
              md:hidden 
              hover:bg-gray-100 
              focus:outline-none 
              focus:ring-2 
              focus:ring-blue-300
            "
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col md:flex-row md:space-x-8 font-medium p-4 md:p-0 mt-4 md:mt-0 bg-gray-50 md:bg-transparent rounded-md md:rounded-none border md:border-0 border-gray-200">
            {["Tools", "Practice", "Events", "Job Board", "Points"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="
                      block 
                      py-2 
                      px-3 
                      text-gray-500 
                      rounded-md 
                      hover:bg-gray-100 
                      md:hover:bg-transparent 
                      md:hover:text-black
                      md:p-0 
                      transition
                    "
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
