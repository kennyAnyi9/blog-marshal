//this is our route handler, why do we even need a route handler

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  //get user session from kinde
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  //throw error if any of these conditions are true
  if (!user || user === null || !user.id) {
    throw new Error("something went wrong");
  }

  //find user where the id matches with that from kinde
  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  //create new user if user does not exist from the response we get from kinde
  //why do we need to do this
  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        id: user.id,
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        email: user.email ?? "",
        profileImage:
          user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
      },
    });
  }

  //redirect to dashboard if successful
  return NextResponse.redirect("http://localhost:3000/dashboard");
}

//after all these you go and change the post  login redirect URL in .env to /api/auth/creation
