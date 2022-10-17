import Avatar from "components/atoms/Avatar/avatar";
import { truncateString } from "lib/utils/truncate-string";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface TableRepositoryNameProps {
  avatarURL?: string | StaticImageData;
  name?: string;
  handle?: string;
  isLoading?: boolean;
  topic?: string;
}

const TableRepositoryName = ({ avatarURL, name, handle, topic }: TableRepositoryNameProps): JSX.Element => {
  return (
    <div className="flex items-center gap-2.5">

      {/* Avatar */}
      <Avatar size={40} avatarURL={avatarURL} isCircle={false} />

      {/* Text */}
      <div className="flex flex-col justify-center">
        <div title={name} className="font-medium text-base text-light-slate-12 tracking-tight">
          <Link href={`/${topic}/repositories/filter/${handle}/${name}`}>{name && name.length > 10 ? truncateString(name, 12): name}</Link>
        </div>
        <div className="font-medium text-sm text-light-slate-11">
          <Link href={`/${topic}/repositories/filter/${handle}/${name}`}>{handle ? `@${handle}`: "handle1234"}</Link>
        </div>
      </div>

    </div>
  );
};

export default TableRepositoryName;