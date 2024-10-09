import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function NewSiteRoute() {
  return (
    <>
      <div className="flex flex-col flex-1 justify-center items-center">
        <Card className="max-w-[450px]">
          <CardHeader>
            <CardTitle> Create Site</CardTitle>
            <CardDescription>
              Create your Site here. Click the button below once you're done...
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col gap-y-6">
              <div className="grid gap-2">
                <label>Site Name</label>
                <Input placeholder="Site Name" />{" "}
              </div>
              <div className="grid gap-2">
                <label>Subdirectory</label>
                <Input placeholder="Subdirectory" />
              </div>
              <div className="grid gap-2">
                <label>Description</label>
                <Textarea placeholder="Description of your site" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
