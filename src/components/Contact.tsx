import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';

function Contact() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const textColor = isDark ? '#fff' : '#000';
  const placeholderColor = isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)';
  const borderBase = isDark ? 'rgba(255,255,255,0.28)' : 'rgba(0,0,0,0.28)';
  const borderHover = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)';
  const borderFocus = isDark ? '#fff' : '#000';

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nmEmpty = name.trim() === '';
    const emEmpty = email.trim() === '';
    const msgEmpty = message.trim() === '';

    setNameError(nmEmpty);
    setEmailError(emEmpty);
    setMessageError(msgEmpty);

    // Jika nanti mau aktifkan EmailJS, uncomment blok di bawah dan pasang kredensialnya.
    // import emailjs from '@emailjs/browser'
    /*
    if (!nmEmpty && !emEmpty && !msgEmpty) {
      const templateParams = { name, email, message };
      emailjs
        .send('service_id', 'template_id', templateParams, 'public_api_key')
        .then(() => {
          alert('Pesan terkirim!');
          setName(''); setEmail(''); setMessage('');
        })
        .catch(() => {
          alert('Gagal mengirim pesan.');
        });
    }
    */
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1 style={{ color: textColor }}>Contact Me</h1>
          <p style={{ color: textColor }}>
            Got a project waiting to be realized? Let&apos;s collaborate and make it happen!
          </p>

          <Box
            ref={formRef}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                fullWidth
                id="your-name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
                sx={{
                  mb: 2,
                  '& .MuiInputBase-input': {
                    color: textColor,
                    caretColor: textColor,
                    '&::placeholder': { color: placeholderColor, opacity: 1 }
                  },
                  '& .MuiInputLabel-root': { color: textColor },
                  '& .MuiInputLabel-root.Mui-focused': { color: textColor },
                  '& .MuiFormHelperText-root': { color: textColor },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: borderBase },
                    '&:hover fieldset': { borderColor: borderHover },
                    '&.Mui-focused fieldset': { borderColor: borderFocus }
                  }
                }}
              />

              <TextField
                required
                fullWidth
                id="email-phone"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter your email or phone number' : ''}
                sx={{
                  mb: 2,
                  '& .MuiInputBase-input': {
                    color: textColor,
                    caretColor: textColor,
                    '&::placeholder': { color: placeholderColor, opacity: 1 }
                  },
                  '& .MuiInputLabel-root': { color: textColor },
                  '& .MuiInputLabel-root.Mui-focused': { color: textColor },
                  '& .MuiFormHelperText-root': { color: textColor },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: borderBase },
                    '&:hover fieldset': { borderColor: borderHover },
                    '&.Mui-focused fieldset': { borderColor: borderFocus }
                  }
                }}
              />
            </div>

            <TextField
              required
              fullWidth
              id="your-message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
              sx={{
                mb: 2,
                '& .MuiInputBase-input': {
                  color: textColor,
                  caretColor: textColor,
                  '&::placeholder': { color: placeholderColor, opacity: 1 }
                },
                '& .MuiInputLabel-root': { color: textColor },
                '& .MuiInputLabel-root.Mui-focused': { color: textColor },
                '& .MuiFormHelperText-root': { color: textColor },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: borderBase },
                  '&:hover fieldset': { borderColor: borderHover },
                  '&.Mui-focused fieldset': { borderColor: borderFocus }
                }
              }}
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ mt: 1 }}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
