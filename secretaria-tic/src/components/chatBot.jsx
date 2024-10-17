export default function ChatBot(){
    window.watsonAssistantChatOptions = {
        integrationID: "7b517ce5-ae9e-478c-823b-1d52251417a5", // The ID of this integration.
        region: "au-syd", // The region your integration is hosted in.
        serviceInstanceID: "97550af8-6be7-4de2-9ce4-8bd24092ec11", // The ID of your service instance.
        onLoad: async (instance) => { await instance.render(); }
      };
      setTimeout(function(){
        const t=document.createElement('script');
        t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
        document.head.appendChild(t);
      });
}