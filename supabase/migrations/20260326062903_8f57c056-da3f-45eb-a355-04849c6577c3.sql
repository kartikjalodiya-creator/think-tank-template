
-- Create seats table
CREATE TABLE public.seats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  partition_number integer NOT NULL CHECK (partition_number IN (1, 2)),
  seat_number integer NOT NULL,
  is_occupied boolean NOT NULL DEFAULT false,
  occupant_name text,
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE (partition_number, seat_number)
);

-- Enable RLS
ALTER TABLE public.seats ENABLE ROW LEVEL SECURITY;

-- Anyone can view seats
CREATE POLICY "Anyone can view seats" ON public.seats
  FOR SELECT TO public USING (true);

-- Only authenticated users can update seats
CREATE POLICY "Authenticated users can update seats" ON public.seats
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- Seed partition 1 (30 seats)
INSERT INTO public.seats (partition_number, seat_number)
SELECT 1, generate_series(1, 30);

-- Seed partition 2 (20 seats)
INSERT INTO public.seats (partition_number, seat_number)
SELECT 2, generate_series(1, 20);

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.seats;
