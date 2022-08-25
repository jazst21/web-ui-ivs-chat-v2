// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from "react";
import Chat from "./components/chat/Chat";
import { Amplify, Auth } from "aws-amplify";
import awsmobile from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure(awsmobile);

function App({ signOut, user }) {
  // let { attributes } = async() {
  //   return Auth.currentAuthenticatedUser();
  // }
  console.log(user.attributes.name);
  return (
    <>
      <h1>Hello {user.attributes.name}</h1>
      <div className="App full-width full-height">
        <Chat userCognito={user} />
      </div>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);

// function App() {
//   return (
//     <div className="App full-width full-height">
//       <Chat />
//     </div>
//   );
// }

// export default App;
