import { motion } from "framer-motion";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface ScoreProps {
  color: string;
  id: string;
  addScore: (id: string, value: number) => void;
  subsScore: (id: string, value: number) => void;
  score: number;
}

export default function Score({
  color,
  id,
  addScore,
  subsScore,
  score,
}: ScoreProps) {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <motion.div
      className="w-full p-8 border-[6px] rounded-[32px] bg-cardbackground flex justify-center relative shadow-lg shadow-gray-1/80"
      style={{ borderColor: color }}
      whileTap={{ scale: 1.1 }} // Zoom ao clicar na div pai
    >
      <span className="text-white text-center text-[170px] xl:text-[200px] font-bold">
        {score}
      </span>
      <motion.div
        className="absolute bg-main/90 w-full h-full top-0 rounded-[25px] grid grid-cols-2"
        initial={{ opacity: 0 }} // Inicia com opacidade 0
        whileHover={{ opacity: 1 }} // Aparece ao passar o mouse
        transition={{ duration: 0.3 }} // Duração do fade
      >
        <button
          className="text-left px-16 border-r-4 flex justify-center mt-2 items-center border-r-gray-1 border-dashed"
          onClick={() => subsScore(id, 1)}
          onMouseEnter={() => setIsHovered("minus")}
          onMouseLeave={() => setIsHovered(null)}
        >
          <motion.div
            animate={{ scale: isHovered === "minus" ? 1.2 : 1 }} // Anima o ícone baseado no estado de hover
            transition={{ duration: 0.2 }}
          >
            <FaMinus color="#ffffff" size={50} />
          </motion.div>
        </button>
        <button
          className="flex justify-center items-center px-16 mt-2"
          onClick={() => addScore(id, 1)}
          onMouseEnter={() => setIsHovered("plus")}
          onMouseLeave={() => setIsHovered(null)}
        >
          <motion.div
            animate={{ scale: isHovered === "plus" ? 1.2 : 1 }} // Anima o ícone baseado no estado de hover
            transition={{ duration: 0.2 }}
          >
            <FaPlus color="#ffffff" size={50} />
          </motion.div>
        </button>
      </motion.div>
    </motion.div>
  );
}
