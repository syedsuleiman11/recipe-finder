export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold">Recipe Finder</h1>

      <div className="space-x-4">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/favorites" className="hover:underline">
          Favorites
        </a>
      </div>
    </nav>
  );
}
