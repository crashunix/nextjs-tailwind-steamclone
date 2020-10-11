// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  setTimeout(() => {
    res.json([
      {
        id: 1,
        time: "01:06:35",
        game: "Counter-Strike: Source",
        value: "-80",
        image:
          "https://img.pngio.com/csgo-character-png-png-collections-csgo-character-png-612_698.png",
        color: "blue-400",
      },
      {
        id: 2,
        time: "01:06:35",
        game: "The Witcher 3: Wild Hunt",
        value: "-30",
        image: "https://pngimg.com/uploads/witcher/witcher_PNG21.png",
        color: "gray-500",
      },
      {
        id: 3,
        time: "06:24:44",
        game: "Just Cause 4",
        value: "-25",
        image:
          "https://justcause.square-enix-games.com/client/647f3bbfa6f5a57848b33aa98a4eb16c.png",
        color: "orange-400",
      },
      {
        id: 4,
        time: "06:24:44",
        game: "Assassin's Creed 2",
        value: "-60",
        image:
          "https://i.pinimg.com/originals/d0/c5/88/d0c588a0a54e48369672a11391e3966e.png",
        color: "red-400",
      },
    ]);
  }, 2000);
};
