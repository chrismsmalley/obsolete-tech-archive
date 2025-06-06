

// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;


// export const supabase = createClient(supabaseUrl, supabaseKey);

// // Fetch current vote counts for a tech entry by slug
// export async function getVotes(slug) {
//   const { data, error } = await supabase
//     .from('votes')
//     .select('upvotes, downvotes')
//     .eq('slug', slug)
//     .single();

//   if (error) {
//     console.error('Error fetching votes:', error);
//     return { upvotes: 0, downvotes: 0 };
//   }

//   return data;
// }

// // Cast an upvote or downvote
// export async function castVote(slug, type) {
//   const field = type === 'up' ? 'upvotes' : 'downvotes';

//   const { data, error } = await supabase.rpc('increment_vote', {
//     vote_slug: slug,
//     vote_field: field
//   });

//   if (error) {
//     console.error('Error casting vote:', error);
//   }

//   return data;
// }