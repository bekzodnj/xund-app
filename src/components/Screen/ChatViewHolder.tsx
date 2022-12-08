import { useState, useRef, useEffect } from 'react';

import {
  AnswerChatBubble,
  QuestionChatBubble,
  NumberInput,
} from './components/ChatBubble';

import botIcon from '../../assets/images/bot_icon@2x.png';
//import jsonData from '../../assets/local-data.json';

export function ChatViewHolder() {
  // each item in the array is a question or answer - we'll use this to render the chat bubbles
  // assign stepNumber to each item
  const [currentStepNumber, setcurrentStepNumber] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // state variable to store fetched data

  interface jsonDataItemType {
    id: string;
    text: string;
    type: string;
    answers: answerItemType[];
  }

  interface userResponseType {
    questionId: string;
    answer: Object;
  }

  const [jsonData, setJsonData] = useState<jsonDataItemType[]>([]);
  const [userResponses, setUserResponses] = useState<userResponseType[]>([]);

  useEffect(() => {
    fetch('https://api.npoint.io/36fa5029553b39404f58')
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
      });
  }, []);

  // scroll to bottom when new message is added
  useEffect(() => {
    scrollToBottom();
  }, [currentStepNumber]);

  // scroll to bottom
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // UI elemnents - chat bubbles
  // - question bubbles, answer bubbles, number input will be rendered in a list
  let chatElements = [];

  type answerItemType = {
    id: string;
    text: string;
  };

  if (jsonData.length) {
    for (let i = 0; i <= currentStepNumber; i++) {
      const item = jsonData[i];
      if (item) {
        chatElements.push(
          <QuestionChatBubble text={item.text} avatar={botIcon} key={item.id} />
        );

        if (item.type === 'SINGLESELECT') {
          const answerItem = item.answers as answerItemType[];
          answerItem.forEach((answer) => {
            chatElements.push(
              <AnswerChatBubble
                text={answer.text}
                key={answer.id}
                onClick={() => {
                  if (currentStepNumber === i) {
                    setcurrentStepNumber(currentStepNumber + 1);
                    setUserResponses((userResponses) => [
                      ...userResponses,
                      { questionId: item.id, answer: { id: answer.id } },
                    ]);
                  }
                }}
              />
            );
          });
        } else if (item.type === 'NUMBER') {
          chatElements.push(
            <NumberInput
              text={item.text}
              onClick={() => {
                setcurrentStepNumber(currentStepNumber + 1);
              }}
              setUserResponses={setUserResponses}
              questionId={item.id}
              key={'number_input'}
            />
          );
        }
      }
    }

    // last response - thank you note
    if (jsonData.length <= currentStepNumber) {
      chatElements.push(
        <QuestionChatBubble
          text='Thank you!'
          avatar={botIcon}
          key={'thank_you_note'}
        />
      );

      // print user responses
      console.log(userResponses);
    }
  }

  // return the chat bubbles
  /**
 *   <section>
        <QuestionChatBubble text='Hello' avatar={botIcon} />
        <AnswerChatBubble text='Hi' />
 * </section>
 */
  return (
    <section id='messages-wrap' className='flex flex-col'>
      {chatElements
        ? chatElements.map((item) => {
            return item;
          })
        : null}
      <div ref={messagesEndRef}></div>
    </section>
  );
}
