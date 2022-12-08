import React from 'react';

import { useState } from 'react';

import { HeroText } from './components/HeroText';
import { AnswerChatBubble, QuestionChatBubble } from './components/ChatBubble';

import botIcon from '../../assets/images/bot_icon@2x.png';
import jsonData from '../../assets/local-data.json';

export function Screen() {
  // each item in the array is a question or answer - we'll use this to render the chat bubbles
  // assign stepNumber to each item
  const [currentStepNumber, setcurrentStepNumber] = useState(0);

  let uiElements = [];

  type answerItemType = {
    id: string;
    text: string;
  };

  if (jsonData.length) {
    for (let i = 0; i <= currentStepNumber; i++) {
      const item = jsonData[i];
      if (item) {
        uiElements.push(
          <QuestionChatBubble text={item.text} avatar={botIcon} key={item.id} />
        );

        if (item.type === 'SINGLESELECT') {
          const answerItem = item.answers as answerItemType[];
          answerItem.forEach((answer) => {
            if (item.type === 'SINGLESELECT') {
              uiElements.push(
                <AnswerChatBubble
                  text={answer.text}
                  key={answer.id}
                  onClick={() => {
                    if (currentStepNumber === i) {
                      setcurrentStepNumber(currentStepNumber + 1);
                    }
                  }}
                />
              );
            }
          });
        } else if (item.type === 'NUMBER') {
          uiElements.push(
            <NumberInput
              text={item.text}
              onClick={() => setcurrentStepNumber(currentStepNumber + 1)}
              key={'number_input'}
            />
          );
        }
      }
    }
    if (jsonData.length <= currentStepNumber) {
      uiElements.push(
        <QuestionChatBubble
          text='Thank you for using our service.'
          avatar={botIcon}
          key={'thank_you_note'}
        />
      );
    }
  }
  return (
    <div className='flex justify-center'>
      {/* phone screen with white-background */}
      <ChatScreen>
        {/* Logotype and slogan */}
        <HeroText />

        {/* container div for chat bubbles */}
        <section id='messages-wrap' className='flex flex-col'>
          {uiElements
            ? uiElements.map((item) => {
                return item;
              })
            : null}
        </section>
      </ChatScreen>
    </div>
  );
}

type ChatScreenProps = {
  children: React.ReactNode;
};

/* phone screen with white-background */
const ChatScreen = ({ children }: ChatScreenProps) => {
  return (
    <div className='bg-white pt-40 px-6 pb-9 w-full sm:w-3/6 text-center'>
      {children}
    </div>
  );
};

type NumberInputProps = {
  text: string;
  onClick: () => void;
};
const NumberInput: React.FC<NumberInputProps> = ({ text = '', onClick }) => {
  return (
    <div className='mb-4 self-end'>
      <input
        className='border-b-2 border-deepblue text-deepblue p-3 leading-normal focus:outline-dotted focus:border-blue-900'
        type='number'
        placeholder={text}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            onClick();
          }
        }}
      />
    </div>
  );
};
