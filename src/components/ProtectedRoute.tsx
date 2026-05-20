import { Navigate } from "react-router-dom";

import { useEffect, useState } from "react";

import { supabase } from "../lib/supabase";

type Props = {
  children: React.ReactNode;
};

function ProtectedRoute({ children }: Props) {
  const [loading, setLoading] = useState(true);

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        setAuthenticated(true);
      }

      setLoading(false);
    };

    checkSession();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
