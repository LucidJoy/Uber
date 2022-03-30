import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";
import Link from "next/link";

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

        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>

        <InputButton>Where to? </InputButton>
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

const ActionButtons = tw.div`
  flex 
`;

const ActionButton = tw.div`
  bg-gray-200 flex-1 h-32 m-2 flex flex-col items-center justify-center rounded-lg transform hover:scale-105 transition text-lg
`;

const ActionButtonImage = tw.img`
  h-3/5
`;

const InputButton = tw.div`
  bg-gray-200 h-20 text-lg p-4 flex items-center mt-8 rounded-lg
`;
