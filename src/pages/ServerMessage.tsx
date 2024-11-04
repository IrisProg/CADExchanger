import style from "./serverMessage.module.scss";
function ServerMessage() {
    return (
      <>
      <div className={style.serverMessage}>
        <h3>Message generated on the server</h3>
        </div>
      </>
    );
  }
  
  export default ServerMessage;