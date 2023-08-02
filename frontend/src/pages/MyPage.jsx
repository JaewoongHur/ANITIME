import React, { useState } from "react";
import { styled } from "styled-components";
import { MainContainer, Button } from "styled/styled";
import { useSelector, useDispatch } from "react-redux";
import { Tab, Tabs } from "@mui/material";
import MyPageMeeting from "components/MyPage/MyPageMeeting";
import MyPageChatting from "components/MyPage/MyPageChatting";
import MyPageWatchlist from "components/MyPage/MyPageWatchlist";
import http from "../api/commonHttp.js"
import { useNavigate } from "react-router-dom";
import { initMember } from "../reducer/member";

export default function MyPage() {
  const member = useSelector((state) => state.member);
  const [tabNo, setTabNo] = useState(0);
  const dispatch = useDispatch();
  const memberNo = useSelector((state) => state.member.memberNo);
  const navigate = useNavigate();

  const logout = () => {
    let logoutNo = memberNo;
    http.get(`auth/logout/${logoutNo}`)
    .then((res) => {
      alert("로그아웃 하였습니다.");
    })
    .catch((err) => {
      console.log(err);
    })
    dispatch(initMember());
  }
  const tabs = [
    // 일반회원: memberKind == 0
    [
      { title: "미팅내역", content: <MyPageMeeting /> },
      { title: "채팅내역", content: <MyPageChatting /> },
      { title: "즐겨찾기", content: <MyPageWatchlist /> },
    ],
    // 보호소회원: memberKind == 1
    [
      { title: "미팅신청현황", content: <MyPageMeeting /> },
      { title: "채팅", content: <MyPageMeeting /> },
      { title: "후원현황", content: <MyPageMeeting /> },
    ],
  ];

  return (
    <MainContainer $vertical>
      <MyPageHeader>
        <MemberNameDiv>
          <MemberName>{member.name}</MemberName>
          <MemberType>{member.memberKind === 1 ? "보호소회원" : ""}</MemberType>
        </MemberNameDiv>
        <div style={{
          display: "flex"
        }}>
        <Button $border="#E8EBEE 1px solid">정보수정하기</Button>
        <Button onClick={logout} $border="#E8EBEE 3px solid" $background_color="#FF7676" color="white" style={{
          fontWeight: "bold"
        }}>로그아웃</Button>

        </div>
      </MyPageHeader>
      <Tabs value={tabNo} onChange={(event, newVal) => setTabNo(newVal)}>
        {tabs[member.memberKind].map((item, index) => {
          return <Tab key={index} value={index} label={item.title} />;
        })}
      </Tabs>
      <TabPanel>
        {tabs[member.memberKind].map((item, index) => (
          <div hidden={index !== tabNo} key={index} style={{ width: "100%" }}>
            {item.content}
          </div>
        ))}
      </TabPanel>
    </MainContainer>
  );
}

const MyPageHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  align-items: center;
  justify-content: space-between;
`;
const MemberNameDiv = styled.div`
  display: flex;
  align-items: flex-end;
`;
const MemberName = styled.span`
  font-size: 2.5rem;
  float: left;
`;
const MemberType = styled.span`
  margin-left: 8px;
`;
const TabPanel = styled.div`
  border-top: #d7d7d7 1px solid;
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;
