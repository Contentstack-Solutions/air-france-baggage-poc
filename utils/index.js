const Contentstack = require("contentstack");

import ContentstackLivePreview from "@contentstack/live-preview-utils";

const Stack = Contentstack.Stack({
  api_key: "bltd3861878402cf423",
  delivery_token: "csc0c1b82673e1b566c2cb10c0",
  environment: "preview",
  region: Contentstack.Region.EU,
  live_preview: {
    host: "eu-api.contentstack.com",
    management_token: "cs62e2aabc386de48093ef2619",
    enable: true,
    clientUrlParams: {
      host: "eu-app.contentstack.com",
    },
      stackDetails: {
        apiKey: 'bltd3861878402cf423'
      }
  },
});

Stack.setHost("eu-api.contentstack.io");
ContentstackLivePreview.init(Stack);



export default Stack;
export const onEntryChange = ContentstackLivePreview.onEntryChange;
