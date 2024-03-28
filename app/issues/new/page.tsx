"use client";
import React from "react";
import { TextField, Flex, TextArea, Button } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl">
      <Flex direction="column" gap="3">
        <TextField.Root placeholder="Title" />
        <TextArea placeholder="Reply to comment…" />
        <Button>Submit New Issue</Button>
      </Flex>
    </div>
  );
};

export default NewIssuePage;
