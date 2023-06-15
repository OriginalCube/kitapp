import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostFormat = (props: any) => {
  const [isPost, setIsPost] = React.useState(false);
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [feed, setFeed] = React.useState(props.feed);
  const api_url = "/api/v1/posts/";
  const kitappToken = localStorage.getItem("kitappToken");
  const navigate = useNavigate();

  const removePost = async () => {
    try {
      const deletePost = await axios.delete(api_url + props.p_id, {
        headers: {
          authorization: `Bearer ${kitappToken}`,
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

  const updatePost = async () => {
    if (feed.length !== 0) {
      if (isUpdating) {
        try {
          const UpdatePost = await axios.put(
            api_url + props.p_id,
            { kita: feed },
            {
              headers: { authorization: `Bearer ${kitappToken}` },
            }
          );
          if (UpdatePost) {
            setIsUpdating(false);
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        setIsUpdating(true);
      }
    } else {
      setFeed("This field cannot be empty");
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
                onClick={updatePost}
                src="./assets/icons/reload.png"
                className="h-1/2 w-auto cursor-pointer"
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
          {!isUpdating ? (
            <p
              style={{ width: "90%" }}
              className="text-xl text-justify h-full font-light opacity-80 pb-8"
            >
              {feed}
            </p>
          ) : (
            <textarea
              className="w-5/6 h-full text-xl font-light opacity-80 pb-8 outline-none text-justify 
              border-blue-400 border-2 rounded-md mb-4"
              rows={5}
              cols={10}
              style={{ width: "90%" }}
              onChange={(e) => setFeed(e.target.value)}
              value={feed}
            />
          )}
        </div>{" "}
      </div>
    </div>
  );
};

export default PostFormat;
