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
      <div className="flex flex-col items-center text-center gap-4 py-4">
        <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center">
          <CheckCircle className="w-6 h-6 text-secondary" />
        </div>
        <div>
          <h4 className="font-serif text-xl font-bold text-primary mb-1">Thank You, {name}!</h4>
          <p className="text-muted-foreground font-light text-sm max-w-xs mx-auto">
            Your free copy of{" "}
            <span className="text-primary font-medium italic">The Hidden Science Within You</span>{" "}
            is on its way to <span className="text-primary font-medium">{email}</span>.
          </p>
          <p className="text-xs text-muted-foreground mt-2">Please check your inbox — it may take a few minutes to arrive.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-4">
        <p className="text-muted-foreground font-light text-sm">
          Enter your details and we will send it straight to your inbox.
        </p>
        <div className="flex items-center gap-1.5 text-xs font-medium text-secondary bg-secondary/10 px-3 py-1.5 rounded-full shrink-0">
          <Mail className="w-3 h-3" />
          No spam
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
