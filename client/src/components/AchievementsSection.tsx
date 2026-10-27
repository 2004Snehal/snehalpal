import { Card } from "@/components/ui/card";
import { Trophy, Star, TrendingUp, Award } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  metric?: string;
  icon: 'trophy' | 'star' | 'trending' | 'award';
}

export default function AchievementsSection() {
  //todo: remove mock functionality - achievements data will come from props
  const achievements: Achievement[] = [
    {
      id: "1",
      title: "Y Combinator Startup School",
      description: "Selected out of 20,000 applicants; won $5,000 AWS and $1,000 Azure credits.",
      metric: "Top 20K",
      icon: "star"
    },
    {
      id: "2",
      title: "GC Data Analytics Bronze",
      description: "Bronze at the General Championship Data Analytics Competition (Frammer.com) as Vice Captain.",
      metric: "Bronze",
      icon: "trophy"
    },
    {
      id: "3",
      title: "Codeforces Specialist",
      description: "Peak rating above 1400 in competitive programming.",
      metric: "1400+",
      icon: "trending"
    },
    {
      id: "4",
      title: "INMO Camp 2021",
      description: "Cleared regional-level IOQM 2021 (RMO equivalent) and attended the Indian National Maths Olympiad camp.",
      metric: "INMO",
      icon: "award"
    },
    {
      id: "5",
      title: "Open IIT Supply Chain",
      description: "Won Bronze twice; Vice Captain for Inter-Hall Data Analytics 2026.",
      metric: "2× Bronze",
      icon: "trophy"
    },
    {
      id: "6",
      title: "NTSE Stage 1",
      description: "Ranked 13th in the state-level NTSE Stage 1 exam; also part of NSO Table Tennis.",
      metric: "Rank 13",
      icon: "award"
    }
  ];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'trophy':
        return <Trophy className="h-6 w-6" />;
      case 'star':
        return <Star className="h-6 w-6" />;
      case 'trending':
        return <TrendingUp className="h-6 w-6" />;
      case 'award':
        return <Award className="h-6 w-6" />;
      default:
        return <Trophy className="h-6 w-6" />;
    }
  };

  return (
    <section id="achievements" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading text-3xl lg:text-4xl font-bold tracking-tight mb-4">Major Achievements</h2>
          <p className="text-lg text-muted-foreground">
            Competitions, olympiads and startup programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card 
              key={achievement.id} 
              className="p-6 text-center glow-card"
              data-testid={`achievement-${achievement.id}`}
            >
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <div className="text-primary">
                    {getIcon(achievement.icon)}
                  </div>
                </div>
                
                {achievement.metric && (
                  <div className="text-2xl font-bold text-primary">
                    {achievement.metric}
                  </div>
                )}
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <div className="text-muted-foreground">arXiv Paper</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <div className="text-muted-foreground">Startup Founded</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-muted-foreground">Internships</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">Top 1%</div>
            <div className="text-muted-foreground">JEE Advanced 2023</div>
          </div>
        </div>
      </div>
    </section>
  );
}