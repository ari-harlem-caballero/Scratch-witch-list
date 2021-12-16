const SUPABASE_URL = 'https://ipparcprbagzicmnplfn.supabase.co';

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTQ0NDg2MiwiZXhwIjoxOTU1MDIwODYyfQ.9yBN8_lmecK6pS6Hefszrz7_GbEdJRMTBfBaTTEwGCA';


const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getWitches() {
    const response = await client
        .from('witch')
        .select();

    return response.data;
}

export async function getWitchType(id) {
    const response = await client
        .from('details')
        .select()
        .match({ id: id })
        .single();

    return response.data;
}
