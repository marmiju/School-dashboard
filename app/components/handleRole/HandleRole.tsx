"use client";



import { baseUrl } from "@/lib/function/users/getUsers";
import React, { useEffect, useState } from "react";





interface HandleRoleProps {
  handlechenge: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: number;
}

const HandleRole: React.FC<HandleRoleProps> = ({ handlechenge, value }) => {
  const [roles, setRoles] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    let mounted = true;
    const getRoles = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/roles`);
        console.log("mang",res)
        alert(res)
        if (!res.ok) throw new Error(`Fetch failed: ${JSON.stringify(res)}`);
        const data = await res.json();

        if (mounted) setRoles(data.data);
      } catch (err: any) {
        console.error(err);
        if (mounted) setError(err?.message ?? "Unknown error");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    getRoles();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div className="text-text/40">Loading roles…</div>;
  if (error) return <div className="text-text/40">Error loading roles: {error}</div>;

  return (
    <div>
      <h3 className="text-sm text-text">এক্সেসঃ</h3>
      <select
      required
        value={value.toString()} // ✅ ensure consistent type
        onChange={handlechenge}
        className="w-full p-2 border-text/30 border  rounded-full text-text"
      >
        <option className="text-text/30 bg-secondary" value="0" disabled>
          Select Role
        </option>
        {roles &&
          roles.map((role) => (
            <option className="text-text/30 bg-secondary" key={role.id} value={role.id.toString()}>
              {role.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default HandleRole;
