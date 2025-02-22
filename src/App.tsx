import { useState, ReactElement } from "react";
import { Button, Game } from "./components";
import { Mode } from "./types";

function App(): ReactElement {
  const [mode, setMode] = useState<Mode>(Mode.easy);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <header>Pocket Monsters Memory Game!</header>
      <main>
        <section>
          <div>
            Get points by clicking on a pokémon but don't click on any more than once!
          </div>
          <div>
            <div>SET MODE: </div>
            <Button
              onClick={() => setMode(Mode.easy)}
            >
              Normal
            </Button>
            <Button
              onClick={() => setMode(Mode.difficult)}
            >
              A Plethora of Pikachu!
            </Button>
          </div>
          <div>
            <div>
              <span>Score: </span>
              <span>{score}</span>
            </div>
            <div>
              <span>High Score: </span>
              <span>{highScore}</span>
            </div>
          </div>
        </section>
        <section>
            <Game 
              mode={mode} 
              setScore={setScore}
              score={score}
              highScore={highScore}
              setHighScore={setHighScore} 
            />
        </section>
      </main>
    </>
  )
}

export default App;
