import styled from 'styled-components';

export const FormContainer = styled.div`
  position: fixed;
  bottom: 1;
  left: 0;
  right: 0;
  top: 1;
  padding-top: 8rem;
  z-index: 0;
  min-height: 100vh;
  background: linear-gradient(120deg, #060606 0%, #2847ab 100%);
  overflow: hidden;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

`;

export const Form = styled.form`
  display: grid;
  height: auto;
  width: 80vh;
  z-index: 1;
  margin: 0 auto;
  padding: 60px 32px;
  border-radius: 4px;
  background: #010101;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  h1 {
    margin-bottom: 30px;
    color: #ffff;
    font-weight: 600;
    font-size: 30px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
    width: 35vh;

  }
`;
export const FormLabel = styled.label`
  color: #ffff;
  font-size: 16px;
  margin-bottom: 6px;
`;

export const FormInput = styled.input`
  border: none;
  border-radius: 4px;
  margin-bottom: 30px;
  padding: 13px 13px;
`;

export const FormTextArea = styled.textarea`
  border: none;
  border-radius: 4px;
  margin-bottom: 30px;
  padding: 13px 13px;
  height: 100%;
`;
export const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffff;
  border-radius: 4px;
  border: none;
  margin-top: 1.5rem;
  padding: 15px 0;
  font-size: 20px;
  background: #0cbf71;
  min-width: auto;
  cursor: pointer;

  &:hover{
    background: #5127d0;
    transition: 0.2s ease-in-out;
  }
`;

export const Text = styled.span`
  text-align: center;
  font-size: 14px;
  color: #ffff;
  margin-top: 24px;
`;
