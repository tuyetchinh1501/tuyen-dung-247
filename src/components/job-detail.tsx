"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { LarkForm } from "@/components/lark-form";
import { MapPin, Building2, Banknote, CheckCircle2 } from "lucide-react";
import type { Job } from "@/data/jobs";

interface JobDetailProps {
  job: Job | null;
  open: boolean;
  onClose: () => void;
}

export function JobDetail({ job, open, onClose }: JobDetailProps) {
  if (!job) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header */}
        <div className="bg-brand-dark p-6">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <DialogTitle className="text-2xl font-bold text-white">
                {job.title}
              </DialogTitle>
              <Badge className="bg-brand-yellow text-brand-dark border-0 font-semibold">
                {job.type}
              </Badge>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300 font-body">
              <span className="flex items-center gap-1.5">
                <Building2 className="h-4 w-4 text-brand-teal" />
                {job.department}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-brand-teal" />
                {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Banknote className="h-4 w-4 text-brand-teal" />
                {job.salary}
              </span>
            </div>
          </DialogHeader>
        </div>

        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Mô Tả Công Việc</h3>
            <ul className="space-y-2 font-body">
              {job.description.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-brand-teal mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Requirements */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Yêu Cầu</h3>
            <ul className="space-y-2 font-body">
              {job.requirements.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-brand-yellow mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Benefits */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quyền Lợi</h3>
            <ul className="space-y-2 font-body">
              {job.benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-brand-success mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Apply Form */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Ứng Tuyển Ngay — {job.title}
            </h3>
            <LarkForm url={job.larkFormUrl} title={`Ứng tuyển ${job.title}`} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
