import { useNavigate } from "react-router";
import { useState } from "react";

const List = () => {
const navigate = useNavigate()
const arr=[
  {"id":1, "name":"스티븐","email":"jobs@shellfoledr.com", "Date":"2023-02-28","pwd":"1","gender":true},
  {"id":2, "name":"에브릴","email":"lavigen@shellfoledr.com", "Date":"2023-02-27","pwd":"2","gender":false},
]  
const onclick=(data)=>{
  navigate('detail', {state:data})
}
const onclick_1=()=>{
  navigate('/new')
}
const styles={
  "cursor": "pointer"
}
  return(
    <div className="container mt-3">
      <h1 className="text-center">목록 화면</h1>
      <div className="btn-group">
        <button onClick={onclick_1} className="btn btn-primary">사용자 추가</button>
      </div>
      <table className="table table-hover mt-3">
        <thead className="table-dark">
          <tr>
            <th>이름</th>
            <th>이메일</th>
            <th>가입날짜</th>
          </tr>
        </thead>
        <tbody>
         {
         arr.map((v,i)=> {
          return(
          <tr style={styles} onClick={()=>onclick(v)} key={i}>
          <th>{v.name}</th>
          <th>{v.email}</th>
          <th>{v.Date}</th>
          </tr>
          )
          })
          }
        </tbody>
      </table>
    </div>
  )
}

export default List