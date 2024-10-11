import { siteSchema } from "@/lib/zod-schema";
import { parseWithZod } from "@conform-to/zod";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
export async function CreateSiteAction(formData: FormData) {
  //for user to create site we check first if the user is validated and if not we redirect them to the login page
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  //after checking this we install zod and conform for form valication, define the site creation schema in zod-schema.ts before we continue

  //so when we pass with zod we have to get the form data with the params from this function
  ``;
  const submission = parseWithZod(formData, {
    schema: siteSchema,
  });

  //this is to compare out form data against the zod schema to handle errors

  if (submission.status !== "success") {
    return submission.reply();
  }

  // if the comparison is a success
}
