import { HeroText } from './components/HeroText';
import { ChatViewHolder } from './ChatViewHolder';

/**
 *
 * @returns Screen component
 * displays the screen with white-background at the center of the page
 * shows the logotype and slogan
 * shows the chat bubbles inside ChatViewHolder
 *
 */
export function Screen() {
  return (
    <div className='flex justify-center'>
      {/* phone screen with white-background */}
      <ChatScreen>
        {/* Logotype and slogan */}
        <HeroText />
        <ChatViewHolder />

        {/* container div for chat bubbles */}
      </ChatScreen>
    </div>
  );
}

type ChatScreenProps = {
  children: React.ReactNode;
};

/* 
    screen with white-background at the center of the page
 */
const ChatScreen = ({ children }: ChatScreenProps) => {
  return (
    <div className='bg-white pt-40 px-6 pb-9 w-full sm:w-5/12 min-w-fit'>
      {children}
    </div>
  );
};
