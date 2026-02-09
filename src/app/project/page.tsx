import { LucideFolder, LucideMail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProjectDetailPage = () => {
  return (
    <div className="p-8">
      <Card>
        <CardContent>
          <div className="flex gap-36">
            <div className="flex flex-col gap-2">
              <p>2130005</p>
              <p>30/40</p>
              <p>Due to 15.04.2026</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center">
                <LucideFolder size={16} />

                <p>Documents</p>
              </div>
              <div className="flex gap-1 items-center">
                <LucideMail size={16} />
                <p>Henry J. Waternoose III</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectDetailPage;
