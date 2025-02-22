import { useState, ReactElement, useEffect } from "react";
import { Button, Game } from "./components";
import { Mode } from "./types";

function App(): ReactElement {
  const [mode, setMode] = useState<Mode>(Mode.easy);

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
              <span></span>
            </div>
            <div>
              <span>High Score: </span>
              <span></span>
            </div>
          </div>
        </section>
        <section>
            <Game 
              mode={mode}
            />
        </section>
      </main>
    </>
  )
}

export default App;
