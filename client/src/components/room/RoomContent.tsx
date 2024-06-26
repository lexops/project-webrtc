import { RoomSiderbar } from "./RoomSiderbar";
import { StreamArea } from "./stream/StreamArea";

export const RoomContent: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex h-full">
        <StreamArea />
        <RoomSiderbar />
      </div>
    </div>
  );
};
