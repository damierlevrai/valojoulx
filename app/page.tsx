import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* HEADER — Maintenant c'est le composant réutilisable */}
      <Header />

      {/* HERO */}
      <section className="bg-green-700 text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Bienvenue à Valojoulx</h2>
        <p className="text-green-100 text-lg max-w-xl mx-auto">
          Un village au cœur du Périgord Noir, entre Vézère et nature préservée.
          285 habitants, un patrimoine exceptionnel.
        </p>
      </section>

      {/* BLOCS RAPIDES */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-6">

        <div className="bg-green-50 rounded-xl p-6 border border-green-100 hover:shadow-md transition-shadow">
          <div className="text-3xl mb-3">🏛️</div>
          <h3 className="text-lg font-semibold text-green-900 mb-2">La Mairie</h3>
          <p className="text-sm text-zinc-600">Horaires, démarches administratives, conseil municipal.</p>
        </div>

        <div className="bg-green-50 rounded-xl p-6 border border-green-100 hover:shadow-md transition-shadow">
          <div className="text-3xl mb-3">📰</div>
          <h3 className="text-lg font-semibold text-green-900 mb-2">Actualités</h3>
          <p className="text-sm text-zinc-600">Les dernières nouvelles de la commune et de ses habitants.</p>
        </div>

        <div className="bg-green-50 rounded-xl p-6 border border-green-100 hover:shadow-md transition-shadow">
          <div className="text-3xl mb-3">🌿</div>
          <h3 className="text-lg font-semibold text-green-900 mb-2">Découvrir</h3>
          <p className="text-sm text-zinc-600">Patrimoine, randonnées, hébergements et vie locale.</p>
        </div>

      </section>

      {/* INFOS PRATIQUES */}
      <section className="bg-zinc-50 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-green-900 mb-6">Informations pratiques</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8 text-sm text-zinc-700">
            <div>
              <p className="font-semibold text-green-800 mb-1">📍 Adresse</p>
              <p>1, place de la Mairie</p>
              <p>24290 Valojoulx</p>
            </div>
            <div>
              <p className="font-semibold text-green-800 mb-1">📞 Téléphone</p>
              <p>05 53 50 77 78</p>
            </div>
            <div>
              <p className="font-semibold text-green-800 mb-1">🕐 Horaires</p>
              <p>Mardi et Vendredi</p>
              <p>8h–12h / 13h30–17h30</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-900 text-green-200 text-center text-sm py-6">
        <p>© 2025 Commune de Valojoulx · Tous droits réservés</p>
        <p className="mt-1">contact@mairievalojoulx.fr</p>
      </footer>

    </main>
  );
}