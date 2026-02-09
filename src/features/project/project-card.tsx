import { LucideLoader } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
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
    <Card className="flex-1 max-w-3xl">
      <CardHeader>
        <CardTitle>Monster Inc.</CardTitle>
        <CardDescription>
          Improve the overall security measurements, to avoid human contact.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 items-center justify-between">
          <Badge variant="secondary">
            <LucideLoader />
            <p>In progress</p>
          </Badge>
          <Button variant={"outline"}>
            <Link href="/project">View details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppProjectCard;
