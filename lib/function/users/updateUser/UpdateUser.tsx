import { userWithDetails } from "@/lib/interface/UserWithdetails";
import { baseUrl } from "../../auth/getMe";

export async function UpdateUser(formData: userWithDetails) {
  console.log("FormData to be sent:", formData);
  try {
    const data = new FormData();

    // Append normal fields
    data.append("user_id", formData.user_id?.toString() || "");
    data.append("username", formData.username || "");
    data.append("email", formData.email || "");
    data.append("role", formData.role || "");
    data.append("join_date", formData.join_date ? formData.join_date.toString().split("T")[0] : "");
    data.append("birth_date", formData.birth_date ? formData.birth_date.toString().split("T")[0] : "");
    data.append("address", formData.address || "");
    data.append("education", formData.education || "");
    data.append("blood_group", formData.blood_group || "");
    data.append("religion", formData.religion || "");
    data.append("phone", formData.phone || "");
    data.append("class_name", formData.class_name || "");
    data.append("class_role", formData.class_role || "");

    // Append image (must be File, not blob URL string)
    if (formData.profile_image instanceof File) {
      data.append("profile_image", formData.profile_image);
    }

    const response = await fetch(`${baseUrl}/api/user/details`, {
      method: "POST",
      credentials: "include",
      body: data, // Convert FormData to JSON object
    });

    const result = await response.json();
    console.log("Backend response:", result);

    return result;
  } catch (error) {
    console.error("Error updating user:", error);
  }
}
