import { Avatar, Paragraph } from "components/common";
import avatar from "assets/icons/avatar.png";

const Profile: React.FC = () => {
  return (
    <div className="flex flex-row items-center gap-2 rounded-full p-1 shadow-sm cursor-pointer mt-auto">
      <Avatar size="sm" image={avatar} />
      <Paragraph className="m-0 p-0 font-medium">John Doe</Paragraph>
    </div>
  );
};

export default Profile;
