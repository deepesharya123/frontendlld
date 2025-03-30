import {
  AspectRatio,
  border,
  Box,
  Flex,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Toast } from "../../utils/Toast";

const EditImage = () => {
  const [file, setFile] = useState();
  const toast = useToast();

  const handleChange = (e) => {
    console.log(e.target);
    console.log(e.target.files[0]);
    if (e.target?.files && e.target.files[0]) {
      console.log(URL.createObjectURL(e.target.files[0]));
      setFile({
        path: URL.createObjectURL(e.target.files[0]),
        type: e.target.files[0].type.split("/")[0],
      });
    } else {
      Toast({
        toast,
        title: "Error",
        description: "Only Image, Video and PDf are allowed",
        status: "error",
      });
      setFile(null);
    }
  };

  return (
    <Box py={4} px={6}>
      <Text py={2}> Preview Your File </Text>
      <Input
        placeholder="Upload Your Image"
        type="file"
        width="auto"
        height="40px"
        style={{
          border: "2px solid black",
          borderRadius: "8px",
          padding: "3px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        onChange={handleChange}
        my={2}
        accept="image,video,pdf,audio"
      />
      <AspectRatio maxW="70vw" ratio={1}>
        <iframe src={file?.path} allowFullScreen />
      </AspectRatio>
    </Box>
  );
};

export default EditImage;
