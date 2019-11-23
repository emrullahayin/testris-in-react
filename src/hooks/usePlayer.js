import { useState, useCallback } from "react";

import { randomTetromino } from "../tetrominos";
import { STAGE_HEIGHT } from "../gameHelpers";

export const usePlayer = () => {
  console.log("randomTetromino().shape", randomTetromino());
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false
  });
  const updatePlaterPos = ({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_HEIGHT / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false
    });
  }, []);
  return [player, updatePlaterPos, resetPlayer];
};
