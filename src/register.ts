import { Prisma, PrismaClient } from "@prisma/client";
import express from "express";
const app = express();

const prisma = new PrismaClient();

app.use(express.json());

app.get("/", async (req, res) => {
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Athos Express",
  //     email: "athos.express@express.com",
  //     posts: {
  //       create: {
  //         title: "Post utilizando express",
  //       },
  //     },
  //     profile: {
  //       create: {
  //         bio: "Bio de usuário utilizando express",
  //       },
  //     },
  //   },
  // });
  const profile = await prisma.user.findUnique({
    where: {
      id: 2,
    },
    include: {
      posts: true,
      profile: true,
    },
  });
  res.status(200).json({ profile: profile });
});

app.listen(3000, () => {
  console.log("server runing on port 3000");
});
