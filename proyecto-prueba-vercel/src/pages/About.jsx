import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <p>
        Bacopa monnieri, llamada en español bacopa o hisopo de agua es una
        planta herbácea perenne rastrera cuyo hábitat incluye los humedales y
        las orillas fangosas. Brahmi es también el nombre dado a centella
        asiática por algunos botánicos,2​3​ mientras que otros consideran que es
        un error que surgió durante el siglo XVI, cuando brahmi fue confundido
        con mandukaparni el nombre para la centella asiática.4
      </p>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default About;
