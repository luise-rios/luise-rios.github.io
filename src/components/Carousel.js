import React from "react";
import Carousel from "react-material-ui-carousel";
import { projectsData } from "../servers/projectsData";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';


export function CarouselComponent() {
  return (
    <Carousel indicators={false} animation={"slide"} autoplay={true} className="carousel">
      {projectsData.map((project, index) => 
        <Card
          className="project-card"
          key={index}>
          <CardHeader
            title={project.title}
            subheader={project.date}
          />
          <CardMedia
            className="card-img"
            image={project.imgPath}
            title={project.title}
          />
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="p">
              {project.skills}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton href={project.page} aria-label="page">
              <LanguageIcon />
            </IconButton>
            <IconButton href={project.repo} aria-label="repository">
              <GitHubIcon/>
            </IconButton>
          </CardActions>
        </Card>
      )}
    </Carousel>
  );
}
