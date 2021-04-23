import React from "react";
import { hardSkills, softSkills } from "../servers/skillsData";
import brasil from "../images/brasil.png";
import usa from "../images/usa.png";
import spain from "../images/spain.png";
import {
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";

export function Skills() {
  return (
    <section className="skills-container" id="skills">
      <Typography variant="h3" component="h2">
        Habilidades
      </Typography>
      <div className="skills-content">
        <div className="hskills">
          <Card>
            <Typography variant="h5" component="h2">
              Hard Skills
            </Typography>
            <List>
              {hardSkills.map((skill, index) => (
                <ListItem key={index}>
                  <ListItemText primary={skill} />
                </ListItem>
              ))}
            </List>
          </Card>
        </div>
        <div className="sskills">
          <Card>
            <Typography variant="h5" component="h2">
              Soft Skills
            </Typography>
            <List>
              {softSkills.map((skill, index) => (
                <ListItem key={index}>
                  <ListItemText primary={skill} />
                </ListItem>
              ))}
            </List>
          </Card>
        </div>
        <div className="lang">
          <Card>
            <Typography variant="h5" component="h2">
              Idiomas
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <img src={brasil} alt="brazil-flag" />
                </ListItemIcon>
                <ListItemText primary="Português" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <img src={usa} alt="usa-flag" />
                </ListItemIcon>
                <ListItemText primary="Inglês" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <img src={spain} alt="spain-flag" />
                </ListItemIcon>
                <ListItemText primary="Espanhol" />
              </ListItem>
            </List>
          </Card>
        </div>
      </div>
    </section>
  );
}
