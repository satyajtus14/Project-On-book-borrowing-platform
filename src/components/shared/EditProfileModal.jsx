"use client";

import { authClient } from "@/lib/auth-client";

const EditProfileModal = ({ user, onUpdate }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    // const email = e.target.email.value;
    const image = e.target.image.value;

    try {
      const res = await authClient.updateUser({
        image,
        name,
      });

      console.log("Update result", res);
      document.getElementById("edit_modal").close();

      onUpdate?.(); // refresh UI if needed
    } catch (err) {
      console.log("Update result", res);
    }
  };

  return (
    <dialog id="edit_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Edit Profile</h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              name="name"
              defaultValue={user?.name}
              className="input input-bordered w-full"
              placeholder="Enter your name"
            />
          </div>

          {/* Image */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Image Link</span>
            </label>
            <input
              name="image"
              defaultValue={user?.image}
              className="input input-bordered w-full"
              placeholder="Enter image URL"
            />
          </div>

          <div className="modal-action">
            <button
              type="button"
              className="btn"
              onClick={() => document.getElementById("edit_modal").close()}
            >
              Cancel
            </button>

            <button className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default EditProfileModal;
