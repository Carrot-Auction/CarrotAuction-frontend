import { Icon } from "@chakra-ui/react";
import { CarrotIcon } from "components/icons";
import React, { FC } from "react";

export const License: FC = () => {
  return (
    <>
      <div>
        <Icon as={CarrotIcon} />
        {" Icon made by "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>
        {"from "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  );
};
