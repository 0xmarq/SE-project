// providers/AuthProvider.tsx
import { supabase } from "@/lib/supabaseClient";
import { useAuthStore } from "@/store/auth";
import { useEffect, useState } from "react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const setSession = useAuthStore((s) => s.setSession);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;

    const init = async () => {
      const { data } = await supabase.auth.getSession();
      if (!active) return;
      setSession(data.session ?? null);
      setReady(true);
    };

    init();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session ?? null);
    });

    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, [setSession]);

  if (!ready) return null; // Wait for session to be checked!

  return <>{children}</>;
}
