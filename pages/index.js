import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";

import Map from "./components/Map";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItem>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />

          <Profile>
            <Name>Joy</Name>
            <UserImage src="https://lh3.googleusercontent.com/a-/AOh14GjFZeddOQcd2taGkjQDIoKkB0ij1lRZKd4-z6PBWQ=s432-p-rw-no" />
          </Profile>
        </Header>
      </ActionItem>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen 
`;

const ActionItem = tw.div`
   flex-1 p-4
`;

const Header = tw.div`
flex justify-between items-center
`;

const UberLogo = tw.img`
  h-28
`;

const Profile = tw.div`
  flex items-center

`;

const Name = tw.div`
mr-4 w-20 text-sm font-semibold
`;

const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-300 p-px
`;
