import React, { memo } from "react";
import styled from "styled-components";
//import { UserContext } from "../../../provider/UserProvider";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

export const UsericonWithName = memo((props) => {
  console.log("UsericonWithName");
  const { src, name } = props;
  //const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImg height={160} width={160} alt="プロフィール写真" src={src} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集!</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
  color: #40415e;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
