import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostFormat = (props: any) => {
  const [isPost, setIsPost] = React.useState(false);
  const api_url = "/api/v1/posts/";
  const navigate = useNavigate();
  console.log(props.p_id);

  const removePost = async () => {
    try {
      const deletePost = await axios.delete(api_url + props.p_id, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("kitappToken")}`,
        },
      });
      if (deletePost) {
        navigate("/#");
        console.log("deleted");
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    if (props.id === props.c_id._id) {
      setIsPost(true);
    }
  }, [props.id]);

  return (
    <div className="h-full w-full flex-col items-center justify-center">
      {isPost ? (
        <div className="h-10 w-full flex items-center justify-end">
          <div className="h-full w-24 flex">
            <div className="h-full w-1/2 flex items-center justify-center">
              <img
                src="./assets/icons/reload.png"
                className="h-1/2 w-auto"
                alt=""
              />
            </div>
            <div className="h-full w-1/2 flex items-center justify-center">
              <img
                onClick={removePost}
                src="./assets/icons/remove.png"
                className="h-1/2 w-auto cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </div>
      ) : null}
      <div className="w-full h-auto flex items-center justify-center border-b-2 border-gray-300">
        <div className="w-36 h-48 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={`./assets/profile/${props.image}`}
              className="h-1/2 w-auto m-auto rounded-full"
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-auto flex-col">
          <p className="text-2xl font-bold">
            {props.username}{" "}
            <span className="font-medium text-xl">{props._id} </span>
          </p>
          <p className="text-xl font-light opacity-80 pb-8">{props.feed}</p>
        </div>{" "}
      </div>
    </div>
  );
};

export default PostFormat;
