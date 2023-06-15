import React from "react";
import axios from "axios";

export const TextField = (props: any) => {
  const [focused, setFocused] = React.useState(true);
  const [textData, setTextData] = React.useState("");
  const api_url = "/api/v1/";
  const kitaToken = localStorage.getItem("kitappToken");

  const onSubmitted = async (e: any) => {
    try {
      const post = await axios.post(
        api_url + "posts/create",
        { textData: textData },
        {
          headers: {
            authorization: `Bearer ${kitaToken}`,
          },
        }
      );
      console.log(post);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={onSubmitted}>
      <div
        className={`relative top-24 w-full h-20 rounded-xl overflow-hidden
       bg-white shadow flex-col items-center justify-center`}
      >
        <div className="w-auto h-full flex">
          <div
            style={{ width: "10%" }}
            className="h-full flex items-center justify-center"
          >
            <img
              src={`./assets/profile/${props.picture}.webp`}
              className="h-2/3 w-auto rounded-full"
              alt=""
            />
          </div>
          <div
            className="h-auto flex items-center justify-center text-ellipsis"
            style={{ width: "90%" }}
          >
            <textarea
              value={textData}
              onChange={(e) => setTextData(e.target.value)}
              className="w-full h-full p-4 outline-none text-xl"
              placeholder="Hey there!"
            ></textarea>
          </div>{" "}
        </div>
        <div>
          {focused ? (
            <button className="float-right p-2 text-white bg-blue-400 rounded-xl px-8 mt-2 shadow-md">
              Post
            </button>
          ) : null}
        </div>
      </div>{" "}
    </form>
  );
};
