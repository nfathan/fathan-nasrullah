import { useState } from "react"
import LinkAbout from "./LinkAbout"
import ProjectItem from "./ProjectItem"

import { CgChevronUp } from "react-icons/cg"
import bookshelf  from "../images/bookshelf.png"
import quotes  from "../images/random-quote-machine.png"
import piaCianni from "../images/pia-cianni.png"
import kuyMasak from "../images/kuy-masak.png"
import calculator from "../images/kalkulator.png"
import tictactoe from "../images/tic-tac-toe.png"

function Projects() {
  const [projects, setProjects] = useState([
    {
      imageUrl: bookshelf,
      title: "Bookshelf",
      link: "https://nfathan.github.io/bookshelf/"
    },
    {
      imageUrl: quotes,
      title: "Random Quote",
      link: "https://nfathan.github.io/random-quote-machine/"
    },
    {
      imageUrl: calculator,
      title: "Calculator",
      link: "https://nfathan.github.io/calculator-app/"
    },
    {
      imageUrl: piaCianni,
      title: "Pia Cianni",
      link: "https://nfathan.github.io/piacianni/"
    },
    {
      imageUrl: tictactoe,
      title: "Tictactoe Game",
      link: "https://nfathan.github.io/tictactoe-game/"
    },
    {
      imageUrl: kuyMasak,
      title: "Kuy Masak",
      link: "https://nfathan.github.io/kuy-masak-app/"
    }
  ])

  return (
    <div className="container">
      <section className="LinkAbout top" >
        <LinkAbout CgChevronUp={CgChevronUp} />
      </section>
      <section className="Projects">
        <ul className="project-list">
          {
            projects.map((projectItem, index) => {
              return (
                <ProjectItem
                  key={index}
                  title={projectItem.title}
                  image={projectItem.imageUrl}
                  link={projectItem.link}
                />
              )
            })
          }
        </ul>
      </section>
      <section className="LinkAbout bottom" >
        <LinkAbout CgChevronUp={CgChevronUp}/>
      </section>
    </div>
  )
}

export default Projects