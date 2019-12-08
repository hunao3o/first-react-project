import React from 'react';

export default class ContactDetail extends React.Component {
    render() {
        const details = (<div>
            <p>{this.props.contact.name}</p>
            <p>{this.props.contact.phone}</p>
        </div>);
        const blank = (<div>Not selected</div>);

        return (
            <div>{this.props.isSelected ? details : blank}</div>
        );
    }
}

// 클릭되지 않았을때 기본값
ContactDetail.defaultProps = {
    contact: {
        name:'',
        phone:''
    }
}