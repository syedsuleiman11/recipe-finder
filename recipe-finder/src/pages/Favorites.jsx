export default function Favorites() {
  const favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Saved Recipes</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {favorites.map((r) => (
          <div key={r.id} className="bg-white p-4 rounded shadow">
            <img src={r.image} alt={r.title} />
            <h3 className="mt-2">{r.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
