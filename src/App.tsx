import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import Logo from "./assets/logo.svg";
import Score from "./components/score";

export default function App() {
  const [score, setScore] = useState<{ [key: string]: number }>({
    yellow: 0,
    red: 0,
    blue: 0,
    green: 0,
  });

  const addScore = (id: string, value: number) => {
    setScore((prev) => ({
      ...prev,
      [id]: prev[id] + value,
    }));
  };

  const resetScore = () => {
    setScore({
      yellow: 0,
      red: 0,
      blue: 0,
      green: 0,
    });
  };

  const subsScore = (id: string, value: number) => {
    if (score[id] - value < 0) {
      return;
    }

    setScore((prev) => ({
      ...prev,
      [id]: prev[id] - value,
    }));
  };

  return (
    <div className="py-8">
      <header className="pb-8 border-b px-12 mb-16 border-b-gray-1 flex sm:flex-row flex-col gap-8 justify-between items-center">
        <h1>
          <img src={Logo} alt="Logo Stick fight" />
          <span className="sr-only">Stick Fight Contador</span>
        </h1>
        <button
          className="text-white bg-red rounded-[11px] px-10 py-5 font-bold text-lg hover:bg-redhover transition-colors duration-300"
          onClick={resetScore}
        >
          Resetar placar
        </button>
      </header>
      <main className="mx-auto px-8 xl:px-[8%] w-full h-full flex flex-col lg:grid grid-cols-2 lg:grid-rows-2 gap-16">
        <Score
          color="#E4CE37"
          id="yellow"
          addScore={addScore}
          subsScore={subsScore}
          score={score.yellow}
        />
        <Score
          color="#FC3937"
          id="red"
          addScore={addScore}
          subsScore={subsScore}
          score={score.red}
        />
        <Score
          color="#80F0FF"
          id="blue"
          addScore={addScore}
          subsScore={subsScore}
          score={score.blue}
        />
        <Score
          color="#AFE96B"
          id="green"
          addScore={addScore}
          subsScore={subsScore}
          score={score.green}
        />
      </main>
      <footer className="mt-12 px-8 xl:px-[8%] flex flex-col sm:flex-row items-center gap-4 justify-between">
        <span className="text-gray-2">
          Fan Made by Luís Filipe Silva de Vasconcelos{" "}
        </span>
        <div className="transition-colors duration-300 flex gap-4">
          <a
            className="text-gray-2 hover:text-white"
            href="https://lfvasconcelos.com"
            target="_blank"
          >
            <RiAccountCircleFill size={30} />
          </a>
          <a
            className="text-gray-2 hover:text-white"
            href="https://github.com/LuisFilipe404"
            target="_blank"
          >
            <FaGithub size={30} />
          </a>
          <a
            className="text-gray-2 hover:text-white"
            href="https://www.linkedin.com/in/luis-vasconcelos-160962244/"
            target="_blank"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            className="text-gray-2 hover:text-white"
            href="mailto:contato@lfvasconcelos.com"
          >
            <MdEmail size={30} />
          </a>
        </div>
      </footer>
    </div>
  );
}
