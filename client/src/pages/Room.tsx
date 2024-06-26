import { useContext, useEffect } from "react";

import { RoomContent } from "../components/room/RoomContent";
import { RoomFooter } from "../components/room/RoomFooter";
import { RoomHeader } from "../components/room/RoomHeader";
import { RoomInfoEntry } from "../components/room/RoomInfoEntry";
import { RoomV2Context } from "../context/RoomV2Context";
import { ws } from "../services/ws";
import { UserV2Context } from "../context/UserV2Context";

export const Room = () => {
  const { room, isEnteredRoom } = useContext(RoomV2Context);
  const { isLoading } = useContext(UserV2Context);

  useEffect(() => {
    if (room && isEnteredRoom) {
      ws.emit("join-room", {
        roomId: room?.id,
      });

      return () => {
        console.log("leave-room", room.id);
        ws.emit("leave-room", { roomId: room.id });
      };
    }
  }, [room, isEnteredRoom]);

  //TODO: Chrome autoplay videos https://developer.chrome.com/blog/autoplay/
  if (!isEnteredRoom) return <RoomInfoEntry />;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid h-screen max-h-screen grid-rows-[6rem_1fr_8rem] font-medium text-white">
      <RoomHeader />
      <RoomContent />
      <RoomFooter />
    </div>
  );
};
