import MyNavbar from "./components/Navbar/Navbar";
import Images from "./components/Images/Images";
import "./App.scss";

const creatures = [
  {
    id: 1,
    name: "Leshen",
    description:
      "Les leshens sont des créatures anciennes liées aux forêts. Ils peuvent invoquer des animaux et contrôler les arbres.",
    image: "./src/assets/sliderImg/leshen.webp",
    vulnerabilities: ["Feu", "Dimeritium", "Argent"],
  },
  {
    id: 2,
    name: "Griffon",
    description:
      "Les griffons sont des créatures hybrides, mi-lion mi-aigle, féroces et puissants.",
    image: "./src/assets/sliderImg/griffon.webp",
    vulnerabilities: ["Arbalète", "Argent", "Huile contre hybrides"],
  },
  {
    id: 3,
    name: "Loup-garou",
    description:
      "Les loups-garous sont des créatures maudites, mi-homme mi-loup, qui se transforment à la pleine lune.",
    image: "./src/assets/sliderImg/loupgarou.webp",
    vulnerabilities: ["Argent", "Huile contre bêtes", "Lune"],
  },
  {
    id: 4,
    name: "Nekker",
    description:
      "Les nekkers sont des créatures petites, rapides et vicieuses, souvent trouvées en groupes dans les cavernes ou les forêts.",
    image: "./src/assets/sliderImg/nekker.webp",
    vulnerabilities: ["Igni", "Huile contre ogroïdes", "Bombes"],
  },
];

function App() {
  return (
    <div className="app-container">
      <header id="header">
        <MyNavbar />
      </header>
      <main id="main">
        {/* Finir le slider d'images */}
        <section className="slider">
          <Images images={creatures} />
        </section>
      </main>
    </div>
  );
}

export default App;
