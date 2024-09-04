import { supabase } from './lib/supabaseClient';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SignOut() {
  const router = useRouter();

  useEffect(() => {
    const signOut = async () => {
      await supabase.auth.signOut();
      router.push('/signin');
    };

    signOut();
  }, [router]);

  return <div>Signing out...</div>;
}