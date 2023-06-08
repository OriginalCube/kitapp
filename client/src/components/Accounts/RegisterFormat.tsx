const RegisterFormat = (props: any) => {
  const formSubmit = (e: any) => {
    e.preventDefault();
    props.onSubmit("register");
  };

  return (
    <div className="w-full h-full flex items-center justify-center text-gray-700 font-normal">
      <form onSubmit={formSubmit} className="w-5/6 h-5/6 flex-col">
        <div className="h-1/5 w-full flex justify-evenly gap-2 items-center ">
          <input
            onChange={(e) => props.onChangeRegister(e, "firstname")}
            value={props.registerInput.firstname}
            className="w-5/6 p-4 h-4/6 outline-none bg-gray-100 border-2 border-blue-500 rounded-md"
            placeholder="First Name"
            type="text"
          />
          <input
            onChange={(e) => props.onChangeRegister(e, "lastname")}
            value={props.registerInput.lastname}
            className="w-5/6 p-4 h-4/6 outline-none bg-gray-100 border-2 border-blue-500 rounded-md"
            placeholder="Last Name"
            type="text"
          />
        </div>
        <div className="h-1/5 w-full flex justify-evenly gap-2 items-center ">
          <input
            onChange={(e) => props.onChangeRegister(e, "username")}
            value={props.registerInput.username}
            className="w-5/6 p-4 h-4/6 outline-none bg-gray-100 border-2 border-blue-500 rounded-md"
            placeholder="Username"
            type="text"
          />
          <input
            onChange={(e) => props.onChangeRegister(e, "password")}
            value={props.registerInput.password}
            className="w-5/6 p-4 h-4/6 outline-none bg-gray-100 border-2 border-blue-500 rounded-md"
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="h-1/5 w-full flex justify-center items-center">
          <input
            onChange={(e) => props.onChangeRegister(e, "email")}
            value={props.registerInput.email}
            className="w-full p-4 h-4/6 outline-none bg-gray-100 border-2 border-blue-500 rounded-md"
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="h-1/5 w-full flex justify-evenly gap-2 items-center ">
          <input
            onChange={(e) => props.onChangeRegister(e, "number")}
            value={props.registerInput.number}
            className="w-5/6 p-4 h-4/6 outline-none bg-gray-100 border-2 border-blue-500 rounded-md"
            placeholder="Phone Number"
            type="number"
          />
          <input
            onChange={(e) => props.onChangeRegister(e, "birthday")}
            value={props.registerInput.birthday}
            className="w-5/6 p-4 h-4/6 outline-none bg-gray-100 border-2 border-blue-500 rounded-md"
            placeholder="Birthday"
            type="date"
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

export default RegisterFormat;
