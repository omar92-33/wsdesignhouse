import { useState } from "react";
import { z } from "zod";
import { site, whatsappUrl } from "@/lib/site";

const projectTypes = [
  "Villa",
  "Apartment",
  "Kitchen",
  "Bedroom",
  "Commercial",
  "Bespoke Furniture",
  "Other",
] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone or WhatsApp number")
    .max(30)
    .regex(/^[0-9+()\-\s]+$/, "Use digits and + ( ) - only"),
  email: z
    .string()
    .trim()
    .max(255)
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  projectType: z.enum(projectTypes, { errorMap: () => ({ message: "Select a project type" }) }),
  location: z.string().trim().max(120).optional().or(z.literal("")),
  size: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().max(1500).optional().or(z.literal("")),
  company: z.string().max(0).optional(), // honeypot
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fieldClass =
  "w-full border-b border-input bg-transparent py-3 text-base outline-none transition-colors focus:border-champagne placeholder:text-muted-foreground/60";

export function ConsultationForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [waLink, setWaLink] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(raw);

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    if (parsed.data.company) return; // silent spam drop

    const d = parsed.data;
    const summary = [
      "Hi WS DESIGNHOUSE, I'd like to arrange a private consultation.",
      "",
      `Name: ${d.name}`,
      `Phone: ${d.phone}`,
      d.email ? `Email: ${d.email}` : null,
      `Project type: ${d.projectType}`,
      d.location ? `Location: ${d.location}` : null,
      d.size ? `Estimated size: ${d.size}` : null,
      d.message ? `About the project: ${d.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const link = whatsappUrl(summary);
    setErrors({});
    setWaLink(link);
    setSent(true);
    window.open(link, "_blank", "noopener,noreferrer");
  }

  if (sent) {
    return (
      <div className="border border-border bg-card p-10 text-center">
        <span className="rule-accent" aria-hidden />
        <h3 className="display mt-6 text-3xl">Thank you</h3>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          Your details have been prepared in WhatsApp. If the chat did not open automatically,
          use the button below — or email the studio instead.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {waLink && (
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="label border border-champagne bg-champagne px-8 py-4 text-accent-foreground"
            >
              Send on WhatsApp
            </a>
          )}
          <a
            href={`mailto:${site.email}`}
            className="label border border-input px-8 py-4 transition-colors hover:border-foreground"
          >
            Email the Studio
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <div className="hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <input id="name" name="name" className={fieldClass} placeholder="Your full name" />
        </Field>
        <Field id="phone" label="Phone / WhatsApp" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            inputMode="tel"
            className={fieldClass}
            placeholder="01xxxxxxxxx"
          />
        </Field>
        <Field id="email" label="Email (optional)" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            className={fieldClass}
            placeholder="you@email.com"
          />
        </Field>
        <Field id="projectType" label="Project Type" error={errors.projectType}>
          <select id="projectType" name="projectType" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select…
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field id="location" label="Location" error={errors.location}>
          <input
            id="location"
            name="location"
            className={fieldClass}
            placeholder="e.g. New Cairo"
          />
        </Field>
        <Field id="size" label="Estimated Project Size" error={errors.size}>
          <input id="size" name="size" className={fieldClass} placeholder="e.g. 320 m²" />
        </Field>
      </div>

      <Field id="message" label="Tell us about your project" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${fieldClass} resize-none`}
          placeholder="A few words about the space and what you'd like to achieve."
        />
      </Field>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row">
        <button
          type="submit"
          className="label border border-ink bg-ink px-10 py-5 text-ivory transition-opacity duration-200 hover:opacity-85"
        >
          Send Details on WhatsApp
        </button>
      </div>
      <p className="text-base leading-relaxed text-muted-foreground">
        Your details are used only to arrange your consultation and are never shared publicly.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="label block text-muted-foreground">
        {label}
      </label>
      <div className="mt-1">{children}</div>
      {error && (
        <p role="alert" className="mt-2 text-base text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
