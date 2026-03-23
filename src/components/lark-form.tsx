import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LarkFormProps {
  url: string;
  title?: string;
}

export function LarkForm({ url, title = "Form Ứng Tuyển" }: LarkFormProps) {
  const isPlaceholder = !url || url === "YOUR_LARK_FORM_URL_HERE";

  if (isPlaceholder) {
    return (
      <div className="w-full py-12 flex items-center justify-center bg-muted border border-dashed border-border">
        <div className="text-center px-6">
          <p className="text-muted-foreground font-body text-lg mb-2">
            Form Lark sẽ được nhúng tại đây
          </p>
          <p className="text-muted-foreground/60 font-body text-sm">
            Cập nhật URL trong file{" "}
            <code className="bg-muted-foreground/10 px-1.5 py-0.5">
              src/data/jobs.ts
            </code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-8 flex flex-col items-center justify-center bg-brand-teal/5 border border-brand-teal/20">
      <p className="text-muted-foreground font-body text-sm mb-4 text-center px-4">
        Nhấn nút bên dưới để mở form ứng tuyển trên Lark
      </p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Button
          size="lg"
          className="bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold px-8 py-6 text-lg uppercase tracking-wider"
        >
          <ExternalLink className="mr-2 h-5 w-5" />
          Mở {title}
        </Button>
      </a>
    </div>
  );
}
