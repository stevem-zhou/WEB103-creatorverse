import { createClient } from "@supabase/supabase-js";

const URL = "https://uirnozfpjkiagalucbry.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpcm5vemZwamtpYWdhbHVjYnJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5MzUxNTYsImV4cCI6MjAwODUxMTE1Nn0.rPH-FsIGhNzEQbZ8o7pm1qU0DGM03dK9-5l1YCWFGSo";
export const supabase = createClient(URL, API_KEY);
