import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './CSS/chat.css'

const chat = () => {
    const projectID = '4da955df-25d0-4823-9383-bb897aef4051';
    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine
            height="100vh"
            /* projectID="4da955df-25d0-4823-9383-bb897aef4051"
            userName="ElNahda"
            userSecret="123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} */
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    )

}

export default chat;