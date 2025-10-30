import { deleteUser } from "@/lib/function/users/deleteUser";
import React from "react";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";

const UserDeleteModal = ({
  id,
  onchenge,
}: {
  id: number;
  onchenge: () => void;
}) => {
  const handleDelete = async () => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (!token) return toast.error("Token not found!");

    const res = await deleteUser(id, token);

    if (res.success) {
      toast.success(res.message);
      onchenge(); // close modal
      // optionally, refresh parent data here instead of full page reload
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="fixed text-white inset-0 z-10 flex items-center justify-center bg-background/70 backdrop-blur-sm">
      <div className="relative flex flex-col md:flex-row max-w-md gap-4 p-4 bg-secondary border border-primary/20 rounded-xl">
        {/* Close button */}
        <button
          onClick={onchenge}
          className="absolute top-[-5px] left-[-5px] flex h-5 w-5 items-center justify-center rounded-full bg-background p-1 text-[10px] hover:bg-red-600 duration-300"
        >
          <ImCross />
        </button>

        <div className="flex-1 text-center md:text-left">
          <p>Are you sure you want to delete this user?</p>
          <button
            onClick={handleDelete}
            className="mt-4 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDeleteModal;
