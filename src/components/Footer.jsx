const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white-50">
      <div className="container mx-auto py-5 flex flex-wrap items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2023 3Lancer
        </p>

        <nav className="flex flex-wrap mt-4 text-sm sm:ml-auto sm:mt-0">
          <a 
            href="/"
            className="mr-4 hover:underline sm:mr-6 text-gray-50"
          >
            Home
          </a>

          <a
            href="/services"
            className="mr-4 hover:underline sm:mr-6 text-gray-50"  
          >
            Services
          </a>

          <a
            href="/contact" 
            className="hover:underline sm:mr-6 text-gray-50"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer