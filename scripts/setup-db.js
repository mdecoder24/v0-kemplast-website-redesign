// Run once to create all database tables in Supabase.
// Usage: npm run db:setup
// Requires SUPABASE_DB_URL in .env.local

const { Client } = require("pg");
const fs = require("fs");
const path = require("path");

// Load .env.local manually (Next.js doesn't auto-load it in plain node scripts)
function loadEnv() {
  const envPath = path.join(__dirname, "..", ".env.local");
  if (!fs.existsSync(envPath)) {
    console.error("❌ .env.local file not found");
    process.exit(1);
  }
  const lines = fs.readFileSync(envPath, "utf8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const value = trimmed.slice(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

const SQL = `
-- ─────────────────────────────────────────────
-- QUOTES (contact / quote request form)
-- ─────────────────────────────────────────────
create table if not exists quotes (
  id          uuid        primary key default gen_random_uuid(),
  created_at  timestamptz not null    default now(),
  name        text        not null,
  email       text        not null,
  phone       text,
  company     text,
  subject     text,
  product     text[],
  message     text
);

-- Allow anyone to insert, only authenticated users to read
alter table quotes enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies where tablename = 'quotes' and policyname = 'quotes_anon_insert'
  ) then
    execute 'create policy quotes_anon_insert on quotes for insert to anon with check (true)';
  end if;
  if not exists (
    select 1 from pg_policies where tablename = 'quotes' and policyname = 'quotes_auth_select'
  ) then
    execute 'create policy quotes_auth_select on quotes for select to authenticated using (true)';
  end if;
end
$$;

-- ─────────────────────────────────────────────
-- APPLICATIONS (careers / join-team form)
-- ─────────────────────────────────────────────
create table if not exists applications (
  id               uuid        primary key default gen_random_uuid(),
  created_at       timestamptz not null    default now(),
  name             text        not null,
  email            text        not null,
  phone            text,
  position         text,
  message          text,
  resume_file_name text
);

alter table applications enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies where tablename = 'applications' and policyname = 'applications_anon_insert'
  ) then
    execute 'create policy applications_anon_insert on applications for insert to anon with check (true)';
  end if;
  if not exists (
    select 1 from pg_policies where tablename = 'applications' and policyname = 'applications_auth_select'
  ) then
    execute 'create policy applications_auth_select on applications for select to authenticated using (true)';
  end if;
end
$$;
`;

async function main() {
  loadEnv();

  const dbUrl = process.env.SUPABASE_DB_URL;
  if (!dbUrl || dbUrl.includes("YOUR_PASSWORD")) {
    console.error(
      "❌  SUPABASE_DB_URL is not set in .env.local.\n" +
      "    Go to: Supabase Dashboard → Settings → Database → Connection string → URI\n" +
      "    Copy the URI, replace [YOUR-PASSWORD] with your database password, and add it to .env.local as:\n" +
      "    SUPABASE_DB_URL=postgresql://postgres.xxxxx:[PASSWORD]@aws-0-xxx.pooler.supabase.com:6543/postgres"
    );
    process.exit(1);
  }

  const client = new Client({ connectionString: dbUrl, ssl: { rejectUnauthorized: false } });

  console.log("Connecting to Supabase PostgreSQL...");
  await client.connect();
  console.log("✅  Connected.");

  console.log("Running migrations...");
  await client.query(SQL);
  console.log("✅  Tables created / verified:");
  console.log("     • quotes");
  console.log("     • applications");
  console.log("\nDatabase is ready.");

  await client.end();
}

main().catch((err) => {
  console.error("❌  Migration failed:", err.message);
  process.exit(1);
});
