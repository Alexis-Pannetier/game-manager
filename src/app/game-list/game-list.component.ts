import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games;

  constructor() {
    this.games =
      [
        {
          id: 1,
          nom: "Hearthstone",
          editeur: "Blizzard",
          type: "jeux de carte",
          note: "16",
          image: "https://i2.wp.com/www.gohanblog.fr/www/wp-content/uploads/2014/02/hearthstone-740x416.jpg?resize=740%2C416",
          description: "Hearthstone (anciennement Hearthstone: Heroes of Warcraft) est un jeu de cartes à collectionner en ligne, développé et édité par la société Blizzard Entertainment. C'est un jeu gratuit (free to play) s'inspirant de l'univers de fiction médiéval-fantastique du jeu vidéo Warcraft développé par Blizzard.",
        },
        {
          id: 2,
          nom: "Path Of Exile",
          editeur: "Grinding Gear Games",
          type: "hack'n slash",
          note: "18",
          image: "https://www.pdvg.it/wp-content/uploads/2019/03/path-of-exile-hd-wallpapers-33483-8471862.jpg",
          description: "Path of Exile est un jeu vidéo de type action-RPG situé dans un univers de dark fantasy. Il est développé et produit en Nouvelle-Zélande par le studio indépendant Grinding Gear Games. Dans ses mécanismes de jeu, son ambiance et son style graphique, il est très proche de Diablo II.",
        },
        {
          id: 3,
          nom: "Age of empire",
          editeur: "Microsoft",
          type: "stratégie",
          note: "19",
          image: "https://i.pinimg.com/originals/35/1b/61/351b61584e93d3b179cb549297a95bac.jpg",
          description: "Age of Empires (souvent abrégé en AoE) est un jeu vidéo de stratégie en temps réel développé par Ensemble Studios et publié par Microsoft Game Studios le 15 octobre 1997 en Amérique du Nord et le 2 février 1998 en Europe et au Japon. L'action du jeu se déroule dans un contexte historique, sur une période comprise entre 5000 av. J.-C. et 800 ap. J.-C. au cours de laquelle le joueur doit faire évoluer une civilisation antique de l’âge de la pierre à l’âge du fer pour débloquer de nouvelles technologies et unités lui permettant de bâtir un empire. Douze civilisations sont disponibles dans le jeu, chacune d'elles s'inspirant de périodes historiques telles que l’Égypte antique et la Grèce antique ou la Mésopotamie. À sa sortie, son contexte historique lui permet de se démarquer des autres jeux de stratégie en temps réel, ce qui lui vaut d'être bien accueilli par la presse spécialisée. Il connaît rapidement un important succès commercial qui lui permet de se vendre à plus de trois millions d'exemplaires et de contribuer à faire de Microsoft Game Studios un acteur majeur du secteur du jeu vidéo.",
        },
        {
          id: 4,
          nom: "Forza",
          editeur: "Turn 10 Studios",
          type: "course",
          note: "15",
          image: "https://www.battle4play.com/wp-content/uploads/2018/11/bgng.jpg",
          description: "Forza Horizon est un jeu vidéo de simulation de course automobile sorti le 23 octobre 2012 en France, édité par Microsoft et développé par Playground Games et Turn 10 Studios sur Xbox 360. Ce jeu a été annoncé à l'E3 en 2012. Une démo du jeu contenant 3 courses et une partie de la carte en libre circulation a été mise à disposition aux possesseurs de la Xbox 360. Le jeu est ressortie 4 ans plus tard en compatibilité ascendante le 30 aout 2016 sur Xbox One",
        }

      ];
  }

  ngOnInit() {
  }

  onClick(): void {
    console.log("LOL");
  }

  public shortDescription(str) {
    if (str.split(' ').length <= 20) {
      return str;
    } else {
      return str.split(' ', 20).join(' ') + '...';
    }
  }

}
