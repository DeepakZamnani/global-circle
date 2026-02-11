export interface Scholarship {
  id?: string;
  slug: string; // Required unique slug (admin sets kebab-case, e.g. 'ireland-government-scholarship-2025')
  title: string;
  provider?: string;
  amount?: string;
  deadline?: string;
  eligibleNationalities?: string[]; // e.g. ['Indian', 'International']
  hostCountries?: string[]; // Country names (can display flags if you map later)
  courses?: string[];
  level?: string; // e.g. 'Undergraduate', 'Masters', 'PhD'
  description: string;
  applyLink: string; // External URL
  featured?: boolean;
  imageUrl?: string;
}