const resourcesMock = [
  {
    "url": "https://www.youtube.com/watch?v=0I2kzKQnbKs",
    "categories": [
      "marketing",
    ],
    "title": "5 Consejos Para Crear Campañas en Google Ads (Adwords), por Juan Lombana. 2020",
    "description": "Aprende a crear las mejores campañas de anuncios en Google Ads,  con estos 5 consejos por Juan Lombana para tu negocio o empresa.",
    "preview":"0I2kzKQnbKs.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=9yVf53LUc7Q",
    "categories": [
      "marketing",
    ],
    "title": "Revelo mis Secretos para poner Anuncios en Facebook e Instagram",
    "description": "En este vídeo revelo mis secretos para usar la plataforma de anuncios de Facebook. Hablaremos de las 5 claves para sacar rentabilidad y generar dinero con el marketing digital con esta nueva plataforma.",
    "preview":"9yVf53LUc7Q.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=oYmcm8yflVI",
    "categories": [
      "marketing",
    ],
    "title": "Marketing Digital para Startups con Luis Betancourt",
    "description": "En este video te presentamos a Luis Betancourt, Experto en Marketing Digital, quien nos habla de cómo mercadear tus productos.",
    "preview":"oYmcm8yflVI.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=l7Hvac9s3U4",
    "categories": [
      "marketing",
    ],
    "title": "3 Consejos de Marketing Digital con Juan G. Lombana",
    "description": "En este video te presentamos a Juan Antonio González Lombana, Google Regional Trainer, quien ayuda a pequeñas y medianas empresas con sus campañas de marketing digital. En este video nos comparte 3 tips para tener una mejor presencia en el mundo digital.",
    "preview":"l7Hvac9s3U4.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=6Wcg15FaUnU",
    "categories": [
      "marketing",
    ],
    "title": "A Complete 2020 Marketing Strategy That Requires No Budget | Digital Agency Expo Keynote",
    "description": "In this keynote, Gary uses the majority of the time to provide the audience as much value as possible and does a 50 minute Q&A around business strategy in 2020. He covers a wide base of questions including influencer marketing, underpriced attention, scaling a personal brand and more. Be sure to check the timestamps in the comments for all the questions... Enjoy!",
    "preview":"6Wcg15FaUnU.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=-K4zonaIrV8",
    "categories": [
      "ingenieria",
    ],
    "title": "Curso completo de React.js desde 0 con hooks",
    "description": "El día de hoy vamos a pasar un sitio en vanilla HTML, CSS y JS  a  React.js.",
    "preview":"-K4zonaIrV8.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=ygA5U7Wgsg8",
    "categories": [
      "ingenieria",
    ],
    "title": "1. La PILA DE EJECUCIÓN (Call Stack) de JAVASCRIPT | JS en ESPAÑOL",
    "description": "Aprendé CÓMO SE EJECUTA el código en JavaScript para PROGRAMAR MEJOR y SOLUCIONAR BUGS más rápido.",
    "preview":"ygA5U7Wgsg8.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=elKTXEyL4ic",
    "categories": [
      "ingenieria",
    ],
    "title": "¿Qué necesitas para ser Frontend Developer?",
    "description": "Aprender a ser un frontend developer no es fácil y puedes perderte durante el camino de tu aprendizaje, en esta conferencia descubrirás las importante de aprender HTML, CSS y JavaScript y en que debes de enfocarte para seguir aprendiendo.",
    "preview":"elKTXEyL4ic.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=HRM3TufbSjI",
    "categories": [
      "ingenieria",
    ],
    "title": "Notas sobre el (no) cifrado de la base de datos de WhatsApp en iPhone",
    "description": "Vídeo de Chema Alonso ( https://mypublicinbox.com/ChemaAlonso ) en el que explica que WhatsApp en iPhone no cifra la base de datos de mensajes,  algo que sí que hace en Android. Esto es una debilidad que expone tus mensajes en tus copias de seguridad y frente a equipos con los que pareas tu iPhone que estén infectados o vulnerados.",
    "preview":"HRM3TufbSjI.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=AviVgvX8cHc",
    "categories": [
      "ingenieria",
    ],
    "title": "Híbrido vs Nativo - Nicolas Molina",
    "description": "NG Bolivia es la primera Conferencia Internacional de Desarrollo Web y Angular en Bolivia. Es un evento que nace con la iniciativa de fomentar el Desarrollo de Software y la capacitación en torno a tecnologías actuales para la Web junto a Google Developer Experts reconocidos y nuestros mejores expositores nacionales.",
    "preview":"AviVgvX8cHc.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=wndnioFusXU",
    "categories": [
      "transformacion-digital",
    ],
    "title": "Así mejoramos nuestra productividad con Slack",
    "description": "Para muchos, trabajar y estar en Slack son la misma cosa. Slack es mucho más que una plataforma de mensajería instantánea orientada al trabajo colaborativo, se diferencia de sus competidores en las facilidades que ofrece para organizar las conversaciones, compartir archivos, hacer integración con otras apps y hacer búsquedas.",
    "preview":"wndnioFusXU.png",

  },
  {
    "url": "https://www.youtube.com/watch?v=PU-wPKtEB1A",
    "categories": [
      "transformacion-digital",
    ],
    "title": "Introducción a Slack",
    "description": "Platzi te cuenta su experiencia con Slack: https://platzi.com/blog/como-eliminam... @freddier y @cvander te explican cómo usamos Slack, el increíble servicio de comunicación corporativo, y la forma en que esta app web y móvil ha revolucionado el trabajo presencial y a distancia en Platzi.",
    "preview":"PU-wPKtEB1A.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=rgLzo5QfakY",
    "categories": [
      "transformacion-digital",
    ],
    "title": "Que Es y Como Usar Trello | Tutorial En Español 2020",
    "description": "Si quieres saber que es y  como utilizar trello te aconsejo ver este tutorial en español donde te explico como funciona y así aprenderás como usar trello y llevar mejor una gestión de tiempo y proyectos este 2020.",
    "preview":"rgLzo5QfakY.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=pqdndtyVKsY",
    "categories": [
      "transformacion-digital",
    ],
    "title": "Administra tu tiempo con Google | Google Keep, Google Calendar & Google Tasks",
    "description": "El comienzo de cada mes está marcado por la organización 1. Es el momento de decidir QUÉ, CUÁNDO y CUÁNTO vas a hacer en los próximos días.",
    "preview":"pqdndtyVKsY.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=F9WEpmFjLOo",
    "categories": [
      "transformacion-digital",
    ],
    "title": "Utilizar Asana como gestor de Tareas - Tutorial en Español",
    "description": "En este video tutorial vamos a conocer cómo funciona la app: Asana, sobretodo en el uso personal como gestor de tarea. Esta es una potente aplicación que tiene opciones gratuitas y de pago.",
    "preview":"F9WEpmFjLOo.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=LON8IjAPEu4",
    "categories": [
      'diseño',
    ],
    "title": "Figma Tutorial - ¿Qué es Atomic Design?",
    "description": "Atomic design es una metodología que te permite crear diseños de una manera mas organizada y controlada. La estructura base son átomos, moléculas y organismos, atomic design busca el comenzar a construir interfaces comenzando desde los elementos mas pequeños y despues generar componentes cada vez mas completos.",
    "preview":"LON8IjAPEu4.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=FoCNedUiVqU",
    "categories": [
      'diseño',
    ],
    "title": "Curso Figma desde cero - Aprende a diseñar en equipo y en tiempo real",
    "description": "El diseño es hoy en día uno de los requerimientos más importantes en el desarrollo de software y producto. Figma es la mayor revolución en el diseño porque permite trabajar en equipo, en tiempo real y sobre un mismo producto.",
    "preview":"FoCNedUiVqU.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=5HfqCSm9k3Y",
    "categories": [
      'diseño',
    ],
    "title": "Curso de Adobe XD | 1. Introduccion y que Aprenderemos en el Curso",
    "description": "En este primer video Introductorio te mostrare todo lo que aprenderás en el curso y los proyectos que realizaremos.",
    "preview":"5HfqCSm9k3Y.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=yZP8VbrlKGo",
    "categories": [
      "negocios",
    ],
    "title": "Ventas Digitales por celular y whatsapp Jürgen Klarić",
    "description": "En esta crisis la transformación y ventas digitales es un hecho, ya no es una opción para los emprendedores.",
    "preview":"yZP8VbrlKGo.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=8HYL7RdErns",
    "categories": [
      "negocios",
    ],
    "title": "6 FORMAS DE DIFERENCIAR TU EMPRESA",
    "description": "Olvídate del costo, servicio y calidad, estos ya no son factores de diferenciación para tu empresa. No solo tienes que ser diferente, sino radicalmente sorprendente. ¿En qué es diferente tu empresa?",
    "preview":"8HYL7RdErns.png",
  },

  {
    "url": "https://www.youtube.com/watch?v=WXqOz9pqO-Y",
    "categories": [
      "negocios",
    ],
    "title": "10 Negocios que soportan las crisis | Que negocios hacer en tiempos de crisis",
    "description": "Bienvenidos de nuevo a este Vídeo bloc en donde les hablare en este capítulo de los negocios que soportan las crisis.",
    "preview":"WXqOz9pqO-Y.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=RCBMkAgOMQk",
    "categories": [
      "creacion-de-contenido"
    ],
    "title": '¿Qué es el contenido? | Curso de Identidad y Contenido | Roger Terán',
    "description": 'Para poder crear algo, primero debes de entenderlo. En este video te voy a dar una definición de la palabra "contenido" que nunca antes habías escuchado. Entender esto es el primer paso para ser un Creador de contenido profesional y valorado por su audiencia.',
    "preview":"RCBMkAgOMQk.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=Ccr_ogKVfRM",
    "categories": [
      "creacion-de-contenido",
    ],
    "title": "Secretos para crear tu COMUNIDAD | CARLOS MUÑOZ",
    "description": "Aquí te dejo algunos secretos para que puedas crear tu comunidad.",
    "preview":"Ccr_ogKVfRM.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=Q5jiifErFEE",
    "categories": [
      "creacion-de-contenido",
    ],
    "title": "HOW TO START | A Gary Vaynerchuk Original",
    "description": "MANY OF YOU NEED TO BEGIN DOCUMENTING YOUR JOURNEYS AND NOT BE CONCERNED WITH CREATING PERFECT CONTENT. ENOUGH ASKING QUESTIONS, IT'S TIME YOU GET STARTED!!!",
    "preview":"Q5jiifErFEE.png",
  },

  {
    "url": "https://www.youtube.com/watch?v=kkvrEvbeCwA",
    "categories": [
      "creacion-de-contenido",
    ],
    "title": "10 claves para conquistar Internet con tus ideas | Platzi Cursos",
    "description": "No importa si tienes miles de fans en una FanPage de Facebook, si no entregas contenido de calidad a tus seguidores nunca podrás crecer. Es necesario tener una estrategia para crear contenidos ya sea para YouTube, Instagram, Twitter o cualquier medio por el que distribuyas tus ideas y mensajes.",
    "preview":"kkvrEvbeCwA.png",
  },
  {
    "url": "https://www.youtube.com/watch?v=Te5tIKILy98",
    "categories": [
      "creacion-de-contenido",
    ],
    "title": "¿Cómo CREAR CONTENIDO y CRECER en REDES SOCIALES?",
    "description": "En el episodio de esta semana vamos a hablar sobre cómo y qué tipo de contenido crear para crecer en redes sociales.",
    "preview":"Te5tIKILy98.png",
  },
];


module.exports = {
  resourcesMock,
};