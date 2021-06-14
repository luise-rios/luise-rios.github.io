import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import avatar from '../images/avatar-white2.svg';

export function About() {
  return (
    <div className="about-container" id="home">
      <div className="about-content">
        <img src={ avatar } alt="profile" />
        <Card>
          <CardActionArea>
            <CardContent>
              <div className="name-web">
                <Typography gutterBottom variant="h4" component="h2">
                  Luíse Rios (ela, she, ella)
                </Typography>
                <Typography gutterBottom variant="h5" component="h2" paragraph="true">
                  Desenvolvedora de Software
                </Typography>
              </div>
              <div className="name-mobile">
              <Typography gutterBottom variant="h5" component="h2" paragraph="true">
                Luíse Rios<br></br>
                (ela, she, ella)<br></br>
                Desenvolvedora de Software
              </Typography>
              </div>
              <Typography variant="h6" color="textSecondary" component="p" paragraph="true">
              &emsp;Sou carioca, técnica química, engenheira de petróleo e trabalhei por 10 anos no Centro de Pesquisa e Desenvolvimento da Petrobras, no Rio de Janeiro/RJ, exercendo atividades em laboratório químico.
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p" paragraph="true">
              &emsp;Em agosto de 2020, decidi mudar de carreira e de cidade. Moro em Teresópolis/RJ e estudo Desenvolvimento Web Full Stack na <a href="https://www.betrybe.com/">Trybe</a>&#128640;. Está sendo uma jornada intensa e difícil, mas muito recompensadora, em que vivo o dia-a-dia de uma pessoa desenvolvedora de software. Finalizados os módulos de Front-End e Back-End, estou buscando aquela oportunidade maneira pra começar a fazer a diferença e impactar vidas (e também pagar boletos).
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p" paragraph="true">
              &emsp;Em horas vagas, muito provavelmente serei encontrada assistindo séries ou filmes. Naqueles tempos longínquos sem pandemia, eu também figurava em bares (ou botecos) tomando cerveja com os amigos e usava dias livres para viajar. Que saudade de viajar! Comer também me deixa feliz. #GoVegan&#127793;
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  )
}
