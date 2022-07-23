import { Flex } from "@chakra-ui/react";
import React from "react";
import HotelList from "../components/Package/HotelList";
import PackageSidebar from "../components/Package/PackageSidebar";
import TopInputBox from "../components/Package/TopInputBox";

const Package = () => {
  return (
    <div>
      <TopInputBox />
      <Flex w="65%" margin="auto">
        <PackageSidebar />
        <HotelList />
      </Flex>
    </div>
  );
};

export default Package;
