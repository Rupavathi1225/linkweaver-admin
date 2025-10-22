-- Create actions table for storing action items
CREATE TABLE public.actions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  link TEXT NOT NULL,
  description TEXT NOT NULL,
  button_text TEXT NOT NULL DEFAULT 'Visit Website',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.actions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow everyone to read actions (public page)
CREATE POLICY "Anyone can view actions"
  ON public.actions
  FOR SELECT
  USING (true);

-- Create policy to allow authenticated users to insert actions (admin only)
CREATE POLICY "Authenticated users can insert actions"
  ON public.actions
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create policy to allow authenticated users to update actions (admin only)
CREATE POLICY "Authenticated users can update actions"
  ON public.actions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create policy to allow authenticated users to delete actions (admin only)
CREATE POLICY "Authenticated users can delete actions"
  ON public.actions
  FOR DELETE
  TO authenticated
  USING (true);

-- Insert some sample data
INSERT INTO public.actions (title, link, description, button_text) VALUES
  ('100% English - Personal and individual', 'https://en.ism.de/study+program', 'Study Program - Come study at one of the best business schools in Germany. ISM Berlin: Study in small learning groups with a 7:1 student to teacher ratio. Officially recognised. A strong network.', 'Visit Website'),
  ('Bachelor''s Programs', 'https://en.ism.de/bachelors', 'The first academic step into the ISM world.', 'Apply Now'),
  ('Visa Guide', 'https://en.ism.de/visa-guide', 'How to get a student visa for Germany - Here is our Guide.', 'Learn More');