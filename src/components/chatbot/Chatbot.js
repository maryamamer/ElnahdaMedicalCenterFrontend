import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import Post from './Post'
import Link from './Link'
import '../../App.css'


const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#14213d',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#14213d',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

// all available config props
const config = {
  width: '300px',
  height: '400px',
  hideUserAvatar: true,
  placeholder: 'من فضلك اترك رسالتك',
  headerTitle: 'مركز النهضة الطبي',
}

const Chatbot = (props) => {
  let [showChat, setShowChat] = useState(false)

  const startChat = () => {
    setShowChat(true)
  }
  const hideChat = () => {
    setShowChat(false)
  }

  return (
    
    <ThemeProvider theme={theme}>
      <div style={{ display: showChat ? 'none' : '' }}>
        <ChatBot
          speechSynthesis={{ enable: true, lang: 'en-US' }}
          recognitionEnable={true}
          steps={[
            {
              id: 'welcome',
              message: 'السلام عليكم',
              trigger: 'q-firstname',
            },
          
            {
              id: 'q-firstname',
              message: 'كيف حالك ؟',
              trigger: 'firstname',
            },
            {
              id: 'firstname',
              user: true,
              validator: (value) => {
                if (/^([a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF]).{0,30}$/.test(value)) {
                  return true
                } else {
                  return 'من فضلك ادخل حروف فقط'
                }
              },
              trigger: 'rmcbot',
            },
            {
              id: 'rmcbot',
              message:
                'السلام عليكم ,انا نظام الرد الألى كيف يمكننى مساعدتك ؟',
              trigger: 'qtype',
            },
            {
              id: 'qtype',
              options: [
                { value: 1, label: 'عدد فروعنا', trigger: '4' },
                { value: 2, label: ' العنوان', trigger: '3' },
                { value: 3, label: 'الأجازات الرسمية', trigger: '5' },
                { value: 4, label: 'استفسار اخر ', trigger: '6' },
              ],
            },
            {
              id: '3',
              message:
                'نحن حاليا نمتلك فرع يحتوى على العديد من الأقسام التى تساعدك عزيزيى الزائر و فى انتظار تطورنا و بناء فروع اخرى.',
              trigger: 'qtype',
            },
            {
              id: '4',
              message:
                'الأسكندرية-كوبري شربات -أعلى صيدلية غوباشي',
              trigger: 'qtype',
            },
            {
              id: '5',
              message:
                'نحن متواجدون طوال اليوم و الأسبوع  ',
              trigger: 'qtype',
            },
            {
              id: '6',
              component: <Link />,
              trigger: 'q-submit',
            },
            {
              id: 'q-submit',
              message: 'هل لديك اى اسئلة اخري',
              trigger: 'submit',
            },
            {
              id: 'submit',
              options: [
                { value: 'y', label: 'نعم', trigger: 'no-submit' },
                { value: 'n', label: 'لا', trigger: 'end-message' },
              ],
            },
            {
              id: 'no-submit',
              options: [
                { value: 1, label: 'عدد فروعنا', trigger: '4' },
                { value: 2, label: ' العنوان', trigger: '3' },
                { value: 3, label: 'الأجازات الرسمية', trigger: '5' },
                { value: 4, label: 'استفسار اخر ', trigger: '6' },
              ],
            },
            {
              id: 'end-message',
              component: <Post />,
              asMessage: true,
              end: true,
            },
          ]}
          {...config}
        />
      </div>
      <div>
        {!showChat ? (
          <button className="btn" onClick={() => startChat()}>
           {/* <i className="fa fa-minus"></i>*/}
          </button>
        ) : (
          <button className="btn" onClick={() => hideChat()}>
           {/* <i className="fa fa-plus"></i>*/}
          </button>
        )}
      </div>
    </ThemeProvider>
  )
}

export default Chatbot
