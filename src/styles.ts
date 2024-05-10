import { css } from 'lit';

export const stylesShared = css`
  .card {
    border-radius: 4px;
    padding: 10px;
    margin: 10px;
    background-color: #ffff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  .item-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .item-section {
    display: grid;
    grid-template-columns: 1fr 20px;
    align-items: center;
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #cccccc52;
    color:#6e6e6e;
    overflow: hidden;
  }
  .item-section:hover {
    background-color: #f1f1f1da;
    cursor: pointer;
  }
  .flex {
    display: flex;
  }
  .align-self-center {
    align-self: center;
  }
`;
