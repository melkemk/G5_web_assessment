'use client';
import React from "react";

interface UpperProps {
  onSearchChange: (term: string) => void;
}

function Upper({ onSearchChange }: UpperProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="flex gap-[440px] pl-[130px] items-center pt-[50px] pb-[50px]">
      <div className="font-bold underline">Blogs</div>
      <div className="flex items-center space-x-4">
        <input
          type="search"
          className="border border-secondary p-2  w-[380px] bg-transparent rounded-full"
          placeholder="Search..."
          onChange={handleInputChange}
        />
        <div className="h-[50px] w-32 bg-primary flex items-center justify-center text-white rounded-full">
          + New blog
        </div>
      </div>
    </div>
  );
}

export default Upper;
