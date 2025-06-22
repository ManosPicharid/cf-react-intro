import { useEffect } from "react";
import { useParams } from "react-router";

const UserPage = () => {
  const { userId } = useParams();

  useEffect(() => {
    document.title = `CF7 User id: ${userId}`;
  }, [userId]);

  return (
    <>
      <h1 className="text-bold text-2xl text-center mt-8">
        User with id: {userId}
      </h1>
    </>
  );
};
export default UserPage;
