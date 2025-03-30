export const Toast = (props) => {
  const {
    toast = toast,
    title = "Success",
    description = "Changes made successfully",
    status = "success",
  } = props;

  toast({
    title: title,
    description: description,
    status: status,
    duration: 5000,
    isClosable: true,
    position: "top-right",
  });
};
