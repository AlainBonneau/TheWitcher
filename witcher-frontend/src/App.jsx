import MyNavbar from "./components/Navbar/Navbar";
import "./App.scss"; // Assurez-vous de gérer les styles ici

const creatures = [
  {
    // NE PAS OUBLIER DE FAIRE LE LIEN DES IMAGES !!!
    id: 1,
    name: "Leshen",
    description:
      "Les leshens sont des créatures anciennes liées aux forêts. Ils peuvent invoquer des animaux et contrôler les arbres.",
    image: "/images/leshen.jpg",
    vulnerabilities: ["Feu", "Dimeritium", "Argent"],
  },
  {
    id: 2,
    name: "Griffon",
    description:
      "Les griffons sont des créatures hybrides, mi-lion mi-aigle, féroces et puissants.",
    image: "/images/griffon.jpg",
    vulnerabilities: ["Arbalète", "Argent", "Huile contre hybrides"],
  },
  {
    id: 3,
    name: "Strige",
    description:
      "La strige est une créature maudite, mi-humaine, mi-bête, connue pour ses griffes acérées et sa force terrifiante.",
    image: "/images/strige.jpg",
    vulnerabilities: ["Argent", "Huile contre bêtes", "Lune"],
  },
  {
    id: 4,
    name: "Nekker",
    description:
      "Les nekkers sont des créatures petites, rapides et vicieuses, souvent trouvées en groupes dans les cavernes ou les forêts.",
    image: "/images/nekker.jpg",
    vulnerabilities: ["Igni", "Huile contre ogroïdes", "Bombes"],
  },
  {
    id: 5,
    name: "Kikimorrhe",
    description:
      "Les kikimorrhes sont des créatures insectoïdes extrêmement dangereuses vivant dans les marais et les souterrains.",
    image: "/images/kikimorrhe.jpg",
    vulnerabilities: ["Argent", "Feu", "Huile contre insectoïdes"],
  },
];

function App() {
  return (
    <div className="app-container">
      <header id="header">
        <MyNavbar />
      </header>
      <main id="main">
        {/* Faire le slider d'images */}
        <section className="slider"></section>
      </main>
    </div>
  );
}

export default App;
