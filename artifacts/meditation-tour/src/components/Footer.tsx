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
    <footer className="bg-primary text-primary-foreground py-12 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 lg:gap-24">

          <div className="sm:col-span-2 md:col-span-1">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-secondary">
              Himalayan Meditation<br />&amp; Wisdom Tour
            </h2>
            <p className="text-primary-foreground/75 leading-relaxed font-light text-sm md:text-base">
              A rare experience to meet and meditate with Enlightened Master His Holiness Jagadguru Mahayogi Siddhababa. Explore consciousness, meditation and timeless spiritual wisdom.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg md:text-xl font-semibold mb-4 md:mb-6">Tour Cities</h3>
            <ul className="flex flex-col gap-3">
              {cities.map((city) => (
                <li key={city.name}>
                  <Link
                    href={city.path}
                    className="text-primary-foreground/75 hover:text-secondary transition-colors font-light text-sm md:text-base"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg md:text-xl font-semibold mb-4 md:mb-6">Contact &amp; Info</h3>
            <ul className="flex flex-col gap-3 text-primary-foreground/75 font-light text-sm md:text-base">
              <li>canada@siddhamahayog.org</li>
              <li>+1 (613) 879-1825</li>
              <li className="mt-2 text-xs md:text-sm text-primary-foreground/55 leading-relaxed">
                All dates and venues are subject to change. Reserving a spot ensures you receive updates.
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-primary-foreground/10 text-center text-xs md:text-sm text-primary-foreground/50 font-light">
          <p>&copy; {new Date().getFullYear()} Mahayogi Siddhababa Spiritual Academy, Canada. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
