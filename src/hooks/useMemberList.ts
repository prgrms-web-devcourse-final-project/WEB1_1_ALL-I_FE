import { useState, useEffect } from "react";
import { getMember } from "@/apis/group/getMember";

interface Member {
  nickname: string;
  role: string;
}

export const useMemberList = (groupId: string) => {
  const [memberList, setMemberList] = useState<Member[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getMember({ group_id: groupId })
      .then((res) => {
        setMemberList(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, [groupId]);

  return { memberList, setMemberList, error };
};
