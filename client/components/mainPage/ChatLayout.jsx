import React from 'react';
import { connect } from 'react-redux';
import { MessagesArea } from './MessagesArea';
import { ConversationsPanel } from './ConversationsPanel';

const mapStateToProps = ({ conversations }) => ({ conversations });

const ChatLayout = (props) => {
  return (
    <div className="chat-layout">
      <ConversationsPanel conversations={props.conversations}/>
      <MessagesArea/>
    </div>
  );
};

export default connect(mapStateToProps)(ChatLayout);