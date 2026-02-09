import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AppProjectCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monster Inc.</CardTitle>
        <CardDescription>
          Improve the overall security measurements, to avoid human contact.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 items-center">
          <p>In progress</p>
          <Button variant={"outline"}>
            <Link href="/detail">View details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppProjectCard;
