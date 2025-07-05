function Login() {
  return (
    <div>
      <input placeholder="Enter Name"></input>
      <button>Add</button>
      <br></br>
      <label for ="colors">Choose a color: </label>
      <select id="colors" name="colors">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue" selected>Blue</option>
      </select>
    </div>
  );
}

export default Login;
