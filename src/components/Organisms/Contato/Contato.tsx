import React from 'react'
import { Button, Input, Text } from '../..';

const Contato = ({translations}) => {
  const [input, setInput] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const onChangeInput = (name: string, value: string) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickContactBtn = () => {
    window.open(
      `https://wa.me/${translations.hotel_phone}?text=Name: ${input.name}%0AEmail: ${input.email}%0APhone: ${input.phone}%0AMessage: ${input.message}`,
      '_blank',
    );
  };
  
  return (
    <div className="seventh-section container top-spacing">
    <div className="contact">
      <Text as="h2" text={`${translations.contato.title}`} className="contact-title" />
      <Text
        as="p"
        text={`${translations.contato.description}`}
        className="contact-text"
      />
      <div className="form-fields">
        <div className="form-field">
          <Text as="p" text={`${translations.contato.label1}`} className="contact-form-title" />
          <Input
            type="text"
            placeholder={`${translations.contato.placeholder1}`}
            name="name"
            onChange={onChangeInput}
            value={input.name}
            className="contact-form-input"
          />
        </div>
        <div className="form-field">
          <Text as="p" text={`${translations.contato.label2}`} className="contact-form-title" />
          <Input
            type="email"
            placeholder={`${translations.contato.placeholder2}`}
            name="email"
            onChange={onChangeInput}
            value={input.email}
            className="contact-form-input"
          />
        </div>
        <div className="form-field">
          <Text as="p" text={`${translations.contato.label3}`} className="contact-form-title" />
          <Input
            type="text"
            placeholder={`${translations.contato.placeholder3}`}
            name="phone"
            onChange={onChangeInput}
            value={input.phone}
            className="contact-form-input"
          />
        </div>
        <div className="form-field">
          <Text as="p" text={`${translations.contato.label4}`} className="contact-form-title" />
          <Input
            type="text"
            placeholder={`${translations.contato.placeholder4}`}
            name="message"
            onChange={onChangeInput}
            value={input.message}
            className="contact-form-input"
          />
        </div>
      </div>
      <Button
        onClick={onClickContactBtn}
        text="Send"
        className="contact-form-btn"
      />
    </div>
  </div>
  )
}

export default Contato