import React from "react";
import HomeBtn from './home-button';

export default function Header() {
  return (
    <div className={'header fl v-cent start'}>
      <div className={'fl v-cent space'}>
        <HomeBtn/>
      </div>
    </div>
  );
}