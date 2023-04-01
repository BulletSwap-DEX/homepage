// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DocumentTextSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DocumentTextSvgrepoComsvgIcon(
  props: DocumentTextSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"#fff"} d={"M0 0h24v24H0z"}></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M9 11a1 1 0 100 2h6a1 1 0 100-2H9zm0 3a1 1 0 100 2h6a1 1 0 100-2H9zm3.482-12c.679-.001 1.281-.002 1.838.228.556.23.981.658 1.46 1.138.95.953 1.901 1.904 2.854 2.853.48.48.907.905 1.138 1.461.23.557.23 1.16.228 1.838-.004 2.516 0 5.032 0 7.548 0 .886 0 1.65-.082 2.262-.088.655-.287 1.284-.797 1.793-.51.51-1.138.709-1.793.797-.612.082-1.376.082-2.262.082H8.934c-.886 0-1.65 0-2.262-.082-.655-.088-1.284-.287-1.793-.797-.51-.51-.709-1.138-.797-1.793C4 18.716 4 17.952 4 17.066V6.934c0-.886 0-1.65.082-2.262.088-.655.287-1.284.797-1.793.51-.51 1.138-.709 1.793-.797C7.284 2 8.048 2 8.934 2c1.183 0 2.365.002 3.548 0z"
        }
        fill={"#323232"}
      ></path>
    </svg>
  );
}

export default DocumentTextSvgrepoComsvgIcon;
/* prettier-ignore-end */
