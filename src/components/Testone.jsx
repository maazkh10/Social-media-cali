import { supabase } from '../supabase/client'

export default function Testone() {

  // 1️⃣ LOGIN
  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'test@demo.com',
      password: 'password123',
    })

    console.log('LOGIN DATA:', data)
    console.log('LOGIN ERROR:', error)
  }

  // 2️⃣ INSERT DATA
  const insertPost = async () => {
    const { data: auth } = await supabase.auth.getUser()

    if (!auth?.user) {
      alert('PLEASE LOGIN FIRST')
      return
    }

    const { data, error } = await supabase
      .from('post')   // ← your table name is "post"
      .insert({
        user_id: auth.user.id,
        platform: 'instagram',
        post_type: 'post',
        caption: 'Hello from React',
        scheduled_at: new Date().toISOString(),
        status: 'scheduled',
      })

    console.log('INSERT DATA:', data)
    console.log('INSERT ERROR:', error)
  }

  // 3️⃣ FETCH DATA
  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('post')
      .select('*')

    console.log('FETCH DATA:', data)
    console.log('FETCH ERROR:', error)
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Supabase Test (VERY SIMPLE)</h2>

      <button onClick={login}>1️⃣ Login</button>
      <br /><br />

      <button onClick={insertPost}>2️⃣ Insert Post</button>
      <br /><br />

      <button onClick={fetchPosts}>3️⃣ Fetch Posts</button>
    </div>
  )
}
