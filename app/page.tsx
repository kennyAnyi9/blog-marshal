import { Button } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const userSession = await getUser();
  return (
    <div className="p-20">
      {userSession ? (
        <div>
          <LogoutLink>
            <Button variant={"default"} className="rounded-full">
              logout
            </Button>
          </LogoutLink>
        </div>
      ) : (
        <div>
          <LoginLink>
            <Button variant={"default"} className="rounded-full">
              login
            </Button>
          </LoginLink>
          <RegisterLink>
            <Button variant={"outline"} className="rounded-full">
              {" "}
              signup
            </Button>
          </RegisterLink>
        </div>
      )}
    </div>
  );
}
