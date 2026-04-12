const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://haznwgcywltiasqcpawp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhhem53Z2N5d2x0aWFzcWNwYXdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwMzczNjMsImV4cCI6MjA4MTYxMzM2M30.GiPbfmcOzzmqLjL0cyz_Yl6VIiR9X0EIaxlDH1UN964'
);

async function test() {
  console.log("Testing insert into quotes...");
  const { data, error } = await supabase.from('quotes').insert([{
    name: 'Test Test',
    email: 'test@example.com',
    product: ['Test'],
    subject: 'Test',
    message: 'Test message'
  }]);

  if (error) {
    console.error("Supabase Error:", error);
  } else {
    console.log("Insert successful!", data);
  }
}

test();
