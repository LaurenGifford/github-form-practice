import {
    InputLabel,
    InputText,
    InputContainer,
    ErrorMsg,
} from '../styles/formStyles'


function TextField({username, setUsername, showError, setShowError}) {

    function checkValid(input) {
        if ((input[0] === '-') || (input[input.length-1] === '-')) setShowError('Github username cannot begin or end with a hyphen.')
        else if (input.includes('--')) setShowError('Github username cannot have multiple consecutive hyphens.')
        else if (input.length > 39) setShowError('Maximum length is 39 characters.')
        else if (checkAlphaNum(input)) setShowError('Github username only contains alphanumeric characters or hyphens.')
        else setShowError(null)
    }

    function checkAlphaNum(input) {
        let alphaNum = /^[a-zA-Z0-9-]+$/
        return !input.match(alphaNum)
    }

    return (
        <InputContainer>
            <InputLabel> Username </InputLabel>
            <InputText type="text" 
            id="username"
            placeholder='ex: octocat'
            value={username} 
            onChange={(e) => {
                if (e.target.value.length === 0) setShowError(null)
                else checkValid(e.target.value)
                setUsername(e.target.value)
            }}
            />
            {!!showError && <ErrorMsg> * {showError} </ErrorMsg>}
      </InputContainer>
    )
}

export default TextField