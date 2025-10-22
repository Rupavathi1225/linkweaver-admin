import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ActionCard } from "@/components/ActionCard";
import { Loader2 } from "lucide-react";

const Actions = () => {
  const { data: actions, isLoading } = useQuery({
    queryKey: ['actions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('actions')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Featured Actions
          </h1>
          <p className="text-muted-foreground text-lg">
            Explore our curated collection of resources and opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {actions?.map((action) => (
            <ActionCard
              key={action.id}
              title={action.title}
              link={action.link}
              description={action.description}
              buttonText={action.button_text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Actions;
