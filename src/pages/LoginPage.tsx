import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { supabase } from "../lib/supabase";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);

      return;
    }

    navigate("/admin");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-xl rounded-[36px] bg-white p-10 shadow-sm">
        <h1 className="mb-10 text-5xl font-bold text-slate-900">Admin Login</h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-6 py-5 text-xl outline-none focus:border-blue-600"
          />

          <input
            type="password"
            placeholder="Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-6 py-5 text-xl outline-none focus:border-blue-600"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-blue-600 py-5 text-2xl font-semibold text-white transition hover:bg-blue-700"
          >
            {loading ? "Wird geladen..." : "Einloggen"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;
