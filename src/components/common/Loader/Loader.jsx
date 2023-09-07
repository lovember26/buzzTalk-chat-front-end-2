import { Comment } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Comment
      visible={true}
      height="80"
      width="80"
      ariaLabel="comment-loading"
      wrapperStyle={{
        position: "absolute",
        top: "50%",
        left: "50%",
        margin: "-40px 0 0 -40px",
      }}
      wrapperClass="comment-wrapper"
      color="#fff"
      backgroundColor="#F4442E"
    />
  );
};
