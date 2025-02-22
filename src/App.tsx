import { useState, ReactElement, useEffect } from "react";
import { Button, Game } from "./components";

function App(): ReactElement {

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
            <Button>
              Normal
            </Button>
            <Button>
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
            <Game />
        </section>
      </main>
    </>
  )
}

export default App;
