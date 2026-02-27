import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-green-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* GRILLE PRINCIPALE : 3 colonnes sur desktop, 1 sur mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">

          {/* COLONNE 1 : INFOS COMMUNE */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Commune de Valojoulx</h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">📍 Adresse</span><br />
                1, place de la Mairie<br />
                24290 Valojoulx
              </p>
              <p>
                <span className="font-semibold">📞 Téléphone</span><br />
                <a href="tel:0553507778" className="hover:text-white transition-colors">
                  05 53 50 77 78
                </a>
              </p>
              <p>
                <span className="font-semibold">📧 Email</span><br />
                <a href="mailto:contact@mairievalojoulx.fr" className="hover:text-white transition-colors">
                  contact@mairievalojoulx.fr
                </a>
              </p>
            </div>
          </div>

          {/* COLONNE 2 : HORAIRES */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Horaires d'ouverture</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold">Mardi</p>
                <p>8h–12h / 13h30–17h30</p>
              </div>
              <div>
                <p className="font-semibold">Vendredi</p>
                <p>8h–12h / 13h30–17h30</p>
              </div>
              <div>
                <p className="font-semibold italic">Madame la Maire</p>
                <p className="text-xs">reçoit sur rendez-vous</p>
              </div>
            </div>
          </div>

          {/* COLONNE 3 : LIENS UTILES */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Liens utiles</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  → Accueil
                </Link>
              </li>
              <li>
                <Link href="/mairie" className="hover:text-white transition-colors">
                  → La Mairie
                </Link>
              </li>
              <li>
                <Link href="/vie-economique" className="hover:text-white transition-colors">
                  → Vie Économique
                </Link>
              </li>
              <li>
                <Link href="/decouvrir" className="hover:text-white transition-colors">
                  → Découvrir
                </Link>
              </li>
              <li>
                <Link href="/environnement" className="hover:text-white transition-colors">
                  → Environnement
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* SÉPARATEUR */}
        <hr className="border-green-800 mb-8" />

        {/* SECTION BAS : COPYRIGHT + RÉSEAUX */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">

          {/* COPYRIGHT */}
          <div className="text-center sm:text-left">
            <p>&copy; {currentYear} Commune de Valojoulx · Tous droits réservés</p>
            <p className="text-xs text-green-300 mt-1">
              Site développé avec Next.js et passion locale 💚
            </p>
          </div>

          {/* RÉSEAUX SOCIAUX */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-800 hover:bg-green-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-800 hover:bg-green-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}