import React from 'react';
import { HeroText } from './components/HeroText';
import botIcon from '../../assets/images/bot_icon@2x.png';
import './Screen.css';

export function Screen() {
  return (
    <div className='flex justify-center h-screen'>
      {/* phone screen with white-background */}
      <ChatScreen>
        {/* Logotype and slogan */}
        <HeroText />

        <QuestionChatBubble
          text='The chat bubble itself is a div with the classes relative p-2 rounded-lg flex flex-col-reverse space-y-3, which give it some padding, rounded corners, and a flexible layout with reversed columns and vertical spacing.'
          avatar={botIcon}
          isMyOwnMessage={false}
        />
        <QuestionChatBubble
          text='The chat bubble itself is a div with the classes relative p-2 rounded-lg flex flex-col-reverse space-y-3, which give it some padding, rounded corners, and a flexible layout with reversed columns and vertical spacing.'
          avatar={botIcon}
          isMyOwnMessage={false}
        />
      </ChatScreen>
    </div>
  );
}

type ChatScreenProps = {
  children: React.ReactNode;
};

const ChatScreen = ({ children }: ChatScreenProps) => {
  return (
    <div className='bg-white pt-40 px-6 pb-9 w-full sm:w-3/6 text-center border border-red-500 overflow-y-scroll'>
      {children}
    </div>
  );
};

type QuestionChatBubbleProps = {
  text: string;
  avatar: string;
  isMyOwnMessage: boolean;
};

const QuestionChatBubble: React.FC<QuestionChatBubbleProps> = ({
  text,
  avatar,
  isMyOwnMessage,
}) => {
  return (
    <div className='relative flex mb-4'>
      <div className='w-12 h-12 p-3 rounded-full bg-gray-100 basis-12 shrink-0 mr-1'>
        <img src={avatar} alt='avatar' />
      </div>
      <div className='bg-gray-100 rounded-xl p-3 text-left leading-normal'>
        <p style={{ color: '#2372b8' }}>{text}</p>
      </div>
    </div>
  );
};
