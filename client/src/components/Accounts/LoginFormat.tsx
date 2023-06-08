const LoginFormat = (props: any) => {
  const formSubmit = (e: any) => {
    e.preventDefault();
    props.onSubmit("login");
  };

  return (
    <div className="w-full h-full flex items-center justify-center text-black font-normal">
      <form onSubmit={formSubmit} className="w-5/6 h-5/6 flex-col">
        <div className="h-1/5 w-full flex justify-center items-center">
          <input
            onChange={(e) => props.onChangeLogin(e, "username")}
            value={props.loginInput.username}
            className="w-full p-4 h-4/6 outline-none border-2 border-blue-500 shadow-md rounded-md bg-gray-100"
            placeholder="Username"
            type="text"
            required={true}
          />
        </div>
        <div className="h-1/5 w-full flex justify-center items-center">
          <input
            onChange={(e) => props.onChangeLogin(e, "password")}
            value={props.loginInput.password}
            className="w-full p-4 h-4/6 outline-none border-2 border-blue-500 shadow-md rounded-md bg-gray-100"
            placeholder="Password"
            type="password"
            required={true}
          />
        </div>
        <div className="h-1/6 w-full flex justify-center items-center">
          <button
            className="p-4 w-1/3 text-center shadow-md font-semibold m-auto text-blue-500
           rounded-md border-2 border-blue-500 hover:text-white hover:bg-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginFormat;
