import Signup from "./components/Signup";
import Layout from "./components/layout/layout";
import Intro from "./components/intro";
import { Fragment, useEffect, useState } from "react";
import Login from "./components/signIn";
import Welcome from "./components/welcome/welcome";
function App() {
  const [data, setdata] = useState("");
  const [form, setform] = useState(false);
  const [isvalid, setisvalid] = useState(false);
  const userinput = (data) => {
    setdata(data);
  };

  useEffect(() => {
    const HttpRequest = async () => {
      await fetch(
        "https://login-form-b66cc-default-rtdb.firebaseio.com/signup.json",
        {
          method: "PUT",
          body: JSON.stringify(data),
        }
      );
    };
    HttpRequest();
  }, [data]);
  return (
    <Fragment>
      {!isvalid && (
        <Layout>
          <Intro setform={setform} />
          {!form ? (
            <Signup data={userinput} setisvalid={setisvalid} />
          ) : (
            <Login setisvalid={setisvalid} />
          )}
        </Layout>
      )}
      {isvalid && <Welcome setisvalid={setisvalid}/>}
    </Fragment>
  );
}

export default App;
