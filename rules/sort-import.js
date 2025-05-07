export default {
  "simple-import-sort/imports": [
    "error",
    {
      groups: [
        ["^\\w", "^@"],
        ["^lib", "^modules", "^commons"],
        ["^\\./", "^\\.\\./"],
        ["^lib/.+\\.vue$", "^modules/.+\\.vue$", "^commons/.+\\.vue$"],
        ["^\\.\\./.+\\.vue$", "^\\./.+\\.vue$"],
      ],
    },
  ],
};
