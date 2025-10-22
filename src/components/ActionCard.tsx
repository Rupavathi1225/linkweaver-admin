import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ActionCardProps {
  title: string;
  link: string;
  description: string;
  buttonText: string;
}

export const ActionCard = ({ title, link, description, buttonText }: ActionCardProps) => {
  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card 
      className="group cursor-pointer hover:scale-[1.02] transition-all duration-300 bg-card border-border/50 hover:border-primary/50"
      onClick={handleClick}
    >
      <CardHeader>
        <CardTitle className="text-xl font-bold text-foreground flex items-center justify-between">
          {title}
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground/70 break-all">
          {link}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        <Button 
          variant="outline"
          className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-cyan-hover font-medium"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};
