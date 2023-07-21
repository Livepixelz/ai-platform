import { MAX_FREE_COUNTS } from '@/constants';
import { auth } from '@clerk/nextjs';
import prismadb from '@/lib/prismadb';

export const increaseApiLimit = async () => {
  const { userId } = await auth();

  if (!userId) {
    return;
  }
  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (userApiLimit) {
    await prismadb.userApiLimit.update({
      where: {
        userId,
      },
      data: {
        count: userApiLimit.count + 1,
      },
    });
  } else {
    await prismadb.userApiLimit.create({
      data: {
        count: 1,
        userId,
      },
    });
  }
};

export const checkApiLimit = async () => {
  const { userId } = await auth();

  if (!userId) {
    return false;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  return !userApiLimit || userApiLimit.count < MAX_FREE_COUNTS;
};
