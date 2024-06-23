"use client";
import React from "react";
import { useOrganizationList } from "@clerk/clerk-react";
import { Item } from "./item";
const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      inifnite: true,
    },
  });
  if (!userMemberships.data?.length) return null;

  return (
    <ul className="space-y-4 pt-[10px]">
      {userMemberships.data?.map((member) => (
        <Item
          key={member.organization.id}
          name={member.organization.name}
          id={member.organization.id}
          imageUrl={member.organization.imageUrl}
        />
      ))}
    </ul>
  );
};

export default List;
