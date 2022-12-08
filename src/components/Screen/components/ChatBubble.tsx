type ChatBubbleProps = {
  text: string;
  avatar?: string;
  onClick?: () => void;
  disabled?: boolean;
};

/**
 *
 * Action buttons, question bubble for the chat
 *
 * QuestionChatBubble is a component that renders a question bubble
 * AnswerChatBubble is a component that renders a answer action button
 * NumberInput is a component that renders a number input
 *
 */

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
  disabled,
}) => {
  return (
    <div className='mb-4 self-end' onClick={onClick}>
      <button className='border border-deepblue text-deepblue rounded-full p-3 leading-normal active:bg-blue-100'>
        <p>{text}</p>
      </button>
    </div>
  );
};

type NumberInputProps = {
  text: string;
  onClick: () => void;
};
export const NumberInput: React.FC<NumberInputProps> = ({
  text = '',
  onClick,
}) => {
  return (
    <div className='mb-4 self-end'>
      <input
        className='border-b-2 border-deepblue text-deepblue p-3 leading-normal focus:outline-dotted focus:border-blue-900'
        type='number'
        placeholder={text}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            onClick();
            if (document.activeElement instanceof HTMLElement) {
              document.activeElement.blur();
            }
          }
        }}
      />
    </div>
  );
};
