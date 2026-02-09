import { LucideFolder, LucideMail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Project } from "../../../app/generated/prisma/client";

type ProjectDetailProps = {
  project: Project;
};

const ProjectDetailPage = ({ project }: ProjectDetailProps) => {
  return (
    <div className="p-8">
      <Card>
        <CardContent>
          <div className="flex gap-24">
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
            <div className="flex flex-1 gap-12">
              <Field>
                <FieldLabel htmlFor="textarea-message">
                  Project status
                </FieldLabel>
                <Textarea
                  id="textarea-message"
                  placeholder="Describe the current project status."
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="textarea-message">Next steps</FieldLabel>
                <Textarea
                  id="textarea-message"
                  placeholder="Describe the next steps."
                />
              </Field>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectDetailPage;
