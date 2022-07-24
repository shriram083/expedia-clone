import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import HotelList from "../components/Package/HotelList";
import PackageSidebar from "../components/Package/PackageSidebar";
import TopInputBox from "../components/Package/TopInputBox";
import { useDispatch, useSelector } from "react-redux";
import { getHotelsList } from "../redux/app/appActions";
import { useLocation, useSearchParams } from "react-router-dom";

const Package = () => {
  const hotelList = useSelector((state) => state.appReducer.hotels);
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchparams] = useSearchParams();

  useEffect(() => {
    if (hotelList.length === 0 || location.search) {
      const getParams = {
        params: {
          popularF: searchparams.getAll("popularF"),
          rating: searchparams.getAll("rating"),
        },
      };
      console.log(getParams);
      dispatch(getHotelsList(getParams));
    }
  }, [location.search]);

  // useEffect(() => {
  //   if (hotelList.length === 0 || location.search) {
  //     const getParams = {
  //       params: { rating: searchparams.getAll("rating") },
  //     };

  //     dispatch(getHotelsList(getParams));
  //   }
  // }, [location.search]);

  // useEffect(() => {
  //   dispatch(getHotelsList());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (hotelList.length === 0 || location.search) {
  //     const getParams = {
  //       params: {
  //         // rating: searchparams.getAll("rating"),
  //         popularF: { popularF: searchparams.getAll("popularF") },
  //       },
  //     };

  //     dispatch(getHotelsList(getParams));
  //   }
  // }, [location.search]);
  return (
    <div>
      <TopInputBox />
      <Flex w="68%" margin="auto">
        <PackageSidebar />
        <HotelList />
      </Flex>
    </div>
  );
};

export default Package;
