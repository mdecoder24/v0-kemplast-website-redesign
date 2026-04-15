import { createClient } from "@supabase/supabase-js";

// Server-side only — never import this in client components.
// Uses the service role key which bypasses RLS.
// Lazy getter: client is created on first call, not at module load time,
// so Next.js can collect route config even if env vars are not yet set.
export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error(
      "Supabase env vars missing. Set NEXT_PUBLIC_SUPABASE_URL and " +
      "SUPABASE_SERVICE_ROLE_KEY in your deployment environment " +
      "(Vercel Dashboard → Project → Settings → Environment Variables)."
    );
  }
  return createClient(url, key, { auth: { persistSession: false } });
}
