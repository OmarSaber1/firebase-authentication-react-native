import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import { AuthContext } from "../context";

function Welcome() {
  const [text, setText] = useState("");
  const context = useContext(AuthContext);

  console.log({ context });

  useEffect(() => {
    try {
      async function getData() {
        const { data } = await axios.get(
          `https://react-native-app-course-default-rtdb.firebaseio.com/name.json?auth=${context.token} `
        );
        console.log({ data });
        setText(data);
      }
      getData();
    } catch (error) {
      console.log({ error });
    }
  }, [context.token]);
  return <Text>Welcome {text}</Text>;
}

export default Welcome;
