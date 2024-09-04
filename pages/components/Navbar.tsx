import Link from 'next/link';
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Navbar() {
  const [user, setUser] = useState<any>(null);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <nav>
      {user ? (
        <>
          <Link href="/admin">Admin</Link>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <Link href="/signin">Sign In</Link>
      )}
    </nav>
  );
}