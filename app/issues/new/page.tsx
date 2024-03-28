"use client";
import React from "react";
import { TextField, Flex, Button } from "@radix-ui/themes";

//simple MDE for markdown editor
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";


const NewIssuePage = () => {
  return (
    <div className="max-w-xl">
      <Flex direction="column" gap="3">
        <TextField.Root placeholder="Title" />
        <SimpleMDE placeholder="Describe your issue..." />
        <Button>Submit New Issue</Button>
      </Flex>
    </div>
  );
};

export default NewIssuePage;
