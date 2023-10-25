import React from "react";
import { Tldraw } from "@tldraw/tldraw";
import { useMultiplayerState } from "./useMultiplayerState";
import "./Whiteboard.css";

export const Whiteboard = React.memo(({ roomId }) => {
  const events = useMultiplayerState(roomId);
  return (
    <Tldraw
      autofocus
      disableAssets={false}
      showSponsorLink={true}
      showPages={true}
      showMenu={true}
      {...events}
    />
  );
});
