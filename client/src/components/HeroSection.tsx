import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@assets/snehal_profile.jpg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="min-h-[88vh] pt-16 flex items-center relative overflow-hidden">
      {/* Background: faint grid texture */}
      <div className="absolute inset-0 bg-grid"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground mb-6 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                IIT Kharagpur · B.Tech. (Hons.) · AI &amp; Applications
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-4">
                Snehal Pal<span className="text-primary">.</span>
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground font-light">
                <span className="text-primary">Generative AI Engineer</span> |{' '}
                <span className="text-primary">Researcher</span> |{' '}
                <span className="text-primary">Founder</span>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              I build RAG systems, LLM agents and voice AI that hold up in production. IIT Kharagpur,
              ex-Purplle and CoralComp, co-founder of Hodos, and author on arXiv.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('timeline')}
                className="hover-elevate"
                data-testid="button-view-work"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="hover-elevate"
                data-testid="button-contact"
              >
                Contact Me
              </Button>
            </div>
            
            <dl className="grid grid-cols-3 max-w-md border-y py-4">
              {[
                { value: '1', label: 'arXiv paper' },
                { value: '4', label: 'Internships' },
                { value: 'YC', label: 'Startup School' },
              ].map(({ value, label }, i) => (
                <div key={label} className={i > 0 ? 'pl-5 border-l' : ''}>
                  <dt className="text-2xl font-bold tracking-tight">{value}</dt>
                  <dd className="text-xs text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>

            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => openLink('https://github.com/2004Snehal')}
                data-testid="link-github"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => openLink('https://www.linkedin.com/in/snehal-pal-8274403aa/')}
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => openLink('mailto:palsnehal004@gmail.com')}
                data-testid="link-email"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-primary"></div>
              <img
                src={profileImage}
                alt="Snehal Pal"
                className="relative w-72 h-72 lg:w-80 lg:h-80 object-cover object-[50%_25%] rounded-full border-4 border-background shadow-2xl"
                data-testid="img-profile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}