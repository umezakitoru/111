import React, { memo, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../provider/UserProvider";

export const UsericonWithName = memo((props) => {
  console.log("UsericonWithName");
  const { src, name } = props;
  const { userInfo } = useContext(UserContext);
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
