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
        <p>In progress</p>
      </CardContent>
    </Card>
  );
};

export default AppProjectCard;
