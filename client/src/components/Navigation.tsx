import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { useEffect, useState } from "react";

const CV_URL = 'https://drive.google.com/drive/folders/1NgWxgX4_aqREwa1f92m1Jmgd-SprJUI3?usp=drive_link';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'timeline', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Highlight the nav item for the section currently in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all ${
      scrolled ? 'bg-background/85 border-b shadow-sm' : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-bold text-xl tracking-tight"
            data-testid="nav-home"
          >
            Snehal Pal<span className="text-primary">.</span>
          </button>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative text-sm font-medium transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:bg-primary after:transition-all ${
                  active === id
                    ? 'text-foreground after:w-full'
                    : 'text-muted-foreground hover:text-foreground after:w-0 hover:after:w-full'
                }`}
                data-testid={`nav-${id}`}
              >
                {label}
              </button>
            ))}
          </div>
          <Button
            size="sm"
            onClick={() => window.open(CV_URL, '_blank')}
            data-testid="button-nav-resume"
          >
            <FileText className="h-4 w-4 mr-2" />
            Resume
          </Button>
        </div>
      </div>
    </nav>
  );
}
