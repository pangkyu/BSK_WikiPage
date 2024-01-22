import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="flex bg-black w-full h-12 justify-center">
      <div className="flex w-97 justify-between items-center">
        <p className="flex h-full text-white items-center text-lg">{title}</p>
      </div>
    </header>
  );
};

export default Header;
