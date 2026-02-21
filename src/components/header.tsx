import { LucideCircleArrowLeft, LucideClipboardList } from "lucide-react";
import IconAndButton from "./icon-and-button";
import { ThemeSwitcher } from "./theme/theme-switcher";

type AppHeaderProps = {
  isHomeScreen: boolean;
};

const AppHeader = ({ isHomeScreen }: AppHeaderProps) => {
  const firstHeaderElement = isHomeScreen ? (
    <div></div>
  ) : (
    <IconAndButton
      buttonVariant={"outline"}
      href={"/"}
      icon={<LucideCircleArrowLeft />}
      label={"Back"}
    ></IconAndButton>
  );

  return (
    <div className="sticky top-0 z-50 h-12 flex flex-row items-center px-4 border-b backdrop-blur-xs">
      <div className="flex-1">{firstHeaderElement}</div>

      <div className="flex gap-2 flex-1 justify-center">
        <LucideClipboardList className="h-8" />
        <p className="text-2xl font-bold">Meep</p>
      </div>

      <div className="flex flex-1 justify-end">
        <ThemeSwitcher></ThemeSwitcher>
      </div>
    </div>
  );
};

export default AppHeader;
