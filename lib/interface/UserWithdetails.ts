export interface userWithDetails {
  user_id: number;
  username: string;
  email: string;
  role: 'admin' | 'teacher' | 'student'; //  role enum 
  join_date: string | null;   // ISO date string, null 
  address: string | null;
  education: string | null;
  birth_date: string | null;  // ISO date string, null 
  blood_group: string | null;
  religion: string | null;
  phone: string | null;
  class_name: string | null;
  class_role: string | null;
  profile_image: string | File | null; // image URL or path
}
