// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json({
    avatar:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/9e/9e1c7583dc792a199ae3ac2e15e6b91e64badae1_full.jpg",
    profileurl: "https://steamcommunity.com/id/crashunix/",
    nickname: "crashunix",
    email: "jgomesmacario@gmail.com",
    name: "Juan Gomes Macário",
    level: 17,
    description: "Front-end developer",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
    country: "Brasil",
  });
};
