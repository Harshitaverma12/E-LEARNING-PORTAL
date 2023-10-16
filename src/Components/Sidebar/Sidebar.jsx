// import React from "react";
// import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
// import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
// import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
// import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

// //sidebar list(to navigate to other components)
// export const Sidebar = [
//   {
//     title: "Introduction",
//     items: [],
//     mykey: 1,
//     icon: <ViewListRoundedIcon />,
//   },
//   {
//     title: "Course Material",
//     icon: <MenuBookRoundedIcon />,
//     //internal list
//     items: [
//       {
//         icon: (
//           <RadioButtonUncheckedIcon
//             style={{ marginLeft: "1rem", color: "#0093fb" }}
//           />
//         ),
//         title: "Module 1",
//         items: [],
//         mykey: 2,
//         dwnicon: <FileDownloadOutlinedIcon />,
//       },
//       {
//         icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
//         title: "Module 2",
//         items: [],
//         mykey: 3,
//         dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
//       },
//       {
//         icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
//         title: "Module 3",
//         items: [],
//         mykey: 4,
//         dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
//       },
//       {
//         icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
//         title: "Module 4",
//         items: [],
//         mykey: 5,
//         dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
//       },
//       {
//         icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
//         title: "Module 5",
//         items: [],
//         mykey: 6,
//         dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
//       },
//       {
//         icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
//         title: "Module 6",
//         items: [],
//         mykey: 7,
//         dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
//       },
//       {
//         icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
//         title: "Module 7",
//         items: [],
//         mykey: 8,
//         dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
//       },
//       {
//         icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
//         title: "Module 8",
//         items: [],
//         mykey: 9,
//         dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
//       },
//       {
//         icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
//         title: "Module 9",
//         items: [],
//         mykey: 10,
//         dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
//       },
//       {
//         icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
//         title: "Module 10",
//         items: [],
//         mykey: 11,
//         dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
//       },
//       {
//         icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
//         title: "Module 11",
//         items: [],
//         mykey: 12,
//         dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
//       },
//       {
//         icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
//         title: "Module 12",
//         items: [],
//         mykey: 13,
//         dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
//       },
//       {
//         icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
//         title: "Module 13",
//         items: [],
//         mykey: 14,
//         dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
//       },
//     ],
//   },
// ];

import React from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

//sidebar list(to navigate to other components)
export const Sidebar = [
  {
    icon: (
      <RadioButtonUncheckedIcon
        style={{ marginLeft: "1rem", color: "#0093fb" }}
      />
    ),
    title: "Module 1",
    items: [],
    mykey: 2,
    dwnicon: <FileDownloadOutlinedIcon />,
  },
  {
    icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
    title: "Module 2",
    items: [],
    mykey: 3,
    dwnicon: <FileDownloadOutlinedIcon style={{ color: "white" }} />,
  },
  {
    icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
    title: "Module 3",
    items: [],
    mykey: 4,
    dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
  },
  {
    icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
    title: "Module 4",
    items: [],
    mykey: 5,
    dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
  },
  {
    icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
    title: "Module 5",
    items: [],
    mykey: 6,
    dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
  },
  {
    icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
    title: "Module 6",
    items: [],
    mykey: 7,
    dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
  },
  {
    icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
    title: "Module 7",
    items: [],
    mykey: 8,
    dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
  },
  {
    icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
    title: "Module 8",
    items: [],
    mykey: 9,
    dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
  },
  {
    icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
    title: "Module 9",
    items: [],
    mykey: 10,
    dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
  },
  {
    icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
    title: "Module 10",
    items: [],
    mykey: 11,
    dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
  },
  {
    icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
    title: "Module 11",
    items: [],
    mykey: 12,
    dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
  },
  {
    icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
    title: "Module 12",
    items: [],
    mykey: 13,
    dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
  },
  {
    icon: <RadioButtonUncheckedIcon style={{ marginLeft: "1rem" }} />,
    title: "Module 13",
    items: [],
    mykey: 14,
    dwnicon: <FileDownloadOutlinedIcon style={{ color: "#0093fb" }} />,
  },
];
