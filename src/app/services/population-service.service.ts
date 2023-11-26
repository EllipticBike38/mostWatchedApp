import { Injectable } from '@angular/core';


export interface City {
  image: string;
  title: string;
  value: string;
  isQuestion: boolean;
}

const regioni = new Map<string, string>([
  ['abruzzo', 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Regione-Abruzzo-Stemma.svg'],
  ['basilicata', 'https://upload.wikimedia.org/wikipedia/commons/0/07/Regione-Basilicata-Stemma.svg'],
  ['calabria', 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Coat_of_arms_of_Calabria.svg'],
  ['campania', 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Regione-Campania-Stemma.svg'],
  ['emilia romagna', 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Regione-Emilia-Romagna-Stemma.svg'],
  ['friuli venezia giulia', 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Friuli-Venezia-Giulia-Stemma.svg'],
  ['lazio', 'https://upload.wikimedia.org/wikipedia/commons/7/76/Lazio_Coat_of_Arms.svg'],
  ['liguria', 'https://upload.wikimedia.org/wikipedia/commons/4/41/Coat_of_arms_of_Liguria.svg'],
  ['lombardia', 'https://upload.wikimedia.org/wikipedia/commons/1/12/Regione-Lombardia-Stemma.svg'],
  ['marche', 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Coat_of_arms_of_Marche.svg'],
  ['molise', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Regione-Molise-Stemma.svg'],
  ['piemonte', 'https://upload.wikimedia.org/wikipedia/commons/4/42/Regione-Piemonte-Stemma.svg'],
  ['puglia', 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Coat_of_Arms_of_Apulia.svg'],
  ['sardegna', 'https://upload.wikimedia.org/wikipedia/commons/3/33/Sardegna-Stemma.svg'],
  ['sicilia', 'https://upload.wikimedia.org/wikipedia/commons/8/84/Sicilian_Flag.svg'],
  ['toscana', 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Coat_of_arms_of_Tuscany.svg'],
  ['trentino alto adige', 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Coat_of_arms_of_Trentino-South_Tyrol.svg'],
  ['umbria', 'https://upload.wikimedia.org/wikipedia/commons/5/55/Regione-Umbria-Stemma.svg'],
  ['valle d\'aosta', 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Valle_d%27Aosta-Stemma.svg'],
  ['veneto', 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Coat_of_Arms_of_Veneto.png'],
])

@Injectable({
  providedIn: 'root'
})
export class PopulationServiceService {

  city1: City = {
    image: 'https://picsum.photos/200/300',
    title: 'Title',
    value: '0',
    isQuestion: false
  };
  city2: City = {
    image: 'https://picsum.photos/200/400',
    title: 'Title',
    value: '0',
    isQuestion: true
  };

  constructor() { }

  getInitialElements() {
    this.genRandomElement(this.city1).then((city) => {
      this.city1 = city;
    }
    );
    this.genRandomElement(this.city2).then((city) => {
      this.city2 = city;
    }
    );
  }

  nextQuestion() {
    console.log(this.city1, this.city2);
    this.city1.image = this.city2.image;
    this.city1.title = this.city2.title;
    this.city1.value = this.city2.value;
    this.genRandomElement(this.city2).then((city) => {
      this.city2 = city;
    }
    );
  }

  async genRandomElement(city: City) {
    var data = await (await fetch('https://raw.githubusercontent.com/italia/anpr-opendata/main/data/popolazione_residente_export.csv')).text();
    var lines = data.split('\n');
    var randomLine = lines[Math.floor(Math.random() * lines.length)].split(',');
    // DATA ELABORAZIONE,REGIONE,PROVINCIA,COD_ISTAT_COMUNE,COMUNE,RESIDENTI mi interessa solo "COMUNE(prov.)"" e RESIDENTI e regione
    city.title = randomLine[4] + ' (' + randomLine[2] + ')';
    city.value = randomLine[5];
    city.image = regioni.get(randomLine[1].toLowerCase()) || 'https://picsum.photos/200/300';
    return city;
  }

  getCity(n: number) {
    return n==1?this.city1:this.city2;
  }
  


}
