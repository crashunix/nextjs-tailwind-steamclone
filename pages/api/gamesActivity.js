// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  setTimeout(() => {
    res.json([
      {
        id: 1,
        image:
          "https://s2.glbimg.com/9hLtG2DbMA9l11iMODEnBHv94iU=/0x0:1200x603/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/i/b/ETfVe9TSWL7BL6NLQZYQ/1535723475188-fb-image.png",
        hours: "3.517",
        game: "Counter-Strike: Global Offensive",
        achievement: "5",
      },
      {
        id: 2,
        image:
          "https://pbs.twimg.com/profile_images/1281643775165702144/IY3IVjuu_400x400.jpg",
        hours: "0.3",
        game: "Aim Lab",
        achievement: "1",
      },
      {
        id: 3,
        image:
          "https://i.pinimg.com/originals/13/4c/21/134c21cc46757eca9debfd77caec7d09.png",
        hours: "33",
        game: "Left 4 Dead",
        achievement: "4",
      },
      {
        id: 4,
        image:
          "https://whosthanny.com/wp-content/uploads/2015/09/ori-and-the-blind-forest-wallpapers.jpg",
        hours: "8.6",
        game: "Ori and the Blind Forest",
        achievement: "2",
      },
      {
        id: 5,
        image:
          "https://www.logolynx.com/images/logolynx/a5/a5b4177d11549fe6fdd4a14f042f0e17.jpeg",
        hours: "13.4",
        game: "Portal 2",
        achievement: "5",
      },
    ]);
  }, 2000);
};
