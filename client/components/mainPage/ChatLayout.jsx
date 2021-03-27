import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ conversations }) => ({ conversations });

const ChatLayout = (props) => {
    
};

export default connect(mapStateToProps)(ChatLayout);