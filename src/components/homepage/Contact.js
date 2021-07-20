import React from 'react';
import styled from 'styled-components';
import { H2, Input, Label, Button, Modal } from 'Components/components';

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 45px;
  width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media ${(p) => p.theme.device.mobileS} {
    margin-top: 40px;
  }
`;

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '', showModal: false };
    this.closeModal = this.closeModal.bind(this);
  }

  handleSubmit(e) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => this.setState({ showModal: !this.state.showModal }))
      .catch((error) => alert(error));

    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  closeModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { name, email, message, showModal } = this.state;
    return (
      <div className="mx-auto lg:w-8/12 text-center">
        <H2>Interested in collaborating on a project?</H2>
        <StyledForm action="/thanks" onSubmit={(e) => this.handleSubmit(e)}>
          <InputGroup>
            <Input
              id="full-name"
              type="text"
              name="name"
              aria-label="Full Name"
              aria-required="true"
              value={name}
              onChange={(e) => this.handleChange(e)}
              required
              title="Please enter your name"
              placeholder=" "
            />
            <Label htmlFor="full-name">Name</Label>
          </InputGroup>
          <InputGroup>
            <Input
              id="Email"
              aria-label="Email"
              aria-required="true"
              type="email"
              name="email"
              value={email}
              onChange={(e) => this.handleChange(e)}
              required
              title="Please enter your email"
              placeholder=" "
            />
            <Label htmlFor="Email">Email</Label>
          </InputGroup>
          <InputGroup>
            <Input
              id="Message"
              aria-label="Message"
              aria-required="true"
              placeholder=" "
              name="message"
              value={message}
              onChange={(e) => this.handleChange(e)}
              required
            />
            <Label htmlFor="Message">Message</Label>
          </InputGroup>
          <Button type="submit">Submit</Button>
          {showModal && <Modal closeModal={this.closeModal} />}
        </StyledForm>
      </div>
    );
  }
}
