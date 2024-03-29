const proyectos = [
  {
    url: "https://github.com/M4ss1ck/massick-portfolio",
    title: "Mi portafolio (esta página)",
    description:
      "Página web creada con GatsbyJS usando Markdown para las publicaciones y TailwindCSS para los estilos. Soporte para modo oscuro y múltiples idiomas.",
    imageName: "portfolio.png",
    tags: ["Gatsby", "Tailwind CSS", "Markdown", "TypeScript"],
    demo: "https://massick.is-a.dev/",
    date: "Present",
    cv: true
  },
  {
    url: "https://github.com/M4ss1ck/anime-bot",
    title: "Anime bot",
    description: "Search for anime in AniList, make your own list, schedule reminders and many more through Telegram.",
    imageName: "animebot.png",
    tags: ["TypeScript"],
    demo: "https://t.me/anim3robot",
    date: "2023-07",
    cv: true
  },
  {
    url: "https://github.com/M4ss1ck/thunderbird-plugin",
    title: "Daily Report Thunderbird plugin",
    description: "Store commonly used values for To, CC and Subject fields.",
    imageName: "dailyreport.png",
    tags: ["HTML", "JavaScript"],
    date: "2023-06",
    cv: true
  },
  {
    url: "https://github.com/M4ss1ck/gatsby-cv-maker",
    title: "CV maker",
    description: "Crear un hermoso CV a partir de un formulario.",
    imageName: "cv.png",
    tags: ["Gatsby", "Tailwind CSS", "TypeScript"],
    demo: "https://cool-cv-maker.netlify.app/",
    date: "2022-06",
    cv: true
  },
  {
    url: "https://github.com/DeltaZen/webxdc-chain-reaction",
    title: "Chain Reaction",
    description: "Version of popular Chain Reaction game for Delta Chat",
    imageName: "chain-reaction.png",
    tags: ["DeltaChat", "webxdc", "game", "typescript", "React", "Redux"],
    date: "2022-11",
    cv: true
  },
  {
    url: "https://github.com/DeltaZen/webxdc-bejeweled",
    title: "Dejeweled",
    description: "Bejeweled board game clon for Delta Chat",
    imageName: "dejeweled.png",
    tags: ["DeltaChat", "webxdc", "game", "typescript", "phaser3"],
    date: "2022-09",
    cv: true
  },
  {
    url: "https://github.com/DeltaZen/webxdc-c4",
    title: "DeltaConnect",
    description: "Connect 4 board game clon for Delta Chat",
    imageName: "c4.png",
    tags: ["DeltaChat", "webxdc", "game", "typescript"],
    date: "2022-08",
    cv: true
  },
  {
    url: "https://github.com/DeltaZen/webxdc-sudoku",
    title: "Sudoku",
    description: "Sudoku game with scoreboard to compete in Delta Chat groups with friends!",
    imageName: "sudoku.png",
    tags: ["DeltaChat", "webxdc", "game", "TypeScript"],
    date: "2022-07",
    cv: true
  },
  {
    url: "https://github.com/DeltaZen/webxdc-color-lines",
    title: "Color Lines",
    description: "Color Lines (a.k.a. WinLines or WinLinez) game to compete with friends in groups on Delta Chat.",
    imageName: "color-lines.png",
    tags: ["DeltaChat", "webxdc", "game"],
    date: "2022-07",
    cv: true
  },
  {
    url: "https://github.com/M4ss1ck/gatsby-gamebook",
    title: "Gamebook",
    description: "Make your own gamebook modifying a single file.",
    imageName: "gamebook.png",
    tags: ["Gatsby", "TypeScript"],
    demo: "https://gamebook.gatsbyjs.io/",
    date: "2022-06",
    cv: true
  },
  {
    url: "https://github.com/DeltaZen/webxdc-exquisite-corpse",
    title: "Exquisite Corpse",
    description:
      "A social creative writing game for Delta Chat made using React + TypeScript + TailwindCSS + Vite",
    imageName: "corpse.png",
    tags: ["React", "Tailwind CSS", "TypeScript", "Vite", "webxdc", "game"],
    date: "2022-06",
  },
  {
    url: "https://github.com/DeltaZen/webxdc-snake",
    title: "Snake game",
    description: "Snake game for Delta Chat made using HTML + CSS + JS + Vite",
    imageName: "snake.png",
    tags: ["HTML", "CSS", "JavaScript", "Vite", "webxdc", "game"],
    date: "2022-06",
  },
  {
    url: "https://github.com/DeltaZen/rainbow.xdc",
    title: "Rainbow game",
    description:
      "A color picker game for Delta Chat made using React + SCSS + Vite",
    imageName: "rainbow.png",
    tags: ["React", "SCSS", "Vite", "webxdc", "game"],
    date: "2022-06",
  },
  {
    url: "https://github.com/DeltaZen/webxdc-whack-a-ninja",
    title: "Whack-A-Ninja: Whack-a-mole clon for Delta Chat",
    description:
      "A Whack-A-Mole clon for playing in Delta Chat made with only HTML + CSS + Javascript",
    imageName: "ninja.png",
    tags: ["HTML", "CSS", "JavaScript", "webxdc", "game"],
    date: "2022-06",
  },
  {
    url: "https://github.com/DeltaZen/webxdc-math-battle",
    title: "Math Battle game for Delta Chat",
    description:
      "Math Battle game for Delta Chat made with only HTML + CSS + Javascript",
    imageName: "mathgame.png",
    tags: ["HTML", "CSS", "JavaScript", "webxdc", "game"],
    date: "2022-06",
  },
  {
    url: "https://github.com/M4ss1ck/webxdc-react-hello-world",
    title: 'React "hello world!" app for Delta Chat',
    description:
      "A template for creating webxdc apps using react and Tailwind CSS.",
    imageName: "webxdc-react-template.png",
    tags: ["React", "Tailwind CSS", "Vite"],
    date: "2022-05",
  },
  {
    url: "https://github.com/M4ss1ck/longPollRobot",
    title: "Long Poll Robot",
    description:
      "Envía encuestas con más de 10 opciones y serán divididas equitativamente usando el comando /poll",
    imageName: "pollbot.png",
    tags: ["NodeJS", "Telegram Bot", "Telegraf"],
    date: "2022-05",
  },
  {
    url: "https://github.com/M4ss1ck/tg-telegraf-bot",
    title: "WastingBot (remix)",
    description: "Telegram bot using nodejs and Telegraf.js",
    imageName: "wastingbotremix.png",
    tags: ["NodeJS", "Telegram Bot", "Telegraf"],
    demo: "https://t.me/massickRemixBot",
    date: "2022-06",
  },
  {
    url: "https://github.com/M4ss1ck/ciec-frontend-gatsby",
    title: "CIEC website",
    description:
      "Página web del Centro de Investigaciones de Ecosistemas Costeros (CIEC).",
    imageName: "ciec.jpg",
    tags: ["Gatsby", "Tailwind CSS"],
    date: "2022-01",
    cv: true
  },
  {
    url: "https://github.com/M4ss1ck/wastingBot",
    title: "WastingBot",
    description: "Telegram bot using nodejs and telebot",
    imageName: "wastingbot.png",
    tags: ["NodeJS", "Telegram Bot", "Telebot"],
    date: "2022-02",
  },
  {
    url: "https://github.com/M4ss1ck/nextjs-blog-template",
    title: "Next.js Blog Template",
    description: "Blog template using Next.js and TailwindCSS",
    imageName: "next-blog.png",
    tags: ["Next.js", "Tailwind CSS"],
    date: "2021-11",
  },
]

export default proyectos
