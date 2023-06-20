import React from "react";
import TextField from "./TextField";
import { Link } from "react-router-dom";

const SearchBody = (props: any) => {
  const [user, setUser] = React.useState<any[]>([]);

  const FoundUsers = (el: any) => {
    return (
      <Link to={`/${el.username}`}>
        <div className="w-full h-24 mb-4 p-2">
          <div className="w-full h-full flex border-b-2 border-gray-300">
            <div className="w-1/5 h-full flex items-center justify-center">
              <img
                className="w-1/3 h-auto rounded-full"
                src={`./assets/profile/${el.picture}.webp`}
                alt=""
              />
            </div>
            <div className="w-4/5 h-full flex items-center">
              <p className="text-2xl font-bold">{el.username}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="w-5/6 h-auto m-auto">
      <TextField picture={props.userDetails.picture} setUser={setUser} />
      <div className="w-full h-auto bg-white relative top-40 rounded-xl shadow-xl flex-col">
        {user.length !== 0
          ? user.map((e, index) => (
              <FoundUsers //#On top
                key={index}
                username={e.username}
                picture={e.picture}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default SearchBody;
