import { useState, ReactElement } from "react";
import { Button, Game } from "./components";
import { Mode } from "./types";
import styles from "./styles/app.module.css";
import { Analytics } from "@vercel/analytics/react";

function App(): ReactElement {
  const [mode, setMode] = useState<Mode>(Mode.easy);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <div className={styles.top}>
        <header className={styles.header}>
          <h1 className={styles.heading}>Pocket Monsters Memory Game!</h1>
        </header>
        <main className={styles.main}>
          <section className={styles.sectionOne}>
            <div className={styles.infoText}>
              Get points by clicking on a pokémon but don't click any more than once!
            </div>
            <div className={styles.mode}>
              <div>SET MODE: </div>
              <Button
                className={styles.button} 
                onClick={() => setMode(Mode.easy)}
              >
                Normal
              </Button>
              <Button
                className={styles.button} 
                onClick={() => setMode(Mode.difficult)}
              >
                A Plethora of Pikachu!
              </Button>
            </div>
            <div className={styles.scoreboard}>
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
      <Analytics />
    </>
  )
}

export default App;
