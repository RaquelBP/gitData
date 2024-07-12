import Input from "./component/Input";
import UserData from "./component/UserData";
import { GitProvider } from "./context/GitContext";

function App() {
  

  return (
    <>
      <GitProvider>
        <Input />
        <UserData />
      </GitProvider>
    </>
  );
}

export default App;
