import { useAuthStore } from "@/store/auth";
import { useRouter } from "expo-router";
import { useEffect } from "react";


export function RouteGuard({ children }: { children: React.ReactNode }) {
  const user = useAuthStore((s) => s.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) return; // wait until user exists

    const onboarded = user?.user_metadata?.onboarding_complete;
    if (!onboarded) {
      router.replace("/(onboarding)" as any);
    } else {
      router.replace("/(tabs)/training" as any);
    }
  }, [user]);

  return <>{children}</>;
}

