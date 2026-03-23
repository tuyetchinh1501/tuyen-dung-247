"use client";

import { MapPin, Building2, Banknote, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Job } from "@/data/jobs";

interface JobCardProps {
  job: Job;
  onApply: (job: Job) => void;
}

export function JobCard({ job, onApply }: JobCardProps) {
  return (
    <Card className="border-border hover:border-brand-teal/50 transition-all hover:shadow-lg group">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl font-bold group-hover:text-brand-teal transition-colors">
                {job.title}
              </h3>
              <Badge
                variant="secondary"
                className="bg-brand-yellow/20 text-brand-dark border-0 font-medium"
              >
                {job.type}
              </Badge>
            </div>

            <p className="text-muted-foreground font-body text-sm mb-4 leading-relaxed">
              {job.summary}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-body">
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
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-brand-teal" />
                {job.type}
              </span>
            </div>
          </div>

          <Button
            onClick={() => onApply(job)}
            className="bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold px-6 uppercase tracking-wider shrink-0"
          >
            Ứng Tuyển
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
