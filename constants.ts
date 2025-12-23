
import { Project, Service, ProcessStep, SiteContent } from './types';
import { IMAGES } from './images/index';

export const CONTENT: SiteContent = {
  nav: {
    projects: { de: "Projekte", es: "Proyectos" },
    about: { de: "Über mich", es: "Sobre mí" },
    services: { de: "Leistungen", es: "Servicios" },
    process: { de: "Prozess", es: "Proceso" },
    contact: { de: "Kontakt", es: "Contacto" },
  },
  hero: {
    name: "YANELLE SCHWARZ",
    role: { de: "Design & Renovierung", es: "Diseño y Renovación" },
    claim: { 
      de: "Innenräume mit Charakter", 
      es: "Espacios interiores con identidad" 
    },
    cta: { de: "Projekte ansehen", es: "Ver proyectos" },
    image: IMAGES.hero, 
  },
  about: {
    title: { de: "Über mich", es: "Sobre mí" },
    paragraphs: [
      {
        de: "Yanelle Schwarz ist eine Innenarchitektin, die sich darauf konzentriert, funktionale, ästhetische Räume mit Charakter zu schaffen. Ich glaube an die Ehrlichkeit von Materialien und die Reinheit der Form.",
        es: "Yanelle Schwarz es una diseñadora de interiores y arquitecta enfocada en crear espacios funcionales, estéticos y con carácter. Creo en la honestidad de los materiales y la pureza de la forma."
      },
      {
        de: "Mit einem sensiblen Blick für Details begleite ich Renovierungen und Einrichtunsgprojekte, die eine eigene Identität widerspiegeln und Ruhe ausstrahlen.",
        es: "Con una mirada sensible a los detalles, acompaño proyectos de renovación y diseño que reflejan una identidad propia y evocan serenidad."
      }
    ],
    image: IMAGES.about.portrait,
    signature: IMAGES.about.signature,
  },
  contact: {
    title: { de: "Kontakt", es: "Contacto" },
    email: "studio@yanelleschwarz.com",
    instagram: "https://instagram.com",
    address: "Berlin, DE",
    formName: { de: "Name", es: "Nombre" },
    formEmail: { de: "E-Mail", es: "Email" },
    formMessage: { de: "Nachricht", es: "Mensaje" },
    formButton: { de: "Senden", es: "Enviar" },
  },
  footer: {
    rights: { de: "Alle Rechte vorbehalten", es: "Todos los derechos reservados" },
    legal: { de: "Impressum", es: "Aviso Legal" },
    privacy: { de: "Datenschutz", es: "Privacidad" }
  }
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: { de: "Mini-Wohnung Aachen", es: "Mini-piso Aachen" },
    category: { de: "Renovierung & Einrichten", es: "Renovación y Decoración" },
    image: IMAGES.projects.miniApartment.main,
    location: "Aachen, DE",
    year: "2023",
    description: {
      de: "Dieses 35m² große Apartment im historischen Zentrum von Aachen wurde komplett entkernt und neu gedacht. Ziel war es, auf kleinstem Raum maximale Funktionalität zu schaffen, ohne die Großzügigkeit zu verlieren. Helle Eichenhölzer treffen auf warmen Travertin, während maßgefertigte Einbaumöbel jeden Zentimeter nutzen. Der offene Grundriss lässt das Licht tief in den Raum fallen und schafft eine Atmosphäre der Ruhe inmitten der Stadt.",
      es: "Este apartamento de 35m² en el centro histórico de Aachen fue completamente vaciado y repensado. El objetivo era crear la máxima funcionalidad en un espacio mínimo sin perder la sensación de amplitud. La madera de roble clara se encuentra con el travertino cálido, mientras que los muebles empotrados a medida aprovechan cada centímetro. La planta abierta permite que la luz penetre profundamente en el espacio, creando una atmósfera de calma en medio de la ciudad."
    },
    gallery: IMAGES.projects.miniApartment.gallery
  },
  {
    id: 2,
    title: { de: "DER Garten", es: "EL Jardín" },
    category: { de: "Garten & Landschaft", es: "Jardín, Paisaje y Plantas" },
    image: IMAGES.projects.stilleGarten.main,
    location: "Köln, DE",
    year: "2022",
    description: {
      de: "Ein verwilderter Hinterhof wurde in eine Oase der Ruhe verwandelt. Das Konzept 'Der Stille Garten' basiert auf japanischer Ästhetik, kombiniert mit heimischen Pflanzen. Alte Ziegelmauern wurden erhalten und bilden einen Kontrast zu modernen Betonelementen und üppigem Grün. Ein zentrales Wasserspiel sorgt für akustische Abschirmung zur Straße, während Schattenpflanzen und Farne eine kühle, meditative Atmosphäre schaffen.",
      es: "Un patio trasero descuidado se transformó en un oasis de calma. El concepto 'El Jardín Silencioso' se basa en la estética japonesa combinada con plantas autóctonas. Se conservaron los viejos muros de ladrillo, creando un contraste con elementos modernos de hormigón y una vegetación exuberante. Una fuente central proporciona aislamiento acústico de la calle, mientras que las plantas de sombra y los helechos crean una atmósfera fresca y meditativa."
    },
    gallery: IMAGES.projects.stilleGarten.gallery
  },
  {
    id: 3,
    title: { de: "Wohndetails Villa Yanielito", es: "Detalles Villa Yanielito" },
    category: { de: "Interior Design & Details", es: "Diseño de Interiores y Detalles" },
    image: IMAGES.projects.hausLichtblick.main,
    location: "Düsseldorf, DE",
    year: "2024",
    description: {
      de: "Bei diesem Projekt stand das Detail im Vordergrund. Für ein Einfamilienhaus in Düsseldorf wurde ein ganzheitliches Material- und Lichtkonzept entwickelt. Der Fokus lag auf der haptischen Qualität der Oberflächen: gebürsteter Naturstein, Leinenstoffe und patiniertes Messing. Besondere Aufmerksamkeit galt den Übergängen zwischen Materialien und der Inszenierung des Tageslichts durch gezielte Sichtachsen.",
      es: "En este proyecto, el detalle fue el protagonista. Para una casa unifamiliar en Düsseldorf, se desarrolló un concepto integral de materiales e iluminación. La atención se centró en la calidad táctil de las superficies: piedra natural cepillada, telas de lino y latón patinado. Se prestó especial atención a las transiciones entre materiales y a la puesta en escena de la luz natural mediante ejes visuales estratégicos."
    },
    gallery: IMAGES.projects.hausLichtblick.gallery
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: { de: "Innen Design", es: "Diseño de interiores" }
  },
  {
    id: 2,
    title: { de: "Renovierung", es: "Renovación" }
  },
  {
    id: 3,
    title: { de: "Einrichten", es: "Decoración y amueblamiento" }
  },
  {
    id: 4,
    title: { de: "Gestaltung", es: "Diseño de espacios" }
  },
  {
    id: 5,
    title: { de: "Möbel", es: "Mobiliario" }
  },
  {
    id: 6,
    title: { de: "Garten – Landschaft – Pflanzen", es: "Jardín, paisaje y plantas" }
  }
];

export const PROCESS: ProcessStep[] = [
  {
    id: 1,
    title: { de: "Beratung + Konzept", es: "Asesoría + Concepto" },
    description: {
        de: "Wir definieren Ihre Vision, analysieren den Raum und entwickeln erste Ideen.",
        es: "Definimos su visión, analizamos el espacio y desarrollamos las primeras ideas."
    }
  },
  {
    id: 2,
    title: { de: "Gestaltung + Planung", es: "Diseño + Planificación" },
    description: {
        de: "Detaillierte Entwürfe, Materialauswahl und präzise Ausführungsplanung.",
        es: "Diseños detallados, selección de materiales y planificación precisa."
    }
  },
  {
    id: 3,
    title: { de: "Umsetzung", es: "Ejecución" },
    description: {
        de: "Koordination der Gewerke und Überwachung der Baustelle für höchste Qualität.",
        es: "Coordinación de gremios y supervisión de obra para asegurar la máxima calidad."
    }
  },
  {
    id: 4,
    title: { de: "Finalisierung", es: "Finalización" },
    description: {
        de: "Der letzte Schliff, Dekoration und Übergabe Ihres neuen Zuhauses.",
        es: "El toque final, decoración y entrega de su nuevo hogar listo para vivir."
    }
  }
];
