// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from "react";
import Chat from "./components/chat/Chat";
import { Amplify, Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsmobile from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";
import * as config from "./config";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import 'bootstrap/dist/css/bootstrap.min.css';

Amplify.configure(awsmobile);

// function App({ signOut, user }) {
//   console.log(user.attributes.name);
//   return (
//     <>
//       <div className="App full-width full-height">
//         <Chat userCognito={user} />
//       </div>
//       <button onClick={signOut}>Sign out</button>
//     </>
//   );
// }

// export default withAuthenticator(App);

function App({ signOut }) {
  return (
    <div className="App full-width full-height">
      <div className="pure-menu pure-menu-horizontal">
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <a href="#" className="pure-menu-link">
              Room-1
            </a>
          </li>
          <li className="pure-menu-item">
            <a href="http://room2.net22.live" className="pure-menu-link">
              Room-2
            </a>
          </li>
          <li className="pure-menu-item">
            <a href="http://room2.net22.live" className="pure-menu-link">
              Room-3
            </a>
          </li>
        </ul>
      </div>
      <VideoPlayer playbackUrl={config.PLAYBACK_URL} />
      <div className="App full-width full-height">
        <Chat />
      </div>
    </div>
  );
}

export default App;
// export default withAuthenticator(App);
