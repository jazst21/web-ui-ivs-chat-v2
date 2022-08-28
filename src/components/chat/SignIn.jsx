// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { useState, createRef, useEffect } from "react";
import PropTypes from "prop-types";
import Avatars from "./Avatars";
import props from "prop-types";
import { Amplify, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

// const SignIn = ({ requestToken,props }) => {
const SignIn = ({requestToken,user}) => {
  // super(props);
  const [username, setUsername] = useState("");
  const [moderator, setModerator] = useState(false);
  const [avatar, setAvatar] = useState({});
  const [loaded, setLoaded] = useState(false);
  const inputRef = createRef();
  // setUsername(props.usernameProps);
  // console.log("username props ->"+ this.props.usernameProps);

  // useEffect(() => {
  //   setLoaded(true);
  //   inputRef.current.focus();
  // }, [loaded]); // eslint-disable-line

  return (
    <div className="modal pos-absolute top-0 bottom-0">
      <div className="modal__el">
        <h3 className="mg-b-2">Join the chat room</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <label htmlFor="name" className="mg-b-05">
              {/* Username */}
            </label>
            {/* <input
              name="name"
              id="name"
              ref={inputRef}
              type="text"
              className="radius"
              placeholder="Type here..."
              autoComplete="off"
              value={props.usernameProps}
              visible="false"
              onChange={(e) => {
                e.preventDefault();
                setUsername(e.target.value);
                setUsername(props.usernameProps);
              }}
            /> */}
            <hr />
            <div className="mg-b-05 label">Select Avatar</div>
            <div className="item-select-container pd-1 mg-b-1">
              <div className="avatars pos-relative item-select-grid">
                <Avatars
                  currentAvatar={avatar?.name}
                  handleAvatarClick={(avatar) => {
                    setAvatar(avatar);
                  }}
                />
              </div>
            </div>
            <hr />
            {/* <div className="fl fl-a-center fl-j-start full-width">
              <input
                type="checkbox"
                id="moderator"
                name="moderator"
                className="mg-l-0 mg-r-1"
                checked={moderator}
                visible="false"
                onChange={(e) => {
                  setModerator(e.target.checked);
                }}
              />
              <label htmlFor="moderator">Join as moderator</label>
            </div> */}
            <hr />
            <button
              onClick={(e) => {
                // requestToken(username, moderator, avatar);
                requestToken(user.attributes.name, moderator, avatar);
              }}
              className="btn btn--primary rounded mg-t-1"
              //disabled={!username}
            >
              Start chatting
            </button>
          </fieldset>
        </form>
      </div>
      <div className="modal__overlay"></div>
    </div>
  );
};

SignIn.propTypes = {
  requestToken: PropTypes.func,
  props: PropTypes.string,
};

export default withAuthenticator(SignIn);
