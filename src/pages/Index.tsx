import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard, Sparkles } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-8 max-w-2xl px-4">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Action Portal
          </h1>
          <p className="text-xl text-muted-foreground">
            Manage and showcase your curated collection of resources
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={() => navigate('/actions')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan-hover group"
          >
            <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            View Actions
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => navigate('/admin/actions')}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <LayoutDashboard className="w-5 h-5 mr-2" />
            Admin Panel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
