"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormSchemaType } from "@/lib/validations/contact";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { CheckCircle, AlertCircle, Send, Loader2 } from "lucide-react";

export function ContactForm() {
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverErrorMessage, setServerErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormSchemaType) => {
    setSubmissionStatus("loading");
    setServerErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionStatus("success");
        reset();
      } else {
        setSubmissionStatus("error");
        setServerErrorMessage(result.message || "Failed to submit enquiry. Please try again.");
      }
    } catch {
      setSubmissionStatus("error");
      setServerErrorMessage("Network error occurred. Please verify your connection and retry.");
    }
  };

  return (
    <div className="p-6 sm:p-10 rounded-3xl liquid-glass shadow-lg text-card-foreground">
      {submissionStatus === "success" ? (
        <div className="py-12 px-4 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">Enquiry Received</h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-md leading-relaxed">
            Thank you for reaching out to <strong>Inclusive Market Limited</strong>. Our corporate communications team will review your enquiry and respond promptly.
          </p>
          <div className="mt-8">
            <Button
              variant="outline"
              onClick={() => setSubmissionStatus("idle")}
            >
              Send Another Message
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          {submissionStatus === "error" && (
            <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive flex items-start gap-3 text-xs leading-relaxed">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{serverErrorMessage || "Something went wrong. Please check your information and try again."}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2"
              >
                Full Name <span className="text-primary">*</span>
              </label>
              <Input
                id="fullName"
                placeholder="e.g. Adebayo Olawale"
                aria-invalid={!!errors.fullName}
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="mt-1.5 text-xs text-destructive">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2"
              >
                Email Address <span className="text-primary">*</span>
              </label>
              <Input
                id="email"
                type="email"
                placeholder="e.g. name@company.com"
                aria-invalid={!!errors.email}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2"
              >
                Phone Number <span className="text-muted-foreground lowercase text-[11px]">(optional)</span>
              </label>
              <Input
                id="phone"
                placeholder="e.g. +234 800 000 0000"
                aria-invalid={!!errors.phone}
                {...register("phone")}
              />
              {errors.phone && (
                <p className="mt-1.5 text-xs text-destructive">{errors.phone.message}</p>
              )}
            </div>

            {/* Company / Organization */}
            <div>
              <label
                htmlFor="company"
                className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2"
              >
                Company / Organization <span className="text-muted-foreground lowercase text-[11px]">(optional)</span>
              </label>
              <Input
                id="company"
                placeholder="e.g. Global Supplies Ltd"
                aria-invalid={!!errors.company}
                {...register("company")}
              />
              {errors.company && (
                <p className="mt-1.5 text-xs text-destructive">{errors.company.message}</p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2"
            >
              Enquiry Subject <span className="text-primary">*</span>
            </label>
            <Input
              id="subject"
              placeholder="e.g. Commercial Trading / Logistics Proposal"
              aria-invalid={!!errors.subject}
              {...register("subject")}
            />
            {errors.subject && (
              <p className="mt-1.5 text-xs text-destructive">{errors.subject.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2"
            >
              Message / Project Brief <span className="text-primary">*</span>
            </label>
            <Textarea
              id="message"
              placeholder="Please provide details regarding your inquiry, product volume, or proposed partnership scope..."
              aria-invalid={!!errors.message}
              rows={5}
              {...register("message")}
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-destructive">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full sm:w-auto min-w-[180px] gap-2 shadow-sm"
            disabled={submissionStatus === "loading"}
          >
            {submissionStatus === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Enquiry...</span>
              </>
            ) : (
              <>
                <span>Send Corporate Enquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
