const Navbar = ({search, inputChange}) => {
  return (
            <nav className="w-screen z-50 fixed px-5 py-5 md:px-20 bg-slate-900 flex justify-between items-center">
                <h1 className="text-xl md:text-2xl font-serif text-red-600">Meal App</h1>
                <input className="w-[12rem] md:w-[20rem] h-10 outline-none
                 bg-lime-100 p-3 border-2 "
                type="search" value={search} onChange={inputChange} placeholder="Search for any meal..." />
            </nav>
  )
}

export default Navbar;