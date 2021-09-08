import React, { useState } from "react";

/* カスタムフック */
import useStorage from "../hooks/storage";

/* ライブラリ */
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.ndata = {ndata: []};
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
    this.setNdata({ndata: [...data,this.state.username]});
  }
}


function Main() {
  
  const [data, index] = useStorage();

  return (
    <div>
      <div>学生一覧: {data}</div>
      <p>追加する名前を入力してください。</p>
      <form onSubmit={this.mySubmitHandler}>
      <input
        type='text'
      />
      <br>
      <input
        type='submit'
        value='確定'
        onChange={this.myChangeHandler}
      />
      </form>
      <div>追加する名前: {this.state.username}</div>
      <div>新しい一覧: {this.ndata.ndata}</div>
    </div>

  );
}

export default Main;