import { useState, ReactElement, useEffect } from "react";
import { Button } from "./components";

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
        </section>
      </main>
    </>
  )
}

export default App;
