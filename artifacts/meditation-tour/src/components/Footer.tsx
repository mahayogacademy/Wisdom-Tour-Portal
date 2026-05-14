import { Link } from "wouter";

export function Footer() {
  const cities = [
    { name: "Edmonton", path: "/edmonton" },
    { name: "Calgary", path: "/calgary" },
    { name: "Vancouver", path: "/vancouver" },
    { name: "Ottawa", path: "/ottawa" },
    { name: "Toronto", path: "/toronto" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          
          <div>
            <h2 className="font-serif text-3xl font-bold mb-6 text-secondary">
              Meditation & Wisdom
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed font-light">
              A sacred Canadian tour led by Jagadguru Mahayogi Siddhababa. 
              Experience the ancient Himalayan wisdom transmitted through direct lineage.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Tour Cities</h3>
            <ul className="flex flex-col gap-4">
              {cities.map((city) => (
                <li key={city.name}>
                  <Link 
                    href={city.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors font-light"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Contact & Info</h3>
            <ul className="flex flex-col gap-4 text-primary-foreground/80 font-light">
              <li>Email: tour@meditationandwisdom.ca</li>
              <li>Phone: +1 (800) 555-0199</li>
              <li className="mt-4">
                Please note: All dates and venues are subject to change. 
                Reserving a spot ensures you receive updates.
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 md:mt-24 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60 font-light">
          <p>&copy; {new Date().getFullYear()} Meditation & Wisdom Tour. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}