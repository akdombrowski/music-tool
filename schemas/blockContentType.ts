import { defineType, defineArrayMember } from "sanity";

export const BlockContentType = defineType({
  name: "blockContent",
  type: "array",
  title: "Body",
  of: [
    defineArrayMember({
      type: "block",
    }),
    defineArrayMember({
      type: "youTube",
    }),
  ],
});

export default BlockContentType;
