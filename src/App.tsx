import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let items = ["tokyo", "mumbai", "pune", "new york", "london"];
  // const handClickItem = (item: String) => {
  //   console.log(item);
  // };
  // return (
  //   <ListGropuProp items={items} heading="Sheher" clicked={handClickItem} />
  // );
  const [isclicked, setIsClicked] = useState(false);
  return (
    <div>
      {isclicked && (
        <Alert
          onCloseEvent={() => {
            setIsClicked(false);
          }}
        ></Alert>
      )}
      <Button
        color="primary"
        onClickButton={() => {
          setIsClicked(true);
        }}
      >
        Button
      </Button>
    </div>
  );
}
export default App;
