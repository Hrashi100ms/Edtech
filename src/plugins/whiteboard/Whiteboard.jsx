import React from "react";
import { Tldraw } from "@tldraw/tldraw";
import { useMultiplayerState } from "./useMultiplayerState";
import "./Whiteboard.css";

export const Whiteboard = React.memo(({ roomId }) => {
  const events = useMultiplayerState(roomId);
  return (
    <Tldraw
      autofocus
      disableAssets={true}
      showSponsorLink={false}
      showPages={true}
      showMenu={false}
      {...events}
    />
  );
});
