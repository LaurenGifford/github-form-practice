import styled from 'styled-components'

export const UsernameForm = styled.form`
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;
`

export const InputLabel = styled.label`
    display: flex;
    order: 1;    
    width: 480px;
    height: 24px;
    text-align: left;
    color: #6F7482;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.01em;
`

export const InputText = styled.input`
    width: 460px;
    height: 48px;
    margin-top: 26px;
    background: #F8FAFC;
    border-radius: 4px;
    border: none;
    text-align: left;
    position: static;
    // flex: none;
    display: flex;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
    margin: 2px 0px;

    &:focus {
        outline: none;
        border: 1.5px solid #4361ad;
        border-radius: 3px;
}
`

export const ErrorMsg = styled.span`
    display: flex;
    order: 3;
    color: red;
    font-size: 13px;
    font-weight: 600;
`

export const Submit = styled.input`
    background-color: #4f586e;
    cursor: pointer;
    width: 100px;
    height: 40px;
    border: none;
    padding: 5px;
    border-radius: 4px;
    color: white;
    margin-top: 5px;
`
