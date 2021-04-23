import React from "react";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import CollapsedMenu from "./CollapsedMenu";
import ContactMenu from "./ContactMenu";
import { options } from "../servers/contactData";

export function NavBar() {
  return (
    <header className="nav-bar-container">
      <div className="nav-bar-btns">
        <Button href="#home" color="inherit">
          Home
        </Button>
        <Button href="#skills" color="inherit">
          Habilidades
        </Button>
        <Button href="#projects" color="inherit">
          Projetos
        </Button>
      </div>
      <CollapsedMenu />
      <ContactMenu />
      <div className="nav-bar-icons">
        {options.map((option, index) => (
          <IconButton
            key={index}
            href={option[1]}
            color="inherit"
            aria-label={option[0]}
          >
            {option[2]}
          </IconButton>
        ))}
      </div>
    </header>
  );
}
