import React from 'react';
import { DropdownWrapper } from '../../Layout/BottomNav/BottomNavStyles';

export default function DropDownComp({ data }) {
  return (
    <DropdownWrapper className="container">
      {data.map((item, index) => (
        <a href="#" key={index}>
          {item}
        </a>
      ))}
    </DropdownWrapper>
  );
}
