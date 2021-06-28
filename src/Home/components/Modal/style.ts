import styled from 'styled-components'

export const Container = styled.div`
  overflow: hidden;

  height: 100vh;

  header {
    position: relative;
    
    left: 84%;
  }

  main {
    width: 100%;

    display: flex;
    
    justify-content: space-evenly;

    div {
      display: flex;
      align-items: center;

      :hover {
        svg {
          color: #80CEE1;
        }
      }
    }
  }

  input {
    width: 120px;

    border: 0;
    outline: none;

    text-align: right;

    background-color: rgba(0, 0, 0 ,0);
    color: #FFF;

    ::placeholder {
      text-align: right;
    }
  }

  button {
    margin-left: 20px;

    border: 0;
    outline: none;

    background-color: rgba(0, 0, 0, 0);
    color: #FFF;

    cursor: pointer;
  }

  span {
    font-size: 0.9rem;
  }

  #path {
    position: relative;

    top: 10px;
    left: 80px;

    width: 100px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 0.8rem;

    color: gray;
  }

  #createOrCancel {
    width: 100%;

    display: flex;
    
    justify-content: space-evenly;
  }

  .btnCreate {
    width: 144px;

    padding: 2px;
    margin: 0;

    border-radius: 2px;

    :hover {
      transition: 0.3s;

      color: #80CEE1;
    }
  }

  .btnCancel {
    width: 144px;

    margin: 0;

    border-radius: 2px;

    :hover {
      transition: 0.3s;

      color: #FF6961;
    }
  }
`