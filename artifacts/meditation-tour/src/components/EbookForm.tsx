import React, { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

export function EbookForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !name.trim()) {
      setError("Please enter your name and email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-background border border-border rounded-2xl p-8 md:p-10 flex flex-col items-center text-center gap-4 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-secondary" />
        </div>
        <h4 className="font-serif text-2xl font-bold text-primary">Thank You, {name}!</h4>
        <p className="text-muted-foreground font-light text-sm md:text-base max-w-sm">
          Your free copy of <span className="text-primary font-medium italic">The Hidden Science Within You</span> is on its way to <span className="text-primary font-medium">{email}</span>.
        </p>
        <p className="text-xs text-muted-foreground">Please check your inbox — it may take a few minutes to arrive.</p>
      </div>
    );
  }

  return (
    <div className="bg-background border border-border rounded-2xl p-6 md:p-10 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <div>
          <h4 className="font-serif text-xl md:text-2xl font-bold text-primary">
            Get Your Free E-Book
          </h4>
          <p className="text-muted-foreground font-light text-sm mt-1">
            Enter your details below and we will send it straight to your inbox.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-secondary bg-secondary/10 px-3 py-1.5 rounded-full shrink-0 w-fit">
          <Mail className="w-3.5 h-3.5" />
          No spam, ever
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/40 font-sans"
        />
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/40 font-sans"
        />
        <button
          type="submit"
          className="bg-secondary hover:bg-secondary/90 text-primary-foreground font-sans font-medium text-sm px-6 py-3 rounded-xl transition-colors shrink-0 whitespace-nowrap"
        >
          Send Me the E-Book
        </button>
      </form>

      {error && (
        <p className="text-red-500 text-xs mt-3 font-sans">{error}</p>
      )}
    </div>
  );
}
