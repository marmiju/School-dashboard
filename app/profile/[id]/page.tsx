"use client";

import { useEffect, useState } from "react";
import { GetMe } from "@/lib/function/auth/getMe";
import { userWithDetails } from "@/lib/interface/UserWithdetails";
import EditInfo from "@/app/components/editInfo/EditInfo";
import { useRouter } from "next/navigation";

const EditInfoWrapper = () => {
  const [userData, setUserData] = useState<userWithDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const me = await GetMe();
      if (!me) {
        router.push("/login"); // যদি না পাওয়া যায় redirect
        return;
      }
      setUserData(me);
      setLoading(false);
    };
    fetchUser();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return <EditInfo userDataProps={userData!} />;
};

export default EditInfoWrapper;
