import { ChatContext, ChatValue } from "../../context/ChatContext";

export type IChatProviderProps = ChatValue;

export type ChatCustomProviderProps = {
  children: any;
  providerProps?: IChatProviderProps | {};
};

export const chatCustomProviderProps = ({
  children,
  providerProps = {},
}: ChatCustomProviderProps) => {
  const defaultProps: IChatProviderProps = {
    chat: {
      isChatOpen: true,
      messages: [],
    },
    sendMessage: () => {},
    toggleChat: () => {},
  };

  const props = { ...defaultProps, ...providerProps };

  return <ChatContext.Provider value={props}>{children}</ChatContext.Provider>;
};
