export const ProfilePicture = ({ currentUser, avatar }) => {
  return (
    <div>
      {currentUser.profilePicture ? (
        <img
          className="mx-auto rounded-full object-cover h-64 w-64 lg:h-72 lg:w-72 mask mask-circle"
          src={currentUser.profilePicture}
          alt="profilePic"
        />
      ) : (
        <img
          className="mx-auto rounded-full object-cover h-64 w-64 lg:h-72 lg:w-72 mask mask-circle"
          src={avatar}
          alt="profilePic"
        />
      )}
    </div>
  );
};
