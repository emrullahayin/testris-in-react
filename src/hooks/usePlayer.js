import { useState } from "react";

import { randomTetromino } from "../tetrominos";

export const usePlayer = () => {
  console.log("randomTetromino().shape", randomTetromino());
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false
  });

  return [player];
};
