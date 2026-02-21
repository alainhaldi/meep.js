import { LucidePackagePlus } from "lucide-react";
import { Route } from "next";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

type IconAndButtonProps = {
  buttonVariant?: typeof buttonVariants.arguments;
  href: Route;
  icon: React.ReactNode;
  label: string;
};

const IconAndButton = ({
  buttonVariant = "default",
  href,
  icon,
  label,
}: IconAndButtonProps) => {
  return (
    <Button asChild variant={buttonVariant}>
      <Link href={href}>
        <div className="flex gap-x-2 items-center ">
          {icon}
          <p>{label}</p>
        </div>
      </Link>
    </Button>
  );
};

export default IconAndButton;
