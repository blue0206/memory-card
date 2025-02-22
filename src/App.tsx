import { useState, ReactElement } from "react";
import { Button, Game } from "./components";
import { Mode } from "./types";
import styles from "./styles/app.module.css";

function App(): ReactElement {
  const [mode, setMode] = useState<Mode>(Mode.easy);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className={styles.top}>
      <header className={styles.header}>
        <h1>Pocket Monsters Memory Game!</h1>
      </header>
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
    </div>
  )
}

export default App;
