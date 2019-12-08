import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetail from './ContactDetail';
import update from 'react-addons-update';

export default class Contact extends React.Component {
    // react-hot-loader 로 HMR 구현시, constructor 에 변화가 있어도 refresh하지 않는 단점이 있다
    constructor(props) {
      super(props);
      this.state = {
        selectedKey: -1,
        keyword: '',
        contactData: [
          {name: 'a', phone:' 010-1111-1111'},
          {name: 'b', phone:' 010-2222-2222'}, 
          {name: 'c', phone:' 010-3333-3333'},
          {name: 'd', phone:' 010-4444-4444'},
          {name: 'e', phone:' 010-5555-5555'}
        ]
      };

      // this binding
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
      // constructor 에 this를 binding 해줘야 this가 뭔지 알 수 있다
      this.setState({
        keyword: event.target.value
      })
    }

    handleClick(key) {
        this.setState({
          selectedKey: key
        });
        console.log('selected!');
    }

    render() {
      const mapToComponent = (data) => {
        data.sort(); // 오름차순 sort
        // 검색기능
        data = data.filter((contact)=>{
          return contact.name.toLowerCase() // 소문자도 검색
          .indexOf(this.state.keyword) > -1;
        });
        return data.map((contact, i) => {
          return (<ContactInfo 
            contact={contact} 
            key={i}
            onClick={() => this.handleClick(i)} // custom DOM 은 onClick props가 작동되지 않으므로 원본 DOM 에도 정의해줘야 한다.
          />); 
        });
      };
      return (
        <div>
          <h1>Contacts</h1>
          <input 
            name="keyword" 
            placeholder="search" 
            value={this.state.keyword} 
            onChange={this.handleChange}
          />
          <div>{mapToComponent(this.state.contactData)}</div>
          <ContactDetail 
            isSelected={this.state.selectedKey != -1}
            contact={this.state.contactData[this.state.selectedKey]}
          />
        </div>
      );
    }
  }