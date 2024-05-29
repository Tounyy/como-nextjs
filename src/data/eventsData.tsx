const image1 = '/img/event/Facebook-post-18.png';
const image2 = '/img/event/Facebook-post-18.png';
const image3 = '/img/event/Facebook-post-18.png';

export interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  image: string;
  description?: string;
}

const eventsData: Event[] = [
  {
    id: 1,
    name: "Setkání pro zlepšení dovedností",
    date: "2024-05-06",
    time: "18:00 - 20:00",
    image: image1,
    description: "Připojte se k nám na večerní setkání, kde budete mít možnost zlepšit své dovednosti v uvolněné atmosféře po práci. Tato akce je ideální pro všechny, kdo chtějí získat nové znalosti a setkat se s kolegy v neformálním prostředí."
  },
  {
    id: 2,
    name: "Profesionální networkingová akce",
    date: "2024-05-07",
    time: "18:00 - 20:00",
    image: image2,
    description: "Využijte příležitost setkat se s podobně smýšlejícími profesionály a rozšířit si svou síť kontaktů. Tato akce je navržena tak, aby vám pomohla navázat cenné kontakty a obohatit vaše profesní vztahy."
  },
  {
    id: 3,
    name: "Úvodní tech workshop",
    date: "2024-05-08",
    time: "18:00 - 20:00",
    image: image3,
    description: "Praktický workshop, kde se naučíte základní technické dovednosti. Tento workshop je vhodný pro začátečníky, kteří chtějí získat pevné základy v oblasti technologií."
  },
  {
    id: 4,
    name: "Pokročilý tech workshop",
    date: "2024-05-09",
    time: "18:00 - 20:00",
    image: image3,
    description: "Tento pokročilý workshop vám poskytne hlubší porozumění a praktické dovednosti v oblasti technologií. Ideální pro ty, kdo již mají základní znalosti a chtějí se posunout na další úroveň."
  },
  {
    id: 5,
    name: "Workshop pro experty",
    date: "2024-05-10",
    time: "18:00 - 20:00",
    image: image3,
    description: "Workshop pro pokročilé, kde se naučíte odborné technické dovednosti. Tento workshop je navržen pro zkušené profesionály, kteří chtějí rozšířit své znalosti a dovednosti."
  },
  {
    id: 6,
    name: "Setkání pro rozvoj dovedností",
    date: "2024-05-11",
    time: "18:00 - 20:00",
    image: image1,
    description: "Připojte se k nám na večerní setkání, kde budete mít možnost zlepšit své dovednosti v uvolněné atmosféře po práci. Tato akce je ideální pro všechny, kdo chtějí získat nové znalosti a setkat se s kolegy v neformálním prostředí."
  },
  {
    id: 7,
    name: "Průmyslová networkingová akce",
    date: "2024-05-12",
    time: "18:00 - 20:00",
    image: image2,
    description: "Využijte příležitost setkat se s podobně smýšlejícími profesionály a rozšířit si svou síť kontaktů. Tato akce je navržena tak, aby vám pomohla navázat cenné kontakty a obohatit vaše profesní vztahy."
  },
  {
    id: 8,
    name: "Základní tech workshop",
    date: "2024-05-13",
    time: "18:00 - 20:00",
    image: image3,
    description: "Praktický workshop, kde se naučíte základní technické dovednosti. Tento workshop je vhodný pro začátečníky, kteří chtějí získat pevné základy v oblasti technologií."
  },
  {
    id: 9,
    name: "Středně pokročilý tech workshop",
    date: "2024-05-14",
    time: "18:00 - 20:00",
    image: image3,
    description: "Praktický workshop pro ty, kdo již mají základní znalosti a chtějí se posunout na další úroveň. Naučíte se středně pokročilé technické dovednosti."
  },
  {
    id: 10,
    name: "Specializovaný tech workshop",
    date: "2024-05-15",
    time: "18:00 - 20:00",
    image: image3,
    description: "Workshop zaměřený na specializované technické dovednosti. Ideální pro ty, kdo chtějí prohloubit své znalosti v konkrétní oblasti technologií."
  },
  {
    id: 11,
    name: "Setkání pro kariérní růst",
    date: "2024-05-16",
    time: "18:00 - 20:00",
    image: image1,
    description: "Připojte se k nám na večerní setkání, kde budete mít možnost zlepšit své dovednosti v uvolněné atmosféře po práci. Tato akce je ideální pro všechny, kdo chtějí získat nové znalosti a setkat se s kolegy v neformálním prostředí."
  },
  {
    id: 12,
    name: "Networkingová akce pro manažery",
    date: "2024-05-17",
    time: "18:00 - 20:00",
    image: image2,
    description: "Využijte příležitost setkat se s podobně smýšlejícími profesionály a rozšířit si svou síť kontaktů. Tato akce je navržena tak, aby vám pomohla navázat cenné kontakty a obohatit vaše profesní vztahy."
  },
  {
    id: 13,
    name: "Tech bootcamp workshop",
    date: "2024-05-18",
    time: "18:00 - 20:00",
    image: image3,
    description: "Praktický workshop, kde se naučíte základní technické dovednosti a budete moci aplikovat své znalosti v reálných projektech."
  },
  {
    id: 14,
    name: "Workshop pro tech inovátory",
    date: "2024-05-19",
    time: "18:00 - 20:00",
    image: image3,
    description: "Tento workshop je navržen pro tech nadšence, kteří chtějí objevovat nové inovace a naučit se aplikovat inovativní technologie v praxi."
  },
  {
    id: 15,
    name: "Workshop pro budoucí technologie",
    date: "2024-05-20",
    time: "18:00 - 20:00",
    image: image3,
    description: "Získejte přehled o budoucích technologiích a naučte se, jak je efektivně využít ve svém profesním životě."
  },
  {
    id: 16,
    name: "Setkání pro profesionální dovednosti",
    date: "2024-05-21",
    time: "18:00 - 20:00",
    image: image1,
    description: "Připojte se k nám na večerní setkání, kde budete mít možnost zlepšit své dovednosti v uvolněné atmosféře po práci. Tato akce je ideální pro všechny, kdo chtějí získat nové znalosti a setkat se s kolegy v neformálním prostředí."
  },
  {
    id: 17,
    name: "Podnikatelská networkingová akce",
    date: "2024-05-22",
    time: "18:00 - 20:00",
    image: image2,
    description: "Využijte příležitost setkat se s podobně smýšlejícími profesionály a rozšířit si svou síť kontaktů. Tato akce je navržena tak, aby vám pomohla navázat cenné kontakty a obohatit vaše profesní vztahy."
  },
  {
    id: 18,
    name: "Workshop pro tech školení",
    date: "2024-05-23",
    time: "18:00 - 20:00",
    image: image3,
    description: "Praktický workshop, kde se naučíte základní technické dovednosti a budete moci aplikovat své znalosti v reálných projektech."
  },
  {
    id: 19,
    name: "Workshop pro tech excelenci",
    date: "2024-05-24",
    time: "18:00 - 20:00",
    image: image3,
    description: "Workshop zaměřený na excelenci v oblasti technologií. Ideální pro ty, kdo chtějí dosáhnout špičkové úrovně ve svých technických dovednostech."
  },
  {
    id: 20,
    name: "Workshop pro tech lídry",
    date: "2024-05-25",
    time: "18:00 - 20:00",
    image: image3,
    description: "Workshop zaměřený na rozvoj lídrovských dovedností v oblasti technologií. Naučíte se, jak efektivně vést tech týmy a projekty."
  },
  {
    id: 21,
    name: "Setkání pro zlepšení dovedností",
    date: "2024-05-26",
    time: "18:00 - 20:00",
    image: image1,
    description: "Připojte se k nám na večerní setkání, kde budete mít možnost zlepšit své dovednosti v uvolněné atmosféře po práci. Tato akce je ideální pro všechny, kdo chtějí získat nové znalosti a setkat se s kolegy v neformálním prostředí."
  },
  {
    id: 22,
    name: "Globální networkingová akce",
    date: "2024-05-27",
    time: "18:00 - 20:00",
    image: image2,
    description: "Využijte příležitost setkat se s podobně smýšlejícími profesionály a rozšířit si svou síť kontaktů. Tato akce je navržena tak, aby vám pomohla navázat cenné kontakty a obohatit vaše profesní vztahy."
  },
  {
    id: 23,
    name: "Workshop pro tech dovednosti",
    date: "2024-05-28",
    time: "18:00 - 20:00",
    image: image3,
    description: "Praktický workshop, kde se naučíte základní technické dovednosti a budete moci aplikovat své znalosti v reálných projektech."
  },
  {
    id: 24,
    name: "Inovativní tech workshop",
    date: "2024-05-29",
    time: "18:00 - 20:00",
    image: image3,
    description: "Tento workshop je navržen pro tech nadšence, kteří chtějí objevovat nové inovace a naučit se aplikovat inovativní technologie v praxi."
  },
  {
    id: 25,
    name: "Workshop pro pokročilé tech dovednosti",
    date: "2024-05-30",
    time: "18:00 - 20:00",
    image: image3,
    description: "Workshop pro pokročilé, kde se naučíte odborné technické dovednosti. Tento workshop je navržen pro zkušené profesionály, kteří chtějí rozšířit své znalosti a dovednosti."
  },
  {
    id: 26,
    name: "Setkání pro kreativní dovednosti",
    date: "2024-06-01",
    time: "18:00 - 20:00",
    image: image1,
    description: "Připojte se k nám na večerní setkání, kde budete mít možnost zlepšit své dovednosti v uvolněné atmosféře po práci. Tato akce je ideální pro všechny, kdo chtějí získat nové znalosti a setkat se s kolegy v neformálním prostředí."
  },
  {
    id: 27,
    name: "Interaktivní networkingová akce",
    date: "2024-06-02",
    time: "18:00 - 20:00",
    image: image2,
    description: "Využijte příležitost setkat se s podobně smýšlejícími profesionály a rozšířit si svou síť kontaktů. Tato akce je navržena tak, aby vám pomohla navázat cenné kontakty a obohatit vaše profesní vztahy."
  },
  {
    id: 28,
    name: "Komplexní tech workshop",
    date: "2024-06-03",
    time: "18:00 - 20:00",
    image: image3,
    description: "Praktický workshop, kde se naučíte základní technické dovednosti a budete moci aplikovat své znalosti v reálných projektech."
  },
  {
    id: 29,
    name: "Workshop pro technickou odbornost",
    date: "2024-06-04",
    time: "18:00 - 20:00",
    image: image3,
    description: "Workshop zaměřený na získání odborných technických dovedností. Ideální pro ty, kdo chtějí dosáhnout špičkové úrovně ve svých technických dovednostech."
  },
  {
    id: 30,
    name: "Workshop pro nejnovější tech trendy",
    date: "2024-06-05",
    time: "18:00 - 20:00",
    image: image3,
    description: "Získejte přehled o nejnovějších technologických trendech a naučte se, jak je efektivně využít ve svém profesním životě."
  }
];

export default eventsData;
