import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const createUser = await prisma.user.create({
    data: {
      name: "Athos",
      email: "athos.sampaio@email.com",
      posts: {
        create: {
          title: "Post numero 1",
        },
      },
      profile: {
        create: {
          bio: "bio do usuario",
        },
      },
    },
  });

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(allUsers, { depth: null });

  const updatePost = await prisma.post.update({
    where: { id: 1 },
    data: { published: true },
  });
  console.log(updatePost);
}

main();
