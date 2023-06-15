import React from "react";
import axios from "axios";

const TextField = (props: any) => {
  const [textData, setTextData] = React.useState("");
  const api_url = "/api/v1/profile/search/";
  const kitappToken = localStorage.getItem("kitappToken");

  const searchAccount = async () => {
    const searchInfo = await axios.post(
      api_url,
      { username: textData },
      { headers: { authorization: `Bearer ${kitappToken}` } }
    );
    try {
      if (searchInfo) {
        console.log(searchInfo);
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    searchAccount();
  }, [textData]);

  return (
    <form>
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
              placeholder="Search Kitapp Account."
            ></textarea>
          </div>{" "}
        </div>
      </div>{" "}
    </form>
  );
};

export default TextField;
