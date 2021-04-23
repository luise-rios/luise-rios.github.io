import { Typography } from "@material-ui/core";
import React from "react";
import { CarouselComponent } from "./Carousel";

export function Projects() {
  return (
    <section className="project-container" id="projects">
      <Typography variant="h3" component="h2">
        Projetos
      </Typography>
      <CarouselComponent />
    </section>
  );
}
