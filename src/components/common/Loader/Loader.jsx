import { Comment } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Comment
      visible={true}
      height="80"
      width="80"
      ariaLabel="comment-loading"
      wrapperStyle={{
        marginTop: "200px",
        marginLeft: "50%",
        marginRight: "50%",
      }}
      wrapperClass="comment-wrapper"
      color="#fff"
      backgroundColor="#F4442E"
    />
  );
};
