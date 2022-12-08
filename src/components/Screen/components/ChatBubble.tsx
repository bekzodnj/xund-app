type ChatBubbleProps = {
  text: string;
  avatar?: string;
  onClick?: () => void;
};

export const QuestionChatBubble: React.FC<ChatBubbleProps> = ({
  text,
  avatar,
}) => {
  return (
    <div className='flex mb-10'>
      <div className='w-12 h-12 p-3 rounded-full bg-gray-100 basis-12 shrink-0 mr-1'>
        <img src={avatar} alt='avatar' />
      </div>
      <div className='bg-gray-100 rounded-xl p-3 text-left leading-normal'>
        <p className='text-deepblue'>{text}</p>
      </div>
    </div>
  );
};

export const AnswerChatBubble: React.FC<ChatBubbleProps> = ({
  text,
  onClick,
}) => {
  return (
    <div className='mb-4 self-end' onClick={onClick}>
      <button className='border border-deepblue text-deepblue rounded-full p-3 leading-normal active:bg-blue-100'>
        <p>{text}</p>
      </button>
    </div>
  );
};
