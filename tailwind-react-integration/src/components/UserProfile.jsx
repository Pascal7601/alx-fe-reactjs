function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img
        className="rounded-full w-24 h-24 md:w-36 md:h-36 mx-auto"
        src="https://images.pexels.com/photos/34943688/pexels-photo-34943688.jpeg?_gl=1*1htv11c*_ga*MTY4ODQ4MTkxMi4xNzM3Nzk5MjAz*_ga_8JE65Q40S6*czE3NjQ4NjE1MzAkbzkkZzAkdDE3NjQ4NjE1MzAkajYwJGwwJGgw"
        alt="User"
      />
      <h1 className="text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
