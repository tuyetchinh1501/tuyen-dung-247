"use client";

import { useState } from "react";
import { Briefcase } from "lucide-react";
import { jobs } from "@/data/jobs";
import { JobCard } from "@/components/job-card";
import { JobDetail } from "@/components/job-detail";
import type { Job } from "@/data/jobs";

export function JobList() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <section id="positions" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-2 justify-center">
          <Briefcase className="h-8 w-8 text-brand-teal" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Vị Trí Đang Tuyển
          </h2>
        </div>
        <p className="text-muted-foreground text-center mb-12 font-body">
          {jobs.length} vị trí đang mở — Tìm công việc phù hợp với bạn
        </p>

        <div className="space-y-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onApply={setSelectedJob} />
          ))}
        </div>

        {jobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground font-body">
              Hiện tại chưa có vị trí nào đang tuyển. Vui lòng quay lại sau.
            </p>
          </div>
        )}

        <JobDetail
          job={selectedJob}
          open={!!selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      </div>
    </section>
  );
}
