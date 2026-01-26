-- Run this in your Supabase SQL Editor to set up the tables and storage

-- 1. Create the job_applications table
create table if not exists job_applications (
  id bigint primary key generated always as identity,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  phone text not null,
  position text not null,
  portfolio_url text,
  message text
);

-- 2. Enable Row Level Security (RLS)
alter table job_applications enable row level security;

-- 3. Create a policy to allow anyone to insert applications
create policy "Assume public insert" on job_applications for insert with check (true);

-- 4. Create the storage bucket for resumes (if it doesn't exist)
insert into storage.buckets (id, name, public) 
values ('resumes', 'resumes', true)
on conflict (id) do nothing;

-- 5. Set up storage policies for the resumes bucket
-- Allow public uploads
create policy "Public Upload" on storage.objects for insert with check ( bucket_id = 'resumes' );
-- Allow public read access (so you can download them)
create policy "Public Select" on storage.objects for select using ( bucket_id = 'resumes' );
