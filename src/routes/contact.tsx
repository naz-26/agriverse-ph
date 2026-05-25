import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — AgriCom PH" },
      { name: "description", content: "Get in touch with the AgriCom PH team for partnerships, media inquiries, or contributions." },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8 pt-16 pb-10">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">Contact</div>
          <h1 className="mt-2 font-display text-5xl lg:text-6xl">Let's grow something together.</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Partnerships, media inquiries, farmer contributions—we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 lg:px-8 py-14 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 p-8 rounded-3xl border border-border bg-card">
          {sent ? (
            <div className="py-16 text-center">
              <div className="font-display text-3xl">Salamat! Your message is on its way.</div>
              <p className="mt-3 text-muted-foreground">We'll respond within 2 business days.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-5"
            >
              <h2 className="font-display text-3xl">Send us a message</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" type="text" required />
                <Field label="Email" type="email" required />
              </div>
              <Field label="Subject" type="text" />
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Message</label>
                <textarea required rows={5} className="mt-2 w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition">
                Send message
              </button>
            </form>
          )}
        </div>

        <aside className="lg:col-span-2 space-y-5">
          <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
            <Detail icon={Mail} label="Email" value="hello@agricom.ph" />
            <Detail icon={Phone} label="Phone" value="+63 2 8123 4567" />
            <Detail icon={MapPin} label="Office" value="Quezon City, Metro Manila" />
          </div>
          <div className="p-6 rounded-2xl border border-border bg-card">
            <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-3">Follow us</div>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((I, i) => (
                <a key={i} href="#" className="size-10 rounded-full grid place-items-center bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition">
                  <I className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border">
            <iframe
              title="AgriCom PH office location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=121.02%2C14.62%2C121.10%2C14.68&layer=mapnik"
              className="w-full h-64"
              loading="lazy"
            />
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}

function Field({ label, type, required }: { label: string; type: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">{label}</label>
      <input
        type={type}
        required={required}
        className="mt-2 w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function Detail({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="size-10 rounded-full grid place-items-center bg-primary/10 text-primary shrink-0">
        <Icon className="size-4" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
}
