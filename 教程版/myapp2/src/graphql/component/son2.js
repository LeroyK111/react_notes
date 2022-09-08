import React from "react";

import { useMutation, gql } from "@apollo/client";

const INCREMENT_COUNTER = gql`
  mutation ($input: FilmInput) {
    createFilm(input: $input) {
      id
      name
    }
  }
`;

const UPDATE_FILM = gql`
  mutation ($name: String!, $input: FilmInput) {
    updateFilm(name: $name, input: $input) {
      id
      name
      poster
      price
    }
  }
`;

const DELETE_FILM = gql`
  mutation ($name: String!) {
    deleteFilm(name: $name) {
      status
    }
  }
`;



export default function Son2() {
  // 增加
  let [addFilm, { data, loading, error }] = useMutation(INCREMENT_COUNTER);
  // 修改
  let [updateFilm, { data1, loading1, error1 }] = useMutation(UPDATE_FILM);
  // 删除
  let [deleteFilm, { data2, loading2, error2 }] = useMutation(DELETE_FILM);

  if (loading) return <p>等待响应...</p>;
  if (error) return <p>请求错误 :(</p>;

  // 数据也会在这里同步更新
  if (data) {
    console.log(data.createFilm);
  }

  const addValue = () => {
    addFilm({
      variables: {
        input: {
          name: "LeroyK",
          price: 200201.22,
          poster: Date().toLocaleString(),
        },
      },
    }).then((res) => {
      console.log("成功", res.data.createFilm);
    });
  };

  const updateData = () => {
    // !修改数据
    updateFilm({
      variables: {
        name: "LeroyK",
        input: {
          name: "测试大神",
          price: 123.123,
          poster: "写个代码",
        },
      },
    }).then((res) => {
      console.log(res.data.updateFilm);
    });
  };


  const deleteData = ()=>{
    // !删除数据
    deleteFilm({variables: {
      name: "LeroyK"
    }}).then(res=>{
      console.log(res.data.deleteFilm);
    })
  }


  return (
    <div>
      <h1>增加</h1>
      <button
        onClick={() => {
          addValue();
        }}
        style={{ backgroundColor: "skyblue" }}
      >
        点我新增
      </button>
      <h1>修改</h1>
      <button
        style={{ backgroundColor: "pink" }}
        onClick={() => {
          updateData();
        }}
      >
        点我修改
      </button>
      <h1>删除</h1>
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => {
          deleteData();
        }}
      >
        点我删除
      </button>
    </div>
  );
}
