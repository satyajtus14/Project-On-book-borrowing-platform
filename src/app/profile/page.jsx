"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import userAvatar from "../../assets/user.png";
import EditProfileModal from "@/components/shared/EditProfileModal";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin"); // ✅ correct redirect
        },
      },
    });
  };

  const refreshUser = () => {
    router.refresh();
    
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center min-h-screen bg-base-200 p-4">
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          {/* Cover */}
          <div className="h-32 bg-linear-to-r from-blue-500 to-indigo-600 rounded-t-2xl"></div>

          {/* Avatar */}
          <div className="flex justify-center -mt-12">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image
                  src={user?.image || userAvatar}
                  alt="User"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl font-bold">{user?.name}</h2>

            <p className="text-sm text-gray-500">{user?.email}</p>

            <div className="divider"></div>

            <div className="w-full text-left space-y-2 text-sm">
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {user?.phone || "111-(222)-3333"}
              </p>
              <p>
                <span className="font-semibold">Company:</span>{" "}
                {user?.company || "SJTECHHUB INC"}
              </p>
            </div>

            <div className="card-actions mt-4 flex gap-3">
              <button
                className="btn btn-outline btn-primary btn-sm"
                onClick={() =>
                  document.getElementById("edit_modal").showModal()
                }
              >
                Edit Profile
              </button>

              <button
                onClick={handleSignOut}
                className="btn btn-outline btn-error btn-sm"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <EditProfileModal onUpdate={refreshUser} user={user} />
    </div>
  );
};

export default ProfilePage;
