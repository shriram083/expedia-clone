import React from "react";
import { Image, Grid, GridItem } from "@chakra-ui/react";

const Images = () => {
  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap="10px"
      padding={"10px"}
    >
      <GridItem rowSpan={2} colSpan={2}>
        <Image
          width={"530px"}
          height="370px"
          src="https://images.trvl-media.com/hotels/1000000/200000/199500/199404/b4ace097.jpg?impolicy=resizecrop&rw=598&ra=fit"
        />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <Image
          width={"md"}
          height="180px"
          src="https://images.trvl-media.com/hotels/1000000/200000/199500/199404/5a65d7b7.jpg?impolicy=resizecrop&rw=297&ra=fit"
        />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <Image
          width={"md"}
          height="180px"
          src="https://images.trvl-media.com/hotels/1000000/200000/199500/199404/ec7243c3.jpg?impolicy=resizecrop&rw=297&ra=fit"
        />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <Image
          width={"md"}
          height="180px"
          src="https://images.trvl-media.com/hotels/1000000/200000/199500/199404/869cd296.jpg?impolicy=resizecrop&rw=297&ra=fit"
        />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <Image
          width={"md"}
          height="180px"
          src="https://images.trvl-media.com/hotels/1000000/200000/199500/199404/c68feed4.jpg?impolicy=resizecrop&rw=297&ra=fit"
        />
      </GridItem>
    </Grid>
  );
};

export default Images;
